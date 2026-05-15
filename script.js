/* ==========================================================================
   Surax Pool Master Script
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');
  const blob3 = document.querySelector('.blob-3');

  // Premium Smooth Scrolling (Lenis)
  let lenis;
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      const scroll = window.scrollY;
      if (blob1) blob1.style.transform = `translateY(${scroll * 0.15}px)`;
      if (blob2) blob2.style.transform = `translateY(${scroll * -0.1}px)`;
      if (blob3) blob3.style.transform = `translateY(${scroll * 0.05}px)`;
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  } catch (e) {
    console.warn("Lenis smooth scroll not initialized:", e);
    // Fallback animation loop for blobs
    function fallbackRaf() {
      const scroll = window.scrollY;
      if (blob1) blob1.style.transform = `translateY(${scroll * 0.15}px)`;
      if (blob2) blob2.style.transform = `translateY(${scroll * -0.1}px)`;
      if (blob3) blob3.style.transform = `translateY(${scroll * 0.05}px)`;
      requestAnimationFrame(fallbackRaf);
    }
    requestAnimationFrame(fallbackRaf);
  }

  // Smart Navbar Scroll Handling
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (nav) {
      if (currentScrollY > 100) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');

      if (currentScrollY > lastScrollY && currentScrollY > 200) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
  });


// Cinematic Staggered Reveal
const applyStagger = (selector, baseDelay = 0, step = 100) => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.style.setProperty('--delay', `${baseDelay + (index * step)}ms`);
  });
};

applyStagger('.service-card', 100, 150);
applyStagger('.pricing-card', 100, 150);
applyStagger('.about-card', 200, 200);
applyStagger('.reason-card', 300, 150);
applyStagger('.gallery-item', 100, 100);

// Reveal Animations Logic
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-reveal]').forEach(item => {
  revealObserver.observe(item);
});

// Link Lenis to internal anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target);
    }
  });
});


const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".contact-form .form-status");
const testimonialCards = document.querySelectorAll(".testimonials-track .testimonial-card");
const testimonialDots = document.querySelectorAll(".slider-dot");
const prevTestimonial = document.querySelector(".slider-control.prev");
const nextTestimonial = document.querySelector(".slider-control.next");
const langButtons = document.querySelectorAll(".lang-button");
const themeToggle = document.querySelector(".theme-toggle");
const comparisonStage = document.querySelector("#comparison-stage");
const comparisonRange = document.querySelector("#comparison-range");
const galleryTriggers = document.querySelectorAll(".lightbox-trigger");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");
const lightboxPrev = document.querySelector("#lightbox-prev");
const lightboxNext = document.querySelector("#lightbox-next");
const reviewForm = document.querySelector("#review-form");
const reviewStatus = document.querySelector("#review-status");
const userReviewsList = document.querySelector("#user-reviews-list");
const userReviewsPending = document.querySelector("#user-reviews-pending");
const moderationModeToggle = document.querySelector("#review-moderation-mode");
const reviewsAverageValue = document.querySelector("#reviews-average-value");
const reviewsAverageStars = document.querySelector("#reviews-average-stars");
const reviewsAverageText = document.querySelector("#reviews-average-text");

const translations = {
  en: {
    navAbout: "About",
    navServices: "Services",
    navPricing: "Pricing",
    navGallery: "Gallery",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",
    navHome: "Home",
    themeToggleText: "Dark",
    themeToggleAria: "Enable dark mode",
    themeToggleLightText: "Light",
    themeToggleLightAria: "Enable light mode",
    heroEyebrow: "Luxury Outdoor Living",
    heroTitle: "We Build Dream Pools",
    heroSubtitle: "Custom Swimming Pool Design, Construction & Maintenance",
    heroText: "Surax Pool creates elegant residential and hospitality pool experiences with refined design, precise construction, and white-glove maintenance that keeps every detail pristine.",
    heroCtaPrimary: "Get a Free Quote",
    heroCtaSecondary: "Explore Services",
    metricOne: "Years of premium pool expertise",
    metricTwo: "Custom pool projects completed",
    metricThree: "Client satisfaction rating",
    signatureKicker: "Signature Service",
    signatureTitle: "Private resort-style pools built for modern living.",
    signatureText: "From sleek infinity edges to full-service maintenance plans, we deliver a seamless process from first concept to long-term care.",
    signatureListOne: "Architect-led design planning",
    signatureListTwo: "Premium finishes and lighting",
    signatureListThree: "Reliable weekly upkeep programs",
    aboutEyebrow: "About Us",
    aboutTitle: "Crafting luxurious pool environments with confidence, clarity, and care.",
    aboutIntroTitle: "Company Introduction",
    aboutIntroTextOne: "Surax Pool is a modern swimming pool construction and maintenance company dedicated to building timeless outdoor spaces that feel calm, sophisticated, and effortless to own.",
    aboutIntroTextTwo: "We combine design insight, technical craftsmanship, and dependable service so every project feels elevated from consultation through completion.",
    missionTitle: "Mission",
    missionText: "To design and maintain exceptional pools that increase property value, create memorable experiences, and reflect the lifestyle of every client we serve.",
    visionTitle: "Vision",
    visionText: "To be the trusted name in premium pool environments by setting a higher standard for aesthetics, durability, and service excellence.",
    reasonOneTitle: "Experience",
    reasonOneText: "Seasoned specialists managing design, engineering, finishes, and aftercare.",
    reasonTwoTitle: "Quality",
    reasonTwoText: "Premium materials, clean construction standards, and a sharp eye for detail.",
    reasonThreeTitle: "Trust",
    reasonThreeText: "Transparent timelines, reliable communication, and service that clients stay with.",
    servicesEyebrow: "Services",
    servicesTitle: "End-to-end pool solutions for design, build, renewal, and care.",
    servicesIntro: "Every service is tailored to create a smooth client journey and a pool that looks exceptional season after season.",
    serviceOneTitle: "Pool Design",
    serviceOneText: "Custom concepts, 3D planning, material selection, and layout strategies built around your property.",
    serviceTwoTitle: "Pool Construction",
    serviceTwoText: "Expert excavation, structural work, plumbing, tiling, decking, lighting, and finishing.",
    serviceThreeTitle: "Pool Renovation",
    serviceThreeText: "Modernize aging pools with new finishes, updated systems, improved lighting, and refined features.",
    serviceFourTitle: "Pool Cleaning & Maintenance",
    serviceFourText: "Scheduled cleaning, water balancing, equipment checks, and dependable care plans for lasting clarity.",
    comparisonEyebrow: "Before / After",
    comparisonTitle: "See how a home swimming pool can go from outdated to premium outdoor living.",
    comparisonIntro: "Drag the slider to compare a residential pool before renovation and after a refined Surax Pool upgrade.",
    comparisonBefore: "Before",
    comparisonAfter: "After",
    comparisonSliderLabel: "Before and after comparison slider",
    comparisonNoteOneTitle: "Before Renovation",
    comparisonNoteOneText: "Older home pools can feel plain, worn, and disconnected from the rest of the backyard.",
    comparisonNoteTwoTitle: "After Renovation",
    comparisonNoteTwoText: "Upgraded finishes, cleaner lines, and a brighter layout turn the home pool into a more elegant outdoor feature.",
    galleryEyebrow: "Gallery",
    galleryTitle: "More completed pool looks, ready to open in a full-screen view.",
    galleryIntro: "Tap any image to view it large and browse through the collection in a premium lightbox.",
    reviewsEyebrow: "Google Reviews",
    reviewsTitle: "Trusted by homeowners across Addis Ababa.",
    reviewsIntro: "Real client feedback that reflects the quality of our design, construction, and maintenance service.",
    reviewsSummaryText: "Average Google rating based on verified customer reviews.",
    reviewsCta: "View on Google",
    reviewOne: "\"Surax Pool delivered exactly what we imagined. The team was punctual, respectful, and very detailed from design to handover.\"",
    reviewAuthorOne: "Meklit A.",
    reviewTwo: "\"Our pool renovation looks premium now. They improved the finish, lighting, and circulation system faster than expected.\"",
    reviewAuthorTwo: "Nahom T.",
    reviewThree: "\"Very professional maintenance service. Water quality is always excellent and communication is clear every week.\"",
    reviewAuthorThree: "Rahel G.",
    userReviewsEyebrow: "Share Your Experience",
    userReviewsTitle: "Leave a review on our website.",
    userReviewsIntro: "Your feedback helps other homeowners choose with confidence.",
    reviewFieldName: "Your Name",
    reviewFieldNamePlaceholder: "e.g. Hana T.",
    reviewFieldRating: "Rating",
    reviewRatingFive: "5 - Excellent",
    reviewRatingFour: "4 - Very Good",
    reviewRatingThree: "3 - Good",
    reviewRatingTwo: "2 - Fair",
    reviewRatingOne: "1 - Poor",
    reviewFieldMessage: "Your Review",
    reviewFieldMessagePlaceholder: "Tell us about your experience with Surax Pool",
    reviewSubmit: "Post Review",
    reviewPostSuccess: "Thanks! Your review has been posted.",
    reviewPostError: "Please complete your name and review message.",
    reviewPostPending: "Your review was saved and is pending approval.",
    reviewEmpty: "No customer-submitted reviews yet. Be the first to share your experience.",
    reviewModerationMode: "Moderation mode (hide new reviews until approved)",
    reviewPendingTitle: "Pending Reviews",
    reviewApprove: "Approve",
    reviewEdit: "Edit",
    reviewDelete: "Delete",
    reviewSaveEdit: "Save Changes",
    reviewAverageLabel: "Average rating from website reviews",
    reviewsSummaryDynamic: "Average from website reviews",
    galleryCaptionOne: "Modern residential pool with crisp blue water and refined geometry.",
    galleryCaptionTwo: "Premium resort-style pool with atmospheric night lighting.",
    galleryCaptionThree: "The same home pool during construction before the final finish.",
    galleryCaptionFour: "The completed home pool after construction with a clean finished result.",
    galleryCaptionFive: "Signature infinity pool design overlooking the city skyline.",
    galleryCaptionSix: "Indoor climate-controlled swimming environment with custom lighting.",
    galleryCaptionSeven: "Renovation project: Surface preparation and structural assessment.",
    filterAll: "All Projects",
    filterNew: "New Builds",
    filterRenovation: "Renovations",
    filterMaintenance: "Maintenance",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "Trusted by homeowners who wanted quality without compromise.",
    testimonialOne: "\"Surax Pool transformed our backyard into a private retreat. The process felt organized, premium, and completely professional from start to finish.\"",
    testimonialTwo: "\"The renovation exceeded expectations. Every finish looks high-end, and their maintenance team keeps the pool looking immaculate every week.\"",
    testimonialThree: "\"We chose Surax Pool because of their design sense and attention to detail. They delivered exactly the luxury feel we were hoping for.\"",
    pricingEyebrow: "Pricing Packages",
    pricingTitle: "Transparent Pricing for Every Vision",
    pricingIntro: "All packages include free consultation. Final price depends on size, design, and location.",
    pricingConsultingTitle: "Consulting",
    pricingConsultingAmount: "Starting from ETB 5,000",
    pricingConsultingFeature1: "Site visit and assessment",
    pricingConsultingFeature2: "Expert advice and recommendations",
    pricingConsultingFeature3: "Project feasibility study",
    pricingConsultingFeature4: "Budget planning guidance",
    pricingConsultingFeature5: "Timeline estimation",
    pricingConsultingCta: "Book Now",
    pricingDesignTitle: "Design",
    pricingDesignAmount: "Starting from ETB 15,000",
    pricingDesignFeature1: "Custom pool design concept",
    pricingDesignFeature2: "3D layout and visual planning",
    pricingDesignFeature3: "Material and finish selection",
    pricingDesignFeature4: "Lighting and decking design",
    pricingDesignFeature5: "Full technical drawings",
    pricingDesignCta: "Get Design",
    pricingConstructionTitle: "Construction",
    pricingConstructionAmount: "Starting from ETB 800,000",
    pricingConstructionBadge: "Most Popular",
    pricingConstructionFeature1: "Complete pool construction",
    pricingConstructionFeature2: "Premium tiling and finishing",
    pricingConstructionFeature3: "Plumbing and filtration system",
    pricingConstructionFeature4: "LED lighting installation",
    pricingConstructionFeature5: "Decking and surrounds",
    pricingConstructionFeature6: "1 year warranty",
    pricingConstructionCta: "Get a Quote",
    pricingCleaningTitle: "Cleaning",
    pricingCleaningAmount: "Starting from ETB 3,000/month",
    pricingCleaningFeature1: "Weekly pool cleaning",
    pricingCleaningFeature2: "Water chemical balancing",
    pricingCleaningFeature3: "Filter inspection and cleaning",
    pricingCleaningFeature4: "Equipment check",
    pricingCleaningFeature5: "Monthly condition report",
    pricingCleaningCta: "Start Plan",
    pricingMaintenanceTitle: "Maintenance",
    pricingMaintenanceAmount: "Starting from ETB 8,000/month",
    pricingMaintenanceFeature1: "Everything in Cleaning plan",
    pricingMaintenanceFeature2: "Equipment repairs and replacement",
    pricingMaintenanceFeature3: "Water pump servicing",
    pricingMaintenanceFeature4: "Lighting maintenance",
    pricingMaintenanceFeature5: "Priority emergency response",
    pricingMaintenanceFeature6: "Dedicated account manager",
    pricingMaintenanceCta: "Start Plan",
    pricingDisclaimer: "All prices are starting rates. Final pricing depends on pool size, design complexity, materials, and project location. Contact us for a free detailed quote.",
    faqEyebrow: "FAQ",
    faqTitle: "Helpful answers for planning a pool project or maintenance visit.",
    directionsButton: "Get Google Maps Directions",
    faqOneQ: "How long does a new pool project usually take?",
    faqOneA: "Most projects take several weeks depending on design complexity, site conditions, and finishing selections.",
    faqTwoQ: "Do you offer regular maintenance plans?",
    faqTwoA: "Yes. We provide weekly and custom maintenance packages including cleaning, water balancing, and system checks.",
    faqThreeQ: "Can I request a renovation without rebuilding the whole pool?",
    faqThreeA: "Absolutely. We can upgrade finishes, lighting, coping, filtration equipment, and selected design features.",
    faqFourQ: "Can I send photos of my property before a quote?",
    faqFourA: "Yes. When you submit an inquiry, your email app opens with your details—you can attach site photos there before sending.",
    contactEyebrow: "Contact",
    contactTitle: "Start planning your next signature pool project.",
    contactIntro: "Tell us about your property, your vision, and the kind of pool experience you want to create.",
    contactPhone: "Phone: 0922729374",
    contactEmail: "Email: suraxpool@gmail.com",
    contactLocation: "Location: Bole Road, Addis Ababa, Ethiopia",
    contactDirections: "Open Directions",
    fieldName: "Name",
    fieldNamePlaceholder: "Your full name",
    fieldEmail: "Email",
    fieldEmailPlaceholder: "you@example.com",
    fieldPhone: "Phone",
    fieldPhonePlaceholder: "+251 9xx xxx xxx",
    fieldProjectType: "Project Type",
    fieldProjectTypePlaceholder: "New build, renovation, maintenance",
    fieldUpload: "Upload Property Image",
    fieldMessage: "Message",
    fieldMessagePlaceholder: "Tell us about your pool project",
    contactSubmit: "Send Inquiry",
    formStatusPreparing: "Preparing your inquiry…",
    formStatusSuccess: "Thank you! We will contact you shortly.",
    formStatusError: "Please fill in all required fields.",
    formImageHint: "Please attach your selected site photo in the email before sending.",
    footerText: "Luxury swimming pool design, construction, renovation, and maintenance for modern properties.",
    footerQuickLinks: "Quick Links",
    footerSocial: "Social",
    whatsappAria: "Chat with Surax Pool on WhatsApp",
    styleSwitcherEyebrow: "Design Visualizer",
    styleSwitcherTitle: "Customize your dream pool style instantly.",
    styleGroupTiles: "Tile & Water Tone",
    styleGroupVibe: "Atmosphere",
    styleSwitcherIntro: "Experiment with different combinations to find the perfect mood for your backyard sanctuary.",
    estimateStep1Title: "Choose Your Pool Type",
    estimateStep1Desc: "Select the architectural style that fits your vision.",
    poolTypeInfinity: "Infinity Edge",
    poolTypeGeometric: "Modern Geometric",
    poolTypeLap: "Lap Pool",
    poolTypeResort: "Resort Style",
    estimateStep2Title: "Select Pool Size",
    estimateStep2Desc: "Estimated surface area of the pool.",
    poolSizeSmall: "Small (up to 25m²)",
    poolSizeMedium: "Medium (25m² - 50m²)",
    poolSizeLarge: "Large (50m² - 80m²)",
    poolSizeOlympic: "Custom Estate (80m²+)",
    estimateStep3Title: "Select Finish Material",
    estimateStep3Desc: "The interior surface of your pool.",
    finishPlaster: "Standard Plaster",
    finishTile: "Premium Ceramic Tile",
    finishGlass: "Glass Mosaic",
    finishStone: "Natural Stone",
    estimateStep4Title: "Luxury Add-ons",
    estimateStep4Desc: "Select any additional features (Multiple selection).",
    addonHeating: "Heating System",
    addonLighting: "Smart LED Lighting",
    addonSalt: "Saltwater System",
    addonCover: "Automatic Cover",
    estimateResultTitle: "Your Personalized Estimate",
    estimateCtaWhatsapp: "Get Official Quote via WhatsApp",
    estimateRestart: "Restart",
    estimatePrev: "Previous",
    estimateNext: "Next",
    roadmapEyebrow: "Project Journey",
    roadmapTitle: "Your path to a signature Surax Pool.",
    roadmapIntro: "We follow a disciplined 5-stage process to ensure your pool is built with precision, quality, and minimal disruption to your lifestyle.",
    roadmapStep1Label: "Design",
    roadmapStep2Label: "Excavation",
    roadmapStep3Label: "Structural",
    roadmapStep4Label: "Finishing",
    roadmapStep5Label: "Handover",
    roadmapStep1Title: "Design & Approval",
    roadmapStep1Desc: "Every project begins with architect-led design planning. We create 3D visualizations and handle all necessary permits to ensure a smooth start.",
    roadmapStep1Tip: "This is the best time to finalize your lighting and automation features.",
    roadmapStep2Title: "Excavation & Groundwork",
    roadmapStep2Desc: "Our team manages the site preparation and excavation with surgical precision, ensuring minimal impact on your existing landscape.",
    roadmapStep2Tip: "We use specialized equipment to keep the site clean and organized.",
    roadmapStep3Title: "Structural Engineering",
    roadmapStep3Desc: "We build the skeleton of your pool with high-grade steel and reinforced concrete, creating a foundation that lasts for decades.",
    roadmapStep3Tip: "Double-checking plumbing and electric lines now prevents any future issues.",
    roadmapStep4Title: "Premium Finishing",
    roadmapStep4Desc: "This is where your pool comes to life with custom tiles, pebble finishes, and beautiful coping stones selected during the design phase.",
    roadmapStep4Tip: "The right tile color can dramatically change how your water looks at noon.",
    roadmapStep5Title: "The Grand Handover",
    roadmapStep5Desc: "After filling and final chemistry balancing, we walk you through your new smart systems and hand over the keys to your private resort.",
    roadmapStep5Tip: "Ask us about our weekly maintenance plans for a worry-free experience.",
    proTipLabel: "Pro Tip",
    poolCalcEyebrow: "Pool Dimensions",
    poolCalcTitle: "Calculate Your Pool Size",
    poolCalcIntro: "Find out the surface area and water volume for your ideal pool dimensions.",
    calcLength: "Length",
    calcLengthPlaceholder: "15",
    calcWidth: "Width",
    calcWidthPlaceholder: "8",
    calcDepth: "Average Depth",
    calcDepthPlaceholder: "1.5",
    calcUnits: "Units",
    calcMetric: "Meters",
    calcImperial: "Feet",
    calcPresets: "Quick presets:",
    calcLap: "Lap Pool",
    calcGeometric: "Geometric",
    calcResort: "Resort Style",
    calcSurfaceArea: "Surface Area",
    calcVolumeLiters: "Water Volume (Liters)",
    calcVolumeGallons: "Water Volume (Gallons)",
    calcClear: "Clear",
    materialEyebrow: "Finish Options",
    materialTitle: "Compare Pool Finish Materials",
    materialIntro: "Explore different finish options with their costs, durability, and maintenance requirements.",
    viewGrid: "Grid View",
    viewTable: "Table View",
    sortName: "Sort by Name",
    sortPrice: "Sort by Price",
    sortDurability: "Sort by Durability",
    matDurability: "Durability",
    matMaintenance: "Maintenance",
    matAppearance: "Water Appearance",
    roiEyebrow: "Property Investment",
    roiTitle: "Pool ROI Calculator",
    roiIntro: "Discover how much a luxury pool can increase your property value.",
    roiHomeValue: "Current Home Value (ETB)",
    roiHomeValuePlaceholder: "5000000",
    roiPoolCost: "Pool Construction Cost (ETB)",
    roiPoolCostPlaceholder: "800000",
    roiTierLabel: "Pool Quality Tier",
    roiTierBasic: "Basic (Standard finishes)",
    roiTierPremium: "Premium (Upgraded finishes)",
    roiTierLuxury: "Luxury (Premium materials)",
    roiBefore: "Before Pool",
    roiAfter: "After Pool",
    roiValueIncrease: "Property Value Increase",
    roiIncreasePercent: "Percentage Increase",
    roiPaybackPeriod: "Est. Payback Period",
    roiDisclaimer: "Factors vary by location, market conditions, and pool quality. Figures are estimates based on Addis Ababa market data.",
    roiClear: "Clear",
    chatTitle: "Chat with Surax Pool",
    chatWelcome: "Hello! 👋 How can we help you with your pool project?",
    chatPlaceholder: "Type a message...",
    chatQuickOne: "How long does construction take?",
    chatQuickTwo: "What's the maintenance cost?",
    chatQuickThree: "Book a consultation",
    blogEyebrow: "Pool Guides",
    blogTitle: "Pool Care Tips & Knowledge",
    blogIntro: "Expert advice on pool maintenance, design inspiration, and construction insights.",
    blogSearchPlaceholder: "Search articles...",
    blogFilterAll: "All",
    blogFilterMaintenance: "Maintenance",
    blogFilterDesign: "Design",
    blogFilterConstruction: "Construction",
    blogViewGrid: "Grid",
    blogViewList: "List",
    blogBackButton: "← Back to Blog",
    conciergeTitle: "Surax Assistant",
    conciergeStatus: "Online | Ready to help",
    conciergeBook: "Book Consultation",
    conciergeEstimate: "Quick Estimate",
    conciergeChat: "Chat on WhatsApp",
    loaderMessage: "Crafting your private oasis..."
  },
  am: {
    navAbout: "ስለ እኛ",
    navServices: "አገልግሎቶች",
    navPricing: "ዋጋ",
    navGallery: "ጋለሪ",
    navTestimonials: "የደንበኛ አስተያየቶች",
    navFaq: "ጥያቄዎች",
    navContact: "ያግኙን",
    navHome: "መጀመሪያ",
    themeToggleText: "ጨለማ",
    themeToggleAria: "ጨለማ ሁነታን አንቃ",
    themeToggleLightText: "ብርሃን",
    themeToggleLightAria: "ብርሃን ሁነታን አንቃ",
    heroEyebrow: "የቅንጦት ውጭ ኑሮ",
    heroTitle: "የህልም መዋኛ ገንዳዎችን እንገነባለን",
    heroSubtitle: "የብጁ መዋኛ ገንዳ ዲዛይን፣ ግንባታ እና ጥገና",
    heroText: "ሱራክስ ፑል የተስተካከለ ዲዛይን፣ ትክክለኛ ግንባታ እና ከፍተኛ ደረጃ ጥገና ያላቸውን ውብ የመኖሪያ እና የእንግዳ አገልግሎት መዋኛ ፕሮጀክቶችን ይፈጥራል።",
    heroCtaPrimary: "ነጻ ዋጋ ይጠይቁ",
    heroCtaSecondary: "አገልግሎቶችን ይመልከቱ",
    metricOne: "የከፍተኛ ደረጃ የመዋኛ ልምድ ዓመታት",
    metricTwo: "የተጠናቀቁ የብጁ ፕሮጀክቶች",
    metricThree: "የደንበኛ እርካታ ደረጃ",
    signatureKicker: "ዋና አገልግሎት",
    signatureTitle: "ለዘመናዊ ኑሮ የተገነቡ የመዝናኛ ዘይቤ ገንዳዎች።",
    signatureText: "ከዘመናዊ ጠርዞች እስከ ሙሉ ጥገና እቅዶች ድረስ ከመጀመሪያ ሃሳብ እስከ ረጅም ጊዜ እንክብካቤ ድረስ የተሟላ ሂደት እናቀርባለን።",
    signatureListOne: "በስነ ሕንጻ የሚመራ የዲዛይን እቅድ",
    signatureListTwo: "ከፍተኛ ደረጃ አጨራረስ እና መብራት",
    signatureListThree: "ታማኝ ሳምንታዊ ጥገና እቅዶች",
    aboutEyebrow: "ስለ እኛ",
    aboutTitle: "በእምነት፣ ግልጽነት እና እንክብካቤ የተሞሉ የቅንጦት ገንዳ አካባቢዎችን እንፈጥራለን።",
    aboutIntroTitle: "የኩባንያ መግቢያ",
    aboutIntroTextOne: "ሱራክስ ፑል ዘመናዊ የመዋኛ ገንዳ ግንባታ እና ጥገና ኩባንያ ሲሆን ረጅም ጊዜ የሚቆዩ የውጭ ቦታዎችን ይፈጥራል።",
    aboutIntroTextTwo: "የዲዛይን እውቀት፣ የቴክኒክ ብቃት እና ታማኝ አገልግሎት በማጣመር እያንዳንዱ ፕሮጀክት ከመጀመሪያ እስከ መጨረሻ ከፍ ያለ እንዲሆን እናደርጋለን።",
    missionTitle: "ተልዕኮ",
    missionText: "የንብረት ዋጋን የሚጨምሩ፣ የማይረሱ ልምዶችን የሚፈጥሩ እና የደንበኛ አኗኗርን የሚያንጸባርቁ ገንዳዎችን ማዘጋጀትና መጠበቅ።",
    visionTitle: "ራዕይ",
    visionText: "በውበት፣ በጥንካሬ እና በአገልግሎት ጥራት ከፍተኛ መስፈርት በማስቀመጥ ታማኝ የገንዳ ስም መሆን።",
    reasonOneTitle: "ልምድ",
    reasonOneText: "ዲዛይን፣ ምህንድስና፣ አጨራረስ እና የኋላ እንክብካቤ የሚቆጣጠሩ ሙያዎች።",
    reasonTwoTitle: "ጥራት",
    reasonTwoText: "ከፍተኛ ደረጃ ንጥረ ነገሮች፣ ንጹህ የግንባታ ደረጃዎች እና ዝርዝር ትኩረት።",
    reasonThreeTitle: "እምነት",
    reasonThreeText: "ግልጽ የጊዜ ሰሌዳዎች፣ ታማኝ ግንኙነት እና ደንበኞች የሚቆዩበት አገልግሎት።",
    servicesEyebrow: "አገልግሎቶች",
    servicesTitle: "ለዲዛይን፣ ግንባታ፣ እድሳት እና እንክብካቤ የተሟላ መፍትሄዎች።",
    servicesIntro: "እያንዳንዱ አገልግሎት የደንበኛ ጉዞን ቀላል እና የገንዳውን ጥራት ከፍ ለማድረግ ይታሰባል።",
    serviceOneTitle: "የገንዳ ዲዛይን",
    serviceOneText: "በንብረትዎ መሠረት የተበጀ ኮንሴፕት፣ 3D እቅድ እና የንጥረ ነገር ምርጫ።",
    serviceTwoTitle: "የገንዳ ግንባታ",
    serviceTwoText: "ባለሙያ ቁፋሮ፣ መዋቅር ሥራ፣ ፓይፕ፣ ታይል፣ ዴክ፣ መብራት እና አጨራረስ።",
    serviceThreeTitle: "የገንዳ እድሳት",
    serviceThreeText: "አሮጌ ገንዳዎችን በአዲስ አጨራረስ፣ ዘመናዊ ስርዓቶች እና ተሻሻለ መብራት ማዘመን።",
    serviceFourTitle: "ማጽዳት እና ጥገና",
    serviceFourText: "የተዘጋጀ ማጽዳት፣ የውሃ ሚዛን እና የመሳሪያ ምርመራ ጥገና።",
    comparisonEyebrow: "በፊት / በኋላ",
    comparisonTitle: "የቤት መዋኛ ገንዳ ከአሮጌ እንዴት ወደ ፕሪሚየም የውጭ ኑሮ እንደሚለወጥ ይመልከቱ።",
    comparisonIntro: "ከእድሳት በፊት ያለ የቤት ገንዳ እና ከሱራክስ ፑል ማሻሻያ በኋላ ያለውን ለማነጻጸር ስላይደሩን ይንቀሳቀሱ።",
    comparisonBefore: "በፊት",
    comparisonAfter: "በኋላ",
    comparisonSliderLabel: "የበፊት እና የበኋላ ማነጻጸሪያ ስላይደር",
    comparisonNoteOneTitle: "ከእድሳት በፊት",
    comparisonNoteOneText: "የአሮጌ የቤት ገንዳዎች ቀላል፣ የደከሙ እና ከጀርባ ቦታው የተለዩ ሊመስሉ ይችላሉ።",
    comparisonNoteTwoTitle: "ከእድሳት በኋላ",
    comparisonNoteTwoText: "የተሻሻሉ አጨራረሶች፣ ንጹህ መስመሮች እና ብሩህ አቀማመጥ የቤት ገንዳውን ውብ የውጭ ቦታ ያደርጉታል።",
    galleryEyebrow: "ጋለሪ",
    galleryTitle: "ተጨማሪ የተጠናቀቁ የገንዳ እይታዎች በሙሉ ስክሪን ለማየት ዝግጁ ናቸው።",
    galleryIntro: "ማንኛውንም ምስል በትልቅ ለማየት እና በፕሪሚየም ላይትቦክስ ውስጥ ለመመርመር ይጫኑ።",
    reviewsEyebrow: "የጉግል ግምገማዎች",
    reviewsTitle: "በአዲስ አበባ የቤት ባለቤቶች የሚታመኑበት።",
    reviewsIntro: "የዲዛይን፣ የግንባታ እና የጥገና አገልግሎታችንን ጥራት የሚያንጸባርቅ እውነተኛ የደንበኛ አስተያየት።",
    reviewsSummaryText: "ከተረጋገጡ የደንበኛ ግምገማዎች ላይ የተመሰረተ አማካይ የጉግል ውጤት።",
    reviewsCta: "በጉግል ይመልከቱ",
    reviewOne: "\"ሱራክስ ፑል የነበረንን ራዕይ በትክክል አሳካ። ቡድኑ ከዲዛይን እስከ ማስረከብ ድረስ በጊዜው የሚደርስ፣ አክብሮት ያለው እና በዝርዝር የሚሰራ ነበር።\"",
    reviewAuthorOne: "መቅሊት አ.",
    reviewTwo: "\"የገንዳችን እድሳት አሁን በጣም ፕሪሚየም ይመስላል። አጨራረሱን፣ መብራቱን እና የውሃ ስርጭት ስርዓቱን ከጠበቅነው በፍጥነት አሻሽለዋል።\"",
    reviewAuthorTwo: "ናሆም ተ.",
    reviewThree: "\"በጣም ባለሙያ የጥገና አገልግሎት ነው። የውሃ ጥራት ሁልጊዜ ጥሩ ነው እና ግንኙነታቸውም ግልጽ ነው።\"",
    reviewAuthorThree: "ራሄል ገ.",
    userReviewsEyebrow: "ልምድዎን ያጋሩ",
    userReviewsTitle: "በድህረገፃችን ላይ ግምገማ ይተዉ።",
    userReviewsIntro: "አስተያየትዎ ሌሎች የቤት ባለቤቶች በእምነት እንዲመርጡ ይረዳል።",
    reviewFieldName: "ስምዎ",
    reviewFieldNamePlaceholder: "ለምሳሌ፦ ሀና ተ.",
    reviewFieldRating: "ደረጃ",
    reviewRatingFive: "5 - በጣም ጥሩ",
    reviewRatingFour: "4 - ጥሩ በጣም",
    reviewRatingThree: "3 - ጥሩ",
    reviewRatingTwo: "2 - መጠነኛ",
    reviewRatingOne: "1 - ደካማ",
    reviewFieldMessage: "ግምገማዎ",
    reviewFieldMessagePlaceholder: "ስለ ሱራክስ ፑል ያጋጠማችሁን ልምድ ይፃፉ",
    reviewSubmit: "ግምገማ ላክ",
    reviewPostSuccess: "እናመሰግናለን! ግምገማዎ ታክሏል።",
    reviewPostError: "እባክዎ ስም እና ግምገማ ያስገቡ።",
    reviewPostPending: "ግምገማዎ ተመዝግቧል እና ፈቃድ በመጠበቅ ላይ ነው።",
    reviewEmpty: "እስካሁን የደንበኛ ግምገማ የለም። የመጀመሪያውን ግምገማ ያጋሩ።",
    reviewModerationMode: "የማጣሪያ ሁኔታ (አዲስ ግምገማዎችን እስኪፀድቁ ድረስ ይደብቁ)",
    reviewPendingTitle: "በመጠባበቅ ላይ ያሉ ግምገማዎች",
    reviewApprove: "አፅድቅ",
    reviewEdit: "አርትዕ",
    reviewDelete: "ሰርዝ",
    reviewSaveEdit: "ለውጥ አስቀምጥ",
    reviewAverageLabel: "ከድህረ ገፅ ግምገማዎች አማካይ ውጤት",
    reviewsSummaryDynamic: "ከድህረ ገፅ ግምገማዎች አማካይ",
    galleryCaptionOne: "ዘመናዊ የቤት ገንዳ ከንጹህ ሰማያዊ ውሃ እና ውብ ቅርጽ ጋር።",
    galleryCaptionTwo: "ከባቢ አየርን የሚስብ የሌሊት መብራት ያለው ፕሪሚየም ሪዞርት-ቅጥ ገንዳ።",
    galleryCaptionThree: "ይህ የቤት ገንዳ ከመጨረሻ አጨራረስ በፊት በግንባታ ላይ እንዳለ ያሳያል።",
    galleryCaptionFour: "የተጠናቀቀው የቤት ገንዳ ከግንባታ በኋላ ንጹህ እና የተጠናቀቀ ውጤት ያሳያል።",
    galleryCaptionFive: "በከተማው ሰማይ ላይ የሚታይ የሲግኒቸር ኢንፊኒቲ ገንዳ ዲዛይን።",
    galleryCaptionSix: "ብጁ መብራት ያለው በቤት ውስጥ የሚገኝ የቅንጦት መዋኛ ገንዳ።",
    galleryCaptionSeven: "የእድሳት ፕሮጀክት፡ የላይኛው ገጽ ዝግጅት እና የመዋቅር ግምገማ።",
    filterAll: "ሁሉም",
    filterNew: "አዲስ ግንባታ",
    filterRenovation: "እድሳት",
    filterMaintenance: "ጥገና",
    testimonialsEyebrow: "የደንበኛ አስተያየቶች",
    testimonialsTitle: "ያለ መግባባት ጥራት የፈለጉ የቤት ባለቤቶች የሚታመኑበት።",
    testimonialOne: "\"ሱራክስ ፑል ጀርባ ቦታችንን የግል ማረፊያ አደረገው። ሂደቱ በጣም የተደራጀ እና ባለሙያ ነበር።\"",
    testimonialTwo: "\"እድሳቱ ከተጠበቀው በላይ ነበር። እያንዳንዱ አጨራረስ ከፍተኛ ደረጃ ያለው ይመስላል።\"",
    testimonialThree: "\"በዲዛይናቸው እና በዝርዝር ትኩረታቸው ምክንያት ሱራክስ ፑልን መረጥን። የፈለግነውን የቅንጦት ስሜት ሰጡን።\"",
    pricingEyebrow: "የዋጋ ጥቅሎች",
    pricingTitle: "ለእያንዳንዱ ራዕይ ግልጽ ዋጋ",
    pricingIntro: "ሁሉም ጥቅሎች ነጻ ምክክርን ያካትታሉ። የመጨረሻው ዋጋ እንደ ገንዳው መጠን፣ ዲዛይን እና ቦታ ይወሰናል።",
    pricingConsultingTitle: "ምክር",
    pricingConsultingAmount: "ከ 5,000 ብር ጀምሮ",
    pricingConsultingFeature1: "የቦታ ጉብኝት እና ግምገማ",
    pricingConsultingFeature2: "የባለሙያ ምክር እና ጥቆማዎች",
    pricingConsultingFeature3: "የፕሮጀክት አዋጭነት ጥናት",
    pricingConsultingFeature4: "የበጀት እቅድ መመሪያ",
    pricingConsultingFeature5: "የጊዜ ግምት",
    pricingConsultingCta: "አሁን ይያዙ",
    pricingDesignTitle: "ዲዛይን",
    pricingDesignAmount: "ከ 15,000 ብር ጀምሮ",
    pricingDesignFeature1: "ብጁ የገንዳ ዲዛይን ኮንሴፕት",
    pricingDesignFeature2: "3D እቅድ እና ምስላዊ እቅድ",
    pricingDesignFeature3: "የንጥረ ነገር እና አጨራረስ ምርጫ",
    pricingDesignFeature4: "የመብራት እና የዴክ ዲዛይን",
    pricingDesignFeature5: "ሙሉ ቴክኒካዊ ስዕሎች",
    pricingDesignCta: "ዲዛይን ያግኙ",
    pricingConstructionTitle: "ግንባታ",
    pricingConstructionAmount: "ከ 800,000 ብር ጀምሮ",
    pricingConstructionBadge: "በጣም ተወዳጅ",
    pricingConstructionFeature1: "የተሟላ የገንዳ ግንባታ",
    pricingConstructionFeature2: "ከፍተኛ ደረጃ ንጣፍ እና አጨራረስ",
    pricingConstructionFeature3: "የፓይፕ እና የማጣሪያ ስርዓት",
    pricingConstructionFeature4: "የኤልኢዲ መብራት ተከላ",
    pricingConstructionFeature5: "ዴክ እና ዙሪያ ስራዎች",
    pricingConstructionFeature6: "የ 1 ዓመት ዋስትና",
    pricingConstructionCta: "ዋጋ ይጠይቁ",
    pricingCleaningTitle: "ማጽዳት",
    pricingCleaningAmount: "በወር ከ 3,000 ብር ጀምሮ",
    pricingCleaningFeature1: "ሳምንታዊ የገንዳ ማጽዳት",
    pricingCleaningFeature2: "የውሃ ኬሚካል ሚዛን",
    pricingCleaningFeature3: "የፊልተር ምርመራ እና ማጽዳት",
    pricingCleaningFeature4: "የመሳሪያዎች ምርመራ",
    pricingCleaningFeature5: "ወርሃዊ የሁኔታ ሪፖርት",
    pricingCleaningCta: "እቅድ ይጀምሩ",
    pricingMaintenanceTitle: "ጥገና",
    pricingMaintenanceAmount: "በወር ከ 8,000 ብር ጀምሮ",
    pricingMaintenanceFeature1: "በማጽዳት እቅድ ውስጥ ያለ ሁሉ",
    pricingMaintenanceFeature2: "የመሳሪያዎች ጥገና እና መተካት",
    pricingMaintenanceFeature3: "የውሃ ፓምፕ አገልግሎት",
    pricingMaintenanceFeature4: "የመብራት ጥገና",
    pricingMaintenanceFeature5: "የቅድሚያ ድንገተኛ ምላሽ",
    pricingMaintenanceFeature6: "የተመደበ የእቅድ ስራ አስኪያጅ",
    pricingMaintenanceCta: "እቅድ ይጀምሩ",
    pricingDisclaimer: "ሁሉም ዋጋዎች መነሻ ናቸው። የመጨረሻው ዋጋ እንደ ገንዳው መጠን፣ የዲዛይን ውስብስብነት፣ ጥቅም ላይ የሚውሉ ቁሳቁሶች እና የፕሮጀክት ቦታ ይወሰናል። ለዝርዝር ዋጋ ያግኙን።",
    faqEyebrow: "ጥያቄዎች",
    faqTitle: "የገንዳ ፕሮጀክት ወይም የጥገና ጉብኝት ለማቀድ የሚረዱ መልሶች።",
    directionsButton: "በጎግል ካርታ አቅጣጫ ያግኙ",
    faqOneQ: "አዲስ የገንዳ ፕሮጀክት ምን ያህል ጊዜ ይወስዳል?",
    faqOneA: "አብዛኛዎቹ ፕሮጀክቶች በዲዛይን እና በስፍራ ሁኔታ መሠረት ጥቂት ሳምንታት ይወስዳሉ።",
    faqTwoQ: "መደበኛ የጥገና እቅዶች አሉ?",
    faqTwoA: "አዎን። ሳምንታዊ እና ብጁ የጥገና እቅዶችን እናቀርባለን።",
    faqThreeQ: "ገንዳውን ሙሉ በሙሉ ሳልሠራ እድሳት መጠየቅ እችላለሁ?",
    faqThreeA: "በፍጹም። አጨራረስ፣ መብራት እና የማጣሪያ መሳሪያዎችን ማሻሻል እንችላለን።",
    faqFourQ: "ከዋጋ ጥያቄ በፊት የንብረቴን ፎቶ መላክ እችላለሁ?",
    faqFourA: "አዎን። ጥያቄ ሲልኩ የኢሜይል መተግበሪያ ከዝርዝሮችዎ ጋር ይከፈታል—ከመላኩ በፊት የስፍራ ፎቶዎችን ያያይዙ።",
    contactEyebrow: "ያግኙን",
    contactTitle: "የሚቀጥለውን የቅንጦት ገንዳ ፕሮጀክት ይጀምሩ።",
    contactIntro: "ስለ ንብረትዎ፣ ራዕይዎ እና የሚፈልጉት የገንዳ ልምድ ያሳውቁን።",
    contactPhone: "ስልክ: 0922729374",
    contactEmail: "ኢሜይል: suraxpool@gmail.com",
    contactLocation: "አድራሻ: ቦሌ ሮድ፣ አዲስ አበባ፣ ኢትዮጵያ",
    contactDirections: "አቅጣጫ ክፈት",
    fieldName: "ስም",
    fieldNamePlaceholder: "ሙሉ ስምዎ",
    fieldEmail: "ኢሜይል",
    fieldEmailPlaceholder: "you@example.com",
    fieldPhone: "ስልክ",
    fieldPhonePlaceholder: "+251 9xx xxx xxx",
    fieldProjectType: "የፕሮጀክት አይነት",
    fieldProjectTypePlaceholder: "አዲስ ግንባታ፣ እድሳት፣ ጥገና",
    fieldUpload: "የቦታ ምስል ያክሉ",
    fieldMessage: "መልእክት",
    fieldMessagePlaceholder: "ስለ ገንዳ ፕሮጀክትዎ ይግለጹ",
    contactSubmit: "ጥያቄ ላክ",
    formStatusPreparing: "ጥያቄዎን እያዘጋጀን ነው…",
    formStatusSuccess: "እናመሰግናለን! በቅርቡ እናገኝዎታለን።",
    formStatusError: "እባክዎ ሁሉንም አስፈላጊ መረጃዎች ያስገቡ።",
    formImageHint: "ከመላኩ በፊት የመረጡትን የቦታ ፎቶ በኢሜይል ያያይዙ።",
    footerText: "ለዘመናዊ ንብረቶች የቅንጦት የመዋኛ ገንዳ ዲዛይን፣ ግንባታ፣ እድሳት እና ጥገና።",
    footerQuickLinks: "ፈጣን አገናኞች",
    footerSocial: "ማህበራዊ",
    whatsappAria: "በዋትሳፕ ከሱራክስ ፑል ጋር ይወያዩ",
    styleSwitcherEyebrow: "የዲዛይን እይታ",
    styleSwitcherTitle: "የህልምዎን ገንዳ ዘይቤ ወዲያውኑ ያብጁ።",
    styleGroupTiles: "የንጣፍ እና የውሃ ቀለም",
    styleGroupVibe: "አካባቢው",
    styleSwitcherIntro: "ለጓሮዎ ምቹ ስሜት ለማግኘት የተለያዩ ጥምረቶችን ይሞክሩ።",
    estimateStep1Title: "የገንዳ ዓይነት ይምረጡ",
    estimateStep1Desc: "ለራዕይዎ የሚስማማውን የሕንፃ ዘይቤ ይምረጡ።",
    poolTypeInfinity: "ኢንፊኒቲ ኤጅ",
    poolTypeGeometric: "ዘመናዊ ጂኦሜትሪክ",
    poolTypeLap: "ላፕ ፑል",
    poolTypeResort: "ሪዞርት ቅጥ",
    estimateStep2Title: "የገንዳ መጠን ይምረጡ",
    estimateStep2Desc: "የገንዳው ግምታዊ ስፋት።",
    poolSizeSmall: "ትንሽ (እስከ 25ሜ²)",
    poolSizeMedium: "መካከለኛ (25ሜ² - 50ሜ²)",
    poolSizeLarge: "ትልቅ (50ሜ² - 80ሜ²)",
    poolSizeOlympic: "ብጁ ትልቅ (80ሜ²+)",
    estimateStep3Title: "የአጨራረስ ቁሳቁስ ይምረጡ",
    estimateStep3Desc: "የገንዳው ውስጠኛው ገጽ።",
    finishPlaster: "መደበኛ ፕላስተር",
    finishTile: "ፕሪሚየም ሴራሚክ ታይል",
    finishGlass: "የመስታወት ሞዛይክ",
    finishStone: "የተፈጥሮ ድንጋይ",
    estimateStep4Title: "ተጨማሪ የቅንጦት ዕቃዎች",
    estimateStep4Desc: "ተጨማሪ ተግባራትን ይምረጡ (ብዙ መምረጥ ይቻላል)።",
    addonHeating: "የውሃ ማሞቂያ",
    addonLighting: "ዘመናዊ የኤልኢዲ መብራት",
    addonSalt: "የጨው ውሃ ስርዓት",
    addonCover: "አውቶማቲክ መሸፈኛ",
    estimateResultTitle: "የእርስዎ የግል ግምት",
    estimateCtaWhatsapp: "በዋትሳፕ ትክክለኛ ዋጋ ይጠይቁ",
    estimateRestart: "እንደገና ጀምር",
    estimatePrev: "ወደ ኋላ",
    estimateNext: "ቀጣይ",
    roadmapEyebrow: "የፕሮጀክት ጉዞ",
    roadmapTitle: "የእርስዎ መንገድ ወደ ሱራክስ ፑል ፕሮጀክት።",
    roadmapIntro: "ገንዳዎ በጥንቃቄ፣ በጥራት እና በአኗኗርዎ ላይ አነስተኛ ረብሻ እንዲኖረው ባለ 5-ደረጃ ሂደትን እንከተላለን።",
    roadmapStep1Label: "ዲዛይን",
    roadmapStep2Label: "ቁፋሮ",
    roadmapStep3Label: "መዋቅር",
    roadmapStep4Label: "አጨራረስ",
    roadmapStep5Label: "ርክክብ",
    roadmapStep1Title: "ዲዛይን እና ፈቃድ",
    roadmapStep1Desc: "እያንዳንዱ ፕሮጀክት በስነ-ሕንፃ ዲዛይን ይጀምራል። የ3-ል ምስሎችን እንፈጥራለን እና አስፈላጊውን ፈቃዶች እናሟላለን።",
    roadmapStep1Tip: "የመብራት እና የአውቶሜሽን ተግባራትን ለመጨረስ ይህ ምርጥ ጊዜ ነው።",
    roadmapStep2Title: "ቁፋሮ እና ዝግጅት",
    roadmapStep2Desc: "ቡድናችን በንብረትዎ ላይ አነስተኛ ተፅእኖ እንዲኖረው በማድረግ የቦታ ዝግጅት እና ቁፋሮውን በከፍተኛ ጥንቃቄ ያከናውናል።",
    roadmapStep2Tip: "ሳይቱን ንፁህ እና የተደራጀ ለማድረግ ልዩ መሳሪያዎችን እንጠቀማለን።",
    roadmapStep3Title: "የመዋቅር ምህንድስና",
    roadmapStep3Desc: "ለብዙ አስርት ዓመታት የሚቆይ መሠረት በመፍጠር የገንዳዎን አጽም በከፍተኛ ደረጃ ብረት እና ኮንክሪት እንገነባለን።",
    roadmapStep3Tip: "የፓይፕ እና የኤሌክትሪክ መስመሮችን አሁን መፈተሽ ለወደፊቱ ችግሮችን ይከላከላል።",
    roadmapStep4Title: "ፕሪሚየም አጨራረስ",
    roadmapStep4Desc: "ገንዳዎ በዲዛይን ወቅት በመረጧቸው ብጁ ታይሎች እና ውብ አጨራረሶች አማካኝነት ሕያው የሚሆንበት ደረጃ ነው።",
    roadmapStep4Tip: "ትክክለኛው የታይል ቀለም የውሃዎ ቀለም በቀትር ጊዜ እንዴት እንደሚታይ በእጅጉ ሊለውጠው ይችላል።",
    roadmapStep5Title: "ታላቁ ርክክብ",
    roadmapStep5Desc: "ገንዳው በውሃ ተሞልቶ የውሃው ኬሚስትሪ ከተስተካከለ በኋላ ስለ ዘመናዊ ስርዓቶችዎ እናስረዳዎታለን።",
    roadmapStep5Tip: "ስለ ሳምንታዊ የጥገና ዕቅዶቻችን ይጠይቁን።",
    proTipLabel: "ጠቃሚ ምክር",
    poolCalcEyebrow: "የገንዳ ልኬቶች",
    poolCalcTitle: "የገንዳ መጠኑን ያሰሉ",
    poolCalcIntro: "ለእርስዎ ሀሳብ ወደ ገንዳ ላይ ወለል አካባቢ እና ውሃ መጠን ይወቁ።",
    calcLength: "ርዝመት",
    calcLengthPlaceholder: "15",
    calcWidth: "ስፋት",
    calcWidthPlaceholder: "8",
    calcDepth: "አማካይ ጥልቀት",
    calcDepthPlaceholder: "1.5",
    calcUnits: "ክፍሎች",
    calcMetric: "ሜትር",
    calcImperial: "ጫማ",
    calcPresets: "ፈጣን ቅድመ-ቁብር:",
    calcLap: "ላፕ ፑል",
    calcGeometric: "ጂኦሜትሪክ",
    calcResort: "ሪዞርት ቅጥ",
    calcSurfaceArea: "ወለል አካባቢ",
    calcVolumeLiters: "ውሃ መጠን (ሊትር)",
    calcVolumeGallons: "ውሃ መጠን (ጋሎን)",
    calcClear: "ግልጽ",
    materialEyebrow: "አጨራረስ አማራጮች",
    materialTitle: "የገንዳ አጨራረስ ቁሳቁሶችን ያወዳድሩ",
    materialIntro: "የተለያዩ አጨራረስ አማራጮችን ከሌሎቻቸው ዋጋ፣ ዝህ ነበልባል እና ጥገናዎ አሁን ይዳስሱ።",
    viewGrid: "ግሪድ ዩ",
    viewTable: "ሠንጠረዥ ዩ",
    sortName: "በስም ይቅይሩ",
    sortPrice: "በዋጋ ይቅይሩ",
    sortDurability: "በሂወታዊ ሞገድ ይቅይሩ",
    matDurability: "ዝህ ነበልባል",
    matMaintenance: "ጥገና",
    matAppearance: "ውሃ ገጽታ",
    roiEyebrow: "ንብረት ኢንቬስትመንት",
    roiTitle: "ገንዳ ROI ሂሳብ",
    roiIntro: "ፍላጻ ገንዳ ምን ያህል ንብረትዎ ዋጋ ሊጨምር እንደሚችል ይወቁ።",
    roiHomeValue: "የአሁኑ ቤት ዋጋ (ብር)",
    roiHomeValuePlaceholder: "5000000",
    roiPoolCost: "የገንዳ ግንባታ ወጪ (ብር)",
    roiPoolCostPlaceholder: "800000",
    roiTierLabel: "የገንዳ ጥራት ደረጃ",
    roiTierBasic: "መሠረታዊ (መደበኛ አጨራረሶች)",
    roiTierPremium: "ፕሪሚየም (ተሻሻለ አጨራረሶች)",
    roiTierLuxury: "ሉክስ (ፕሪሚየም ቁሳቁሶች)",
    roiBefore: "ገንዳ በፊት",
    roiAfter: "ገንዳ በኋላ",
    roiValueIncrease: "የንብረት ዋጋ ጭማሪ",
    roiIncreasePercent: "ፍቃዳዊ ጭማሪ",
    roiPaybackPeriod: "Est. ክፍያ ጊዜ",
    roiDisclaimer: "ሁኔታዎች ለአካባቢ፣ ገበያ ሁኔታ እና ገንዳ ጥራት ይለያያል። ምስሎች በአዲስ አበባ ገበያ መረጃ ላይ ተመስርተዋል።",
    roiClear: "ግልጽ",
    chatTitle: "ከሱራክስ ፑል ጋር ወይታ",
    chatWelcome: "ሰላም! 👋 ከገንዳ ፕሮጀክትዎ ጋር እንዴት ልንረዳዎ እንችላለን?",
    chatPlaceholder: "መልእክት ይተይቡ...",
    chatQuickOne: "ግንባታ ምን ያህል ጊዜ ይወስዳል?",
    chatQuickTwo: "ጥገናው ምን ያህል 비용?",
    chatQuickThree: "ምክር ይያዙ",
    blogEyebrow: "የገንዳ መመሪያዎች",
    blogTitle: "የገንዳ ጥገና ጠቃሚ ምክሮች",
    blogIntro: "ስለ ገንዳ ጥገና፣ ዲዛይን ተነሳሳ እና የግንባታ ጥበብ ባለሙያ ምክር።",
    blogSearchPlaceholder: "ጽሑፎችን ይፈልጉ...",
    blogFilterAll: "ሁሉም",
    blogFilterMaintenance: "ጥገና",
    blogFilterDesign: "ዲዛይን",
    blogFilterConstruction: "ግንባታ",
    blogViewGrid: "ግሪድ",
    blogViewList: "ዝርዝር",
    blogBackButton: "← ወደ ብሎግ ይመለሱ",
    conciergeTitle: "የሱራክስ ረዳት",
    conciergeStatus: "ኦንላይን | ለመርዳት ዝግጁ",
    conciergeBook: "ምክክር ይያዙ",
    conciergeEstimate: "ፈጣን ግምት",
    conciergeChat: "በዋትሳፕ ያውሩ",
    loaderMessage: "የግል ገነትዎን እንፈጥራለን..."
  }
};

let currentLanguage = "en";
let currentTheme = "light";
const REVIEW_STORAGE_KEY = "surax-user-reviews";
const REVIEW_MODERATION_KEY = "surax-review-moderation";
let editingReviewId = null;

function updateThemeToggleText() {
  if (!themeToggle) {
    return;
  }
  const bundle = translations[currentLanguage] || translations.en;
  const icon = themeToggle.querySelector(".theme-toggle-icon");
  const text = themeToggle.querySelector(".theme-toggle-text");
  const isDark = currentTheme === "dark";

  if (icon) {
    icon.textContent = isDark ? "☀" : "🌙";
  }
  if (text) {
    text.textContent = isDark ? (bundle.themeToggleLightText || "Light") : (bundle.themeToggleText || "Dark");
  }
  themeToggle.setAttribute(
    "aria-label",
    isDark ? (bundle.themeToggleLightAria || "Enable light mode") : (bundle.themeToggleAria || "Enable dark mode")
  );
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

window.initScrollReveal = () => {
  const items = document.querySelectorAll("[data-reveal]:not(.is-visible)");
  if ("IntersectionObserver" in window && items.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }
};

initScrollReveal();

if (testimonialCards.length > 0) {
  let currentTestimonial = 0;
  let testimonialInterval;

  const showTestimonial = (index) => {
    currentTestimonial = (index + testimonialCards.length) % testimonialCards.length;

    testimonialCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === currentTestimonial);
    });

    testimonialDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentTestimonial);
    });
  };

  const startAutoplay = () => {
    testimonialInterval = window.setInterval(() => {
      showTestimonial(currentTestimonial + 1);
    }, 5000);
  };

  const resetAutoplay = () => {
    window.clearInterval(testimonialInterval);
    startAutoplay();
  };

  prevTestimonial?.addEventListener("click", () => {
    showTestimonial(currentTestimonial - 1);
    resetAutoplay();
  });

  nextTestimonial?.addEventListener("click", () => {
    showTestimonial(currentTestimonial + 1);
    resetAutoplay();
  });

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
      resetAutoplay();
    });
  });

  showTestimonial(0);
  startAutoplay();
}

function setLanguage(language) {
  currentLanguage = language;
  const bundle = translations[language] || translations.en;

  document.documentElement.lang = language === "am" ? "am" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (bundle[key]) {
      element.textContent = bundle[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (bundle[key]) {
      element.setAttribute("placeholder", bundle[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (bundle[key]) {
      element.setAttribute("aria-label", bundle[key]);
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });

  updateThemeToggleText();
  renderUserReviews();
  if (window.updateRoadmap && typeof window.currentRoadmapIndex !== 'undefined') window.updateRoadmap(window.currentRoadmapIndex);
  if (window.updateEstimatorUI) window.updateEstimatorUI();
  if (window.renderMaterialGrid) window.renderMaterialGrid();
  if (window.renderBlogGrid) window.renderBlogGrid();
  
  localStorage.setItem("surax-language", language);
}

if (nav) {
  const updateStickyNav = () => {
    nav.classList.toggle("is-sticky", window.scrollY > 14);
  };
  window.addEventListener("scroll", updateStickyNav, { passive: true });
  updateStickyNav();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

  // Theme Persistence Engine
  function setTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.body.classList.toggle('theme-dark', currentTheme === 'dark');
    localStorage.setItem('surax-theme', currentTheme);
    updateThemeToggleText();
  }

  function initTheme() {
    const saved = localStorage.getItem('surax-theme');
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  themeToggle?.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  initTheme();
  setLanguage(localStorage.getItem("surax-language") || "en");

function createStars(rating) {
  return "★★★★★".slice(0, rating).padEnd(5, "☆");
}

function loadStoredReviews() {
  try {
    const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed
      .filter((item) => item && item.name && item.message && item.rating)
      .map((item) => ({
        id: item.id || `r_${Math.random().toString(36).slice(2, 9)}`,
        name: item.name,
        message: item.message,
        rating: Math.min(5, Math.max(1, Number(item.rating) || 5)),
        approved: item.approved !== false,
      }));
  } catch {
    return [];
  }
}

function saveStoredReviews(reviews) {
  localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews.slice(0, 12)));
}

function getModerationMode() {
  return localStorage.getItem(REVIEW_MODERATION_KEY) === "on";
}

function setModerationMode(enabled) {
  localStorage.setItem(REVIEW_MODERATION_KEY, enabled ? "on" : "off");
}

function updateAverageRating(reviews) {
  if (!reviewsAverageValue || !reviewsAverageStars || !reviewsAverageText) {
    return;
  }
  const bundle = translations[currentLanguage] || translations.en;
  const approvedReviews = reviews.filter((review) => review.approved);
  if (approvedReviews.length === 0) {
    reviewsAverageValue.textContent = "4.9";
    reviewsAverageStars.textContent = "★★★★★";
    reviewsAverageStars.setAttribute("aria-label", "4.9 out of 5 stars");
    reviewsAverageText.textContent = bundle.reviewsSummaryText;
    return;
  }

  const avg = approvedReviews.reduce((sum, review) => sum + Number(review.rating), 0) / approvedReviews.length;
  const rounded = Math.round(avg * 10) / 10;
  reviewsAverageValue.textContent = rounded.toFixed(1);
  reviewsAverageStars.textContent = createStars(Math.round(rounded));
  reviewsAverageStars.setAttribute("aria-label", `${rounded.toFixed(1)} out of 5 stars`);
  reviewsAverageText.textContent = `${bundle.reviewsSummaryDynamic} (${approvedReviews.length})`;
}

function setFormFromReview(review) {
  if (!reviewForm) {
    return;
  }
  reviewForm.querySelector('input[name="reviewerName"]').value = review.name;
  reviewForm.querySelector('select[name="reviewRating"]').value = String(review.rating);
  reviewForm.querySelector('textarea[name="reviewMessage"]').value = review.message;
}

function clearEditState() {
  editingReviewId = null;
  if (!reviewForm) {
    return;
  }
  const bundle = translations[currentLanguage] || translations.en;
  const submit = reviewForm.querySelector('button[type="submit"]');
  if (submit) {
    submit.textContent = bundle.reviewSubmit;
  }
}

function createReviewCard(review, bundle, isPending) {
  const card = document.createElement("article");
  card.className = "user-review-card";

  const meta = document.createElement("div");
  meta.className = "user-review-meta";

  const name = document.createElement("strong");
  name.textContent = review.name;

  const stars = document.createElement("span");
  stars.className = "user-review-stars";
  stars.textContent = createStars(Number(review.rating));
  meta.append(name, stars);

  const message = document.createElement("p");
  message.textContent = review.message;

  const actions = document.createElement("div");
  actions.className = "user-review-actions";

  if (isPending) {
    const approveButton = document.createElement("button");
    approveButton.type = "button";
    approveButton.className = "review-action-button";
    approveButton.textContent = bundle.reviewApprove;
    approveButton.dataset.action = "approve";
    approveButton.dataset.id = review.id;
    actions.appendChild(approveButton);
  }

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "review-action-button";
  editButton.textContent = bundle.reviewEdit;
  editButton.dataset.action = "edit";
  editButton.dataset.id = review.id;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "review-action-button is-danger";
  deleteButton.textContent = bundle.reviewDelete;
  deleteButton.dataset.action = "delete";
  deleteButton.dataset.id = review.id;

  actions.append(editButton, deleteButton);
  card.append(meta, message, actions);
  return card;
}

function renderUserReviews() {
  if (!userReviewsList) {
    return;
  }
  const bundle = translations[currentLanguage] || translations.en;
  const reviews = loadStoredReviews();
  userReviewsList.innerHTML = "";
  if (userReviewsPending) {
    userReviewsPending.innerHTML = "";
  }

  const approvedReviews = reviews.filter((review) => review.approved);
  const pendingReviews = reviews.filter((review) => !review.approved);
  updateAverageRating(reviews);

  if (approvedReviews.length === 0) {
    const empty = document.createElement("p");
    empty.className = "section-intro";
    empty.textContent = bundle.reviewEmpty;
    userReviewsList.appendChild(empty);
  } else {
    approvedReviews.forEach((review) => {
      userReviewsList.appendChild(createReviewCard(review, bundle, false));
    });
  }

  if (userReviewsPending && pendingReviews.length > 0) {
    const title = document.createElement("p");
    title.className = "pending-title";
    title.textContent = `${bundle.reviewPendingTitle} (${pendingReviews.length})`;
    userReviewsPending.appendChild(title);
    pendingReviews.forEach((review) => {
      userReviewsPending.appendChild(createReviewCard(review, bundle, true));
    });
  }
}

// GALLERY FILTERING LOGIC (Moved outside to prevent duplicate listeners)
const initGalleryFilters = () => {
  const filterButtons = document.querySelectorAll(".gallery-filter-btn");
  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.dataset.category;
        
        // Update active button UI
        filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        // Filter items
        const items = document.querySelectorAll(".gallery-item");
        items.forEach((item) => {
          // Add a smooth fade out/in effect
          if (category === "all" || item.dataset.category === category) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 10);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.95)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }
};

initGalleryFilters();

if (reviewForm && reviewStatus) {
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bundle = translations[currentLanguage] || translations.en;
    const fd = new FormData(reviewForm);
    const name = (fd.get("reviewerName") || "").toString().trim();
    const message = (fd.get("reviewMessage") || "").toString().trim();
    const rating = Number(fd.get("reviewRating") || 5);

    if (!name || !message) {
      reviewStatus.textContent = bundle.reviewPostError;
      reviewStatus.classList.remove("is-success");
      return;
    }

    const reviews = loadStoredReviews();
    if (editingReviewId) {
      const target = reviews.find((review) => review.id === editingReviewId);
      if (target) {
        target.name = name.slice(0, 50);
        target.message = message.slice(0, 320);
        target.rating = Math.min(5, Math.max(1, rating));
      }
    } else {
      reviews.unshift({
        id: `r_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
        name: name.slice(0, 50),
        message: message.slice(0, 320),
        rating: Math.min(5, Math.max(1, rating)),
        approved: !getModerationMode(),
      });
    }
    saveStoredReviews(reviews);
    renderUserReviews();

    reviewStatus.textContent = editingReviewId
      ? bundle.reviewPostSuccess
      : (getModerationMode() ? bundle.reviewPostPending : bundle.reviewPostSuccess);
    reviewStatus.classList.add("is-success");
    reviewForm.reset();
    clearEditState();
  });
}

function handleReviewAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const action = button.dataset.action;
  const id = button.dataset.id;
  const reviews = loadStoredReviews();
  const target = reviews.find((review) => review.id === id);
  if (!target) {
    return;
  }

  if (action === "approve") {
    target.approved = true;
  } else if (action === "edit") {
    editingReviewId = target.id;
    setFormFromReview(target);
    const bundle = translations[currentLanguage] || translations.en;
    const submit = reviewForm?.querySelector('button[type="submit"]');
    if (submit) {
      submit.textContent = bundle.reviewSaveEdit;
    }
    reviewForm?.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (action === "delete") {
    const next = reviews.filter((review) => review.id !== id);
    saveStoredReviews(next);
    if (editingReviewId === id) {
      clearEditState();
      reviewForm?.reset();
    }
    renderUserReviews();
    return;
  }

  saveStoredReviews(reviews);
  renderUserReviews();
}

userReviewsList?.addEventListener("click", handleReviewAction);
userReviewsPending?.addEventListener("click", handleReviewAction);

if (moderationModeToggle) {
  moderationModeToggle.checked = getModerationMode();
  moderationModeToggle.addEventListener("change", () => {
    setModerationMode(Boolean(moderationModeToggle.checked));
  });
}

renderUserReviews();

if (comparisonStage && comparisonRange) {
  const updateComparison = () => {
    comparisonStage.style.setProperty("--comparison-position", `${comparisonRange.value}%`);
  };

  comparisonRange.addEventListener("input", updateComparison);
  updateComparison();
}

if (lightbox && galleryTriggers.length > 0) {
  let currentLightboxIndex = 0;

  const openLightbox = (index) => {
    const trigger = galleryTriggers[index];
    if (!trigger) {
      return;
    }

    currentLightboxIndex = index;
    const image = trigger.querySelector("img");
    const caption = trigger.querySelector("span");

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.removeAttribute("hidden");
    document.body.classList.add("menu-open");
  };

  const closeLightbox = () => {
    lightbox.setAttribute("hidden", "");
    document.body.classList.remove("menu-open");
  };

  const moveLightbox = (direction) => {
    const nextIndex = (currentLightboxIndex + direction + galleryTriggers.length) % galleryTriggers.length;
    openLightbox(nextIndex);
  };

  galleryTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => openLightbox(index));
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => moveLightbox(-1));
  lightboxNext?.addEventListener("click", () => moveLightbox(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hasAttribute("hidden")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      moveLightbox(-1);
    }

    if (event.key === "ArrowRight") {
      moveLightbox(1);
    }
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bundle = translations[currentLanguage] || translations.en;
    
    const fd = new FormData(contactForm);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const projectType = (fd.get("projectType") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();

    if (!name || !email || !phone || !message) {
      formStatus.textContent = bundle.formStatusError;
      formStatus.classList.remove("is-success");
      formStatus.classList.add("is-error");
      return;
    }

    formStatus.textContent = bundle.formStatusPreparing;
    formStatus.classList.remove("is-error", "is-success");

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }

    const whatsappMessage = [
      "Hello Surax Pool! 🏊",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project Type: ${projectType || "—"}`,
      `Message: ${message}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/251922729374?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Try WhatsApp first, fall back to email
    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (!whatsappWindow || whatsappWindow.closed) {
      // Popup was blocked or WhatsApp not available — use email fallback
      const emailSubject = encodeURIComponent(`Pool Inquiry from ${name}`);
      const emailBody = encodeURIComponent(whatsappMessage);
      window.location.href = `mailto:suraxpool@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    }

    // Show success state
    formStatus.textContent = bundle.formStatusSuccess;
    formStatus.classList.add("is-success");
    
    // Show the success message UI
    const contactSuccess = document.getElementById("contact-success");
    if (contactSuccess) {
      contactForm.style.display = "none";
      contactSuccess.removeAttribute("hidden");
      
      // Scroll to success message
      window.scrollTo({
        top: contactSuccess.offsetTop - 150,
        behavior: "smooth"
      });
    }
    
    contactForm.reset();

    if (submitButton) {
      submitButton.disabled = false;
    }
  });
}
/* ==========================================================================
   Legendary Visualizer Studio Logic
   ========================================================================== */
const visualizerStage = document.getElementById('visualizer-stage');
const lightingFx = document.getElementById('lighting-fx');
const previewBase = document.querySelector('.preview-base');
const hudAtmosphere = document.getElementById('hud-atmosphere');
const hudMaterial = document.getElementById('hud-material');
const toggleCaustics = document.getElementById('toggle-caustics');

const lightingPresets = {
  day: { 
    filter: 'none', 
    overlay: 'transparent',
    label: 'Midday Sun'
  },
  twilight: { 
    filter: 'sepia(0.2) saturate(1.4) brightness(0.9)', 
    overlay: 'linear-gradient(to top, rgba(255, 100, 0, 0.2), transparent)',
    label: 'Golden Hour'
  },
  night: { 
    filter: 'hue-rotate(200deg) brightness(0.6) contrast(1.2)', 
    overlay: 'rgba(0, 20, 50, 0.4)',
    label: 'Midnight Glow'
  }
};

const texturePresets = {
  crystal: {
    filter: 'none',
    label: 'Crystal Mosaic'
  },
  marble: {
    filter: 'grayscale(0.3) contrast(1.3) brightness(0.8)',
    label: 'Midnight Marble'
  },
  emerald: {
    filter: 'hue-rotate(140deg) saturate(1.5)',
    label: 'Natural Stone'
  }
};

// Handle Lighting Buttons
document.querySelectorAll('.visualizer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    const preset = lightingPresets[value];
    
    document.querySelectorAll('.visualizer-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    
    if (previewBase) previewBase.style.filter = preset.filter;
    if (lightingFx) lightingFx.style.background = preset.overlay;
    if (hudAtmosphere) hudAtmosphere.textContent = preset.label;
  });
});

// Handle Texture Buttons
document.querySelectorAll('.texture-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    const preset = texturePresets[value];
    
    document.querySelectorAll('.texture-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    
    // We apply texture effects via secondary filter or by swapping the base
    // For now, we simulate with filters for legendary feel
    if (previewBase) previewBase.style.filter = preset.filter;
    if (hudMaterial) hudMaterial.textContent = preset.label;
  });
});

// Handle Caustics Toggle
toggleCaustics?.addEventListener('change', () => {
  const waterOverlay = document.getElementById('water-caustics');
  if (waterOverlay) {
    waterOverlay.style.display = toggleCaustics.checked ? 'block' : 'none';
  }
});

// Handle Visualizer WhatsApp Request
const visualizerWhatsappBtn = document.getElementById('visualizer-whatsapp-btn');
visualizerWhatsappBtn?.addEventListener('click', () => {
  const atmosphere = hudAtmosphere?.textContent || "Custom Design";
  const material = hudMaterial?.textContent || "Selected Finish";
  const caustics = (toggleCaustics && toggleCaustics.checked) ? "Active Water Caustics" : "Standard Finish";
  
  const msg = `Hello Surax Pool! 🌊\nI just designed a custom pool in your Visualizer Studio and I love the look!\n\n✨ Design Configuration:\n- Atmosphere: ${atmosphere}\n- Material: ${material}\n- Effects: ${caustics}\n\nI would like to discuss this design for my property. Can you provide more information?`;
  
  window.open(`https://wa.me/251922729374?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ==========================================================================
   Interactive Cost Estimator Logic
   ========================================================================== */
const estimator = document.querySelector("#cost-estimator");
if (estimator) {
  const steps = estimator.querySelectorAll(".estimator-step");
  const progressSteps = estimator.querySelectorAll(".progress-step");
  const nextBtn = estimator.querySelector("#next-step");
  const prevBtn = estimator.querySelector("#prev-step");
  const display = estimator.querySelector("#estimate-display");
  const breakdown = estimator.querySelector("#estimate-breakdown");
  const whatsappBtn = estimator.querySelector("#estimate-whatsapp");
  const restartBtn = estimator.querySelector("#restart-estimator");
  
  let currentStep = 1;
  const selections = {
    type: null,
    size: null,
    finish: null,
    addons: []
  };

  window.updateEstimatorUI = () => {
    steps.forEach(step => {
      step.classList.toggle("is-active", parseInt(step.dataset.step) === currentStep);
    });
    
    progressSteps.forEach(step => {
      const stepNum = parseInt(step.dataset.step);
      step.classList.toggle("is-active", stepNum === currentStep);
      step.classList.toggle("is-complete", stepNum < currentStep);
    });

    if (prevBtn) prevBtn.disabled = currentStep === 1 || currentStep === 5;
    
    const bundle = translations[currentLanguage] || translations.en;
    if (currentStep === 5) {
      calculateEstimate();
      if (nextBtn) nextBtn.style.display = "none";
    } else {
      if (nextBtn) {
        nextBtn.style.display = "block";
        nextBtn.textContent = bundle.estimateNext;
      }
    }
  };

  const calculateEstimate = () => {
    let total = 0;
    const items = [];
    const bundle = translations[currentLanguage] || translations.en;

    // Type
    if (selections.type && selections.type.value) {
      total += selections.type.price;
      const key = `poolType${selections.type.value.charAt(0).toUpperCase() + selections.type.value.slice(1)}`;
      items.push({ label: bundle[key] || selections.type.label, price: selections.type.price });
    }
    // Size
    if (selections.size && selections.size.value) {
      total += selections.size.price;
      const key = `poolSize${selections.size.value.charAt(0).toUpperCase() + selections.size.value.slice(1)}`;
      items.push({ label: bundle[key] || selections.size.label, price: selections.size.price });
    }
    // Finish
    if (selections.finish && selections.finish.value) {
      total += selections.finish.price;
      const key = `finish${selections.finish.value.charAt(0).toUpperCase() + selections.finish.value.slice(1)}`;
      items.push({ label: bundle[key] || selections.finish.label, price: selections.finish.price });
    }
    // Addons
    selections.addons.forEach(addon => {
      if (addon && addon.value) {
        total += addon.price;
        const key = `addon${addon.value.charAt(0).toUpperCase() + addon.value.slice(1)}`;
        items.push({ label: bundle[key] || addon.label, price: addon.price });
      }
    });

    const lowRange = Math.floor(total * 0.95);
    const highRange = Math.ceil(total * 1.15);
    
    if (display) display.textContent = `ETB ${lowRange.toLocaleString()} - ${highRange.toLocaleString()}`;
    
    if (breakdown) {
      breakdown.innerHTML = items.map(item => `
        <div class="breakdown-item">
          <span>${item.label}</span>
          <span>+ ETB ${item.price.toLocaleString()}</span>
        </div>
      `).join("");
    }

    if (whatsappBtn) {
      whatsappBtn.onclick = () => {
        const summary = items.map(i => `- ${i.label}`).join("\n");
        const msg = `Hello Surax Pool! 🏊\nI used your Cost Estimator and would like a formal quote for:\n\n${summary}\n\nEstimated Range: ETB ${lowRange.toLocaleString()} - ${highRange.toLocaleString()}`;
        window.open(`https://wa.me/251922729374?text=${encodeURIComponent(msg)}`, "_blank");
      };
    }
  };

  estimator.querySelectorAll(".option-card").forEach(card => {
    card.addEventListener("click", () => {
      const step = parseInt(card.closest(".estimator-step").dataset.step);
      const value = card.dataset.value;
      const price = parseInt(card.dataset.price);
      const label = card.querySelector(".option-label").textContent;

      if (step === 4) {
        // Multi-select for addons
        const index = selections.addons.findIndex(a => a.value === value);
        if (index > -1) {
          selections.addons.splice(index, 1);
          card.classList.remove("is-selected");
        } else {
          selections.addons.push({ value, price, label });
          card.classList.add("is-selected");
        }
      } else {
        // Single select for others
        card.closest(".option-grid").querySelectorAll(".option-card").forEach(c => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
        if (step === 1) selections.type = { value, price, label };
        if (step === 2) selections.size = { value, price, label };
        if (step === 3) selections.finish = { value, price, label };
        
        // Auto-advance for single select
        setTimeout(() => {
          if (currentStep === step) {
            currentStep++;
            updateEstimatorUI();
          }
        }, 400);
      }
    });
  });

  nextBtn?.addEventListener("click", () => {
    if (currentStep < 5) {
      currentStep++;
      updateEstimatorUI();
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateEstimatorUI();
    }
  });

  restartBtn?.addEventListener("click", () => {
    currentStep = 1;
    selections.type = null;
    selections.size = null;
    selections.finish = null;
    selections.addons = [];
    estimator.querySelectorAll(".option-card").forEach(c => c.classList.remove("is-selected"));
    updateEstimatorUI();
  });
}

/* ==========================================================================
   Visual Style Switcher Logic
   ========================================================================== */
const styleSwitcher = document.querySelector(".style-switcher");
if (styleSwitcher) {
  const overlay = styleSwitcher.querySelector("#style-overlay");
  const previewImg = styleSwitcher.querySelector("#style-preview-image");
  const swatchBtns = styleSwitcher.querySelectorAll(".swatch-btn");

  swatchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;
      const filter = btn.dataset.filter;

      if (color) {
        if (overlay) {
          overlay.style.backgroundColor = color;
          overlay.style.opacity = "0.4";
        }
        // Toggle active state in the same group
        btn.closest(".swatch-grid").querySelectorAll(".swatch-btn").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      }

      if (filter !== undefined) {
        if (previewImg) previewImg.style.filter = filter === "none" ? "none" : filter;
        btn.closest(".swatch-grid").querySelectorAll(".swatch-btn").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      }
    });
  });
}

/* ==========================================================================
   Project Roadmap Logic
   ========================================================================== */
const roadmap = document.querySelector("#roadmap");
window.currentRoadmapIndex = 0;
if (roadmap) {
  const steps = roadmap.querySelectorAll(".roadmap-step");
  const progress = roadmap.querySelector("#roadmap-progress");
  const stageTitle = roadmap.querySelector("#roadmap-stage-title");
  const stageDesc = roadmap.querySelector("#roadmap-stage-desc");
  const stageTip = roadmap.querySelector("#roadmap-stage-tip");
  const stageImg = roadmap.querySelector("#roadmap-stage-img");

  const stageData = [
    {
      img: "completed_luxury_pool.png"
    },
    {
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1590483734724-383b85ad9390?auto=format&fit=crop&w=800&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1560026301-88340cf16be7?auto=format&fit=crop&w=800&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    }
  ];

  window.updateRoadmap = (index) => {
    window.currentRoadmapIndex = index;
    const bundle = translations[currentLanguage] || translations.en;
    const stageNum = index + 1;
    
    // Update visuals
    steps.forEach((step, i) => {
      step.classList.toggle("is-active", i === index);
      step.classList.toggle("is-complete", i < index);
    });
    
    if (progress) progress.style.width = `${(index / (steps.length - 1)) * 100}%`;
    
    // Update content
    if (stageTitle) stageTitle.textContent = bundle[`roadmapStep${stageNum}Title`];
    if (stageDesc) stageDesc.textContent = bundle[`roadmapStep${stageNum}Desc`];
    if (stageTip) stageTip.textContent = bundle[`roadmapStep${stageNum}Tip`];
    if (stageImg) {
      stageImg.style.opacity = "0";
      setTimeout(() => {
        stageImg.src = stageData[index].img;
        stageImg.style.opacity = "1";
      }, 200);
    }
  };

  steps.forEach(step => {
    step.addEventListener("click", () => {
      const index = parseInt(step.dataset.index);
      updateRoadmap(index);
    });
  });

  // Initial state
  updateRoadmap(0);
}

/* ==========================================================================
   Pool Size Calculator
   ========================================================================== */
const poolCalc = document.querySelector(".pool-calculator");
if (poolCalc) {
  const lengthInput = poolCalc.querySelector("#calc-length");
  const widthInput = poolCalc.querySelector("#calc-width");
  const depthInput = poolCalc.querySelector("#calc-depth");
  const unitsSelect = poolCalc.querySelector("#calc-units");
  const areaResult = poolCalc.querySelector("#result-area");
  const areaUnit = poolCalc.querySelector("#area-unit");
  const litersResult = poolCalc.querySelector("#result-liters");
  const gallonsResult = poolCalc.querySelector("#result-gallons");
  const presetBtns = poolCalc.querySelectorAll(".preset-btn");
  const clearBtn = poolCalc.querySelector("#calc-clear");

  const calculatePool = () => {
    let length = parseFloat(lengthInput.value) || 0;
    let width = parseFloat(widthInput.value) || 0;
    let depth = parseFloat(depthInput.value) || 0;
    const isImperial = unitsSelect.value === "imperial";

    if (isImperial) {
      length *= 0.3048;
      width *= 0.3048;
      depth *= 0.3048;
    }

    const area = length * width;
    const volume = area * depth * 1000;
    const gallons = volume * 0.264172;

    areaResult.textContent = area.toFixed(1);
    areaUnit.textContent = isImperial ? "ft²" : "m²";
    litersResult.textContent = volume.toLocaleString("en-US", { maximumFractionDigits: 0 });
    gallonsResult.textContent = gallons.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  lengthInput?.addEventListener("input", calculatePool);
  widthInput?.addEventListener("input", calculatePool);
  depthInput?.addEventListener("input", calculatePool);
  unitsSelect?.addEventListener("change", calculatePool);

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      lengthInput.value = btn.dataset.length;
      widthInput.value = btn.dataset.width;
      depthInput.value = btn.dataset.depth;
      unitsSelect.value = "metric";
      calculatePool();
    });
  });

  clearBtn?.addEventListener("click", () => {
    lengthInput.value = "";
    widthInput.value = "";
    depthInput.value = "";
    areaResult.textContent = "—";
    litersResult.textContent = "—";
    gallonsResult.textContent = "—";
  });
}

/* ==========================================================================
   Material Comparison
   ========================================================================== */
const materialData = [
  {
    name: "Standard Plaster",
    nameAm: "መደበኛ ፕላስተር",
    color: "#87ceeb",
    price: "ETB 0 - 120,000",
    durability: "5-7 years",
    maintenance: "High",
    appearance: "Classic blue",
    benefits: ["Affordable", "Traditional look", "Easy to repair"]
  },
  {
    name: "Ceramic Tile",
    nameAm: "ሴራሚክ ታይል",
    color: "#40e0d0",
    price: "ETB 120,000 - 250,000",
    durability: "10-15 years",
    maintenance: "Medium",
    appearance: "Clean, bright",
    benefits: ["Durable", "Easy to clean", "Wide colors"]
  },
  {
    name: "Glass Mosaic",
    nameAm: "የመስታወት ሞዛይክ",
    color: "#1e90ff",
    price: "ETB 280,000 - 420,000",
    durability: "15-20 years",
    maintenance: "Low",
    appearance: "Stunning shimmer",
    benefits: ["Premium look", "Long-lasting", "Low maintenance"]
  },
  {
    name: "Natural Stone",
    nameAm: "የተፈጥሮ ድንጋይ",
    color: "#daa520",
    price: "ETB 200,000 - 350,000",
    durability: "12-18 years",
    maintenance: "Medium",
    appearance: "Elegant, natural",
    benefits: ["Elegant finish", "Unique texture", "Natural materials"]
  }
];

const matCompSection = document.querySelector(".material-comparison");
if (matCompSection) {
  const materialGrid = matCompSection.querySelector("#material-grid");
  const viewToggles = matCompSection.querySelectorAll(".view-toggle");
  const sortSelect = matCompSection.querySelector("#material-sort");
  let currentView = "grid";
  let currentSort = "name";

  const renderMaterials = (materials) => {
    if (currentView === "grid") {
      materialGrid.innerHTML = materials.map((mat, i) => `
        <div class="material-card" data-reveal style="--delay: ${i * 100}ms;">
          <div class="material-swatch" style="background: ${mat.color};"></div>
          <div class="material-content">
            <h3 class="material-name">${currentLanguage === "am" ? mat.nameAm : mat.name}</h3>
            <div class="material-badge" style="border-color: ${mat.color}; color: ${mat.color};">${mat.price}</div>
            <div class="material-specs">
              <div class="material-spec">
                <strong>${currentLanguage === "am" ? "ዝህ ነበልባል" : "Durability"}</strong>
                <span>${mat.durability}</span>
              </div>
              <div class="material-spec">
                <strong>${currentLanguage === "am" ? "ጥገና" : "Maintenance"}</strong>
                <span>${mat.maintenance}</span>
              </div>
              <div class="material-spec">
                <strong>${currentLanguage === "am" ? "ውሃ ገጽታ" : "Water Look"}</strong>
                <span>${mat.appearance}</span>
              </div>
            </div>
            <ul class="material-benefits">
              ${mat.benefits.map(b => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      `).join("");
    } else {
      materialGrid.innerHTML = `
        <table class="material-table">
          <thead>
            <tr>
              <th>${currentLanguage === "am" ? "ስም" : "Material"}</th>
              <th>${currentLanguage === "am" ? "ዋጋ" : "Price Range"}</th>
              <th>${currentLanguage === "am" ? "ዝህ ነበልባል" : "Durability"}</th>
              <th>${currentLanguage === "am" ? "ጥገና" : "Maintenance"}</th>
              <th>${currentLanguage === "am" ? "ውሃ ገጽታ" : "Appearance"}</th>
            </tr>
          </thead>
          <tbody>
            ${materials.map(mat => `
              <tr>
                <td><strong>${currentLanguage === "am" ? mat.nameAm : mat.name}</strong></td>
                <td>${mat.price}</td>
                <td>${mat.durability}</td>
                <td>${mat.maintenance}</td>
                <td>${mat.appearance}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    }
    // Re-trigger reveal for new cards
    if (window.initScrollReveal) window.initScrollReveal();
  };
  window.renderMaterialGrid = () => renderMaterials(sortMaterials(materialData));

  const sortMaterials = (data) => {
    const sorted = [...data];
    if (currentSort === "price") {
      sorted.sort((a, b) => {
        const aVal = parseInt(a.price.match(/\d+/)[0]);
        const bVal = parseInt(b.price.match(/\d+/)[0]);
        return aVal - bVal;
      });
    } else if (currentSort === "durability") {
      const durOrder = { "5-7 years": 1, "10-15 years": 2, "12-18 years": 3, "15-20 years": 4 };
      sorted.sort((a, b) => (durOrder[b.durability] || 0) - (durOrder[a.durability] || 0));
    }
    return sorted;
  };

  viewToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      currentView = toggle.dataset.view;
      viewToggles.forEach(t => t.classList.remove("is-active"));
      toggle.classList.add("is-active");
      renderMaterials(sortMaterials(materialData));
    });
  });

  sortSelect?.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderMaterials(sortMaterials(materialData));
  });

  renderMaterials(materialData);
}

/* ==========================================================================
   ROI Calculator
   ========================================================================== */
const roiCalc = document.querySelector(".roi-calculator");
if (roiCalc) {
  const homeValueInput = roiCalc.querySelector("#roi-home-value");
  const poolCostInput = roiCalc.querySelector("#roi-pool-cost");
  const tierSelect = roiCalc.querySelector("#roi-tier");
  const beforeValue = roiCalc.querySelector("#roi-before");
  const afterValue = roiCalc.querySelector("#roi-after");
  const increaseValue = roiCalc.querySelector("#roi-increase");
  const percentValue = roiCalc.querySelector("#roi-percent");
  const paybackValue = roiCalc.querySelector("#roi-payback");
  const clearBtn = roiCalc.querySelector("#roi-clear");

  const roiFactors = {
    basic: 0.08,
    premium: 0.12,
    luxury: 0.16
  };

  const formatETB = (num) => {
    return "ETB " + Math.floor(num).toLocaleString("en-US");
  };

  const calculateROI = () => {
    const homeValue = parseFloat(homeValueInput.value) || 0;
    const poolCost = parseFloat(poolCostInput.value) || 0;
    const tier = tierSelect.value;

    if (homeValue <= 0) {
      beforeValue.textContent = "ETB 0";
      afterValue.textContent = "ETB 0";
      increaseValue.textContent = "ETB 0";
      percentValue.textContent = "0%";
      paybackValue.textContent = "—";
      return;
    }

    const roiFactor = roiFactors[tier];
    const propertyIncrease = homeValue * roiFactor;
    const newValue = homeValue + propertyIncrease;
    const paybackYears = poolCost > 0 ? Math.ceil(poolCost / (propertyIncrease / 20)) : 0;

    beforeValue.textContent = formatETB(homeValue);
    afterValue.textContent = formatETB(newValue);
    increaseValue.textContent = formatETB(propertyIncrease);
    percentValue.textContent = (roiFactor * 100).toFixed(0) + "%";
    paybackValue.textContent = paybackYears > 0 ? paybackYears + " years" : "—";
  };

  homeValueInput?.addEventListener("input", calculateROI);
  poolCostInput?.addEventListener("input", calculateROI);
  tierSelect?.addEventListener("change", calculateROI);

  clearBtn?.addEventListener("click", () => {
    homeValueInput.value = "";
    poolCostInput.value = "";
    tierSelect.value = "basic";
    beforeValue.textContent = "ETB 0";
    afterValue.textContent = "ETB 0";
    increaseValue.textContent = "ETB 0";
    percentValue.textContent = "0%";
    paybackValue.textContent = "—";
  });
}

/* ==========================================================================
   Live Chat Widget
   ========================================================================== */

/* ==========================================================================
   Blog Section
   ========================================================================== */
const blogData = [
  {
    id: 1,
    title: "Weekly Pool Care Checklist",
    titleAm: "ሳምንታዊ የገንዳ ጥገና ቅጥ",
    category: "maintenance",
    icon: "✓",
    excerpt: "Keep your pool crystal clear with this easy weekly maintenance routine.",
    excerptAm: "ይህንን ቀላል ሳምንታዊ ጥገና ሂደት ጋር ገንዳዎ ንጹህ ለማድረግ።",
    content: `<h2>Weekly Pool Care Checklist</h2>
      <p>Maintaining a pristine pool requires consistent weekly care. Here's your comprehensive checklist to ensure your pool stays crystal clear and safe.</p>
      <h3>Daily Tasks (5-10 minutes)</h3>
      <ul>
        <li>Skim the surface for leaves and debris</li>
        <li>Check water level (should be at mid-skimmer height)</li>
        <li>Clean baskets if needed</li>
      </ul>
      <h3>Weekly Tasks (30 minutes)</h3>
      <ul>
        <li>Test water chemistry (pH, chlorine, alkalinity)</li>
        <li>Brush walls and floor</li>
        <li>Vacuum the pool floor</li>
        <li>Clean skimmer and pump baskets</li>
        <li>Run filter for 8-12 hours</li>
      </ul>
      <p>A well-maintained pool not only looks beautiful but also extends the life of your equipment and keeps your family safe.</p>`,
    date: "Jan 15, 2024",
    dateAm: "ጃን 15, 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Modern Pool Design Trends 2024",
    titleAm: "ዘመናዊ ገንዳ ዲዛይን ክስተቶች 2024",
    category: "design",
    icon: "🎨",
    excerpt: "Discover the latest design trends in luxury pool aesthetics and features.",
    excerptAm: "በገንዳ 美학ና ባህሪያት ውስጥ አሁን ያለ ዋና ድስተቶች ይወቁ።",
    content: `<h2>Modern Pool Design Trends 2024</h2>
      <p>The pool industry is evolving with exciting new design trends that blend aesthetics with functionality.</p>
      <h3>Top Trends</h3>
      <ul>
        <li><strong>Infinity Edges:</strong> Seamless water flow for dramatic visual impact</li>
        <li><strong>Smart Lighting:</strong> RGB LED systems for ambiance and functionality</li>
        <li><strong>Sustainable Design:</strong> Solar heating and eco-friendly materials</li>
        <li><strong>Spa Integration:</strong> Combined pools with integrated spa areas</li>
        <li><strong>Minimalist Aesthetics:</strong> Clean lines and geometric shapes</li>
      </ul>
      <h3>Material Innovations</h3>
      <p>Glass mosaic tiles, natural stone, and modern plaster finishes continue to dominate luxury pool design.</p>`,
    date: "Jan 10, 2024",
    dateAm: "ጃን 10, 2024",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "Pool Construction Timeline",
    titleAm: "የገንዳ ግንባታ ጊዜ ሰሌዳ",
    category: "construction",
    icon: "🏗️",
    excerpt: "What to expect during each phase of your pool construction project.",
    excerptAm: "የገንዳ ግንባታ ፕሮጀክት በእያንዳንዱ ደረጃ ምን እንደሚጠብቅ ይወቁ።",
    content: `<h2>Pool Construction Timeline</h2>
      <p>Understanding the construction timeline helps you plan and prepare for your new pool.</p>
      <h3>Phase 1: Design & Permits (2-4 weeks)</h3>
      <ul>
        <li>Site assessment and measurements</li>
        <li>Design planning and 3D visualization</li>
        <li>Permit applications</li>
      </ul>
      <h3>Phase 2: Excavation & Groundwork (1-2 weeks)</h3>
      <ul>
        <li>Site preparation and excavation</li>
        <li>Grade leveling and drainage setup</li>
      </ul>
      <h3>Phase 3: Structural Work (3-4 weeks)</h3>
      <ul>
        <li>Steel reinforcement</li>
        <li>Concrete pouring</li>
        <li>Plumbing and electrical installation</li>
      </ul>
      <h3>Phase 4: Finishing (2-3 weeks)</h3>
      <ul>
        <li>Tile and finish application</li>
        <li>Decking installation</li>
        <li>Equipment setup</li>
      </ul>
      <h3>Phase 5: Testing & Handover (1 week)</h3>
      <p>Final testing, water balancing, and equipment training before you take over.</p>`,
    date: "Jan 5, 2024",
    dateAm: "ጃን 5, 2024",
    readTime: "7 min"
  },
  {
    id: 4,
    title: "Pool Water Chemistry Basics",
    titleAm: "የገንዳ ውሃ ኬሚስትሪ መሠረታት",
    category: "maintenance",
    icon: "⚗️",
    excerpt: "Master the essential chemistry parameters to keep your pool healthy.",
    excerptAm: "ገንዳዎን ጤናማ ለማቆየት አስፈላጊ ጠቃሚ ፓራሜትሮችን ይገቡ።",
    content: `<h2>Pool Water Chemistry Basics</h2>
      <p>Proper water chemistry is the foundation of a clean, safe, and healthy pool.</p>
      <h3>Key Parameters</h3>
      <ul>
        <li><strong>pH Level:</strong> 7.2-7.6 (neutral water)</li>
        <li><strong>Chlorine:</strong> 1-3 ppm (parts per million)</li>
        <li><strong>Alkalinity:</strong> 80-120 ppm</li>
        <li><strong>Calcium Hardness:</strong> 200-400 ppm</li>
      </ul>
      <h3>Testing Frequency</h3>
      <p>Test your pool water at least 2-3 times per week during swimming season, and once weekly in winter.</p>
      <h3>Common Issues & Solutions</h3>
      <ul>
        <li>Cloudy water = Low chlorine or improper balance</li>
        <li>Green water = Algae growth, needs shock treatment</li>
        <li>pH too high = Reduce alkalinity</li>
      </ul>`,
    date: "Dec 28, 2023",
    dateAm: "ዲሴ 28, 2023",
    readTime: "8 min"
  },
  {
    id: 5,
    title: "Budget Planning for Your Dream Pool",
    titleAm: "ለገንዳዎ የበጀት እቅድ",
    category: "maintenance",
    icon: "💰",
    excerpt: "Smart financial planning for pool construction and maintenance.",
    excerptAm: "የገንዳ ግንባታ እና ጥገናበነገቢ ምርጫ.",
    content: `<h2>Budget Planning for Your Dream Pool</h2>
      <p>Creating a comprehensive budget ensures your pool project stays on track financially.</p>
      <h3>Initial Construction Costs</h3>
      <ul>
        <li>Design & permits: ETB 15,000 - 50,000</li>
        <li>Excavation & groundwork: ETB 100,000 - 200,000</li>
        <li>Pool structure: ETB 400,000 - 1,000,000</li>
        <li>Finishing & equipment: ETB 200,000 - 500,000</li>
      </ul>
      <h3>Annual Maintenance Costs</h3>
      <ul>
        <li>Chemical treatments: ETB 5,000 - 10,000/month</li>
        <li>Equipment maintenance: ETB 10,000 - 20,000/year</li>
        <li>Professional cleaning: ETB 3,000 - 8,000/month</li>
      </ul>
      <p>Consider our maintenance plans which bundle these costs efficiently.</p>`,
    date: "Dec 20, 2023",
    dateAm: "ዲሴ 20, 2023",
    readTime: "6 min",
    tags: ["Finance", "Construction", "Planning"]
  },
  {
    id: 6,
    title: "Seasonal Pool Opening Guide",
    titleAm: "ወቅታዊ የገንዳ መክፈቻ መመሪያ",
    category: "Maintenance",
    icon: "☀️",
    excerpt: "Get your pool ready for the summer season with our expert guide.",
    excerptAm: "ገንዳዎን ለበጋ ወቅት በእኛ ባለሙያ መመሪያ ያዘጋጁ።",
    content: `<h2>Summer is Coming!</h2>
      <p>Opening your pool correctly ensures a trouble-free swimming season.</p>
      <h3>Step 1: Clean the Cover</h3>
      <p>Remove debris and water from the cover before taking it off.</p>
      <h3>Step 2: Restore Water Levels</h3>
      <p>Fill the pool back to its normal operating level.</p>
      <h3>Step 3: Equipment Check</h3>
      <p>Inspect all pumps, filters, and heaters for leaks or damage.</p>`,
    date: "Mar 15, 2024",
    dateAm: "ማር 15, 2024",
    readTime: "10 min",
    tags: ["Summer", "Maintenance", "Seasonal"]
  }
];

const blogSection = document.querySelector(".blog");
if (blogSection) {
  const blogGrid = blogSection.querySelector("#blog-grid");
  const blogSearch = blogSection.querySelector("#blog-search");
  const blogFilters = blogSection.querySelectorAll(".blog-filter-btn");
  const viewToggles = blogSection.querySelectorAll(".view-toggle");
  const articleDetail = blogSection.querySelector("#blog-article-detail");
  const backButton = blogSection.querySelector("#back-to-blog");

  let currentFilter = "all";
  let currentView = "grid";

  const renderBlogPosts = (posts = blogData) => {
    blogGrid.innerHTML = posts.map((post, i) => {
      const title = currentLanguage === "am" ? post.titleAm : post.title;
      const excerpt = currentLanguage === "am" ? post.excerptAm : post.excerpt;
      const date = currentLanguage === "am" ? post.dateAm : post.date;
      return `
        <article class="blog-card" data-id="${post.id}" style="--delay: ${i * 50}ms;" data-reveal>
          <div class="blog-image">${post.icon}</div>
          <div class="blog-info">
            <div class="blog-meta">
              <span class="blog-category">${post.category}</span>
              <span class="blog-date">${date}</span>
            </div>
            <h3 class="blog-title">${title}</h3>
            <p class="blog-excerpt">${excerpt}</p>
            <span class="blog-read-time">${post.readTime}</span>
          </div>
        </article>
      `;
    }).join("");

    blogGrid.querySelectorAll(".blog-card").forEach((card) => {
      card.addEventListener("click", () => {
        const postId = parseInt(card.dataset.id);
        showArticleDetail(postId);
      });
    });
    if (window.initScrollReveal) window.initScrollReveal();
  };
  window.renderBlogGrid = () => renderBlogPosts(blogData);

  const showArticleDetail = (postId) => {
    const post = blogData.find((p) => p.id === postId);
    if (!post) return;

    const title = currentLanguage === "am" ? post.titleAm : post.title;
    const date = currentLanguage === "am" ? post.dateAm : post.date;
    const articleContent = blogSection.querySelector("#article-content");

    articleContent.innerHTML = `
      <h1>${title}</h1>
      <div class="article-meta">
        <span>${date}</span>
        <span>${post.readTime}</span>
        <span>${post.category}</span>
      </div>
      ${post.content}
    `;

    const relatedArticles = blogData.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2);
    const relatedEl = blogSection.querySelector("#related-articles");
    relatedEl.innerHTML = `
      <h3>${currentLanguage === "am" ? "ተዛማጅ ጽሑፎች" : "Related Articles"}</h3>
      <div class="related-articles-grid">
        ${relatedArticles.map((p) => `
          <div class="related-article-card" data-id="${p.id}">
            <h4>${currentLanguage === "am" ? p.titleAm : p.title}</h4>
            <p>${currentLanguage === "am" ? p.excerptAm : p.excerpt}</p>
          </div>
        `).join("")}
      </div>
    `;

    relatedEl.querySelectorAll(".related-article-card").forEach((card) => {
      card.addEventListener("click", () => {
        showArticleDetail(parseInt(card.dataset.id));
      });
    });

    blogGrid.parentElement.style.display = "none";
    articleDetail.removeAttribute("hidden");
    window.scrollTo({ top: blogSection.offsetTop - 100, behavior: "smooth" });

    // Reading Progress Logic
    const progress = articleDetail.querySelector("#reading-progress");
    const updateProgress = () => {
      const scrollPos = window.scrollY - articleDetail.offsetTop;
      const height = articleDetail.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, Math.min(100, (scrollPos / height) * 100));
      if (progress) progress.style.width = `${scrolled}%`;
    };
    window.addEventListener("scroll", updateProgress);

    // Share Functionality
    articleDetail.querySelectorAll(".share-btn").forEach(btn => {
      btn.onclick = () => {
        const url = window.location.href;
        const platform = btn.dataset.platform;
        if (platform === "whatsapp") {
          window.open(`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`);
        } else if (platform === "copy") {
          navigator.clipboard.writeText(url).then(() => {
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => btn.innerHTML = originalIcon, 2000);
          });
        }
      };
    });

    // Tags rendering
    const tagsEl = articleDetail.querySelector("#article-tags");
    if (tagsEl && post.tags) {
      tagsEl.innerHTML = post.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join("");
    }
  };

  backButton?.addEventListener("click", () => {
    blogGrid.parentElement.style.display = "";
    articleDetail.setAttribute("hidden", "");
    window.scrollTo({ top: blogSection.offsetTop - 100, behavior: "smooth" });
  });

  blogFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      blogFilters.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterAndRender();
    });
  });

  viewToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentView = btn.dataset.view;
      viewToggles.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      blogGrid.parentElement.classList.toggle("blog-list", currentView === "list");
      filterAndRender();
    });
  });

  blogSearch?.addEventListener("input", (e) => {
    filterAndRender();
  });

  const filterAndRender = () => {
    const searchTerm = (blogSearch?.value || "").toLowerCase();
    const filtered = blogData.filter((post) => {
      const matchesFilter = currentFilter === "all" || post.category === currentFilter;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm);
      return matchesFilter && matchesSearch;
    });
    renderBlogPosts(filtered);
  };

  // Contact Form Reset Handling
  const contactSuccess = document.getElementById("contact-success");
  const resetContact = document.getElementById("reset-contact");

  resetContact?.addEventListener("click", () => {
    contactSuccess.setAttribute("hidden", "");
    contactForm.style.display = "grid";
    contactForm.reset();
  });

  // Premium Concierge Float Handling
  const conciergeTrigger = document.getElementById("concierge-trigger-btn");
  const conciergeMenu = document.getElementById("concierge-menu");
  const conciergeClose = document.getElementById("concierge-close-btn");

  conciergeTrigger?.addEventListener("click", () => {
    const isHidden = conciergeMenu.hasAttribute("hidden");
    if (isHidden) {
      conciergeMenu.removeAttribute("hidden");
      conciergeTrigger.style.transform = "scale(0) rotate(90deg)";
      setTimeout(() => {
        conciergeTrigger.style.display = "none";
      }, 400);
    }
  });

  conciergeClose?.addEventListener("click", () => {
    conciergeMenu.setAttribute("hidden", "");
    conciergeTrigger.style.display = "grid";
    setTimeout(() => {
      conciergeTrigger.style.transform = "scale(1) rotate(0deg)";
    }, 10);
  });

  // Close concierge when clicking outside
  document.addEventListener("click", (e) => {
    if (conciergeMenu && !conciergeMenu.hasAttribute("hidden") && !conciergeMenu.contains(e.target) && !conciergeTrigger.contains(e.target)) {
      conciergeClose.click();
    }
  });

  renderBlogPosts(blogData);
}

// Final Script Closure
});

/* ==========================================================================
   Safety Recovery Script (Forces content visibility if needed)
   ========================================================================== */
setTimeout(() => {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (!el.classList.contains('is-visible')) {
      el.classList.add('is-visible');
    }
  });
}, 3000);

