export interface PortfolioImage {
  id: string;
  title: string;
  image: string;
  location: string;
  specs: string[];
  description: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  isAvailable: boolean;
  images: PortfolioImage[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: "invisible-grill",
    name: "INVISIBLE GRILL",
    slug: "invisible-grill",
    tagline: "High-Tensile SS-316 Safety Wire Grills for Balconies & Windows",
    description:
      "Engineered with marine-grade 316 stainless steel nylon-coated wires. Offers 100% child, pet, and bird safety with zero blockage of scenic natural views, maximum fresh air, and zero maintenance.",
    badge: "10 Real Projects",
    features: [
      "Grade SS-316 Marine Stainless Steel (Tensile 400+ kg)",
      "Unobstructed 180° Panoramic View & Maximum Airflow",
      "Child, Pet & Bird Safety Compliant for High-Rise Towers",
      "Rust-Proof, Corrosion-Resistant & Maintenance-Free",
    ],
    isAvailable: true,
    images: [
      {
        id: "inv-1",
        title: "High-Rise Curved Balcony Invisible Grill",
        image: "/images/portfolio/invisible-grill/invisible-grill-1.jpg",
        location: "Surat, Gujarat • High-Rise Apartment Tower",
        specs: ["Grade SS-316 Cable", "Curved Facade Installation", "Anti-Pigeon & Bird Safe", "Tensile: 400+ kg"],
        description:
          "Custom-tensioned high-tensile SS-316 cables installed across a curved modern balcony, offering 100% child safety without blocking natural airflow or the expansive city & landscape view.",
      },
      {
        id: "inv-2",
        title: "Illuminated Terrace Balustrade Invisible Safety System",
        image: "/images/portfolio/invisible-grill/invisible-grill-2.png",
        location: "Surat, Gujarat • Luxury Terrace Balcony",
        specs: ["Invisible Aesthetics", "Architectural Lighting Fit", "Weather & Rust Proof", "Non-Obtrusive Profile"],
        description:
          "Night perspective showing the ultra-slim vertical invisible wire grill cleanly anchored along a rounded glass & SS handrail with integrated ambient ceiling lighting.",
      },
      {
        id: "inv-3",
        title: "Skyline Balcony High-Tensile Cable Protection",
        image: "/images/portfolio/invisible-grill/invisible-grill-3.jpg",
        location: "Surat, Gujarat • High-Rise Skyrise Balcony",
        specs: ["Zero View Obstruction", "High Wind Pressure Tested", "Child & Pet Safety Certified", "Durable Track Anchor"],
        description:
          "Floor-to-ceiling safety cable barrier engineered for high-altitude balconies, ensuring peace of mind for families with kids and pets with uninterrupted mountain and cityscape vistas.",
      },
      {
        id: "inv-4",
        title: "Modern Sliding Window with Integrated Invisible Grill",
        image: "/images/portfolio/invisible-grill/invisible-grill-4.png",
        location: "Surat, Gujarat • Architectural Villa Window",
        specs: ["Sliding Window Compatible", "Dark Grey Aluminium Track", "Burglar & Fall Resistant", "Easy Maintenance"],
        description:
          "Heavy-duty powder-coated dark grey aluminium sliding window section paired seamlessly with vertical invisible safety cables for clean modern interior aesthetics.",
      },
      {
        id: "inv-5",
        title: "Ornamental Heritage Railing with Invisible Safety Barrier",
        image: "/images/portfolio/invisible-grill/invisible-grill-5.png",
        location: "Surat, Gujarat • Scenic Valley View Balcony",
        specs: ["Hybrid Heritage Fitment", "Panoramic Valley View", "Stainless Steel Core Wires", "Corrosion Resistant"],
        description:
          "Elegant combination of classic decorative wrought-iron floral balustrade with high-tensile invisible wire system above, providing modern safety while preserving traditional railing beauty.",
      },
      {
        id: "inv-6",
        title: "Glass Balustrade Garden View Invisible Safety Wire",
        image: "/images/portfolio/invisible-grill/invisible-grill-6.jpg",
        location: "Surat, Gujarat • Luxury Low-Rise Villa",
        specs: ["SS-316 Nylon Coated", "Glass Railing Mount", "Child & Pet Protection", "Garden Airflow View"],
        description:
          "Sleek glass balustrade paired with ceiling-tensioned stainless steel invisible safety cables overlooking natural flowering trees with 100% unobstructed daylight.",
      },
      {
        id: "inv-7",
        title: "Sunset Twilight Skyline High-Rise Invisible Grill",
        image: "/images/portfolio/invisible-grill/invisible-grill-7.png",
        location: "Surat, Gujarat • High-Altitude Apartment Balcony",
        specs: ["180° Panoramic Sunset", "Night Cityscape Clarity", "400+ kg Tensile Strength", "Zero Visual Disruption"],
        description:
          "Evening view capturing the crystal-clear transparency of the high-tensile safety wire system against a glowing city lights horizon.",
      },
      {
        id: "inv-8",
        title: "Villa Terrace Mountain View Protective Cable Enclosure",
        image: "/images/portfolio/invisible-grill/invisible-grill-8.jpg",
        location: "Surat, Gujarat • Scenic Terrace Balcony",
        specs: ["Parapet Top-Mount", "Corrosion Resistant", "Anti-Pigeon & Bird Proof", "Weatherproof Anchor Track"],
        description:
          "Solid wall parapet retrofitted with top-mounted vertical invisible grill cables, delivering complete safety against accidental falls while enjoying serene valley vistas.",
      },
      {
        id: "inv-9",
        title: "Residential Tower Full-Height Invisible Cable Shield",
        image: "/images/portfolio/invisible-grill/invisible-grill-9.png",
        location: "Surat, Gujarat • Newly Developed Apartment Complex",
        specs: ["Full Height Floor-to-Ceiling", "MS Handrail Integration", "High Wind Tested", "Surat Multi-Storey Tower"],
        description:
          "Engineered multi-storey apartment installation securing an open balcony with heavy-duty tensioning anchors, guaranteeing full fall-prevention for high floors.",
      },
      {
        id: "inv-10",
        title: "Wide Panoramic Balcony Horizontal Tensioned Invisible Grill",
        image: "/images/portfolio/invisible-grill/invisible-grill-10.png",
        location: "Surat, Gujarat • Wide Span Balcony Opening",
        specs: ["Wide-Span Balcony Fit", "Granite Ledge Fasteners", "Minimalist Aesthetics", "Maintenance-Free"],
        description:
          "Ultra-wide balcony aperture framed with precision-spaced invisible safety cables anchored into granite-clad ledges for an expansive, breezy living space.",
      },
    ],
  },
  {
    id: "aluminium-windows",
    name: "ALUMINIUM SECTION WINDOW",
    slug: "aluminium-windows",
    tagline: "Architectural Sliding & Casement Aluminium Windows, Heavy Domal Profiles & Partitions",
    description:
      "Precision-fabricated architectural aluminium sliding windows, floor-to-ceiling glass doors, awning casement systems, and heavy Domal sections. Engineered with smooth-glide nylon bearing rollers, acoustic EPDM weather gaskets, and optional integrated stainless steel mosquito mesh screens.",
    badge: "10 Real Projects",
    features: [
      "Domal & Heavy-Gauge Architectural Profile Sections",
      "Silent Precision Nylon Rollers & Smooth Gliding Tracks",
      "EPDM Weather Seals for 100% Wind, Dust & Rain Proofing",
      "Compatible with Toughened Glass & Mosquito Mesh Screens",
    ],
    isAvailable: true,
    images: [
      {
        id: "al-1",
        title: "Heavy-Gauge 4-Track Charcoal Aluminium Sliding Patio System",
        image: "/images/portfolio/aluminium-windows/aluminium-window-1.png",
        location: "Surat, Gujarat • Luxury Country Villa",
        specs: ["Domal Heavy Profile", "Matte Charcoal Finish", "12mm Toughened Glass", "Whisper-Quiet Glide"],
        description:
          "Expansive 4-panel multi-track aluminium sliding door and window opening directly to outdoor garden patio, maximizing natural light and ventilation with sound and dust-proof sealing.",
      },
      {
        id: "al-2",
        title: "Floor-to-Ceiling Slimline Architectural Sliding Doors",
        image: "/images/portfolio/aluminium-windows/aluminium-window-2.png",
        location: "Surat, Gujarat • Modern Residential Villa",
        specs: ["Slimline Sightlines", "Dark Bronze Anodized", "Overhead Glass Canopy", "EPDM Weather Stripping"],
        description:
          "Full-height dark bronze anodized aluminium sliding glass system featuring seamless indoor-to-outdoor transitions with custom overhead cantilevered glass shading.",
      },
      {
        id: "al-3",
        title: "White Architectural Frame Multi-Panel Courtyard Sliding Window",
        image: "/images/portfolio/aluminium-windows/aluminium-window-3.png",
        location: "Surat, Gujarat • Contemporary Living Room",
        specs: ["White Powder Coating", "Recessed Floor Track", "Reflective Tinted Glass", "Thermal Insulation"],
        description:
          "Clean white powder-coated sliding system with high-clarity reflective glass panels, engineered with recessed threshold for smooth step-free movement.",
      },
      {
        id: "al-4",
        title: "Champagne Section Sliding System with Integrated Mosquito Mesh",
        image: "/images/portfolio/aluminium-windows/aluminium-window-4.png",
        location: "Surat, Gujarat • Outdoor Patio Dining Enclosure",
        specs: ["Integrated SS Fly Mesh", "3-Track Section Design", "Champagne Anodized", "Heavy-Duty Locks"],
        description:
          "3-Track premium aluminium sliding system featuring a dedicated sliding stainless steel mosquito mesh screen panel alongside wide glass view panels.",
      },
      {
        id: "al-5",
        title: "Stackable Multi-Track Aluminium Glass Partition Doors",
        image: "/images/portfolio/aluminium-windows/aluminium-window-5.png",
        location: "Surat, Gujarat • Dining & Veranda Open Enclosure",
        specs: ["Telescopic Stackable Panels", "Pure White Powder Coated", "Heavy Gauge Extrusion", "Wide Aperture Clearance"],
        description:
          "Multi-panel sliding telescopic aluminium glass doors that slide and stack neatly to fully open the indoor dining room to the open-air courtyard.",
      },
      {
        id: "al-6",
        title: "3-Track Charcoal Sliding Window with Built-In Mosquito Mesh",
        image: "/images/portfolio/aluminium-windows/aluminium-window-6.png",
        location: "Surat, Gujarat • High-Rise Bedroom Window",
        specs: ["3-Track Sliding Section", "Stainless Steel Fly Mesh", "Dual Flush Touch Locks", "Charcoal Powder Coated"],
        description:
          "Heavy 3-track architectural window system with integrated security mesh and smooth sliding glass panels, ensuring fresh cross-ventilation while blocking insects and dust.",
      },
      {
        id: "al-7",
        title: "Walnut Wood-Finish Aluminium Awning Top-Hung Casement Windows",
        image: "/images/portfolio/aluminium-windows/aluminium-window-7.png",
        location: "Surat, Gujarat • Garden Villa Exterior",
        specs: ["Wood-Grain Sublimation", "Top-Hung Awning Hinge", "Rain-Deflecting Design", "High Acoustic Sealing"],
        description:
          "Row of 4 vertical top-hung openable aluminium casement windows crafted in premium walnut timber-effect finish, allowing all-weather ventilation even during heavy rains.",
      },
      {
        id: "al-8",
        title: "Pure White Openable Top-Hung Casement Window",
        image: "/images/portfolio/aluminium-windows/aluminium-window-8.png",
        location: "Surat, Gujarat • Modern Residence Study",
        specs: ["Stainless Steel Friction Stays", "EPDM Compression Gasket", "Gloss White Powder Coating", "DGU Glass Ready"],
        description:
          "Architectural top-hung casement window with heavy-gauge multi-position friction stays, opening outward smoothly for high airflow and crystal-clear room illumination.",
      },
      {
        id: "al-9",
        title: "Espresso Bronze Landscape View Awning Casement Window",
        image: "/images/portfolio/aluminium-windows/aluminium-window-9.png",
        location: "Surat, Gujarat • Scenic Villa Living Room",
        specs: ["Espresso Anodized Finish", "Single-Handle Multi-Lock", "Toughened Float Glass", "Minimal Sightlines"],
        description:
          "Square architectural awning window finished in rich espresso bronze, engineered with precision European hinges to frame picturesque outdoor green landscapes.",
      },
      {
        id: "al-10",
        title: "Double French-Style Aluminium Glass Patio Entrance Doors",
        image: "/images/portfolio/aluminium-windows/aluminium-window-10.png",
        location: "Surat, Gujarat • Terrace Garden Veranda",
        specs: ["Double Openable French Door", "Multi-Point Lever Lock", "Heavy-Duty Butt Hinges", "Weatherproof Bottom Threshold"],
        description:
          "Pair of openable aluminium French casement glass doors featuring ergonomic lever handles and heavy structural framing leading out to a terrace dining deck.",
      },
    ],
  },
  {
    id: "aluminium-elevation",
    name: "ALUMINIUM ELEVATION",
    slug: "aluminium-elevation",
    tagline: "Architectural Aluminium Louvers, Facade Fins, Cladding & Modern Front Elevations",
    description:
      "Custom-engineered aluminium front elevations, vertical architectural louvers, perforated facade mesh, and standing seam composite panels. Designed for high aesthetic impact, superior solar shading, enhanced privacy, and all-weather exterior durability.",
    badge: "10 Real Projects",
    features: [
      "Custom Extruded Vertical Louver Fins & Fluted Panels",
      "High-Grade Exterior Powder Coating & Anodized Finishes",
      "Perforated Metal Mesh & CNC Architectural Facade Screens",
      "Concealed Fastening System with Wind-Load Engineering",
    ],
    isAvailable: true,
    images: [
      {
        id: "el-1",
        title: "Architectural Charcoal Vertical Louver Facade & Cladding",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-1.png",
        location: "Surat, Gujarat • Luxury Residential Facade",
        specs: ["Vertical Aluminium Louver Fins", "Standing Seam Panels", "All-Weather Powder Coating", "Architectural Sun Control"],
        description:
          "Custom-extruded vertical aluminium elevation slats integrated with standing seam metal cladding panels for modern solar shading, enhanced privacy, and striking exterior depth.",
      },
      {
        id: "el-2",
        title: "Cantilevered Exterior Portal with Vertical Slat Screening",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-2.jpg",
        location: "Surat, Gujarat • Modern Villa Entrance",
        specs: ["Heavy Box Section Slats", "Cantilever Canopy Fit", "Charcoal Grey Texture", "Integrated Lighting Ready"],
        description:
          "Sleek architectural facade feature combining heavy-gauge aluminium vertical battens with natural stone cladding and an overhead cantilever canopy.",
      },
      {
        id: "el-3",
        title: "Geometric Multi-Storey Aluminium Slat Elevation Screen",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-3.png",
        location: "Surat, Gujarat • Contemporary Commercial / Residential Corner",
        specs: ["Full Facade Louver Wrapping", "Concealed Fastening System", "Wind-Load Certified", "Anti-Corrosion Treated"],
        description:
          "Dramatic wrap-around vertical aluminium facade louvers engineered to provide continuous sun protection, thermal efficiency, and an iconic contemporary urban aesthetic.",
      },
      {
        id: "el-4",
        title: "Modern Villa Front Elevation with Fluted Aluminium & CNC Jali",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-4.png",
        location: "Surat, Gujarat • 3-Storey Luxury Bungalow",
        specs: ["Fluted Elevation Fins", "CNC Laser-Cut Feature Jali", "Glass Balcony Railings", "Exterior Weatherproof"],
        description:
          "High-end residential villa elevation combining warm metallic fluted vertical aluminium sections with an intricate white architectural CNC cut screen and tinted balcony balustrades.",
      },
      {
        id: "el-5",
        title: "Parametric Perforated Mesh & Curtain Wall Commercial Elevation",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-5.jpg",
        location: "Surat, Gujarat • Commercial Corporate Landmark",
        specs: ["Perforated Aluminium Mesh", "Curtain Glazing Structural Subframe", "Parametric Facade Design", "Solar Heat Reduction"],
        description:
          "Showstopping commercial headquarters facade featuring curved expanded aluminium mesh panels seamlessly married to structural glass curtain walls for maximum solar deflection.",
      },
      {
        id: "el-6",
        title: "Timber-Finish Aluminium Vertical Slat Staircase Screen & Pergola",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-6.png",
        location: "Surat, Gujarat • Modern Duplex Villa",
        specs: ["Teak Wood Sublimation", "Exterior Staircase Screening", "Overhead Pergola Canopy", "All-Weather Powder Coated"],
        description:
          "Exterior cantilevered staircase enclosure using vertical wood-grain finished aluminium architectural fins transitioning into an overhead shade pergola.",
      },
      {
        id: "el-7",
        title: "Twin Architectural Tower Ventilation & Sun-Control Louvers",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-7.png",
        location: "Surat, Gujarat • Contemporary Villa Facade",
        specs: ["Heavy Horizontal Louvers", "Twin Tower Feature", "Matte Charcoal Finish", "Rain-Deflecting Slats"],
        description:
          "Symmetrical dual facade shafts enclosed with horizontal matte black aluminium louvers for maximum ventilation and architectural definition.",
      },
      {
        id: "el-8",
        title: "Staggered Geometric Horizontal Louver Apartment Facade",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-8.jpg",
        location: "Surat, Gujarat • 4-Storey Modern Residence",
        specs: ["Staggered Geometric Layout", "Balcony Solar Shading", "Integrated Sliding Gate", "Durable Structural Frame"],
        description:
          "Modern urban building elevation featuring alternating horizontal black aluminium louver boxes providing private shaded balconies and iconic street appeal.",
      },
      {
        id: "el-9",
        title: "Minimalist Concrete Frame Vertical Aluminium Sun-Screen Louvers",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-9.jpg",
        location: "Surat, Gujarat • Minimalist Luxury Residence",
        specs: ["Recessed Concrete Fit", "Vertical Solar Deflection", "Standing-Seam Ground Annex", "Minimalist Sightlines"],
        description:
          "First-floor bedroom elevation screen crafted from precision vertical black aluminium fins recessed inside a white concrete box frame.",
      },
      {
        id: "el-10",
        title: "Parametric Cascading Copper-Bronze Aluminium Elevation Fins",
        image: "/images/portfolio/aluminium-elevation/aluminium-elevation-10.png",
        location: "Surat, Gujarat • Luxury Landmark Building",
        specs: ["Parametric Organised Heights", "Copper-Bronze Metallic Anodized", "Full 4-Storey Height", "Sculptural Entrance Facade"],
        description:
          "Dramatic multi-storey waterfall-inspired vertical aluminium facade fins in rich metallic copper-bronze, creating an artistic architectural centerpiece.",
      },
    ],
  },
  {
    id: "aluminium-partitions",
    name: "ALUMINIUM PARTITION",
    slug: "aluminium-partitions",
    tagline: "Modular Office Cabins, Glass Partitions, Workstation Dividers & Industrial Enclosures",
    description:
      "High-durability modular aluminium partition systems engineered for corporate offices, IT workstations, conference rooms, cleanrooms, and factory floor cabins. Features slimline profiles, acoustic frosted/clear glass transoms, and wood-finish composite base panels.",
    badge: "10 Real Projects",
    features: [
      "Modular Aluminium Profile Framing (Black, Silver & Custom)",
      "Acoustic Frosted, Fluted & Clear Toughened Glass Options",
      "Integrated Wire Concealment & Workstation Raceway System",
      "Rapid Demountable Installation for Offices & Industrial Plants",
    ],
    isAvailable: true,
    images: [
      {
        id: "pr-1",
        title: "Corporate IT Workstation Modular Cubicle Partitions",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-1.png",
        location: "Surat, Gujarat • Corporate IT Office Floor",
        specs: ["Modular Cubicle System", "Matte Black Frame", "Frosted Glass Transoms", "Integrated Wire Ducts"],
        description:
          "Low-height modular workstation privacy partitions featuring black powder-coated aluminium frames with sound-dampening panels and frosted glass upper bands.",
      },
      {
        id: "pr-2",
        title: "Walnut Wood & Frosted Glass Designer Office Partition",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-2.png",
        location: "Surat, Gujarat • Modern Corporate Office",
        specs: ["Fluted Walnut Wood Panel", "Acid-Etched Frosted Glass", "Slimline Black Frame", "High Acoustic Rating"],
        description:
          "Premium office space divider combining rich fluted timber-finish lower sections with acoustic frosted glass for optimal work privacy and stylish interior decor.",
      },
      {
        id: "pr-3",
        title: "Full-Height Industrial Plant Cleanroom Glass Corridor Partition",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-3.png",
        location: "Surat, Gujarat • Industrial Manufacturing Facility",
        specs: ["Floor-to-Ceiling Height", "Anodized Silver Sections", "Toughened Safety Glass", "Dust & Air Pressure Sealed"],
        description:
          "Heavy-duty full-height industrial plant corridor enclosure engineered with natural anodized aluminium sections and panoramic inspection glass viewing panels.",
      },
      {
        id: "pr-4",
        title: "Executive Workstation Pods with Clear Glass Upper Transoms",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-4.png",
        location: "Surat, Gujarat • Commercial Office Floor",
        specs: ["Clear Vision Glass Top", "Woodgrain Textured Base", "Powder-Coated Charcoal", "Independent Desk Pods"],
        description:
          "Ergonomic semi-private desk division enclosures providing team collaboration transparency above desk level with warm timber-finish modesty panels below.",
      },
      {
        id: "pr-5",
        title: "Executive Cabin Corridor Partitions with Natural Oak Panels",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-5.png",
        location: "Surat, Gujarat • Corporate Headquarters",
        specs: ["Managerial Office Cabins", "Natural Oak Clad Base", "Frosted Privacy Glazing", "Concealed Fastening Track"],
        description:
          "Extended executive hallway lined with custom aluminium cabin partitions featuring warm oak cladding and full-height frosted glass transoms.",
      },
      {
        id: "pr-6",
        title: "Commercial Multi-Cabin Glass & Aluminium Office Enclosure",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-6.png",
        location: "Surat, Gujarat • Commercial Corporate Suite",
        specs: ["Floor-to-Ceiling Height", "Frosted Transom Bands", "Anodized Heavy Sections", "Acoustic Glazing"],
        description:
          "Full-height corporate partition system featuring multi-tier glass panels with frosted privacy banding and heavy-duty structural aluminium profiles.",
      },
      {
        id: "pr-7",
        title: "Executive Director Cabin Enclosure with Black Section Framing",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-7.png",
        location: "Surat, Gujarat • Executive Corporate Office",
        specs: ["Matte Black Framing", "Central Vision Glass Band", "Solid Acoustic Panels", "Concealed Door Jambs"],
        description:
          "Private executive office cabin crafted with sleek black aluminium sections, solid acoustic insulation panels, and a central panoramic viewing band.",
      },
      {
        id: "pr-8",
        title: "Designer Fluted Glass Mobile Workstation Screen Dividers",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-8.jpg",
        location: "Surat, Gujarat • Creative Studio & Coworking Hub",
        specs: ["Reeded Fluted Glass", "Mobile Caster Wheels", "Fabric Base Acoustic Board", "Powder-Coated Trim"],
        description:
          "Versatile modular mobile divider screens pairing elegant fluted glass tops with acoustic upholstered bottom panels for flexible office reconfiguration.",
      },
      {
        id: "pr-9",
        title: "Call Center & IT Workstation Quad Cubicle Pods",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-9.png",
        location: "Surat, Gujarat • IT & Business Process Outsourcing Center",
        specs: ["4-Way Cluster Pods", "Clear Glass Sightline Transoms", "Heavy Gauge Aluminium", "Concealed Data Raceways"],
        description:
          "Multi-seat collaborative workstation cluster partitions featuring slimline charcoal aluminium frames, clear upper glass, and integrated cable management.",
      },
      {
        id: "pr-10",
        title: "Luxury Mahogany Clad Executive Office Panoramic Partition",
        image: "/images/portfolio/aluminium-partitions/aluminium-partition-10.png",
        location: "Surat, Gujarat • Luxury Corporate Headquarters",
        specs: ["Rich Mahogany Cladding", "Full Panoramic Glazing", "Silver Anodized Trim", "Flush Acoustic Sealing"],
        description:
          "Bespoke high-end boardroom partition wall combining natural mahogany wood wall cladding with floor-to-ceiling glass and precision aluminium section posts.",
      },
    ],
  },
  {
    id: "glass-windows",
    name: "GLASS WINDOWS",
    slug: "glass-windows",
    tagline: "Architectural Box Bay Windows, Frameless Corner Glazing & Panoramic Picture Units",
    description:
      "Custom-fabricated architectural glass window systems engineered for luxury villas, modern bungalows, and designer residences. Featuring frameless butt-joint 90° corner glass, cantilevered protruding box frames, and energy-efficient double glazing.",
    badge: "10 Real Projects",
    features: [
      "Frameless Butt-Joint 90° Corner Glass Technology",
      "Protruding Architectural Cantilever Box Bay Framing",
      "High-Performance Toughened & Double Glazed Units (DGU)",
      "Weatherproof EPDM Structural Silicone Sealing System",
    ],
    isAvailable: true,
    images: [
      {
        id: "gw-1",
        title: "Cantilevered Architectural Metal Box Picture Window",
        image: "/images/portfolio/glass-windows/glass-window-1.jpg",
        location: "Surat, Gujarat • Modern Luxury Hillside Villa",
        specs: ["Cantilever Protruding Frame", "Charcoal Clad Surround", "Flush Fixed Glazing", "Cedar Wood Integration"],
        description:
          "Bespoke deep-set cantilevered steel/aluminium picture frame window projecting from natural cedar siding, framing panoramic scenic views.",
      },
      {
        id: "gw-2",
        title: "Modern Minimalist Box Frame Panoramic Grid Window",
        image: "/images/portfolio/glass-windows/glass-window-2.jpg",
        location: "Surat, Gujarat • Contemporary Designer Bungalow",
        specs: ["Deep White Box Reveal", "Minimalist Grid Glazing", "Solar Reflective Glass", "Courtyard Garden View"],
        description:
          "Architectural protruding white reveal box window with slender horizontal and vertical grid divisions set against fluted timber cladding.",
      },
      {
        id: "gw-3",
        title: "Vertical Protruding Box Bay Window with Black Casement",
        image: "/images/portfolio/glass-windows/glass-window-3.png",
        location: "Surat, Gujarat • Ultra-Modern Minimalist Residence",
        specs: ["Vertical Box Projection", "White Exterior Reveal", "Operable Black Casement", "Integrated Sun Canopy"],
        description:
          "Sculptural vertical box window system projecting cleanly from pristine white facade panels, housing slimline dark operable casement sashes.",
      },
      {
        id: "gw-4",
        title: "90° Frameless Corner Bay Window with Operable Flankers",
        image: "/images/portfolio/glass-windows/glass-window-4.png",
        location: "Surat, Gujarat • Luxury Bungalow Living Room",
        specs: ["90° Frameless Glass Joint", "Twin Operable Casements", "White Heavy Powder Coat", "Textured Slate Wall Mount"],
        description:
          "Clear open-corner bay window featuring seamless butt-glazed 90-degree corner glass flanked by white operable ventilation casement sashes.",
      },
      {
        id: "gw-5",
        title: "Architectural Bronze Corner Glass Window with Concrete Box Reveal",
        image: "/images/portfolio/glass-windows/glass-window-5.png",
        location: "Surat, Gujarat • Custom Architectural Residence",
        specs: ["Seamless Butt Corner Glass", "Bronze Metallic Finish", "Cantilever Chajja Shade", "Panoramic Garden Sightlines"],
        description:
          "90-degree corner fixed glass unit fitted inside a protective concrete cantilever frame with rich bronze metallic bottom transom profiles.",
      },
      {
        id: "gw-6",
        title: "Vertical Modern Picture Window with White Cantilever Canopy Frame",
        image: "/images/portfolio/glass-windows/glass-window-6.png",
        location: "Surat, Gujarat • Contemporary Luxury Villa",
        specs: ["Extended Vertical Format", "Deep White Box Sunhood", "Dark Tint Heat Reflective Glass", "Sliding Bottom Vent"],
        description:
          "Floor-to-ceiling vertical architectural picture window framed with a crisp white projecting box frame and timber wall accents, combining fixed views with a lower sliding vent.",
      },
      {
        id: "gw-7",
        title: "Architectural 90° Corner Bay Window with Textured Stone Cladding",
        image: "/images/portfolio/glass-windows/glass-window-7.png",
        location: "Surat, Gujarat • Modern Craftsman Bungalow",
        specs: ["90° Open Corner Glass", "White Box Architrave", "Textured Black Slate Wall", "Multi-Lite Fixed Grid"],
        description:
          "Striking bungalow corner window encased in an architectural white border and dark slate stacked stone wall, providing expansive dual-aspect natural lighting.",
      },
      {
        id: "gw-8",
        title: "Cantilevered Floating Box Corner Window with Frameless Glazing",
        image: "/images/portfolio/glass-windows/glass-window-8.png",
        location: "Surat, Gujarat • Modern Residence",
        specs: ["Deep Floating Cantilever", "Frameless Corner Edge", "Matte Black Aluminium Profiles", "Integrated Sill Ledge"],
        description:
          "Dramatic protruding box bay window system projecting outward from the building corner with clean glass-to-glass butt joints for uninterrupted panoramic vision.",
      },
      {
        id: "gw-9",
        title: "Modern Glass Pavilion Enclosure with Frameless Corner & Entry Door",
        image: "/images/portfolio/glass-windows/glass-window-9.png",
        location: "Surat, Gujarat • Garden Villa & Studio Annex",
        specs: ["Full Height Corner Glazing", "Tinted Solar Glazing", "Flush Glass Entry Door", "Weather-Sealed Anodized Base"],
        description:
          "Standalone architectural garden pavilion featuring floor-to-ceiling tinted glass corner walls and a seamless glass entry door for an indoor-outdoor living feel.",
      },
      {
        id: "gw-10",
        title: "Facade Curtain Wall Glass Grid with Top-Hung Awning Vent Window",
        image: "/images/portfolio/glass-windows/glass-window-10.png",
        location: "Surat, Gujarat • High-End Residential Villa",
        specs: ["Blue Reflective Toughened Glass", "Structural Glazing Grid", "Concealed Awning Sash", "Frameless Glass Balcony Edge"],
        description:
          "Luxury villa facade structural glass curtain wall grid in solar-control reflective blue glass, featuring a discreet top-hung operable awning window sash.",
      },
    ],
  },
  {
    id: "glass-elevation",
    name: "GLASS ELEVATION",
    slug: "glass-elevation",
    tagline: "Commercial Structural Glazing, Spider Glass Atriums & Architectural Curtain Walls",
    description:
      "Commercial-grade structural glass facade engineering for corporate headquarters, retail malls, high-rise office towers, and architectural atriums. Featuring 4-way silicone structural glazing, point-fixed stainless steel spider fittings, and thermal reflective solar glass.",
    badge: "10 Real Projects",
    features: [
      "Four-Way Silicone Semi-Unitized & Stick Structural Glazing",
      "High-Tensile SS-316 Spider Fitting & Tension Rod Systems",
      "Solar-Control Reflective & Double Glazed Thermal Panels",
      "Integrated Top-Hung Awning Ventilation Sashes",
    ],
    isAvailable: true,
    images: [
      {
        id: "ge-1",
        title: "Commercial Multi-Storey Reflective Blue Structural Glass Facade",
        image: "/images/portfolio/glass-elevation/glass-elevation-1.png",
        location: "Surat, Gujarat • Commercial Office Complex",
        specs: ["4-Storey Full Glazing", "Reflective Blue Solar Glass", "Integrated Awning Vents", "Glass Entrance Canopy"],
        description:
          "Seamless corporate building envelope combining high-performance solar-reflective blue curtain wall glazing with outward-opening ventilation transoms.",
      },
      {
        id: "ge-2",
        title: "Architectural Point-Fixed Spider Glass Pavilion & Entrance Atrium",
        image: "/images/portfolio/glass-elevation/glass-elevation-2.png",
        location: "Surat, Gujarat • Prestigious Public & Cultural Center",
        specs: ["SS-316 Spider Fittings", "Laminated Toughened Glass", "Structural Steel Column Support", "Frameless Butt Corner Joints"],
        description:
          "Striking high-transparency entrance pavilion engineered with articulated stainless steel spider arms and tension bracing for an all-glass aesthetic.",
      },
      {
        id: "ge-3",
        title: "High-Rise Tower Curtain Wall Facade with Operable Awning Sashes",
        image: "/images/portfolio/glass-elevation/glass-elevation-3.png",
        location: "Surat, Gujarat • Corporate IT & Finance Tower",
        specs: ["Multi-Level Sky Reflection", "High-Performance Solar Tint", "Staggered Ventilation Casements", "Aluminium Composite Trim"],
        description:
          "Skyline-defining commercial facade with mirror-finish reflective glass curtain wall grid and engineered wind-resistant awning windows.",
      },
      {
        id: "ge-4",
        title: "Arched Commercial Plaza Structural Glazing Installation",
        image: "/images/portfolio/glass-elevation/glass-elevation-4.jpg",
        location: "Surat, Gujarat • Premium Commercial Shopping Arcade",
        specs: ["Curved Arch Top Profile", "Bronze Reflective Tint", "Heavy Structural Framing", "Multi-Tier Plaza Elevation"],
        description:
          "On-site installation of a dramatic central arched structural glass facade, creating an impressive architectural entrance for a retail plaza.",
      },
      {
        id: "ge-5",
        title: "Cathedral Arch Glass Curtain Wall with Aluminium Composite Cladding",
        image: "/images/portfolio/glass-elevation/glass-elevation-5.jpg",
        location: "Surat, Gujarat • Landmark Commercial Building",
        specs: ["High-Arched Glass Facade", "Toughened Reflective Glass", "ACP Sheet Framing", "Scaffolding Fitout Phase"],
        description:
          "Large-scale monumental pointed-arch structural glass elevation flanked by modern aluminium composite panel cladding on an urban landmark.",
      },
      {
        id: "ge-6",
        title: "Vertical Stairwell Structural Glazing Tower Installation",
        image: "/images/portfolio/glass-elevation/glass-elevation-6.jpg",
        location: "Surat, Gujarat • Commercial Building Core",
        specs: ["Continuous Multi-Floor Glaze", "Scaffolding Fitout Phase", "Reflective Sky Blue Glass", "Heavy Aluminium Mullions"],
        description:
          "Full vertical structural glass facade strip engineered for a building stair core, combining high-strength wind anchors with reflective solar glass panels.",
      },
      {
        id: "ge-7",
        title: "Double-Height Residential Glass Corner Tower Elevation",
        image: "/images/portfolio/glass-elevation/glass-elevation-7.png",
        location: "Surat, Gujarat • Luxury Contemporary Villa",
        specs: ["Double-Height 2-Storey Glass", "Panoramic Corner Elevation", "Slimline Black Mullions", "Internal Staircase View"],
        description:
          "Two-storey high architectural glass elevation encasing a sculptural interior floating staircase, offering floor-to-ceiling panoramic clarity.",
      },
      {
        id: "ge-8",
        title: "Multi-Storey Vertical Glass Facade Strip with Brick Cladding",
        image: "/images/portfolio/glass-elevation/glass-elevation-8.png",
        location: "Surat, Gujarat • Premium Residential Complex",
        specs: ["Vertical Curtain Strip", "High-Performance Dark Tint", "Brick Clad Boundary Framing", "Flush Silicone Joints"],
        description:
          "Contemporary residential elevation pairing sleek dark reflective structural glass panels with textured brick-finish exterior wall cladding.",
      },
      {
        id: "ge-9",
        title: "Full-Height Glass Curtain Wall Atrium & Commercial Stair Core",
        image: "/images/portfolio/glass-elevation/glass-elevation-9.png",
        location: "Surat, Gujarat • Commercial Historic Renovation",
        specs: ["Multi-Level Transparent Atrium", "Black Anodized Heavy Framing", "Automatic Entry Integration", "High Structural Rigidity"],
        description:
          "Multi-level glazed stair and elevator atrium facade extension on an institutional building, featuring floor-to-ceiling clear vision panels.",
      },
      {
        id: "ge-10",
        title: "Emerald Reflective Glass Curtain Wall with Architectural Entrance Portal",
        image: "/images/portfolio/glass-elevation/glass-elevation-10.jpg",
        location: "Surat, Gujarat • Landmark Corporate Headquarters",
        specs: ["Emerald Reflective Curtain Wall", "Vertical Glass Louver Fins", "White Cantilever Portal", "Operable Side Sashes"],
        description:
          "Signature commercial facade showcasing emerald solar-reflective curtain wall glazing accented by vertical sun louvers and an architectural portal canopy.",
      },
    ],
  },
  {
    id: "glass-partitions",
    name: "GLASS PARTITION",
    slug: "glass-partitions",
    tagline: "Frameless Glass Partitions, Acoustic Office Cabins & Sliding Glass Walls",
    description:
      "Minimalist frameless and slimline glass partition systems for corporate boardrooms, executive cabins, and luxury residential dividers. Engineered with toughened safety glass and precision patch fittings.",
    badge: "10 Real Projects",
    features: [
          "10mm & 12mm Toughened Clear / Frosted Safety Glass",
          "Concealed Floor-Spring & Top-Hung Sliding Hardware",
          "High Acoustic Sound Insulation & Visual Elegance",
          "Custom Frosted Film Manifestation & Company Branding"
    ],
    isAvailable: true,
    images: [
      {
        id: "glas-1",
        title: "Corporate Executive Glass Cabin Partition with Frosted Bands",
        image: "/images/portfolio/glass-partitions/glass-partition-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["12mm Toughened Glass","Matte Black Hardware","Acoustic Seals","Frosted Privacy Bands"],
        description:
          "Corporate Executive Glass Cabin Partition with Frosted Bands. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-2",
        title: "Frameless Clear Glass Boardroom Enclosure",
        image: "/images/portfolio/glass-partitions/glass-partition-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Floor-to-Ceiling Height","Patch Fitting Pivot Door","Clear Toughened Glass","Minimalist Floor Track"],
        description:
          "Frameless Clear Glass Boardroom Enclosure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-3",
        title: "Modern Office Workstation Glass Divider System",
        image: "/images/portfolio/glass-partitions/glass-partition-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Modular Aluminum Profiles","Frosted Privacy Glazing","Cable Management","Slimline Frames"],
        description:
          "Modern Office Workstation Glass Divider System. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-4",
        title: "Acoustic Double-Glazed Conference Room Wall",
        image: "/images/portfolio/glass-partitions/glass-partition-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double Glass Soundproofing","Internal Blinds Provision","Heavy Floor Springs","Executive Finish"],
        description:
          "Acoustic Double-Glazed Conference Room Wall. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-5",
        title: "Residential Living-Dining Sliding Glass Divider",
        image: "/images/portfolio/glass-partitions/glass-partition-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Top-Hung Soft Close Sliding","Fluted / Clear Combination","Slim Charcoal Frame","Barrier-Free Floor"],
        description:
          "Residential Living-Dining Sliding Glass Divider. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-6",
        title: "Executive Director Cabin Glass Frontage",
        image: "/images/portfolio/glass-partitions/glass-partition-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Panoramic Corner Glass","SS 304 Architectural Handles","Frosted Logo Band","Flush Wall Mount"],
        description:
          "Executive Director Cabin Glass Frontage. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-7",
        title: "Commercial Clinic & Lab Hygienic Glass Partition",
        image: "/images/portfolio/glass-partitions/glass-partition-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Easy Clean Glass Surface","Airtight EPDM Seals","Anodized Silver Framework","Safety Tempered"],
        description:
          "Commercial Clinic & Lab Hygienic Glass Partition. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-8",
        title: "Minimalist Studio Glass Cube Cabin Enclosure",
        image: "/images/portfolio/glass-partitions/glass-partition-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["All-Glass Butt Joints","Frameless Corner Detail","Hydraulic Closer Door","Contemporary Office"],
        description:
          "Minimalist Studio Glass Cube Cabin Enclosure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-9",
        title: "Industrial Administrative Mezzanine Glass Partition",
        image: "/images/portfolio/glass-partitions/glass-partition-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Structural Framing","Vibration Resistant Glazing","Dual Height Panels","Plant Floor View"],
        description:
          "Industrial Administrative Mezzanine Glass Partition. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "glas-10",
        title: "Luxury Penthouse Interior Glass Room Divider",
        image: "/images/portfolio/glass-partitions/glass-partition-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Bronze Tinted Glass","Brushed Brass Metal Trim","Concealed Soft Closer","Designer Aesthetics"],
        description:
          "Luxury Penthouse Interior Glass Room Divider. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-gates",
    name: "SS GATES",
    slug: "ss-gates",
    tagline: "Luxury Stainless Steel 304/316 Main Entrance & Motorized Sliding Gates",
    description:
      "Custom-fabricated luxury stainless steel main gates engineered with SS 304 and marine-grade SS 316. Available in motorized sliding, automated swing, and bespoke laser-cut designer configurations.",
    badge: "10 Real Projects",
    features: [
          "SS 304 & Marine-Grade SS 316 Rustproof Construction",
          "High-Gloss Mirror & Hairline Satin Brush Finishes",
          "Motorized Gate Automation & Trackless Cantilever Options",
          "Heavy-Duty Ball-Bearing Hinges & Tamper-Resistant Locks"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssga-1",
        title: "Luxury Residential SS 304 Main Entrance Swing Gate",
        image: "/images/portfolio/ss-gates/ss-gate-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 Grade Heavy Gauge","Satin Brushed & Mirror Finish","Heavy-Duty Bearing Hinges","Integrated Euro Profile Lock"],
        description:
          "Luxury Residential SS 304 Main Entrance Swing Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-2",
        title: "Modern Horizontal Louver SS Sliding Compound Gate",
        image: "/images/portfolio/ss-gates/ss-gate-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Motorized Track System","Concealed Roller Bearings","Wind Resistant Slats","Weatherproof SS 304"],
        description:
          "Modern Horizontal Louver SS Sliding Compound Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-3",
        title: "CNC Laser-Cut Designer Floral SS Villa Gate",
        image: "/images/portfolio/ss-gates/ss-gate-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Laser Cut SS Sheet Insert","Gold PVD Accent Highlights","Robust Box Frame","Double Leaf Swing"],
        description:
          "CNC Laser-Cut Designer Floral SS Villa Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-4",
        title: "Commercial Factory Heavy Industrial SS Sliding Gate",
        image: "/images/portfolio/ss-gates/ss-gate-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Gauge Box Channels","Smooth Industrial Trolleys","Anti-Lift Safety Stops","High-Traffic Rated"],
        description:
          "Commercial Factory Heavy Industrial SS Sliding Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-5",
        title: "Modern Minimalist Vertical Slat SS Entry Gate",
        image: "/images/portfolio/ss-gates/ss-gate-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Uniform Vertical Sections","Fingerprint Resistant Coating","Concealed Fastening","Bungalow Frontage"],
        description:
          "Modern Minimalist Vertical Slat SS Entry Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-6",
        title: "Artistic Geometric Pattern SS Dual-Tone Gate",
        image: "/images/portfolio/ss-gates/ss-gate-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Mirror + Satin Dual Tone","TIG Precision Welds","Automated Opener Compatible","Architectural Elegance"],
        description:
          "Artistic Geometric Pattern SS Dual-Tone Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-7",
        title: "SS & Wood Composite Luxury Bungalow Gate",
        image: "/images/portfolio/ss-gates/ss-gate-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Weatherproof WPC Louvers","Heavy SS 304 Outer Frame","Zero Corrosion Guarantee","Contemporary Styling"],
        description:
          "SS & Wood Composite Luxury Bungalow Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-8",
        title: "Security Perimeter Double Swing SS Gate",
        image: "/images/portfolio/ss-gates/ss-gate-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy-Duty Ground Bolts","Tamper-Proof Lock Housing","Structural Anchor Posts","High Tensile Steel"],
        description:
          "Security Perimeter Double Swing SS Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-9",
        title: "Designer Gold PVD Coated SS Villa Grand Gate",
        image: "/images/portfolio/ss-gates/ss-gate-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Titanium Gold PVD Finish","Intricate CNC Cut Filigree","Luxury Estate Architecture","UV-Stable Coating"],
        description:
          "Designer Gold PVD Coated SS Villa Grand Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssga-10",
        title: "Compact Folding Telescopic SS Driveway Gate",
        image: "/images/portfolio/ss-gates/ss-gate-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Space-Saving Telescopic Action","Precision Track Guides","High Corrosion Resistance","Smooth Silent Glide"],
        description:
          "Compact Folding Telescopic SS Driveway Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-grills",
    name: "SS GRILL",
    slug: "ss-grills",
    tagline: "Rust-Proof Stainless Steel Window Grills, Balcony Barriers & Safety Grids",
    description:
      "Lifetime corrosion-resistant stainless steel safety grills engineered from heavy-gauge SS 304 pipes, solid rods, and laser-cut patterns. Perfect for residential windows, balconies, and exterior ventilation ducts.",
    badge: "10 Real Projects",
    features: [
          "100% Rust-Proof SS 304 / 316 Food & Architectural Grade",
          "Solid Square Bar, Round Pipe & Flat Section Options",
          "Seamless TIG Welds with Polished Flush Joints",
          "Burglar-Resistant Masonry Anchoring Fasteners"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssgr-1",
        title: "Modern Horizontal Slat SS 304 Balcony Safety Grill",
        image: "/images/portfolio/ss-grills/ss-grill-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 Grade Pipes","Mirror Gloss Polish","Flush TIG Welded","Child & Pet Fall Protection"],
        description:
          "Modern Horizontal Slat SS 304 Balcony Safety Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-2",
        title: "Decorative Geometric Diamond Pattern SS Window Grill",
        image: "/images/portfolio/ss-grills/ss-grill-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Tensile SS Rods","Satin Hairline Finish","Burglar-Proof Wall Anchor","Optimal Airflow"],
        description:
          "Decorative Geometric Diamond Pattern SS Window Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-3",
        title: "Heavy-Duty SS Parapet Wall Extension Safety Grill",
        image: "/images/portfolio/ss-grills/ss-grill-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Solid Base Plates","Heavy Gauge Tubular Frame","All-Weather Rust Resistance","Terrace Enclosure"],
        description:
          "Heavy-Duty SS Parapet Wall Extension Safety Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-4",
        title: "Modern Minimalist Vertical SS Window Security Screen",
        image: "/images/portfolio/ss-grills/ss-grill-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Slimline Vertical Spacing","Anti-Cut SS Rods","Concealed Fasteners","Apartment Bedroom Fit"],
        description:
          "Modern Minimalist Vertical SS Window Security Screen. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-5",
        title: "Bespoke CNC Laser-Cut SS Safety Grill Panel",
        image: "/images/portfolio/ss-grills/ss-grill-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Laser Perforated SS Sheet","Intricate Moroccan Pattern","Electro-Polished Surface","Luxury Bungalow Window"],
        description:
          "Bespoke CNC Laser-Cut SS Safety Grill Panel. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-6",
        title: "Exterior Duct & Ventilation Protective SS Enclosure",
        image: "/images/portfolio/ss-grills/ss-grill-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Weatherproof SS 304","Rainwater Shedding Slats","Pest & Bird Proof Mesh","Industrial Utility"],
        description:
          "Exterior Duct & Ventilation Protective SS Enclosure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-7",
        title: "French Window High-Rise Balcony SS Safety Balustrade",
        image: "/images/portfolio/ss-grills/ss-grill-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Toughened Anchoring Posts","Horizontal Safety Bars","Mirror Sheen Finish","Wind Load Certified"],
        description:
          "French Window High-Rise Balcony SS Safety Balustrade. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-8",
        title: "Contemporary Box Section SS Decorative Grill",
        image: "/images/portfolio/ss-grills/ss-grill-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Square Hollow Sections","Precision Mitred Corners","Zero Rust Maintenance","Modern Facade Accent"],
        description:
          "Contemporary Box Section SS Decorative Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-9",
        title: "Villa Veranda Full-Height SS Protective Enclosure",
        image: "/images/portfolio/ss-grills/ss-grill-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Floor-to-Ceiling Grid","Rigid Concrete Anchor Points","Polished TIG Joints","Surat Luxury Home"],
        description:
          "Villa Veranda Full-Height SS Protective Enclosure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssgr-10",
        title: "SS Kitchen Utility & Dry Balcony Security Barrier",
        image: "/images/portfolio/ss-grills/ss-grill-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Ventilated Louver Grids","High Durability SS 304","Resistant to Salt & Humidity","Clean Aesthetics"],
        description:
          "SS Kitchen Utility & Dry Balcony Security Barrier. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-railings",
    name: "SS RAILING",
    slug: "ss-railings",
    tagline: "Modern Stainless Steel & Glass Balcony Balustrades & Staircase Handrails",
    description:
      "Architectural stainless steel railing systems combined with clear toughened glass, slotted pipes, and ergonomic handrails. Designed for high-rise balconies, internal stairwells, and outdoor terraces.",
    badge: "10 Real Projects",
    features: [
          "High-Grade SS 304 / 316 Baluster Posts & Spigots",
          "Integrated Toughened / Laminated Safety Glass Options",
          "Continuous Ergonomic Handrails (Round & Rectangular)",
          "High Load-Bearing Base Plate Anchoring"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssra-1",
        title: "Frameless Glass Balcony Railing with SS Top Handrail",
        image: "/images/portfolio/ss-railings/ss-railing-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["12mm Toughened Glass","Slotted SS 304 Top Cap","Heavy SS Base Track","Panoramic View"],
        description:
          "Frameless Glass Balcony Railing with SS Top Handrail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-2",
        title: "SS Baluster Staircase Handrail with Horizontal Rods",
        image: "/images/portfolio/ss-railings/ss-railing-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 Hollow Posts","Multi-Tier Safety Cables","Hairline Brushed Polish","Ergonomic Grip"],
        description:
          "SS Baluster Staircase Handrail with Horizontal Rods. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-3",
        title: "Luxury Villa Terrace Glass Balustrade with SS Spigots",
        image: "/images/portfolio/ss-railings/ss-railing-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 316 Marine Grade Spigots","15mm Toughened Clear Glass","Core Drilled Chemical Anchor","Zero Frame Sightline"],
        description:
          "Luxury Villa Terrace Glass Balustrade with SS Spigots. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-4",
        title: "Curved Staircase SS Handrail with Laser-Cut Filigree",
        image: "/images/portfolio/ss-railings/ss-railing-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Seamless Spiral Bending","Laser Patterned Infills","Mirror Polish SS 304","Duplex Living Room"],
        description:
          "Curved Staircase SS Handrail with Laser-Cut Filigree. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-5",
        title: "Modern Black PVD Coated SS Glass Railing",
        image: "/images/portfolio/ss-railings/ss-railing-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Matte Black PVD Finish","Concealed Glass Clamps","Contemporary Villa","Fingerprint Resistant"],
        description:
          "Modern Black PVD Coated SS Glass Railing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-6",
        title: "Exterior Parapet Wall SS 304 Safety Extension",
        image: "/images/portfolio/ss-railings/ss-railing-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Tensile Anchor Bolts","Double Top Rail","All-Weather Corrosion Proof","Terrace Perimeter"],
        description:
          "Exterior Parapet Wall SS 304 Safety Extension. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-7",
        title: "Commercial Mall Atrium Glass & SS Barrier Railing",
        image: "/images/portfolio/ss-railings/ss-railing-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Impact Certified","Continuous Grab Rail","Heavy Duty SS Posts","Public Safety Compliant"],
        description:
          "Commercial Mall Atrium Glass & SS Barrier Railing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-8",
        title: "Minimalist Square Profile SS Staircase Balustrade",
        image: "/images/portfolio/ss-railings/ss-railing-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["40x40mm Square SS Posts","Clear Toughened Infill","Flush Concealed Welds","Modern Architecture"],
        description:
          "Minimalist Square Profile SS Staircase Balustrade. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-9",
        title: "Rose Gold PVD Luxury Interior SS Balcony Railing",
        image: "/images/portfolio/ss-railings/ss-railing-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Titanium Rose Gold PVD","Beveled Edge Glass Panels","Designer Residence","Ultra Luxury Finish"],
        description:
          "Rose Gold PVD Luxury Interior SS Balcony Railing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssra-10",
        title: "Industrial Plant Heavy Duty SS Safety Handrail",
        image: "/images/portfolio/ss-railings/ss-railing-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Wall SS Pipes","Toe Guard Kick Plate","Safety Yellow / Natural SS","Factory Floor Compliant"],
        description:
          "Industrial Plant Heavy Duty SS Safety Handrail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-staircases",
    name: "SS STAIRCASE",
    slug: "ss-staircases",
    tagline: "Custom Stainless Steel Spiral, Floating & Central Spine Staircases",
    description:
      "Precision-engineered stainless steel staircases designed for space efficiency, structural elegance, and lifelong performance. Featuring spiral configurations, central spine mono-stringers, and glass tread supports.",
    badge: "10 Real Projects",
    features: [
          "Engineered Mono-Stringer & Double-Stringer SS Spine",
          "Spiral, Cantilever Floating & Straight Flight Designs",
          "Compatible with Wood, Granite & Toughened Glass Treads",
          "Vibration-Free Heavy Anchorage with Certified Load Rating"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssst-1",
        title: "Architectural SS Spiral Staircase with Glass Treads",
        image: "/images/portfolio/ss-staircases/ss-staircase-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 Central Column","Laminated Glass Steps","Curved Continuous Handrail","Compact Footprint"],
        description:
          "Architectural SS Spiral Staircase with Glass Treads. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-2",
        title: "Modern Mono-Stringer SS Central Spine Staircase",
        image: "/images/portfolio/ss-staircases/ss-staircase-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy SS Box Stringer","Cantilevered Tread Brackets","Natural Teak Wood Treads","Duplex Villa Living"],
        description:
          "Modern Mono-Stringer SS Central Spine Staircase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-3",
        title: "Industrial Cleanroom Stainless Steel Stair Tower",
        image: "/images/portfolio/ss-staircases/ss-staircase-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Food & Pharma Grade SS 304","Non-Slip Checker Plate Steps","Heavy Duty Base Flanges","Corrosion Free"],
        description:
          "Industrial Cleanroom Stainless Steel Stair Tower. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-4",
        title: "Floating Cantilever SS Hidden Stringer Staircase",
        image: "/images/portfolio/ss-staircases/ss-staircase-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Wall Embedded Steel Subframe","SS Floating Support Pins","Frameless Glass Balustrade","Minimalist Interior"],
        description:
          "Floating Cantilever SS Hidden Stringer Staircase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-5",
        title: "Rooftop Access Compact SS Spiral Stairs",
        image: "/images/portfolio/ss-staircases/ss-staircase-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["All-Weather SS 304","Laser-Cut Perforated Steps","Space-Saving 4-Foot Radius","Terrace Connectivity"],
        description:
          "Rooftop Access Compact SS Spiral Stairs. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-6",
        title: "Commercial Mezzanine Straight SS Stair Flight",
        image: "/images/portfolio/ss-staircases/ss-staircase-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Channel Beam Stringers","Industrial Grating Treads","Integrated Safety Railings","High Load Capacity"],
        description:
          "Commercial Mezzanine Straight SS Stair Flight. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-7",
        title: "Luxury Double Flight SS Staircase with Granite Steps",
        image: "/images/portfolio/ss-staircases/ss-staircase-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Mirror Polished SS Trims","Heavy Structural Skeleton","Integrated LED Under-Tread","Surat Landmark Villa"],
        description:
          "Luxury Double Flight SS Staircase with Granite Steps. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-8",
        title: "Exterior Fire Escape Stainless Steel Stair Assembly",
        image: "/images/portfolio/ss-staircases/ss-staircase-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Marine Grade SS 316","Self-Draining Steps","Rigid Wall Bracing","Emergency Egress Standard"],
        description:
          "Exterior Fire Escape Stainless Steel Stair Assembly. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-9",
        title: "Sculptural Zig-Zag Stringer SS Interior Staircase",
        image: "/images/portfolio/ss-staircases/ss-staircase-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Laser-Profiled Zig-Zag Plates","Brushed Hairline Finish","Toughened Balustrades","Architectural Showpiece"],
        description:
          "Sculptural Zig-Zag Stringer SS Interior Staircase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssst-10",
        title: "Circular SS Spiral Mezzanine Access Stairway",
        image: "/images/portfolio/ss-staircases/ss-staircase-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Precision Rolled Tubes","Checker Plate Anti-Slip Treads","Full Height Enclosure","Penthouse Duplex"],
        description:
          "Circular SS Spiral Mezzanine Access Stairway. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-swings-jhula",
    name: "SS SWING (JULA)",
    slug: "ss-swings-jhula",
    tagline: "Designer Stainless Steel Jhulas, Terrace Swings & Hanging Pods",
    description:
      "Handcrafted luxury stainless steel swings (jhulas) engineered with high-tensile SS 304 frames, heavy-duty bearing ceiling hooks, and designer laser-cut patterns. Perfect for living rooms, verandas, and gardens.",
    badge: "10 Real Projects",
    features: [
          "Heavy-Gauge SS 304 Lifetime Rust-Free Framework",
          "Silent Heavy-Duty Ball-Bearing Suspension Hinges",
          "High Weight Capacity (Up to 450+ kg Load Tested)",
          "Custom Cushion Base & Laser-Cut Backrest Designs"
    ],
    isAvailable: true,
    images: [
      {
        id: "sssw-1",
        title: "Contemporary 3-Seater SS Living Room Jhula",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Mirror Gloss SS 304 Frame","Intricate Laser-Cut Backrest","Silent Bearing Hanger Rods","450kg Weight Capacity"],
        description:
          "Contemporary 3-Seater SS Living Room Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-2",
        title: "Modern Minimalist Curved Arch SS Garden Swing",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy SS Tubular Stand","Weatherproof Fabric Cushion","Zero Rust Maintenance","Outdoor Patio Fit"],
        description:
          "Modern Minimalist Curved Arch SS Garden Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-3",
        title: "Luxury Gold PVD Coated SS Designer Veranda Swing",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Titanium Gold PVD Sheen","Artistic Floral Laser Pattern","Solid SS Hanging Chains","Royal Indian Decor"],
        description:
          "Luxury Gold PVD Coated SS Designer Veranda Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-4",
        title: "Compact Balcony Hanging SS Single Pod Chair",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Egg Shell Structural Frame","High-Tensile Ceiling Anchor","Hairline Brushed SS","High-Rise Balcony"],
        description:
          "Compact Balcony Hanging SS Single Pod Chair. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-5",
        title: "Traditional Carved Theme Laser-Cut SS 304 Jhula",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Peacock Motif Laser Art","Solid Wood Plank Seat","Heavy Duty Link Chains","Heritage Modern Blend"],
        description:
          "Traditional Carved Theme Laser-Cut SS 304 Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-6",
        title: "Freestanding SS A-Frame Heavy Garden Jhula",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double A-Frame Stand","Canopy Roof Bracket","Anti-Tipping Base Flanges","Lawn & Terrace Swing"],
        description:
          "Freestanding SS A-Frame Heavy Garden Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-7",
        title: "Duplex Living Room Ceiling-Suspended SS Swing Bench",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Rigid Ceiling Tie Rods","Satin Hairline Finish","Deep Foam Upholstered Base","Architectural Centerpiece"],
        description:
          "Duplex Living Room Ceiling-Suspended SS Swing Bench. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-8",
        title: "Geometric Minimalist Linear Slat SS Jhula",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Clean Horizontal Lines","Matte Black PVD Option","Heavy Duty Swivel Hooks","Contemporary Villa"],
        description:
          "Geometric Minimalist Linear Slat SS Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-9",
        title: "Terrace Pergola Hanging SS Daybed Swing",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["King Size Lounging Base","SS 316 Marine Hardware","All-Weather Durability","Open Sky Veranda"],
        description:
          "Terrace Pergola Hanging SS Daybed Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sssw-10",
        title: "Classic Curved Armrest SS 304 Family Swing",
        image: "/images/portfolio/ss-swings-jhula/ss-swing-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Ergonomic Contoured Back","Heavy Gauge Pipe Joints","High Load Capacity","Generational Longevity"],
        description:
          "Classic Curved Armrest SS 304 Family Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-display-racks",
    name: "DISPLAY RACK OF SS METAL",
    slug: "ss-display-racks",
    tagline: "Commercial Retail Boutique Racks, SS Shelving & Luxury Wardrobe Units",
    description:
      "Custom-fabricated stainless steel display racks, boutique garment stands, and luxury open wardrobe systems. Finished in premium gold PVD, rose gold, and brushed titanium for high-end retail and residences.",
    badge: "10 Real Projects",
    features: [
          "SS 304 Heavy-Gauge Square Tube & Sheet Construction",
          "PVD Coating Options: Gold, Rose Gold, Matte Black, Copper",
          "Adjustable Tempered Glass & Wood Shelving Insets",
          "High Load Capacity for Retail Showrooms & Boutiques"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssdi-1",
        title: "Luxury Boutique Gold PVD SS Garment Display Rack",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Titanium Gold PVD Finish","Concealed LED Light Channels","Hanging & Folded Shelves","High-End Fashion Store"],
        description:
          "Luxury Boutique Gold PVD SS Garment Display Rack. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-2",
        title: "Modern Minimalist Open Wardrobe SS Shelving Unit",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Matte Black PVD Frame","Smoked Glass Shelves","Heavy Load Capacity","Walk-in Closet Interior"],
        description:
          "Modern Minimalist Open Wardrobe SS Shelving Unit. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-3",
        title: "Freestanding Island Retail Display Gondola Rack",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double-Sided Merchandising","Hairline Brushed SS 304","Adjustable Shelf Brackets","Commercial Showroom"],
        description:
          "Freestanding Island Retail Display Gondola Rack. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-4",
        title: "Jewelry & Watch Boutique Locking SS Display Vitrine",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Toughened Glass Enclosure","Concealed High-Security Lock","Mirror Polished SS Edges","Surat Jewelry Market"],
        description:
          "Jewelry & Watch Boutique Locking SS Display Vitrine. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-5",
        title: "Industrial Commercial Warehouse Heavy-Duty SS Storage Rack",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Channel Sections","Perforated SS Tier Shelves","Corrosion Resistant","Pharmaceutical & Food"],
        description:
          "Industrial Commercial Warehouse Heavy-Duty SS Storage Rack. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-6",
        title: "Designer Wall-Mounted Cantilevered SS Bookcase",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Concealed Stud Anchors","Floating Tier Aesthetics","Rose Gold Metallic Accent","Luxury Residence"],
        description:
          "Designer Wall-Mounted Cantilevered SS Bookcase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-7",
        title: "Shoe & Accessory Multi-Tier SS Retail Tower",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Angled Showcase Shelves","Mirror Gloss Accents","Compact Footprint","Boutique Footwear Store"],
        description:
          "Shoe & Accessory Multi-Tier SS Retail Tower. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-8",
        title: "Wine Bottle & Stemware SS Bar Display Gantry",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Ceiling Suspended Frame","Integrated Stemware Slots","Warm Backlit Illumination","Restaurant & Lounge"],
        description:
          "Wine Bottle & Stemware SS Bar Display Gantry. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-9",
        title: "Curved Architectural Metal Retail Display Arch",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Precision Rolled SS Tubes","PVD Champagne Finish","Custom Mannequin Plinth","Designer Showroom"],
        description:
          "Curved Architectural Metal Retail Display Arch. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssdi-10",
        title: "Modular Supermarket & Department Store SS Wall Bay",
        image: "/images/portfolio/ss-display-racks/ss-display-rack-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Slotted Upright Posts","Interchangeable Hooks & Tiers","High Durability SS 304","Retail Chain Standard"],
        description:
          "Modular Supermarket & Department Store SS Wall Bay. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-cnc-name-plates",
    name: "CNC NAME PLATE SS",
    slug: "ss-cnc-name-plates",
    tagline: "Precision Laser-Cut Stainless Steel House Nameplates with Backlit LED",
    description:
      "Bespoke CNC laser-cut stainless steel house nameplates, corporate identity signage, and residential address plaques. Featuring 3D embossed lettering, acrylic backlit warm illumination, and PVD titanium coats.",
    badge: "10 Real Projects",
    features: [
          "Fiber Laser Precision Cutting with Micron Tolerance",
          "Weatherproof Backlit Warm / Cool LED Illumination",
          "Titanium PVD Gold, Rose Gold & Black Finish Options",
          "Toughened Acrylic / Stone Composite Base Backing"
    ],
    isAvailable: true,
    images: [
      {
        id: "sscn-1",
        title: "Luxury Villa Backlit LED Laser-Cut SS Nameplate",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 Brushed Face","Warm White LED Backlit","Weatherproof Outdoor Housing","Stone Wall Mounted"],
        description:
          "Luxury Villa Backlit LED Laser-Cut SS Nameplate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-2",
        title: "Gold PVD 3D Embossed Stainless Steel House Plaque",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Titanium Gold Mirror PVD","3D Fabricated Metal Letters","Black Granite Base Inset","Modern Bungalow Gate"],
        description:
          "Gold PVD 3D Embossed Stainless Steel House Plaque. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-3",
        title: "Corporate Office Reception Laser-Cut SS Logo Plaque",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Hairline Satin SS 304","Precision Fiber Laser Cut","Concealed Spacer Studs","Corporate Branding"],
        description:
          "Corporate Office Reception Laser-Cut SS Logo Plaque. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-4",
        title: "Bilingual Hindi/Gujarati Laser-Cut SS Residence Plate",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Custom Regional Script Cut","Solid Brass Stud Mounts","Anti-Corrosive Clear Coat","Surat Heritage Home"],
        description:
          "Bilingual Hindi/Gujarati Laser-Cut SS Residence Plate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-5",
        title: "Contemporary Minimalist Vertical Apartment Door Sign",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Matte Black PVD Steel","CNC Engraved Unit Number","Compact Elegant Format","Luxury Flat Entrance"],
        description:
          "Contemporary Minimalist Vertical Apartment Door Sign. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-6",
        title: "Rustic Wood & Polished SS Hybrid Villa Nameplate",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Natural Teak Backplate","Laser-Cut SS Letterings","LED Edge Illumination","Architectural Styling"],
        description:
          "Rustic Wood & Polished SS Hybrid Villa Nameplate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-7",
        title: "Commercial Building Multi-Tenant SS Directory Board",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Modular Name Slats","Interchangeable Tenant Plates","High Corrosion Resistance","Office Complex Lobby"],
        description:
          "Commercial Building Multi-Tenant SS Directory Board. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-8",
        title: "Artistic Tree of Life Motif SS Designer Nameplate",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Intricate Laser Cut Foliage","Dual-Tone Mirror & Matt","Acrylic Diffuser Sheet","Bungalow Portico"],
        description:
          "Artistic Tree of Life Motif SS Designer Nameplate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-9",
        title: "Stainless Steel Standalone Pillar Gate Name Monolith",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Gauge SS Pylon","Laser Cut Stencil Cutout","Waterproof IP67 Lighting","Estate Entrance"],
        description:
          "Stainless Steel Standalone Pillar Gate Name Monolith. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "sscn-10",
        title: "Subtle Rose Gold Brushed SS Designer Flat Number Plate",
        image: "/images/portfolio/ss-cnc-name-plates/ss-cnc-name-plate-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Rose Gold PVD Coating","Concealed Fastening","Toughened Black Glass Accent","Luxury Apartment"],
        description:
          "Subtle Rose Gold Brushed SS Designer Flat Number Plate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "precision-ss-laser-cutting",
    name: "PRECIASION SS LESER CUTTING WORK",
    slug: "precision-ss-laser-cutting",
    tagline: "Industrial CNC Fiber Laser Cutting, Sheet Metal Stamping & Custom Profiles",
    description:
      "High-speed industrial CNC fiber laser cutting for stainless steel, mild steel, and aluminium sheets. Capable of executing intricate architectural patterns, machine parts, flanges, and bespoke metal screens.",
    badge: "10 Real Projects",
    features: [
          "High-Power CNC Fiber Laser Cutting up to 20mm Thickness",
          "Micron-Level Tolerance (±0.05mm) for Industrial Parts",
          "Clean Burr-Free Cut Edges with Zero Thermal Distortion",
          "Supports SS 304/316, Mild Steel, Brass & Aluminium"
    ],
    isAvailable: true,
    images: [
      {
        id: "prec-1",
        title: "Architectural Geometric Laser-Cut SS Facade Screen",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["SS 304 3mm Sheet","Parametric Perforation","Burr-Free Precision Edges","Building Exterior Cladding"],
        description:
          "Architectural Geometric Laser-Cut SS Facade Screen. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-2",
        title: "Custom Industrial Machinery Flange & Gear Components",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High-Power Fiber Laser","12mm SS Plate","High Dimensional Accuracy","Automotive & Industrial"],
        description:
          "Custom Industrial Machinery Flange & Gear Components. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-3",
        title: "Intricate Islamic Jali Laser-Cut Metal Divider Panel",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Traditional Arabesque Lattice","Dual-Side De-burring","Gold PVD Finish Ready","Interior Partition"],
        description:
          "Intricate Islamic Jali Laser-Cut Metal Divider Panel. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-4",
        title: "Laser-Cut SS Motor Bracket & Chassis Mounting Plates",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Precision Hole Piercing","Heavy Gauge Steel","Batch Production Accuracy","Machine Fabrication"],
        description:
          "Laser-Cut SS Motor Bracket & Chassis Mounting Plates. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-5",
        title: "Modern Radial Sunburst Pattern Metal Wall Art",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Detail Laser Tracing","Satin Brushed Finish","Concealed Bracket Studs","Hotel Lobby Decor"],
        description:
          "Modern Radial Sunburst Pattern Metal Wall Art. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-6",
        title: "Custom Perforated SS Acoustic Ceiling Baffle Tiles",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Micro-Perforation Array","Sound Dampening Integration","Modular Grid Fit","Auditorium Ceiling"],
        description:
          "Custom Perforated SS Acoustic Ceiling Baffle Tiles. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-7",
        title: "Precision CNC Laser-Cut Heavy Pipe Saddle Joints",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Rotary Tube Laser Cut","Complex Interlocking Notches","Perfect Fit-Up for TIG","Structural Framing"],
        description:
          "Precision CNC Laser-Cut Heavy Pipe Saddle Joints. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-8",
        title: "Decorative Mandala Pattern SS Partition Infill Sheet",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Complex Botanical Filigree","Mirror Polished Finish","Zero Heat Burn Marks","Mandir & Prayer Room"],
        description:
          "Decorative Mandala Pattern SS Partition Infill Sheet. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-9",
        title: "Heavy Structural Base Plate with Slotted Anchor Holes",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["20mm Thick Steel Plate","Clean Oxygen / Nitrogen Cut","High Load Structural Anchor","Civil Construction"],
        description:
          "Heavy Structural Base Plate with Slotted Anchor Holes. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "prec-10",
        title: "Custom Vehicle Exhaust & Radiator Grille SS Inset",
        image: "/images/portfolio/precision-ss-laser-cutting/laser-cutting-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Honeycomb Flow Pattern","Vibration Resistant Steel","Electropolished Edges","Specialty Automotive"],
        description:
          "Custom Vehicle Exhaust & Radiator Grille SS Inset. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "decorative-metal-work",
    name: "DECORATIVE METAL WORK",
    slug: "decorative-metal-work",
    tagline: "Artistic Metal Sculptures, Wall Art, Luxury Partitions & Custom Accents",
    description:
      "Bespoke decorative metalcrafting uniting fine art with structural engineering. Creating handcrafted brass, SS, and MS wall sculptures, decorative screens, luxury mirrors, and statement architectural accents.",
    badge: "10 Real Projects",
    features: [
          "Handcrafted Artistry in Stainless Steel, Brass & Mild Steel",
          "Luxury Finishes: Gold PVD, Antique Patina, Powder Coat",
          "Bespoke Execution from Architect & Interior Designer Sketches",
          "Structural Concealed Anchoring for Seamless Installation"
    ],
    isAvailable: true,
    images: [
      {
        id: "deco-1",
        title: "Three-Dimensional Sculptural Metal Wall Art Installation",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Hand-Formed Metal Sheets","Dual Tone Gold & Charcoal","Concealed Wall Cleats","Luxury Hotel Lobby"],
        description:
          "Three-Dimensional Sculptural Metal Wall Art Installation. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-2",
        title: "Custom Brushed Brass & SS Geometric Room Screen",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Interlocking Hexagon Pattern","Natural Satin Brass Trim","Floor-to-Ceiling Swivel","Bespoke Interior"],
        description:
          "Custom Brushed Brass & SS Geometric Room Screen. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-3",
        title: "Artistic Tree of Life Handcrafted Metal Wall Mural",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Layered 3D Silhouette","Warm LED Perimeter Halo","Textured Bronze Patina","Villa Entrance Portico"],
        description:
          "Artistic Tree of Life Handcrafted Metal Wall Mural. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-4",
        title: "Luxury Fluted Metal Console Table Mirror Frame",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Curved Metal Extrusions","Titanium Gold Mirror Coating","Beveled Mirror Glass","Master Bedroom Decor"],
        description:
          "Luxury Fluted Metal Console Table Mirror Frame. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-5",
        title: "Modern Kinetic Rotating Metal Sculpture Element",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Precision Sealed Bearings","Mirror Gloss SS 316","Wind-Activated Balance","Outdoor Landscape Courtyard"],
        description:
          "Modern Kinetic Rotating Metal Sculpture Element. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-6",
        title: "Decorative Brass Lotus Wall Relief Medallions",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Hand Chiseled Petals","Antique Oxidized Brass Finish","Modular Multi-Piece Set","Heritage Bungalow Wall"],
        description:
          "Decorative Brass Lotus Wall Relief Medallions. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-7",
        title: "Organic Flowing Ribbon Steel Ceiling Installation",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Fluid Bended Profiles","High Gloss White Polyurethane","Suspended Tension Wires","Corporate Atrium"],
        description:
          "Organic Flowing Ribbon Steel Ceiling Installation. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-8",
        title: "Custom Laser-Cut Decorative Fireplace Screen Accent",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heat Resistant Metallurgy","Art Deco Chevron Design","Solid Brass Handles","Luxury Living Lounge"],
        description:
          "Custom Laser-Cut Decorative Fireplace Screen Accent. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-9",
        title: "Botanical Leaf Motif Metal Balustrade Accents",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Solid Forged Steel Filigree","Hand Painted Gold Highlights","Staircase Centerpiece","Classical Villa Interior"],
        description:
          "Botanical Leaf Motif Metal Balustrade Accents. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "deco-10",
        title: "Bespoke Metal Planter Box Stand & Screen Combo",
        image: "/images/portfolio/decorative-metal-work/decorative-metal-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Powder-Coated Metal Casing","Integrated Laser Screen","Waterproof Drainage Tray","Terrace Garden Decor"],
        description:
          "Bespoke Metal Planter Box Stand & Screen Combo. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ss-tables-furniture",
    name: "SS TABLE",
    slug: "ss-tables-furniture",
    tagline: "Designer Dining Tables, Center Coffee Tables & Console Bases in SS",
    description:
      "Luxury stainless steel furniture pieces engineered with sculptural base frames and premium tops. Specializing in Italian marble dining tables, gold PVD center tables, and contemporary console stands.",
    badge: "10 Real Projects",
    features: [
          "SS 304 Heavy-Duty Gauge Base Framing (Zero Wobble)",
          "High-Gloss Titanium PVD Coating (Gold, Rose Gold, Black)",
          "Engineered for Heavy Italian Marble & Onyx Table Tops",
          "Precision Polished Joints with Concealed Fastening"
    ],
    isAvailable: true,
    images: [
      {
        id: "ssta-1",
        title: "Luxury 8-Seater SS Dining Table Base for Italian Marble",
        image: "/images/portfolio/ss-tables-furniture/ss-table-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Structural SS 304","Titanium Gold PVD Mirror Finish","Engineered Marble Load Subframe","Luxury Dining Room"],
        description:
          "Luxury 8-Seater SS Dining Table Base for Italian Marble. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-2",
        title: "Modern Organic Ring Base SS Center Coffee Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Sculptural Interlocking Rings","Tempered Clear Glass Top","High-Gloss Chrome Polish","Contemporary Living Room"],
        description:
          "Modern Organic Ring Base SS Center Coffee Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-3",
        title: "Minimalist Slender Leg SS Entryway Console Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Slimline 20mm Square Profiles","Brushed Rose Gold PVD","Black Marquina Marble Top","Foyer Statement Piece"],
        description:
          "Minimalist Slender Leg SS Entryway Console Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-4",
        title: "Commercial Executive Boardroom SS Table Structure",
        image: "/images/portfolio/ss-tables-furniture/ss-table-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy-Duty Beam Framing","Concealed Wire Management Cable Raceway","Hairline Brushed SS 304","Corporate Suite"],
        description:
          "Commercial Executive Boardroom SS Table Structure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-5",
        title: "Nesting Pair Geometric Coffee Tables with Quartz Top",
        image: "/images/portfolio/ss-tables-furniture/ss-table-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Dual Height Cylindrical Bases","Matte Black PVD Frame","Engineered Quartz Surface","Apartment Lounge"],
        description:
          "Nesting Pair Geometric Coffee Tables with Quartz Top. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-6",
        title: "Stainless Steel & Fluted Glass Bar Cocktail Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Round Pedestal SS Base","Fluted Toughened Glass Top","Brass Accent Collar Ring","Home Bar & Lounge"],
        description:
          "Stainless Steel & Fluted Glass Bar Cocktail Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-7",
        title: "Industrial Cleanroom Fully Welded SS Work Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy 16-Gauge SS 304 Top","Sanitary Rounded Corner Edges","Adjustable Leveling Bullet Feet","Pharmaceutical Standard"],
        description:
          "Industrial Cleanroom Fully Welded SS Work Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-8",
        title: "Cantilevered C-Shaped SS Sofa Side Laptop Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Ultra-Slim Base Slide Under Couch","Mirror Gold Coating","Solid Surface Inlay","Ergonomic Living Room"],
        description:
          "Cantilevered C-Shaped SS Sofa Side Laptop Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-9",
        title: "Sculptural Origami Faceted SS Accent Side Table",
        image: "/images/portfolio/ss-tables-furniture/ss-table-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Complex Angular Metal Folding","Mirror Polished Facets","Light Reflective Artistry","Designer Showpiece"],
        description:
          "Sculptural Origami Faceted SS Accent Side Table. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "ssta-10",
        title: "Outdoor Weatherproof SS 316 Patio Dining Set Base",
        image: "/images/portfolio/ss-tables-furniture/ss-table-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Marine Grade SS 316","Corrosion Proof Coastal Build","Granite Top Anchorage","Terrace & Poolside"],
        description:
          "Outdoor Weatherproof SS 316 Patio Dining Set Base. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-gates",
    name: "MS GATE",
    slug: "ms-gates",
    tagline: "Heavy-Duty Mild Steel Main Gates, Motorized Sliding Gates & Security Barriers",
    description:
      "Heavy-duty mild steel entrance gates built for residential compounds, industrial factories, and agricultural estates. Fabricated with structural channels, square hollow sections, and anti-rust epoxy coatings.",
    badge: "10 Real Projects",
    features: [
          "Heavy-Gauge Structural MS Channels & Hollow Sections",
          "Dual Coat Anti-Rust Red Oxide Primer & Polyurethane (PU) Paint",
          "Heavy-Duty Roller Trolleys & Sealed Ball-Bearing Hinges",
          "Pre-Engineered for Remote Motorized Gate Automation"
    ],
    isAvailable: true,
    images: [
      {
        id: "msga-1",
        title: "Modern Horizontal Slat MS Sliding Compound Gate",
        image: "/images/portfolio/ms-gates/ms-gate-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy MS Hollow Sections","Anti-Rust Red Oxide + Matte Paint","Industrial Track & Rollers","Bungalow Security"],
        description:
          "Modern Horizontal Slat MS Sliding Compound Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-2",
        title: "Heavy Industrial Factory Motorized Sliding MS Gate",
        image: "/images/portfolio/ms-gates/ms-gate-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["ISMC Channel Framing","Automated Gear Rack Drive","Anti-Derailment Safety Catch","High-Traffic Industrial Plant"],
        description:
          "Heavy Industrial Factory Motorized Sliding MS Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-3",
        title: "Contemporary Laser-Cut Metal Inset MS Main Gate",
        image: "/images/portfolio/ms-gates/ms-gate-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["CNC Laser Cut Accent Panel","Sleek Charcoal Powder Coat","Heavy Duty Ball-Bearing Hinges","Surat Residence"],
        description:
          "Contemporary Laser-Cut Metal Inset MS Main Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-4",
        title: "Traditional Cast Iron & MS Ornamental Estate Gate",
        image: "/images/portfolio/ms-gates/ms-gate-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Forged Spearhead Finials","Decorative Scrollwork Accents","Robust Ground Anchorage","Heritage Farmhouse"],
        description:
          "Traditional Cast Iron & MS Ornamental Estate Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-5",
        title: "Minimalist Charcoal Grey Vertical Bar MS Swing Gate",
        image: "/images/portfolio/ms-gates/ms-gate-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Solid Square Bar Infill","Concealed Heavy Gate Latch","Weatherproof PU Topcoat","Modern Architecture"],
        description:
          "Minimalist Charcoal Grey Vertical Bar MS Swing Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-6",
        title: "Telescopic Space-Saving Two-Panel MS Sliding Gate",
        image: "/images/portfolio/ms-gates/ms-gate-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Synchronized Cable Drive","Minimal Runoff Space Required","High Tensile Structural MS","Narrow Driveway"],
        description:
          "Telescopic Space-Saving Two-Panel MS Sliding Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-7",
        title: "Heavy-Duty Cantilever Trackless MS Security Gate",
        image: "/images/portfolio/ms-gates/ms-gate-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["No Ground Track Required","Heavy Counterbalance Arm","Heavy Duty Rollers","Commercial Warehouse"],
        description:
          "Heavy-Duty Cantilever Trackless MS Security Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-8",
        title: "MS & Wood Composite Decorative Residence Gate",
        image: "/images/portfolio/ms-gates/ms-gate-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["All-Weather WPC Louvers","Structural MS Box Skeleton","Anti-Corrosion Undercoat","Designer Curb Appeal"],
        description:
          "MS & Wood Composite Decorative Residence Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-9",
        title: "Perimeter Boundary Wall Matching MS Double Swing Gate",
        image: "/images/portfolio/ms-gates/ms-gate-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Integrated Pedestrian Wicket Door","Heavy Padlockable Hasps","Durable Electrostatic Powder Coat","Colony Entrance"],
        description:
          "Perimeter Boundary Wall Matching MS Double Swing Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-10",
        title: "Geometric Asymmetric Designer MS Entrance Gate",
        image: "/images/portfolio/ms-gates/ms-gate-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Parametric Bar Spacing","Metallic Bronze PU Finish","Smooth Operation Bearing Pivots","Architect-Designed Villa"],
        description:
          "Geometric Asymmetric Designer MS Entrance Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-grills",
    name: "MS GRILL",
    slug: "ms-grills",
    tagline: "Solid Mild Steel Window Security Grills, Boundary Grids & Protective Grates",
    description:
      "High-security mild steel window grills and protective boundary enclosures. Built using solid square bars, heavy angles, and diamond patterns with deep masonry anchors for uncompromised home security.",
    badge: "10 Real Projects",
    features: [
          "Solid 12mm & 16mm Square Bar & Flat Section Metallurgy",
          "Tamper-Proof Concealed Wall Fastening into Masonry",
          "Multi-Stage Rust Treatment (Zinc Phosphate + Enamel / Powder Coat)",
          "Unobstructed Natural Airflow & Daylighting Design"
    ],
    isAvailable: true,
    images: [
      {
        id: "msgr-1",
        title: "Solid Square Bar Modern Geometric MS Window Grill",
        image: "/images/portfolio/ms-grills/ms-grill-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["12mm Solid MS Square Bars","Matte Black Powder Coating","Deep Concrete Anchor Horns","Apartment Bedroom Window"],
        description:
          "Solid Square Bar Modern Geometric MS Window Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-2",
        title: "Traditional Diamond Lattice MS Window Security Screen",
        image: "/images/portfolio/ms-grills/ms-grill-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Interlocking Flat Bars","Anti-Rust Red Oxide Base","Heavy Burglar Resistance","Ground Floor Protection"],
        description:
          "Traditional Diamond Lattice MS Window Security Screen. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-3",
        title: "Modern Vertical Minimalist MS Safety Window Grill",
        image: "/images/portfolio/ms-grills/ms-grill-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Uniform Slim Bar Spacing","Flush Welded Joints","Clean Architectural Sightlines","Surat Bungalow Window"],
        description:
          "Modern Vertical Minimalist MS Safety Window Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-4",
        title: "Extended Box Window MS Safety Enclosure with Plant Shelf",
        image: "/images/portfolio/ms-grills/ms-grill-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Protruding Box Frame","Integrated Bottom Planter Grid","Weatherproof Enamel Finish","High-Rise Balcony Enclosure"],
        description:
          "Extended Box Window MS Safety Enclosure with Plant Shelf. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-5",
        title: "Decorative Curved Bellied MS Window Security Grill",
        image: "/images/portfolio/ms-grills/ms-grill-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Forged Curved Belly Profile","Allows Window AC / Plants Fit","Heavy Duty Wall Fasteners","Classic Indian Architecture"],
        description:
          "Decorative Curved Bellied MS Window Security Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-6",
        title: "Basement Ventilation Heavy-Duty MS Protective Grate",
        image: "/images/portfolio/ms-grills/ms-grill-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Thick Welded Bar Grating","Padlockable Access Latch","Hot-Dip Galvanized / Painted","Commercial Building Core"],
        description:
          "Basement Ventilation Heavy-Duty MS Protective Grate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-7",
        title: "Boundary Wall Decorative Spike Top MS Security Grill",
        image: "/images/portfolio/ms-grills/ms-grill-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Anti-Climb Spear Tops","Rigid Boundary Coping Mount","Multi-Coat Epoxy Paint","Estate Perimeter Safety"],
        description:
          "Boundary Wall Decorative Spike Top MS Security Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-8",
        title: "Contemporary Horizontal Louver MS Privacy & Safety Grill",
        image: "/images/portfolio/ms-grills/ms-grill-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Slanted Rain-Shedding Bars","Blocks Direct Sightlines","Maintains Cross Breeze","Bathroom & Utility Window"],
        description:
          "Contemporary Horizontal Louver MS Privacy & Safety Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-9",
        title: "French Door Full-Height Decorative MS Security Gate",
        image: "/images/portfolio/ms-grills/ms-grill-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Solid Double Leaf Frame","Heavy Tower Bolts","Laser Cut Accent Center","Balcony Glass Door Backup"],
        description:
          "French Door Full-Height Decorative MS Security Gate. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msgr-10",
        title: "Stairwell Ventilation Open Void Protective MS Grill",
        image: "/images/portfolio/ms-grills/ms-grill-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Full Floor-to-Ceiling Screen","High Impact Weld Points","Child Fall Safety Standard","Apartment Common Area"],
        description:
          "Stairwell Ventilation Open Void Protective MS Grill. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-railings",
    name: "MS RAILING",
    slug: "ms-railings",
    tagline: "Modern Mild Steel Balcony Balustrades, Staircase Handrails & Parapet Fences",
    description:
      "Contemporary mild steel railing systems engineered for residential balconies, staircase handrails, and terrace parapet borders. Featuring geometric vertical balusters, wooden top caps, and durable exterior powder coating.",
    badge: "10 Real Projects",
    features: [
          "Heavy-Gauge MS Box Section & Solid Bar Balusters",
          "Architectural Polyester Powder Coating (Charcoal, White, Black)",
          "Compatible with Wooden, SS & Polyurethane Top Handrails",
          "Rigid Base Flange Chemical Anchoring"
    ],
    isAvailable: true,
    images: [
      {
        id: "msra-1",
        title: "Modern Minimalist Vertical Slat MS Balcony Railing",
        image: "/images/portfolio/ms-railings/ms-railing-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy MS Square Tubes","Electrostatic Charcoal Coat","Rigid Concrete Anchor Base","Apartment Balcony Safety"],
        description:
          "Modern Minimalist Vertical Slat MS Balcony Railing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-2",
        title: "Duplex Staircase MS Handrail with Teak Wood Top Rail",
        image: "/images/portfolio/ms-railings/ms-railing-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Slimline Flat Bar Balusters","Ergonomic Natural Teak Wood Handrail","Smooth TIG Welded Joints","Modern Interior Living"],
        description:
          "Duplex Staircase MS Handrail with Teak Wood Top Rail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-3",
        title: "Terrace Parapet Boundary MS Safety Fence Extension",
        image: "/images/portfolio/ms-railings/ms-railing-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["All-Weather Weatherproof Coat","Continuous Top Guard Rail","Child Fall Protection Height","Rooftop Lounge Perimeter"],
        description:
          "Terrace Parapet Boundary MS Safety Fence Extension. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-4",
        title: "Geometric Cross-Pattern (X-Braced) MS Balustrade",
        image: "/images/portfolio/ms-railings/ms-railing-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Craftsman X-Braced Slats","Matte White Exterior Powder Coat","Bungalow Veranda Railing","Modern Farmhouse Decor"],
        description:
          "Geometric Cross-Pattern (X-Braced) MS Balustrade. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-5",
        title: "CNC Laser-Cut Sheet Metal MS Staircase Safety Panel",
        image: "/images/portfolio/ms-railings/ms-railing-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Laser Perforated Geometric Sheet","Framed in Heavy MS Angle","Contemporary Aesthetic","Commercial Office Stair"],
        description:
          "CNC Laser-Cut Sheet Metal MS Staircase Safety Panel. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-6",
        title: "Industrial Factory Floor Heavy-Duty MS Safety Handrail",
        image: "/images/portfolio/ms-railings/ms-railing-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Pipe Sections (OD 48mm)","Safety Kick Plate Toe Board","Safety Yellow / Black Powder Coat","OSHA Safety Standards"],
        description:
          "Industrial Factory Floor Heavy-Duty MS Safety Handrail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-7",
        title: "Curved Spiral Staircase Continuous MS Handrail",
        image: "/images/portfolio/ms-railings/ms-railing-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Precision Pipe Bending","Seamless Smooth Ground Joints","High Rigid Structural Spine","Villa Duplex Stair"],
        description:
          "Curved Spiral Staircase Continuous MS Handrail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-8",
        title: "Art Deco Geometric Pattern MS Balcony Safety Barrier",
        image: "/images/portfolio/ms-railings/ms-railing-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Gold & Black Dual Finish","Solid Forged Metal Accents","Luxury Bungalow Frontage","Surat Landmark Residence"],
        description:
          "Art Deco Geometric Pattern MS Balcony Safety Barrier. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-9",
        title: "Horizontal 4-Bar Modern MS Terrace Guard Railing",
        image: "/images/portfolio/ms-railings/ms-railing-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Low Wind Resistance Slats","Heavy Base Flanges with Fasteners","Long-Span Structural Strength","Open Sky Patio"],
        description:
          "Horizontal 4-Bar Modern MS Terrace Guard Railing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msra-10",
        title: "Ramp Access Universal Accessibility MS Handrail",
        image: "/images/portfolio/ms-railings/ms-railing-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double Height Grab Rails","Smooth Non-Snag Terminations","High Durability Epoxy Paint","Hospital & Public Access"],
        description:
          "Ramp Access Universal Accessibility MS Handrail. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-staircases",
    name: "MS STAIRCASE",
    slug: "ms-staircases",
    tagline: "Structural Steel Staircases, Fire Escapes & Modern Mono-Stringer Flights",
    description:
      "Heavy-duty structural mild steel staircases for industrial plants, commercial mezzanines, and architectural residences. Fabricated from ISMC channels, I-beams, checker-plate treads, and engineered support columns.",
    badge: "9 Real Projects",
    features: [
          "Heavy Structural ISMC Channel & H-Beam Construction",
          "Checker-Plate, Open Bar Grating & Wooden Tread Options",
          "Exterior Fire Escape Emergency Egress Certifiable Standards",
          "Heavy-Duty Vibration-Dampened Floor Anchorage"
    ],
    isAvailable: true,
    images: [
      {
        id: "msst-1",
        title: "Modern Central Spine Mono-Stringer MS Interior Staircase",
        image: "/images/portfolio/ms-staircases/ms-staircase-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Box Beam Central Spine","Cantilevered Tread Trays","Teak Wood Step Inlays","Duplex Villa Architecture"],
        description:
          "Modern Central Spine Mono-Stringer MS Interior Staircase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-2",
        title: "Exterior Multi-Storey MS Fire Escape Stair Tower",
        image: "/images/portfolio/ms-staircases/ms-staircase-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Structural Channel Beams","Anti-Slip Checker Plate Steps","Self-Draining Landing Platforms","Commercial Fire Safety"],
        description:
          "Exterior Multi-Storey MS Fire Escape Stair Tower. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-3",
        title: "Industrial Warehouse Mezzanine Access MS Staircase",
        image: "/images/portfolio/ms-staircases/ms-staircase-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Open Steel Bar Grating Treads","Integrated Double Handrails","High Dynamic Load Rating","Industrial Plant Standard"],
        description:
          "Industrial Warehouse Mezzanine Access MS Staircase. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-4",
        title: "Compact Outdoor MS Spiral Staircase for Terrace Access",
        image: "/images/portfolio/ms-staircases/ms-staircase-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Central Pipe Column Axis","Pie-Shaped Anti-Slip Steps","Curved Continuous Guardrail","Space-Efficient Footprint"],
        description:
          "Compact Outdoor MS Spiral Staircase for Terrace Access. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-5",
        title: "Architectural Zig-Zag Stringer MS Staircase Flight",
        image: "/images/portfolio/ms-staircases/ms-staircase-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Laser Profiled Side Plates","Matte Black Industrial Finish","Open Riser Floating Look","Contemporary Residence"],
        description:
          "Architectural Zig-Zag Stringer MS Staircase Flight. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-6",
        title: "Straight Double-Stringer MS Staircase with Mid-Landing",
        image: "/images/portfolio/ms-staircases/ms-staircase-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Twin Channel Stringers","Concrete Filled Pan Treads","High Rigidity Cross Bracing","Commercial Complex"],
        description:
          "Straight Double-Stringer MS Staircase with Mid-Landing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-7",
        title: "Factory Heavy Equipment Maintenance Access Stairway",
        image: "/images/portfolio/ms-staircases/ms-staircase-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Duty Structural Columns","Safety Caged Top Platform","Epoxy Industrial Coating","Heavy Machinery Access"],
        description:
          "Factory Heavy Equipment Maintenance Access Stairway. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-8",
        title: "Residential L-Shaped Quarter Turn MS Stair Assembly",
        image: "/images/portfolio/ms-staircases/ms-staircase-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Sturdy Welded Structural Frame","Custom Granite Tread Seats","Silent Vibration Isolation","Surat Luxury Villa"],
        description:
          "Residential L-Shaped Quarter Turn MS Stair Assembly. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msst-9",
        title: "Rooftop Water Tank & Solar Array Service MS Ladder & Stairs",
        image: "/images/portfolio/ms-staircases/ms-staircase-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["All-Weather Hot-Dip Galvanized","Safety Fall Arrest Rungs","Solid Parapet Anchors","Building Maintenance"],
        description:
          "Rooftop Water Tank & Solar Array Service MS Ladder & Stairs. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-balcony",
    name: "MS BALCONY",
    slug: "ms-balcony",
    tagline: "Cantilevered Structural Steel Balconies, Veranda Extensions & Terrace Frames",
    description:
      "Custom-fabricated structural mild steel balcony frameworks, cantilevered floor extensions, and veranda sun decks. Built with heavy I-beams, reinforced tie rods, and weather-sealed composite decking subframes.",
    badge: "9 Real Projects",
    features: [
          "Heavy Structural I-Beam & Box Column Cantilever Engineering",
          "Engineered for High Dynamic Floor Loads & Wind Resiliency",
          "Corrosion Protected with Two-Pack Epoxy & PU Coatings",
          "Seamless Integration with Railings, Canopies & Glass Screens"
    ],
    isAvailable: true,
    images: [
      {
        id: "msba-1",
        title: "Cantilevered Structural Steel Balcony Frame Extension",
        image: "/images/portfolio/ms-balcony/ms-balcony-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy I-Beam Joists","Structural Wall Anchor Flanges","Engineered Floor Sub-Deck","Residential Space Expansion"],
        description:
          "Cantilevered Structural Steel Balcony Frame Extension. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-2",
        title: "Modern Industrial Style MS Balcony with Glass Balustrade",
        image: "/images/portfolio/ms-balcony/ms-balcony-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Matte Black Steel Skeleton","Toughened Safety Glass Inset","Weatherproof Composite Planks","Contemporary Villa"],
        description:
          "Modern Industrial Style MS Balcony with Glass Balustrade. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-3",
        title: "Veranda Roof Extension with Integrated MS Balcony Frame",
        image: "/images/portfolio/ms-balcony/ms-balcony-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double Box Column Support","Overhead Polycarbonate Canopy","Heavy Base Plate Anchors","Bungalow Front Porch"],
        description:
          "Veranda Roof Extension with Integrated MS Balcony Frame. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-4",
        title: "Multi-Tier Residential Building MS Balcony Pods",
        image: "/images/portfolio/ms-balcony/ms-balcony-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Prefabricated Steel Module","Rapid On-Site Bolt Assembly","Epoxy Zinc Primer Treatment","Apartment Complex Project"],
        description:
          "Multi-Tier Residential Building MS Balcony Pods. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-5",
        title: "Bespoke Juliet Balcony False Balustrade in MS",
        image: "/images/portfolio/ms-balcony/ms-balcony-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Flush Window Sill Mount","Decorative Laser Cut Panel","High Rust Resistance Paint","French Window Safety"],
        description:
          "Bespoke Juliet Balcony False Balustrade in MS. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-6",
        title: "Terrace Sundeck Cantilevered Steel Platform",
        image: "/images/portfolio/ms-balcony/ms-balcony-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Tensile Diagonal Tie Rods","Self-Supporting Steel Frame","Panoramic Scenic Outlook","Hillside Villa Project"],
        description:
          "Terrace Sundeck Cantilevered Steel Platform. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-7",
        title: "Commercial Cafe Outdoor Cantilevered Steel Mezzanine Balcony",
        image: "/images/portfolio/ms-balcony/ms-balcony-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Live-Load Capacity","Heavy Channel Edge Trims","Commercial Fire Safety Compliant","Restaurant Seating Extension"],
        description:
          "Commercial Cafe Outdoor Cantilevered Steel Mezzanine Balcony. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-8",
        title: "Covered Courtyard Balcony Bridge Structure in MS",
        image: "/images/portfolio/ms-balcony/ms-balcony-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Enclosed Steel Truss Bridge","Toughened Glass Walkway Floor","Connecting Duplex Wings","Architectural Landmark"],
        description:
          "Covered Courtyard Balcony Bridge Structure in MS. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msba-9",
        title: "Farmhouse Open-Air Steel Veranda & Balcony Enclosure",
        image: "/images/portfolio/ms-balcony/ms-balcony-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["ISMB Beam Framework","Wooden Slat Deck Integration","Zero Sag Long-Span Build","Surat Farmhouse Retreat"],
        description:
          "Farmhouse Open-Air Steel Veranda & Balcony Enclosure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "rolling-shutters",
    name: "ROLLING SHUTTER",
    slug: "rolling-shutters",
    tagline: "Motorized & Manual Industrial Rolling Shutters, Perforated & Polycarbonate",
    description:
      "Commercial and industrial rolling shutters engineered for maximum security, weather protection, and smooth operation. Available in motorized remote control, gear-operated, perforated, and see-through polycarbonate styles.",
    badge: "10 Real Projects",
    features: [
          "Cold-Rolled High-Tensile Steel Slats (Galvanized & Powder Coated)",
          "Heavy-Duty Side Guide Channels & Anti-Theft Bottom Plate Locks",
          "Heavy-Duty Torsion Springs & Automated Motor Drive Integration",
          "Perforated & Grill Slats for Off-Hours Showroom Visibility"
    ],
    isAvailable: true,
    images: [
      {
        id: "roll-1",
        title: "Motorized Commercial Showroom Rolling Shutter with Remote",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High-Torque Electric Motor","Wireless Remote & Manual Override","Galvanized Steel Slats","Commercial Storefront"],
        description:
          "Motorized Commercial Showroom Rolling Shutter with Remote. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-2",
        title: "Perforated See-Through SS / MS Display Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Micro-Perforated Slats","Allows Night Air & Visibility","High Security Steel Gauge","Mall Retail Boutique"],
        description:
          "Perforated See-Through SS / MS Display Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-3",
        title: "Heavy Industrial Factory Overhead Shutter (Double Spring)",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Cold-Rolled Interlocking Slats","Extra Deep Guide Rails","Wind-Lock Slats for Cyclonic Zones","Industrial Warehouse"],
        description:
          "Heavy Industrial Factory Overhead Shutter (Double Spring). Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-4",
        title: "Transparent Polycarbonate Clear View Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Unbreakable Polycarbonate Slats","Heavy Aluminum Hinge Profiles","100% Window Shopping View","Luxury Jewelry Showroom"],
        description:
          "Transparent Polycarbonate Clear View Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-5",
        title: "Manual Push-Pull Counterbalanced Shop Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Tensile Carbon Steel Springs","Smooth Effortless Manual Lift","Center & Side Bullet Locks","Commercial Market Stall"],
        description:
          "Manual Push-Pull Counterbalanced Shop Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-6",
        title: "Mechanical Gear-Operated Industrial Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Hand Chain Reduction Gear","For Extra Large Heights & Widths","Heavy Bottom Angle Frame","Logistics Cargo Bay"],
        description:
          "Mechanical Gear-Operated Industrial Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-7",
        title: "Insulated Thermal & Acoustic Industrial Rolling Door",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double-Skinned PUF Injected Slats","Thermal Heat Insulation","Sound Dampening Seals","Cold Storage & Food Plant"],
        description:
          "Insulated Thermal & Acoustic Industrial Rolling Door. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-8",
        title: "Fire-Rated Safety Overhead Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Certified 2-Hour Fire Rating","Automatic Fuse Link Release","Heavy Smoke & Flame Barrier","Commercial Mall Atrium"],
        description:
          "Fire-Rated Safety Overhead Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-9",
        title: "Residential Garage Motorized Sectional / Roller Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Smooth Silent Glide Operation","Safety Obstacle Sensor Beam","Architectural Charcoal Color","Bungalow Carport"],
        description:
          "Residential Garage Motorized Sectional / Roller Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "roll-10",
        title: "Powder-Coated Designer Perforated Rolling Shutter",
        image: "/images/portfolio/rolling-shutters/rolling-shutter-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Custom Brand Logo Perforation","Weatherproof Polyester Powder","Tamper-Proof Lock Housing","Modern Commercial Complex"],
        description:
          "Powder-Coated Designer Perforated Rolling Shutter. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-swings-jhula",
    name: "MS SWING(JULA)",
    slug: "ms-swings-jhula",
    tagline: "Custom Mild Steel Garden Swings, Terrace Jhulas & Heavy Hanging Frames",
    description:
      "Heavy-duty mild steel swings (jhulas) fabricated for durability, high weight loads, and aesthetic outdoor enjoyment. Featuring weather-coated tubular stands, laser-cut backrests, and silent ball-bearing suspensions.",
    badge: "10 Real Projects",
    features: [
          "Heavy-Gauge Tubular & Box MS Structural Steel Stand",
          "Two-Pack Epoxy Primer & High-Gloss All-Weather PU Paint",
          "Silent Precision Ball-Bearing Heavy Hanging Hooks",
          "High Load Capacity (Tested for 400+ kg Family Seating)"
    ],
    isAvailable: true,
    images: [
      {
        id: "mssw-1",
        title: "Contemporary Freestanding MS Garden Swing with Canopy Roof",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Tubular A-Frame Stand","Waterproof Sunshade Canopy","Multi-Coat Epoxy Paint","Lawn & Garden Centerpiece"],
        description:
          "Contemporary Freestanding MS Garden Swing with Canopy Roof. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-2",
        title: "Modern Minimalist Slatted MS Balcony Jhula Bench",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Ergonomic Contoured Back","Heavy-Duty Ceiling Eyebolts","Silent Roller Bearing Suspension","Apartment Balcony"],
        description:
          "Modern Minimalist Slatted MS Balcony Jhula Bench. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-3",
        title: "Traditional Floral Laser-Cut MS Jhula with Teak Seat",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Intricate CNC Laser Cut Back","Natural Teak Wood Base Plank","Durable Metallic Bronze Finish","Bungalow Veranda"],
        description:
          "Traditional Floral Laser-Cut MS Jhula with Teak Seat. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-4",
        title: "Heavy-Duty 3-Seater Terrace MS Hanging Swing",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Box Section Structural Frame","Heavy Link Steel Chains","Tested 450kg Load Capacity","Open Terrace Patio"],
        description:
          "Heavy-Duty 3-Seater Terrace MS Hanging Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-5",
        title: "Contemporary Geometric Web Pattern MS Swing Chair",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Artistic Radial Web Pattern","Matte Black Powder Coating","Plush Waterproof Cushion Fit","Modern Living Room"],
        description:
          "Contemporary Geometric Web Pattern MS Swing Chair. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-6",
        title: "Curved Pipe Double Arch MS Freestanding Jhula",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Double Circular Arch Design","Anti-Tipping Broad Base Plates","Weatherproof PU Topcoat","Farmhouse Veranda"],
        description:
          "Curved Pipe Double Arch MS Freestanding Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-7",
        title: "Industrial Chic Hanging Daybed MS Swing",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Wide Mattress Platform Base","High Tensile Wire Rope Suspension","Minimalist Steel Frame","Luxury Poolside Cabana"],
        description:
          "Industrial Chic Hanging Daybed MS Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-8",
        title: "Classic Wrought Iron Style MS Porch Swing",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Forged Scrollwork Armrests","Anti-Rust Red Oxide Base","Comfortable Deep Seating","Surat Heritage Home"],
        description:
          "Classic Wrought Iron Style MS Porch Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-9",
        title: "Kids & Family Safe MS Garden Playground Swing",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Reinforced Safety Chains","Non-Pinch Rubberized Links","Rigid Ground Anchor Posts","Residential Society Garden"],
        description:
          "Kids & Family Safe MS Garden Playground Swing. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "mssw-10",
        title: "Bespoke Gold & Charcoal Dual-Tone Luxury MS Jhula",
        image: "/images/portfolio/ms-swings-jhula/ms-swing-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["High Detail Laser Cut Filigree","Gold Accent Metallic Finish","Heavy Ceiling Pivot Bearings","Grand Villa Foyer"],
        description:
          "Bespoke Gold & Charcoal Dual-Tone Luxury MS Jhula. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "structural-trusses",
    name: "TRUSSES",
    slug: "structural-trusses",
    tagline: "Industrial Steel Roof Trusses, Warehouse Sheds & Long-Span Canopies",
    description:
      "Heavy structural steel roof trusses, factory sheds, and commercial canopies engineered with high-strength structural sections. Designed for maximum clear-span coverage, wind resilience, and rainwater drainage.",
    badge: "10 Real Projects",
    features: [
          "Heavy-Duty ISMB Beams, Tubular Pipes & Angle Bracing",
          "Engineered Clear-Span Designs up to 30+ Meters without Columns",
          "Multi-Stage Anti-Rust Zinc Phosphate Coating & Galvanizing",
          "Compatible with Pre-Coated Metal Sheets, Polycarbonate & Glass"
    ],
    isAvailable: true,
    images: [
      {
        id: "stru-1",
        title: "Industrial Factory Warehouse Clear-Span Roof Truss Structure",
        image: "/images/portfolio/structural-trusses/structural-truss-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Tubular Pipe Trusses","30-Meter Column-Free Clear Span","Zinc Chromate Primer + PU Topcoat","Manufacturing Plant"],
        description:
          "Industrial Factory Warehouse Clear-Span Roof Truss Structure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-2",
        title: "Curved Barrel Vault Steel Roof Truss for Sports Arena",
        image: "/images/portfolio/structural-trusses/structural-truss-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Curved Structural Steel Arches","High Wind Load Resistance","Polycarbonate & Metal Sheet Cover","Surat Institutional Center"],
        description:
          "Curved Barrel Vault Steel Roof Truss for Sports Arena. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-3",
        title: "Commercial Drive-Through Entry Steel Canopy Truss",
        image: "/images/portfolio/structural-trusses/structural-truss-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Cantilevered Steel Truss Beam","Integrated Rainwater Gutter System","Architectural ACP Clad Finish","Hospital & Hotel Drop-off"],
        description:
          "Commercial Drive-Through Entry Steel Canopy Truss. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-4",
        title: "Open Industrial Shed PEB Truss Framing Assembly",
        image: "/images/portfolio/structural-trusses/structural-truss-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Tapered Built-Up Steel Sections","High Strength Grade 8.8 Anchor Bolts","Rapid Modular Erection","Logistics Warehouse"],
        description:
          "Open Industrial Shed PEB Truss Framing Assembly. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-5",
        title: "Rooftop Solar Panel Mounting Structural Steel Truss Grid",
        image: "/images/portfolio/structural-trusses/structural-truss-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Hot-Dip Galvanized Coating","Engineered Cyclone Wind Resilient","Non-Penetrating Roof Anchors","Commercial Solar Plant"],
        description:
          "Rooftop Solar Panel Mounting Structural Steel Truss Grid. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-6",
        title: "Architectural Exposed Pratt Truss Ceiling for Banquet Hall",
        image: "/images/portfolio/structural-trusses/structural-truss-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Clean Aesthetic Exposed Steel","Concealed LED Uplighting Channels","High Rigidity Long Span","Luxury Event Center"],
        description:
          "Architectural Exposed Pratt Truss Ceiling for Banquet Hall. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-7",
        title: "Farmhouse Agricultural Shed Steel Truss & Purlin System",
        image: "/images/portfolio/structural-trusses/structural-truss-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Lightweight High Tensile Sections","Anti-Corrosion Red Oxide Base","Self-Supporting Roof Pitch","Rural Farmhouse Depot"],
        description:
          "Farmhouse Agricultural Shed Steel Truss & Purlin System. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-8",
        title: "Heavy Vehicle Parking Shed Cantilevered Truss Structure",
        image: "/images/portfolio/structural-trusses/structural-truss-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Single Column Cantilever Arms","Protects 20+ Vehicles","Color Coated Trapezoidal Roofing","Corporate Office Campus"],
        description:
          "Heavy Vehicle Parking Shed Cantilevered Truss Structure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-9",
        title: "Industrial Mezzanine Floor Load-Bearing Steel Truss Subframe",
        image: "/images/portfolio/structural-trusses/structural-truss-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy ISMB Beam Girders","High Dynamic Machine Load Certified","Bolted Splice Connections","Factory Floor Expansion"],
        description:
          "Industrial Mezzanine Floor Load-Bearing Steel Truss Subframe. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "stru-10",
        title: "Outdoor Walkway Covered Canopy Structural Steel Truss",
        image: "/images/portfolio/structural-trusses/structural-truss-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Arched Pipe Truss Framework","UV-Resistant Polycarbonate Glaze","Smooth Integrated Drainage","Public Transit Station"],
        description:
          "Outdoor Walkway Covered Canopy Structural Steel Truss. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
  {
    id: "ms-gazebos-pergolas",
    name: "MS GAZEBO",
    slug: "ms-gazebos-pergolas",
    tagline: "Custom Mild Steel Gazebos, Terrace Pergolas & Outdoor Garden Pavilions",
    description:
      "Architectural mild steel gazebos, garden pavilions, and terrace pergolas designed for luxury outdoor living. Featuring weather-coated steel frames, decorative laser-cut shade panels, and integrated seating.",
    badge: "10 Real Projects",
    features: [
          "Heavy Hollow Box Section Columns & Overhead Rafters",
          "All-Weather Polyester Powder Coating & Weatherproof Sealing",
          "Laser-Cut Decorative Shadow Screens & Waterproof Roof Options",
          "Engineered Concrete Foundation Flanges for Wind Stability"
    ],
    isAvailable: true,
    images: [
      {
        id: "msga-1",
        title: "Luxury Villa Terrace Pergola with Laser-Cut Shade Screens",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-1.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Box MS Columns (100x100mm)","Intricate Floral Shadow Pattern","Matte Charcoal Powder Coat","Rooftop Entertainment Lounge"],
        description:
          "Luxury Villa Terrace Pergola with Laser-Cut Shade Screens. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-2",
        title: "Octagonal Classical Garden Gazebo with Cupola Roof",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-2.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Octagonal Structural Framework","Decorative Railing Balustrades","Waterproof Metal Shingle Roof","Bungalow Landscaped Lawn"],
        description:
          "Octagonal Classical Garden Gazebo with Cupola Roof. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-3",
        title: "Modern Minimalist Louvered Terrace Pergola Structure",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-3.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Angled Solar Deflection Louvers","Concealed Fastening System","Integrated Outdoor Downlights","Penthouse Open Terrace"],
        description:
          "Modern Minimalist Louvered Terrace Pergola Structure. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-4",
        title: "Poolside Daybed Gazebo Pavilion with Built-in Bench",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-4.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Heavy Duty Steel Platform","Weatherproof Fabric Drape Provision","Anti-Corrosion Marine Paint","Luxury Resort & Villa"],
        description:
          "Poolside Daybed Gazebo Pavilion with Built-in Bench. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-5",
        title: "Farmhouse Outdoor Dining Pavilion with Polycarbonate Roof",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-5.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Large 20x15 Foot Clear Space","UV-Blocking Tinted Glazing","Heavy Base Plate Anchoring","Surat Farmhouse Garden"],
        description:
          "Farmhouse Outdoor Dining Pavilion with Polycarbonate Roof. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-6",
        title: "Architectural Geometric Cantilevered Patio Pergola",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-6.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Single Side Post Support","Dramatic Floating Rafter Design","High Tensile Structural MS","Contemporary Residence"],
        description:
          "Architectural Geometric Cantilevered Patio Pergola. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-7",
        title: "Courtyard Open Atrium Steel Gazebo Centerpiece",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-7.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Central Glass Skylight Dome","Forged Decorative Column Brackets","Polyester Powder Coating","Heritage Bungalow Court"],
        description:
          "Courtyard Open Atrium Steel Gazebo Centerpiece. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-8",
        title: "Garden Walkway Trellis & Gazebo Arch Tunnel",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-8.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Curved Tubular Steel Arches","Supports Climbing Flowering Vines","Hot-Dip Galvanized + Green Coat","Botanical Villa Estate"],
        description:
          "Garden Walkway Trellis & Gazebo Arch Tunnel. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-9",
        title: "Commercial Cafe Outdoor Steel Gazebo Seating Pods",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-9.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Modular 4-to-6 Seater Units","Integrated Table Subframe","Heavy Duty Wind Resilient Build","Rooftop Cafe & Bistro"],
        description:
          "Commercial Cafe Outdoor Steel Gazebo Seating Pods. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
      {
        id: "msga-10",
        title: "Four-Pillar Flat Roof Modern Gazebo with WPC Accents",
        image: "/images/portfolio/ms-gazebos-pergolas/ms-gazebo-10.png",
        location: "Surat, Gujarat • Monarch Fabrication Project",
        specs: ["Composite Wood & Steel Pairing","Concealed Rainwater Downspouts","Zero Maintenance Durability","Luxury Terrace Veranda"],
        description:
          "Four-Pillar Flat Roof Modern Gazebo with WPC Accents. Custom-fabricated by Monarch Fabrication in Surat using heavy-duty materials, certified welding, and premium architectural finishing.",
      },
    ],
  },
];
