import { NextRequest, NextResponse } from "next/server";

interface ContactSubmission {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  location: string;
  preferredContact: "phone" | "whatsapp" | "email";
  description: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactSubmission = await req.json();

    // 1. Basic Server-side Validation
    if (!body.fullName || !body.phone || !body.serviceCategory || !body.description) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields. Please provide your full name, phone number, service category, and project details.",
        },
        { status: 400 }
      );
    }

    // Phone format validation (simple digits & optional + check)
    const phoneClean = body.phone.replace(/[\s\-\(\)]/g, "");
    if (phoneClean.length < 8) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid contact phone number.",
        },
        { status: 400 }
      );
    }

    // 2. Email Delivery Configuration Check
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@monarchfabrication.com";

    console.log("=== MONARCH FABRICATION NEW ENQUIRY RECEIVED ===");
    console.log({
      time: new Date().toISOString(),
      fullName: body.fullName,
      phone: body.phone,
      email: body.email,
      serviceCategory: body.serviceCategory,
      location: body.location,
      preferredContact: body.preferredContact,
      description: body.description,
    });

    if (resendApiKey) {
      // Real Resend API delivery if API key provided
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Monarch Website <onboarding@resend.dev>",
            to: [receiverEmail],
            reply_to: body.email || undefined,
            subject: `[New Quotation Request] ${body.serviceCategory} - ${body.fullName}`,
            text: `
New Quotation Request for Monarch Fabrication:

Customer Name: ${body.fullName}
Phone Number: ${body.phone}
Email Address: ${body.email || "Not provided"}
Service Required: ${body.serviceCategory}
Project Location: ${body.location || "Not specified"}
Preferred Contact Method: ${body.preferredContact}

Project Description:
${body.description}

Received At: ${new Date().toLocaleString()}
            `,
          }),
        });

        if (response.ok) {
          return NextResponse.json({
            success: true,
            status: "delivered",
            message: "Thank you! Your quotation request has been sent to our fabrication team. We will contact you promptly.",
          });
        } else {
          const errData = await response.json();
          console.error("Resend API delivery failed:", errData);
          return NextResponse.json({
            success: true,
            status: "fallback_logged",
            message: "Your enquiry was recorded on our server. (Note: Email service response error, notification saved).",
          });
        }
      } catch (sendErr) {
        console.error("Email sending error:", sendErr);
        return NextResponse.json({
          success: true,
          status: "fallback_logged",
          message: "Your enquiry was recorded on our server. Our team will reach out soon.",
        });
      }
    } else {
      // Documented setup notice if RESEND_API_KEY environment variable is not yet configured
      return NextResponse.json({
        success: true,
        status: "logged_needs_credentials",
        message: "Your enquiry was successfully captured and logged in the server console! To enable live email dispatch to your inbox, set RESEND_API_KEY and CONTACT_RECEIVER_EMAIL in your .env file.",
      });
    }
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred while processing your request. Please try contacting us directly via WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
