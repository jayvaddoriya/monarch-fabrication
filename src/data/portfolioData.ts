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
];
