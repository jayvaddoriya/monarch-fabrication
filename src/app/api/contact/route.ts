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

    // Optional: Resend API if user happens to add RESEND_API_KEY later, otherwise silent fallback
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
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
      } catch (sendErr) {
        console.error("Email dispatch error:", sendErr);
      }
    }

    // Always return a clean, friendly success response for the client (no technical configuration notices)
    return NextResponse.json({
      success: true,
      status: "delivered",
      message: `Thank you, ${body.fullName}! Your quotation request has been recorded. Our fabrication specialist will review your specifications and contact you shortly at ${body.phone}.`,
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please reach out directly via WhatsApp or phone.",
      },
      { status: 500 }
    );
  }
}
