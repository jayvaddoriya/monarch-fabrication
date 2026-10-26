/**
 * MONARCH FABRICATION - Central Business Configuration
 * 
 * IMPORTANT:
 * All contact information, owner details, address placeholders, and company details
 * are managed here in one central configuration file. Replace placeholder values with
 * your verified business details before deploying to production.
 */

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: "stainless-steel" | "mild-steel" | "aluminium" | "custom";
  materialType: "Stainless Steel (SS)" | "Mild Steel (MS)" | "Aluminium" | "Multi-Metal / Custom" | "Aluminium / Stainless Steel (SS)";
  features: string[];
  applications: string[];
  finishOptions: string[];
  imageUrl: string;
  badge?: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: "railings" | "staircases" | "gates-grills" | "aluminium" | "custom-safety";
  categoryLabel: string;
  imageUrl: string;
  description: string;
  locationTag: string;
}

export interface OwnerProfile {
  id: string;
  name: string;
  designation: string;
  roleDescription: string;
  phone: string;
  phoneTel: string;
  email: string;
  whatsapp: string;
  whatsappNumberOnly: string;
  bio: string;
  specialization: string;
  image: string;
}

export const COMPANY_CONFIG = {
  // Brand
  name: "MONARCH FABRICATION",
  tagline: "We Will Make Whatever You Think..",
  shortTagline: "Precision Fabrication. Strength That Lasts.",
  description:
    "Custom steel, MS, and aluminium fabrication solutions for homes, commercial spaces, and industrial projects. Precision metalwork engineered for durability and architectural elegance.",

  // Contact Information (Verified details for Monarch Fabrication)
  contact: {
    // Primary Office & Customer Care Phone
    phone: "+91 81530 73266",
    phoneDisplay: "+91 81530 73266",
    phoneTel: "+918153073266",

    // Dedicated Quotation & Estimation Hotline
    quotePhone: "+91 81530 73266",
    quotePhoneDisplay: "+91 81530 73266",
    quotePhoneTel: "+918153073266",

    // Official WhatsApp for Inquiries, Quotations & Drawing Reviews
    whatsapp: "+91 81530 73266",
    whatsappNumberOnly: "918153073266",

    // Email Addresses
    email: "contact@monarchfabrication.com",
    quoteEmail: "quotation@monarchfabrication.com",

    address: {
      street: "Industrial Area, Metalwork Fabrication Hub",
      area: "Near GIDC / Industrial Zone",
      city: "Gujarat",
      state: "Gujarat",
      postalCode: "380001",
      country: "India",
      fullAddress:
        "Monarch Fabrication Workshop, Industrial Area, Gujarat - India",
    },
    openingHours: {
      weekday: "Monday - Saturday: 9:00 AM - 8:00 PM",
      weekend: "Sunday: By Prior Appointment",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107234917!2d85.0442998!3d25.6081756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f23!2sIndustrial%20Area!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=Monarch+Fabrication",
  },

  // 3 Owners & Leadership Profiles (Verified details)
  owners: [
    {
      id: "owner-1",
      name: "Manharbhai Patel",
      designation: "Founder & Senior Managing Partner",
      roleDescription: "Strategic leadership, executive oversight, client advisory, and foundational metalcraft governance.",
      phone: "+91 99256 25051",
      phoneTel: "+919925625051",
      email: "manharbhai@monarchfabrication.com",
      whatsapp: "+91 99256 25051",
      whatsappNumberOnly: "919925625051",
      bio: "Guiding Monarch Fabrication with decades of industry wisdom, uncompromised ethical standards, and dedication to long-lasting structural strength.",
      specialization: "Executive Leadership & Client Advisory",
      image: "/images/owners/manharbhai-patel.jpg",
    },
    {
      id: "owner-2",
      name: "Darshan Patel",
      designation: "Managing Partner & Inquiries Lead",
      roleDescription: "Primary point of contact for customer inquiries, architectural quotations, design scoping, and technical consultations.",
      phone: "+91 81530 73266",
      phoneTel: "+918153073266",
      email: "darshan@monarchfabrication.com",
      whatsapp: "+91 81530 73266",
      whatsappNumberOnly: "918153073266",
      bio: "Leads client relations, drawing evaluations, and rapid quotation responses. Dedicated to bringing clients' custom ideas into reality.",
      specialization: "Customer Inquiries, Quoting & Design Scoping",
      image: "/images/owners/darshan-patel.jpg",
    },
    {
      id: "owner-3",
      name: "Jay Patel",
      designation: "Partner & Operations / Site Execution Head",
      roleDescription: "Manages workshop fabrication schedules, on-site structural measurements, quality checks, and precision installation.",
      phone: "+91 97731 63740",
      phoneTel: "+919773163740",
      email: "jay@monarchfabrication.com",
      whatsapp: "+91 97731 63740",
      whatsappNumberOnly: "919773163740",
      bio: "Directs workshop welding accuracy, surface finishing, and safe site mounting to guarantee plumb fit and architectural durability.",
      specialization: "Workshop Fabrication & Site Installation",
      image: "/images/owners/jay-patel.jpg",
    },
  ] as OwnerProfile[],

  // Owner statement
  leadershipStatement:
    "At Monarch Fabrication, our philosophy is simple: 'We Will Make Whatever You Think..' Every cut, weld, and polish is executed with uncompromised precision.",

  // Social Media Links (Editable)
  socialLinks: {
    facebook: "https://facebook.com/monarchfabrication",
    instagram: "https://instagram.com/monarchfabrication",
    linkedin: "https://linkedin.com/company/monarchfabrication",
    youtube: "https://youtube.com/@monarchfabrication",
  },

  // Service Areas for Local SEO
  serviceAreas: [
    "Residential Apartments & Villas",
    "Commercial Complexes & Office Buildings",
    "Industrial Plants & Warehouses",
    "Retail Stores & Showrooms",
    "Architectural Projects & Interior Sites",
  ],
};

// 12 EXACT SERVICE CATEGORIES REQUESTED
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "stainless-steel-fabrication",
    slug: "stainless-steel-fabrication",
    title: "Stainless Steel Fabrication",
    category: "stainless-steel",
    materialType: "Stainless Steel (SS)",
    shortDescription:
      "Custom stainless steel structures, architectural metalwork, and precision fittings engineered for superior corrosion resistance and longevity.",
    fullDescription:
      "Specialized fabrication of high-grade stainless steel assemblies tailored to residential, commercial, and industrial specifications. Utilizing precision TIG welding, seamless tube bending, and architectural polishing for unmatched rust resistance and refined aesthetics.",
    features: [
      "Custom structural frames & architectural metalwork",
      "High corrosion resistance for indoor and outdoor exposure",
      "Precision TIG welded joints with seamless finishing",
      "Custom architectural fittings and bespoke bracketry",
    ],
    applications: [
      "Architectural facades and canopies",
      "Commercial kitchens & pharmaceutical clean setups",
      "Decorative structural metal elements",
      "Custom industrial and marine hardware",
    ],
    finishOptions: [
      "Satin / Hairline Brushed Finish",
      "Mirror Polish (Glossy Finish)",
      "Electropolished Surface",
      "Custom Matte Bead Blast",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    badge: "Premium SS",
  },
  {
    id: "stainless-steel-railings",
    slug: "stainless-steel-railings",
    title: "Stainless Steel Railings",
    category: "stainless-steel",
    materialType: "Stainless Steel (SS)",
    shortDescription:
      "Modern balcony railings, staircase handrails, terrace railings, and glass-integrated safety railings.",
    fullDescription:
      "Engineered stainless steel railing systems that combine structural safety with modern architectural elegance. Designed for high tensile strength, rigid post anchorages, and weather resistance across residential terraces, balconies, and commercial stairwells.",
    features: [
      "Toughened glass & stainless steel combination balustrades",
      "Continuous ergonomic staircase handrails",
      "Heavy-duty base plate anchorage for structural stability",
      "Weather-resistant for exposed outdoor balconies",
    ],
    applications: [
      "High-rise apartment balcony balustrades",
      "Interior & exterior staircase handrails",
      "Rooftop terrace and parapet railings",
      "Commercial atrium and corridor safety barriers",
    ],
    finishOptions: [
      "Brushed Satin Stainless Steel",
      "High-Gloss Mirror Finish",
      "Tinted / Clear Laminated Glass Infill",
      "Wood-Grain Accent Combined Handrails",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Popular",
  },
  {
    id: "steel-staircases-ms-stairs",
    slug: "steel-staircases-ms-stairs",
    title: "Steel Staircases & MS Stairs",
    category: "mild-steel",
    materialType: "Mild Steel (MS)",
    shortDescription:
      "Custom mild steel stairs, industrial stair towers, staircase frames, tread supports, and modern floating stair structures.",
    fullDescription:
      "Heavy-duty and architectural steel staircase solutions designed to optimize floor space, structural load distribution, and aesthetics. From industrial fire exits and factory access stairs to contemporary residential floating stringers and spiral designs.",
    features: [
      "Custom central spine, mono-stringer & double-stringer frames",
      "Industrial checker-plate, grating, or wooden tread supports",
      "Rigid load-bearing calculations and precision anchoring",
      "Complete anti-rust primer and durable topcoat protection",
    ],
    applications: [
      "Residential duplex floating stairs",
      "Industrial warehouse and plant access staircases",
      "Commercial mezzanine access stairways",
      "Exterior emergency fire escape stair towers",
    ],
    finishOptions: [
      "Anti-Corrosion Red Oxide / Epoxy Primer",
      "Polyurethane (PU) Matte / Gloss Paint",
      "High-Durability Industrial Powder Coating",
      "Hot-Dip Galvanized for Exterior Weathering",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    badge: "Heavy Duty",
  },
  {
    id: "ms-fabrication",
    slug: "ms-fabrication",
    title: "MS Fabrication",
    category: "mild-steel",
    materialType: "Mild Steel (MS)",
    shortDescription:
      "Mild steel fabrication, structural frames, industrial metal structures, heavy supports, and made-to-measure products.",
    fullDescription:
      "Comprehensive mild steel fabrication services utilizing structural channels, beams, angles, and hollow sections. Precision arc, MIG, and flux-cored welding combined with certified fabrication techniques for industrial foundations and commercial frameworks.",
    features: [
      "Custom structural beams, columns, and mezzanine frameworks",
      "High-strength MIG/MAG welded joints with certified penetration",
      "Accurate made-to-measure cutting and hole punching",
      "Rigid structural frameworks for industrial machinery and shelters",
    ],
    applications: [
      "Factory structural extensions and sheds",
      "Heavy equipment mounting frames and platforms",
      "Canopies, pergolas, and roof trusses",
      "Custom utility supports and cable tray frames",
    ],
    finishOptions: [
      "Industrial Zinc Phosphate Primer",
      "Electrostatic Powder Coating",
      "Two-Pack Epoxy Marine Paint",
      "Hot-Dip Galvanized Coating",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    badge: "Structural",
  },
  {
    id: "ms-gates-and-grills",
    slug: "ms-gates-and-grills",
    title: "MS Gates & Grills",
    category: "mild-steel",
    materialType: "Mild Steel (MS)",
    shortDescription:
      "Custom steel gates, security grills, decorative entrance gates, boundary grills, and motorized main gate fabrication.",
    fullDescription:
      "Enhance perimeter security and curb appeal with bespoke mild steel gates and architectural security grills. Crafted from robust solid bars, heavy square hollow sections, and laser-cut design panels with reliable heavy-duty hinges and locking brackets.",
    features: [
      "Swing gates, sliding gates, and telescopic track options",
      "Integrated provision for automation and electric gate motors",
      "Intricate geometric, laser-cut, and contemporary lattice patterns",
      "Heavy-duty ball-bearing hinges for smooth lifelong operation",
    ],
    applications: [
      "Residential bungalow main entrance gates",
      "Factory and industrial compound sliding gates",
      "Boundary wall decorative security grills",
      "Colony and gated community entrance barriers",
    ],
    finishOptions: [
      "Architectural Powder Coating (Textured / Smooth)",
      "High-Grade Enamel Paint with UV Protection",
      "Metallic Antique Bronze / Copper Finish",
      "Zinc Undercoat with Matte Black Topcoat",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80",
    badge: "Security",
  },
  {
    id: "ms-windows-and-window-grills",
    slug: "ms-windows-and-window-grills",
    title: "MS Windows & Window Grills",
    category: "mild-steel",
    materialType: "Mild Steel (MS)",
    shortDescription:
      "Durable custom-fabricated metal windows, protective window grills, and made-to-measure structural frames.",
    fullDescription:
      "Protect your living and workspace with precision-welded mild steel window grills and metal frames. Tailored to the exact masonry opening dimensions to ensure burglar resistance, unobstructed cross ventilation, and sleek modern sightlines.",
    features: [
      "Solid square bars, flats, and hollow section configurations",
      "Burglar-resistant wall anchoring with concealed fasteners",
      "Custom geometric, diamond, vertical, and traditional patterns",
      "Weather-sealed frames to withstand monsoon rain and rust",
    ],
    applications: [
      "Residential window security grills",
      "Basement and ground floor ventilation grates",
      "Commercial showroom rear security frames",
      "Industrial warehouse ventilation louvers",
    ],
    finishOptions: [
      "Electrostatic Powder Coating in White / Charcoal / Black",
      "Anti-Rust Red Oxide Primer + Enamel Topcoat",
      "Durable Matte Metallic Silver Finish",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80",
    badge: "Protection",
  },
  {
    id: "ac-outdoor-unit-cages-and-boxes",
    slug: "ac-outdoor-unit-cages-and-boxes",
    title: "AC Outdoor Unit Cages & Boxes",
    category: "mild-steel",
    materialType: "Mild Steel (MS)",
    shortDescription:
      "Protective air-conditioner outdoor unit cages, metal enclosures, theft-proof covers, and louvered ventilation boxes.",
    fullDescription:
      "Custom-fabricated protective enclosures specifically engineered for split and VRF AC outdoor condenser units. Built to prevent theft, vandalism, and bird nesting while providing optimal airflow clearance to maintain compressor cooling efficiency.",
    features: [
      "Optimal airflow ventilation louvers and perforated mesh",
      "Heavy-duty padlockable hasps and anti-theft anchor brackets",
      "Custom made to exact dimensions for single and dual AC units",
      "Removable service access panels for routine AC technician servicing",
    ],
    applications: [
      "High-rise building facade AC condenser security",
      "Ground floor commercial AC outdoor unit protection",
      "Apartment balcony condenser aesthetic concealment",
      "Industrial rooftop VRF / chiller protection cages",
    ],
    finishOptions: [
      "All-Weather Polyester Powder Coating",
      "Rust-Resistant Galvanized Mild Steel Sheet",
      "Charcoal Grey / Off-White Architectural Colors",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    badge: "Essential",
  },
  {
    id: "aluminium-windows",
    slug: "aluminium-windows",
    title: "Aluminium Windows",
    category: "aluminium",
    materialType: "Aluminium",
    shortDescription:
      "Sliding windows, casement windows, custom aluminium frames, modern slimline profile sections, and sound-insulating glass systems.",
    fullDescription:
      "Precision-engineered architectural aluminium window systems crafted from high-grade extruded alloy sections. Combining slim sightlines, effortless roller glide operation, EPDM weather-stripping, and acoustic glass options for modern homes and commercial projects.",
    features: [
      "2-track, 3-track sliding and openable casement configurations",
      "Heavy-duty precision nylon bearing rollers for silent operation",
      "EPDM gaskets for superior wind, dust, and rainwater sealing",
      "Compatible with single, toughened, and double-glazed DGU glass",
    ],
    applications: [
      "Modern luxury apartments and villa fenestration",
      "Commercial office buildings and conference rooms",
      "Renovation and balcony enclosure window systems",
      "Soundproof roadside bedroom windows",
    ],
    finishOptions: [
      "Anodized Natural Silver, Bronze & Champagne",
      "Architectural Powder Coating (Matte Black, White, Grey)",
      "Premium Wood-Grain Sublimation Finish",
      "PVDF Coating for High Coastal Exposure",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    badge: "Modern",
  },
  {
    id: "aluminium-doors-and-partitions",
    slug: "aluminium-doors-and-partitions",
    title: "Aluminium Doors & Partitions",
    category: "aluminium",
    materialType: "Aluminium",
    shortDescription:
      "Aluminium doors, structural frames, office glass partitions, cabin enclosures, and made-to-measure architectural solutions.",
    fullDescription:
      "Transform corporate interiors and contemporary residences with modular aluminium-framed glass partitions and sliding doors. Engineered for structural rigidity, rapid installation, sound dampening, and elegant visual transparency.",
    features: [
      "Slim profile partition framing with concealed hardware",
      "Floor-spring glass doors, sliding doors, and hinged panel systems",
      "Acoustic sealing and intermediate transom customization",
      "Lightweight yet structurally rigid extruded alloy sections",
    ],
    applications: [
      "Corporate executive cabins and conference room partitions",
      "Residential kitchen glass sliding dividers",
      "Hospital, clinic, and laboratory hygienic partitions",
      "Retail showroom storefronts and entrance vestibules",
    ],
    finishOptions: [
      "Matte Black Architectural Anodized / Powder Coated",
      "Brushed Titanium Grey",
      "Clear, Frosted, Fluted, or Tinted Glass Panels",
      "Wood-Texture Sublimation Finish",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    badge: "Architectural",
  },
  {
    id: "mosquito-mesh-machher-jali",
    slug: "mosquito-mesh-machher-jali",
    title: "Mosquito Mesh & Machher Jali",
    category: "custom",
    materialType: "Aluminium / Stainless Steel (SS)",
    shortDescription:
      "Mosquito mesh for windows and doors, removable magnetic frames, sliding mesh shutters, and pleated retractable mesh options.",
    fullDescription:
      "Keep insects, flies, and mosquitoes out without restricting natural light and breeze. We fabricate made-to-measure insect screen frames using premium 304-grade stainless steel wire mesh or fiberglass mesh mounted onto color-matched aluminium frames.",
    features: [
      "Pleated retractable mesh, sliding shutters, and barrier-free doors",
      "High-grade SS 304 mesh that resists pet scratches and rodent cuts",
      "Color-matched aluminium extrusions to seamlessly blend with existing windows",
      "Removable Velcro / magnetic frames for effortless washing and cleaning",
    ],
    applications: [
      "Bedroom, living room, and kitchen windows",
      "Balcony French sliding doors and main entrance safety doors",
      "Hospitality, restaurant, and clinic ventilation openings",
      "Independent houses and high-rise apartments",
    ],
    finishOptions: [
      "Stainless Steel 304 Black Matte Coated Wire Mesh",
      "Bright Silver SS Wire Mesh",
      "Durable Charcoal Fiberglass Mesh",
      "Frame Colors: Black, Dark Brown, White, and Silver",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    badge: "Household Favorite",
  },
  {
    id: "invisible-safety-grills",
    slug: "invisible-safety-grills",
    title: "Invisible Safety Grills",
    category: "stainless-steel",
    materialType: "Stainless Steel (SS)",
    shortDescription:
      "Minimal-visibility safety grill systems for balconies and windows, engineered with high-tensile stainless steel wire ropes.",
    fullDescription:
      "The modern architectural alternative to bulky iron grills. Utilizing high-tensile 316-grade stainless steel cables with transparent nylon/Teflon coating, anchored into structural concrete with rigid aluminium track profiles. Protects children and pets without blocking your panoramic view.",
    features: [
      "High-tensile SS 316 wire rope with protective anti-corrosive coating",
      "Preserves 98% unobstructed outdoor skyline view and natural daylight",
      "Reinforced heavy-duty aluminium track anchoring directly into concrete",
      "Complies with emergency fire evacuation standards (can be cut with wire cutters in rescue)",
    ],
    applications: [
      "High-rise apartment balconies and open terrace verandas",
      "Modern bedroom bay windows and panoramic glass facades",
      "Staircase voids and mezzanine gallery fall protection",
      "Schools, nurseries, and child-safe commercial facilities",
    ],
    finishOptions: [
      "2.0mm / 2.5mm / 3.0mm Wire Diameter Options",
      "UV-Resistant Clear Nylon / Teflon Sheathing",
      "White or Charcoal Powder-Coated Aluminium Anchoring Track",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    badge: "Modern Safety",
  },
  {
    id: "custom-steel-fabrication",
    slug: "custom-steel-fabrication",
    title: "Custom Steel Fabrication",
    category: "custom",
    materialType: "Multi-Metal / Custom",
    shortDescription:
      "Specially designed steel products, custom sections, specialty fabrication jobs, metal frames, and project-specific solutions.",
    fullDescription:
      "True to our motto 'We Will Make Whatever You Think..', we execute bespoke fabrication challenges from architect drawings, interior designer sketches, or individual custom concepts. Combining CNC laser cutting, press brake bending, and certified welding.",
    features: [
      "Bespoke manufacturing from drawings, sketches, or 3D CAD files",
      "Combination metalwork: Mild steel, stainless steel, and aluminium",
      "Custom metal furniture frames, decorative partitions, and planters",
      "Tailored prototypes, bracketry, and specialized structural assemblies",
    ],
    applications: [
      "Architectural metal screens and laser-cut facade panels",
      "Custom metal table bases, display racks, and shelving systems",
      "Specialty machine guards, hopper boxes, and plant brackets",
      "Custom outdoor pergola structures and garden features",
    ],
    finishOptions: [
      "Industrial Electrostatic Powder Coating",
      "Custom Patina & Antique Metallic Effects",
      "Two-Tone Polished & Matte Accents",
      "Zinc Undercoat with Weather-Proof Polyurethane Finish",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=80",
    badge: "Bespoke",
  },
];

// GALLERY PROJECTS - Real, relevant, high-resolution fabrication imagery
export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "p1",
    title: "Modern SS & Glass Balcony Balustrade",
    category: "railings",
    categoryLabel: "Stainless Steel Railings",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Sleek stainless steel handrail system with 12mm toughened glass infill on a luxury residential terrace.",
    locationTag: "Residential Villa Project",
  },
  {
    id: "p2",
    title: "Architectural Mild Steel Central Stringer Staircase",
    category: "staircases",
    categoryLabel: "Steel Staircases",
    imageUrl:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    description: "Custom-fabricated mono-stringer mild steel staircase with matte black industrial powder coating.",
    locationTag: "Duplex Residence",
  },
  {
    id: "p3",
    title: "Contemporary Geometric MS Entrance Gate",
    category: "gates-grills",
    categoryLabel: "Gates & Grills",
    imageUrl:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=1200&q=80",
    description: "Heavy-duty sliding main gate fabricated with hollow steel sections and laser-cut metal paneling.",
    locationTag: "Commercial Gated Compound",
  },
  {
    id: "p4",
    title: "Slimline Anthracite Aluminium Sliding Windows",
    category: "aluminium",
    categoryLabel: "Aluminium Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description: "Floor-to-ceiling 3-track aluminium sliding window system with acoustic double glazing.",
    locationTag: "Penthouse Apartment",
  },
  {
    id: "p5",
    title: "Invisible Safety Wire Grill System",
    category: "custom-safety",
    categoryLabel: "Safety Grills",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "High-tensile SS 316 invisible safety grill for 18th floor balcony fall protection with zero view loss.",
    locationTag: "High-Rise Residential",
  },
  {
    id: "p6",
    title: "Heavy-Duty Structural Steel Mezzanine Frame",
    category: "staircases",
    categoryLabel: "MS Structural",
    imageUrl:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
    description: "Engineered mild steel I-beam framework and supporting columns for factory mezzanine floor.",
    locationTag: "Industrial Warehouse",
  },
  {
    id: "p7",
    title: "Aluminium Glass Interior Partitions & Doors",
    category: "aluminium",
    categoryLabel: "Aluminium Partitions",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "Architectural slim-profile black aluminium frames dividing executive suites and meeting rooms.",
    locationTag: "Corporate Headquarters",
  },
  {
    id: "p8",
    title: "Architectural Laser-Cut Custom Steel Screen",
    category: "custom-safety",
    categoryLabel: "Custom Metalwork",
    imageUrl:
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=80",
    description: "Custom CNC laser-cut MS decorative partition screen with bronze textured powder coat.",
    locationTag: "Hospitality Lounge",
  },
  {
    id: "p9",
    title: "Protective AC Outdoor Enclosure & Louver Box",
    category: "custom-safety",
    categoryLabel: "AC Cages",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    description: "Anti-theft weather-shielded louvered cage protecting outdoor VRF condensers with free airflow.",
    locationTag: "Commercial Facade",
  },
];

// WHY CHOOSE US - Quality-driven principles (No fabricated statistics)
export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Custom Tailored Designs",
    description:
      "We build to your exact architectural specifications. Whether you bring a rough napkin sketch, 3D CAD render, or blueprint, we engineer made-to-measure solutions.",
    icon: "Ruler",
  },
  {
    title: "Quality-Focused Fabrication",
    description:
      "Precision cuts, full-penetration welding, clean ground joints, and rigorous anti-rust priming ensure every fabrication withstands years of heavy exposure.",
    icon: "ShieldCheck",
  },
  {
    title: "Multiple Material Options",
    description:
      "Clear, honest guidance between Stainless Steel (SS), Mild Steel (MS), and Extruded Aluminium so you invest in the right material for your specific budget and environment.",
    icon: "Layers",
  },
  {
    title: "Meticulous Attention to Detail",
    description:
      "From seamless weld grinds to flush alignment and flawless powder coat adhesion, we prioritize aesthetics alongside mechanical strength.",
    icon: "Sparkles",
  },
  {
    title: "Residential & Commercial Solutions",
    description:
      "Equipped to deliver both fine architectural metalwork for private luxury homes and heavy-duty structural steelwork for commercial facilities.",
    icon: "Building2",
  },
  {
    title: "Customer-Focused Service",
    description:
      "Transparent quotations, honest measurement consultations, disciplined project tracking, and professional on-site installation with zero mess left behind.",
    icon: "Headphones",
  },
];

// WORK PROCESS - 4 Step Timeline
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discuss Your Requirements",
    description:
      "Share your site requirements, design ideas, or architectural drawings via WhatsApp, phone, or our online quote form.",
    details: "Initial consultation, material choice guidance, and preliminary budget estimation.",
  },
  {
    step: "02",
    title: "Site Measurement & Design",
    description:
      "Our team conducts accurate on-site measurements and structural checks to finalize dimensions and profile selections.",
    details: "Precision opening verification, profile thickness confirmation, and design sign-off.",
  },
  {
    step: "03",
    title: "Fabrication & Finishing",
    description:
      "Fabrication begins in our workshop using precision cutting, welding, anti-rust priming, and architectural powder coating or polishing.",
    details: "Heavy-duty MIG/TIG welding, surface pre-treatment, and thorough quality inspection.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    description:
      "Experienced metalworkers transport and securely anchor your fabrication on-site with clean alignment and final handover.",
    details: "Rigid mechanical anchoring, alignment testing, touch-up finishing, and customer sign-off.",
  },
];

// HELPER: Generate WhatsApp query URL with pre-filled message
export function getWhatsAppUrl(serviceTitle?: string): string {
  const base = `https://wa.me/${COMPANY_CONFIG.contact.whatsappNumberOnly}`;
  const text = serviceTitle
    ? `Hello Monarch Fabrication, I would like to inquire about quotation and details for: ${serviceTitle}.`
    : `Hello Monarch Fabrication, I would like to request a quote for custom fabrication work.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
