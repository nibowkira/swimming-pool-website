const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
const revealItems = document.querySelectorAll("[data-reveal]");
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
    galleryCaptionTwo: "Backyard pool framed with clean paving and soft landscaping.",
    galleryCaptionThree: "The same home pool during construction before the final finish.",
    galleryCaptionFour: "The completed home pool after construction with a clean finished result.",
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
    whatsappAria: "Chat with Surax Pool on WhatsApp"
  },
  am: {
    navAbout: "ስለ እኛ",
    navServices: "አገልግሎቶች",
    navPricing: "ዋጋ",
    navGallery: "ጋለሪ",
    navTestimonials: "የደንበኛ አስተያየቶች",
    navFaq: "ጥያቄዎች",
    navContact: "ያግኙን",
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
    galleryCaptionTwo: "በንጹህ ንጣፍ እና ቀለል ያለ አትክልት የተከበበ የጀርባ ገንዳ።",
    galleryCaptionThree: "ይህ የቤት ገንዳ ከመጨረሻ አጨራረስ በፊት በግንባታ ላይ እንዳለ ያሳያል።",
    galleryCaptionFour: "የተጠናቀቀው የቤት ገንዳ ከግንባታ በኋላ ንጹህ እና የተጠናቀቀ ውጤት ያሳያል።",
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
    whatsappAria: "በዋትሳፕ ከሱራክስ ፑል ጋር ይወያዩ"
  }
};

let currentLanguage = "en";
let currentTheme = "light";
const REVIEW_STORAGE_KEY = "surax-user-reviews";
const REVIEW_MODERATION_KEY = "surax-review-moderation";
let editingReviewId = null;

function setTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.body.classList.toggle("theme-dark", currentTheme === "dark");
  localStorage.setItem("surax-theme", currentTheme);
}

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

function initTheme() {
  const saved = localStorage.getItem("surax-theme");
  if (saved === "dark" || saved === "light") {
    setTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
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

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

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

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
    updateThemeToggleText();
  });
}

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
    
    window.open(whatsappUrl, "_blank");

    formStatus.textContent = bundle.formStatusSuccess;
    formStatus.classList.add("is-success");
    contactForm.reset();

    if (submitButton) {
      submitButton.disabled = false;
    }
  });
}

