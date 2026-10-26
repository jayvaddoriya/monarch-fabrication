# MONARCH FABRICATION — Official Company Website

A complete, premium, production-ready, fully responsive single-page company website for **MONARCH FABRICATION** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

The visual identity, colors, and styling are crafted to match the brand logo: **Electric Cyan / Cerulean Blue** (`#00B4D8`), **Deep Architectural Navy** (`#060A14` / `#0B1222`), **Metallic Silver / Titanium** (`#CBD5E1`), and the official company motto:
> *"We Will Make Whatever You Think.."*

---

## 🚀 Key Features

1. **Sticky Transparent-to-Solid Header**:
   - Company logo with high-contrast badge.
   - Smooth anchor navigation (`#home`, `#about`, `#services`, `#gallery`, `#why-us`, `#process`, `#contact`).
   - Click-to-call direct line button.
   - Prominent **"Request a Quote"** primary CTA.
   - Mobile slide-out navigation drawer with backdrop blur.

2. **Architectural Hero Section**:
   - Full-width modern stainless steel & glass balcony balustrade photography.
   - Layered navy gradient overlay with subtle architectural blueprint grid.
   - Animated headline: *"Precision Fabrication. Strength That Lasts."*
   - Official slogan: *"We Will Make Whatever You Think.."*
   - Dual CTAs: *Request a Free Quote* & *Explore Our Services*.
   - Quick highlights: *100% Custom Dimensions*, *Tested Metal Grades*, *Precision Welds*, *On-Site Fit*.

3. **About Us & Material Clarity Guide**:
   - Company introduction focusing on custom craftsmanship, durable materials, and precision installation across residential, commercial, and industrial projects.
   - Transparent, interactive material comparison tab (**Stainless Steel** vs. **Mild Steel** vs. **Architectural Aluminium**) detailing strengths, rust resistance, and recommended use cases.
   - Strict adherence to factual presentation (no fabricated dates or false statistics).

4. **12 Core Fabrication Services Grid**:
   1. **Stainless Steel Fabrication** (Custom structures, fittings & architectural metalwork)
   2. **Stainless Steel Railings** (Balcony railings, staircase handrails, terrace balustrades)
   3. **Steel Staircases and MS Stairs** (Custom mild steel stairs, mono-stringer, spiral & industrial frames)
   4. **MS Fabrication** (Mild steel structural frames, heavy supports & industrial fabrications)
   5. **MS Gates and Grills** (Custom steel sliding/swing gates, security grills, laser-cut panels)
   6. **MS Windows and Window Grills** (Burglar-resistant metal window frames & safety grills)
   7. **AC Outdoor Unit Cages and Boxes** (Protective louvered outdoor unit cages with airflow clearance)
   8. **Aluminium Windows** (Sliding windows, casement systems, slimline profiles & acoustic glass)
   9. **Aluminium Doors and Partitions** (Office cabins, sliding glass doors & interior partition systems)
   10. **Mosquito Mesh & Machher Jali** (Removable frames, sliding mesh shutters & SS 304 wire mesh)
   11. **Invisible Safety Grills** (High-tensile SS 316 wire rope safety systems for balconies and windows)
   12. **Custom Steel Fabrication** (Bespoke metalwork from drawings, sketches & CAD models)
   - Every service card features relevant high-resolution photography, material category badge, key technical highlights, **Specifications Modal**, **Direct WhatsApp Quote**, and instant quote form selection!

5. **Project Gallery & Lightbox**:
   - Filterable portfolio (*All*, *Railings*, *Stairs & Structural*, *Gates & Grills*, *Aluminium*, *Safety & Custom*).
   - Interactive modal lightbox with zoom preview, location tags, captions, and *"Get Similar Quote"* trigger.

6. **Why Choose Us**:
   - 6 value cards: *Custom Tailored Designs*, *Quality-Focused Fabrication*, *Multiple Material Options*, *Meticulous Attention to Detail*, *Residential & Commercial Solutions*, *Customer-Focused Service*.

7. **Our Work Process**:
   - 4-step workflow:
     1. *Discuss Your Requirements*
     2. *Site Measurement & Design*
     3. *Fabrication & Finishing*
     4. *Installation & Handover*
   - Includes real-world timeline disclaimer regarding scale and finish choices.

8. **Owner & Leadership Profile**:
   - Dedicated leadership section with clean portrait placeholder, designation, and company philosophy statement.
   - Centrally editable in `src/data/companyConfig.ts` with no invented personal information.

9. **Accessible Quotation & Enquiry Form**:
   - Fields: Full Name, Phone Number, Email, Service Category, Project Location, Preferred Contact Method (WhatsApp / Phone / Email), and Project Description.
   - Client-side validation + Real server endpoint at `/api/contact`.
   - Email dispatch via **Resend** or documented console logging when API keys are pending.

10. **Floating Quick Actions**:
    - Floating WhatsApp button with pre-filled message contextualized to selected services.
    - Floating mobile click-to-call button.
    - Smooth back-to-top button.

11. **SEO & Compliance**:
    - JSON-LD Structured Data (`LocalBusiness` & `Organization`).
    - Open Graph & Twitter meta tags with the official logo.
    - Dynamic XML Sitemap (`/sitemap.xml`) and robots file (`/robots.txt`).
    - Dedicated Privacy Policy page (`/privacy`).

---

## 🛠️ Project Structure

```text
monarch-fabrication/
├── public/
│   ├── images/
│   │   └── logo.png              # Official Monarch Fabrication Logo
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Server-side contact & quotation submission endpoint
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy Policy page
│   │   ├── globals.css           # Tailwind CSS v4 and industrial theme variables
│   │   ├── layout.tsx            # Root layout, fonts, metadata, and JSON-LD schema
│   │   ├── page.tsx              # Single-page marketing website coordinator
│   │   ├── robots.ts             # Robots.txt generator
│   │   └── sitemap.ts            # Sitemap.xml generator
│   ├── components/
│   │   ├── AboutUs.tsx           # Company overview & material comparison
│   │   ├── ContactForm.tsx       # Accessible quotation form with validation
│   │   ├── ContactSection.tsx    # Contact cards, Google Map & form container
│   │   ├── FloatingActions.tsx   # WhatsApp, Call & Back-to-Top buttons
│   │   ├── Footer.tsx            # Comprehensive footer with links & social icons
│   │   ├── Header.tsx            # Sticky header & mobile drawer navigation
│   │   ├── Hero.tsx              # Architectural hero section with animations
│   │   ├── Logo.tsx              # Brand logo component with badge container
│   │   ├── OwnerSection.tsx      # Leadership & owner profile
│   │   ├── ProcessTimeline.tsx   # 4-step work process timeline
│   │   ├── ProjectGallery.tsx    # Filterable portfolio & lightbox viewer
│   │   ├── ServiceCard.tsx       # Reusable service card
│   │   ├── ServiceModal.tsx      # Detailed specifications modal
│   │   ├── Services.tsx          # 12 core services grid & filters
│   │   └── WhyChooseUs.tsx       # 6 core fabrication integrity pillars
│   └── data/
│       └── companyConfig.ts      # Central configuration for contact, services & gallery
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Configuration & Customization

All business details, phone numbers, addresses, owner profiles, service specifications, and gallery photos are centralized in:
👉 `src/data/companyConfig.ts`

### 1. Update Contact Information
Open `src/data/companyConfig.ts` and replace placeholders:
```typescript
contact: {
  phone: "+91 98765 43210",               // Replace with your real phone
  phoneTel: "+919876543210",              // Clean phone for tel: links
  whatsapp: "+91 98765 43210",            // Replace with your real WhatsApp
  whatsappNumberOnly: "919876543210",     // Digits only
  email: "contact@monarchfabrication.com",
  address: {
    street: "Plot No. 12, Industrial Area, Phase II",
    city: "Your City",
    state: "State",
    postalCode: "000000",
    country: "India",
    fullAddress: "...",
  },
  googleMapsEmbedUrl: "...",              // Embed iframe URL from Google Maps
}
```

### 2. Update Owner Details
In `src/data/companyConfig.ts`:
```typescript
owner: {
  name: "Your Name",
  designation: "Founder & Lead Fabricator",
  bio: "...",
  statement: "...",
}
```

---

## 📦 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm run start
```

---

## ✉️ Email Delivery Setup

To receive customer quotation enquiries directly into your email inbox:
1. Sign up for a free account at [Resend](https://resend.com) and create an API key.
2. Create a `.env.local` file from `.env.example`:
```bash
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=your-actual-email@example.com
NEXT_PUBLIC_SITE_URL=https://monarchfabrication.com
```
*Note: If no API key is set, the website will log incoming quotation requests to the server console and provide a clear status message to the user.*

---

## 🚢 Deployment

The website can be deployed in one click to [Vercel](https://vercel.com) or any Node.js hosting platform:
- Build command: `npm run build`
- Output directory: `.next`
- Add your environment variables in your hosting provider's dashboard.
