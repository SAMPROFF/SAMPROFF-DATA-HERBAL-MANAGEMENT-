import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
  HeartPulse,
  Handshake,
  Globe2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  FlaskConical,
  PackageCheck,
  Users,
  BadgeDollarSign,
  BarChart3,
  Database,
  GraduationCap,
  ExternalLink,
  FileText,
  ClipboardList,
  Cloud,
  Menu,
  Palette,
  Stamp,
  Presentation,
  Video,
  Megaphone,
  MonitorCog,
  Laptop,
  PenTool,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

const objectives = [
  "Establish sustainable herbal plantations",
  "Improve herbal processing and quality standards",
  "Develop export-ready herbal products",
  "Create employment opportunities",
  "Promote affordable natural wellness solutions",
  "Provide professional data management, analysis and reporting services",
  "Support university students with practical field experience and income opportunities",
];

const products = [
  "Women's Health Support",
  "Immune Support Formulas",
  "Diabetes Support Herbal Tea",
  "Blood Tonic Formulations",
  "Respiratory Support Herbal Mixes",
  "Nutritional & Wellness Products",
  "Agricultural Data Collection & Monitoring",
  "Data Cleaning, Analysis, Visualization & Reporting",
];

const dataServices: Array<{
  title: string;
  objective: string;
  includes: string[];
  pricing: string[];
  icon: LucideIcon;
}> = [
  {
    title: "Data Cleaning & Preparation",
    objective: "Eliminate duplicates, handle missing values, and ensure consistency and formatting for analysis.",
    includes: [
      "Removing duplicates and null entries",
      "Data validation and consistency checks",
      "Standardizing date, time, and location formats",
      "Formatting data for systems and analysis tools",
    ],
    pricing: [
      "Small datasets up to 2,000 rows: GH₵ 1,500 – 2,000 per hour of operation",
      "Medium datasets 2,000–10,000 rows: GH₵ 2,000 – 2,500 per hour of operation",
      "Large datasets 10,000+ rows: GH₵ 3,000+ per hour of operation",
    ],
    icon: ClipboardList,
  },
  {
    title: "Data Analysis & Insight Generation",
    objective: "Discover trends, patterns, and key insights to guide decision-making.",
    includes: [
      "Descriptive and comparative analysis",
      "Growth or decline metrics",
      "Trend and variance analysis",
      "Interpretation of findings for decision support",
    ],
    pricing: ["Starting from GH₵ 1,800 per dataset, adjusted by volume and complexity"],
    icon: BarChart3,
  },
  {
    title: "Data Visualization & Dashboards",
    objective: "Translate raw data into readable, actionable visuals.",
    includes: [
      "Graphs, charts, maps, and pivot tables",
      "Interactive dashboards in Excel and Power BI",
      "Visual storytelling of key metrics",
    ],
    pricing: [
      "From GH₵ 2,000 for up to 10 visualizations",
      "Customized dashboard projects: GH₵ 2,500 – 4,000",
    ],
    icon: Database,
  },
  {
    title: "Professional Reporting",
    objective: "Present findings in a polished and informative manner.",
    includes: [
      "Comprehensive Word and PDF reports",
      "Executive summaries with recommendations",
      "Community or department breakdowns",
    ],
    pricing: [
      "Standard report: GH₵ 1,500 – 2,000",
      "Visual-heavy reports and presentations: GH₵ 2,000 – 3,000",
    ],
    icon: FileText,
  },
  {
    title: "Questionnaire Design & Data Collection Support",
    objective: "Help clients without data gather the right information.",
    includes: [
      "Custom survey and questionnaire development",
      "Field-ready digital forms using KoboToolbox and Google Forms",
      "Integration planning with analysis",
    ],
    pricing: [
      "Questionnaire design: GH₵ 1,000 – 1,500",
      "Data collection support: discussed per project",
    ],
    icon: Users,
  },
  {
    title: "Data Storage & Repository Setup",
    objective: "Support clients to safely manage and access their data.",
    includes: [
      "Cloud storage setup with Dropbox, Google Drive, or OneDrive",
      "Folder structure planning",
      "Training on file management and sharing",
    ],
    pricing: ["From GH₵ 1,000, including support for 3 months"],
    icon: Cloud,
  },
];

const digitalSlides: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
}> = [
  {
    title: "Brand Identity",
    text: "Logos, stamps, letterheads, business cards, IDs, invoices, labels, flyers, banners, and signboards.",
    icon: Palette,
  },
  {
    title: "Websites & Hosting",
    text: "Company websites, herbal clinic websites, NGO sites, school sites, portfolios, and e-commerce setup support.",
    icon: Globe2,
  },
  {
    title: "Presentations & Video",
    text: "PowerPoint decks, pitch presentations, pre-show videos, adverts, motion graphics, and social media formats.",
    icon: Presentation,
  },
  {
    title: "IT Support",
    text: "Computer repairs, software installation, Windows setup, printer support, networking, CCTV, and cloud services.",
    icon: MonitorCog,
  },
];

const digitalCatalogue: Array<{
  title: string;
  summary: string;
  features: string[];
  icon: LucideIcon;
}> = [
  {
    title: "Company Logo Design",
    summary: "Professional logos for companies, herbal clinics, NGOs, schools, churches, startups, and premium brands.",
    features: ["High-resolution files", "PNG, JPEG, and PDF formats", "Transparent background", "Social media and print ready"],
    icon: PenTool,
  },
  {
    title: "Official Company Stamp Design",
    summary: "Company stamps, official seals, signature stamps, herbal clinic stamps, and organization stamps.",
    features: ["Company name", "Registration and TIN details", "Contact information", "Official branding style"],
    icon: Stamp,
  },
  {
    title: "Company Letterhead Design",
    summary: "Professional letterheads for companies, NGOs, herbal clinics, churches, schools, and institutions.",
    features: ["Logo integration", "Company address", "Contact and registration details", "Professional business layout"],
    icon: FileText,
  },
  {
    title: "Website Design & Development",
    summary: "Modern websites for companies, herbal clinics, churches, NGOs, schools, portfolios, and e-commerce projects.",
    features: ["Mobile responsive", "Contact forms", "Service or product showcase", "Hosting setup support"],
    icon: Globe2,
  },
  {
    title: "PowerPoint Presentation Design",
    summary: "Business, investment, church, school, research, donor proposal, and conference presentations.",
    features: ["Professional slides", "Charts and graphs", "Animation effects", "Infographics and modern templates"],
    icon: Presentation,
  },
  {
    title: "Video Design & Pre-show Videos",
    summary: "Intro videos, event pre-shows, wedding slideshows, church announcements, adverts, and product promos.",
    features: ["HD quality", "Music integration", "Motion graphics", "Animated text"],
    icon: Video,
  },
  {
    title: "Business Branding Services",
    summary: "Complete business identity materials for visibility, consistency, customer trust, and marketing growth.",
    features: ["Business and ID cards", "Invoice and receipt templates", "Product labels", "Posters, banners, and signboards"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Management & Analysis Services",
    summary: "Data entry, cleaning, analysis, dashboards, KoboCollect setup, research data, and M&E reports.",
    features: ["Microsoft Excel and Power BI", "KoboToolbox and Google Forms", "SPSS support", "Data visualization tools"],
    icon: Database,
  },
  {
    title: "Computer Hardware Services",
    summary: "Computer repairs, troubleshooting, printer installation, networking, CCTV setup, upgrades, and maintenance.",
    features: ["Desktop computers", "Laptops", "Printers", "Network devices and accessories"],
    icon: Laptop,
  },
  {
    title: "Computer Software Services",
    summary: "Software installation, Windows setup, Microsoft Office, antivirus, system optimization, and data backup.",
    features: ["Driver installation", "System formatting", "Software updates", "Virus removal and user training"],
    icon: MonitorCog,
  },
  {
    title: "Social Media & Digital Marketing",
    summary: "Social media poster designs, Facebook adverts, WhatsApp adverts, Instagram branding, and digital flyers.",
    features: ["Facebook", "WhatsApp", "Instagram", "TikTok and YouTube"],
    icon: Megaphone,
  },
];

const industries = [
  "Agriculture & Nucleus Farming",
  "Mining & Energy",
  "Health & Pharmaceutical",
  "NGOs & Nonprofits",
  "Government Agencies",
  "Marketing & Retail",
  "Education & Research Institutions",
];

const targetClients = [
  "Companies",
  "NGOs",
  "Herbal clinics",
  "Churches",
  "Schools",
  "Startups",
  "Government institutions",
  "Students",
  "Small businesses",
  "Event organizers",
];

const whyChoose = [
  "Professional and modern designs",
  "Fast delivery services",
  "Affordable pricing",
  "Customized solutions",
  "IT, data and branding experience",
  "Friendly customer support",
  "High-quality outputs",
  "Business-focused solutions",
];

const engagementTerms = [
  "Custom pricing based on scope and volume",
  "Tax-compliant and open to negotiations",
  "Multi-project packages available at discounted rates",
];

const productIcons: LucideIcon[] = [
  HeartPulse,
  Leaf,
  FlaskConical,
  PackageCheck,
  Sprout,
  Users,
  Database,
  BarChart3,
];

const opportunities = [
  "Donor Support",
  "Investment Partnerships",
  "Technical Collaboration",
  "Research Partnerships",
  "Product Distribution Partnerships",
];

const funding = [
  ["Land Development", "Support herbal plantation setup"],
  ["Processing Equipment", "Drying, grinding and production systems"],
  ["Packaging & Branding", "Professional labels, bottles and export packs"],
  ["Certification & Laboratory Testing", "FDA Ghana compliance and product safety testing"],
  ["Logistics & Distribution", "Market entry, delivery and export readiness"],
];

const donors = [
  ["Rockefeller Foundation", "USA", "Global Health & Agriculture"],
  ["Wellcome Trust", "UK", "Health Research"],
  ["Global Affairs Canada", "Canada", "International Development"],
  ["Commonwealth Foundation", "UK", "Community Development"],
  ["USAID", "USA", "Health & Agriculture"],
];

const impactStats = [
  ["USD 85,000", "Funding requirement"],
  ["5", "Partnership pathways"],
  ["8", "Product and data areas"],
  ["Ghana", "Herbal innovation base"],
];

const serviceHighlights: Array<[LucideIcon, string, string]> = [
  [
    Database,
    "Data Management",
    "We organize field, agricultural, herbal, clinical support, and local medicine information into clean datasets for accurate monitoring and decision-making.",
  ],
  [
    BarChart3,
    "Analysis & Reporting",
    "We support partners with data analysis, dashboards, charts, monitoring reports, donor reports, and evidence-based recommendations.",
  ],
  [
    GraduationCap,
    "Student Field Support",
    "We involve university students in supervised field work and data activities to give them practical experience and income support.",
  ],
];

const navItems = [
  ["About", "#about"],
  ["Data Services", "#data-services"],
  ["IT & Branding", "#digital-services"],
  ["Herbal Partner", "#herbal-partner"],
  ["Industries", "#industries"],
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.58, ease: "easeOut" as const },
};

function BNSSamproffWebsite() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="BNS-SAMPROFF home">
            <span className="brand-mark">
              <img src="/images/samproff-company-logo.jpeg" alt="" />
            </span>
            <span>
              <strong>BNS-SAMPROFF</strong>
              <small>Limited Company</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact">
              Contact
            </a>
          </nav>

          <a className="mobile-contact" href="#contact" aria-label="Contact BNS-SAMPROFF">
            <Menu aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <img className="hero-image" src="/images/hero-herbal-data.png" alt="" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">
                <Database aria-hidden="true" /> Turning Ideas into Professional Digital Identity
              </span>
              <h1>Smart Data. Professional Digital Identity.</h1>
              <p>
                BNS-SAMPROFF LIMITED COMPANY provides professional IT support, business branding, website development,
                graphic design, digital media, data management, dashboards, reporting, presentations, hardware support,
                software services, and organized herbal and agricultural data solutions from Sunyani, Bono Region, Ghana.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#digital-services">
                  Explore Digital Services
                </a>
                <a className="button primary" href="#data-services">
                  View Data Services
                </a>
              </div>
              <div className="hero-metrics" aria-label="Company highlights">
                {impactStats.slice(0, 3).map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              className="support-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              aria-label="Global donor support package"
            >
              <div className="official-logo-card">
                <img src="/images/samproff-company-logo.jpeg" alt="BNS-SAMPROFF Limited Company official logo" />
              </div>
              <Globe2 aria-hidden="true" />
              <h2>IT, Branding, Data & Partnership Management</h2>
              <p>Prepared for companies, organizations, churches, schools, NGOs, herbal clinics, startups, individuals and strategic partners.</p>
              <div className="prepared-by">
                <small>Prepared by</small>
                <strong>Samuel Nkrumah Bonsu</strong>
                <span>Director & Data Analyst Administrator</span>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="impact-strip" aria-label="BNS-SAMPROFF impact snapshot">
          {impactStats.map(([value, label]) => (
            <div key={label} className="impact-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section about-grid">
          <motion.article className="summary-panel" {...fadeUp}>
            <h2>Executive Summary</h2>
            <p>
              BNS-SAMPROFF LIMITED COMPANY is a professional IT, branding, digital media, data management, herbal
              partnership, and business support company providing modern digital solutions for businesses, organizations,
              churches, schools, NGOs, herbal clinics, startups, and individuals.
            </p>
            <p>
              Our mission is to help businesses and organizations build a strong, professional, and modern digital
              identity while turning raw information into decision-ready reports, dashboards, and practical direction.
              We support website development, company branding, graphic design, presentations, video services, computer
              hardware and software support, data analysis, and organized field data systems.
            </p>
          </motion.article>

          <motion.article
            id="herbal-partner"
            className="research-panel"
            {...fadeUp}
            transition={{ duration: 0.58, delay: 0.08 }}
          >
            <Handshake aria-hidden="true" />
            <h3>Our Herbal Partner</h3>
            <p>
              In collaboration with Number Five Herbal Clinic, registered under the Sunyani Municipal Assembly, Bono
              Region, Ghana.
            </p>
            <a
              className="partner-link"
              href="https://number-five-herbal-clinic.netlify.app"
            >
              Open Number Five Herbal Clinic
              <ExternalLink aria-hidden="true" />
            </a>
          </motion.article>
        </section>

        <section id="data-services" className="section data-services-section">
          <div className="section-heading split">
            <div>
              <h2>Data Services & Pricing</h2>
              <p>
                Structured data services for organizations that need clean information, clear analysis, readable visuals,
                and decision-ready reports.
              </p>
            </div>
            <span>Turning Data Into Direction</span>
          </div>

          <div className="data-service-grid">
            {dataServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article className="data-service-card" key={service.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.035 }}>
                  <div className="data-service-head">
                    <Icon aria-hidden="true" />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.objective}</p>
                  <div className="service-detail">
                    <strong>Includes</strong>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-detail pricing-detail">
                    <strong>Pricing</strong>
                    <ul>
                      {service.pricing.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="digital-services" className="digital-showcase">
          <div className="section digital-showcase-inner">
            <div className="section-heading centered">
              <h2>IT, Branding & Digital Services Catalogue</h2>
              <p>
                Professional IT, branding, digital media, document preparation, presentation, website and business
                support services for modern organizations.
              </p>
            </div>

            <div className="animated-slide-row" aria-label="Animated overview of BNS-SAMPROFF services">
              {digitalSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <motion.article
                    className="animated-slide"
                    key={slide.title}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.28, ease: "easeInOut" }}
                  >
                    <Icon aria-hidden="true" />
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section catalogue-section">
          <div className="section-heading split">
            <div>
              <h2>Our Professional Services</h2>
              <p>
                From the first logo sketch to the finished website, presentation, data report, software setup, or
                social media advert, BNS-SAMPROFF gives clients organized and polished digital support.
              </p>
            </div>
            <span>Professional IT & Branding Solutions for Modern Businesses</span>
          </div>

          <div className="catalogue-grid">
            {digitalCatalogue.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article className="catalogue-card" key={service.title} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.025 }}>
                  <div className="catalogue-card-head">
                    <Icon aria-hidden="true" />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.summary}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="service-band choice-band">
          <div className="service-grid choice-grid">
            <motion.article className="service-card choice-card" {...fadeUp}>
              <CheckCircle2 aria-hidden="true" />
              <h3>Why Choose BNS-SAMPROFF?</h3>
              <div className="compact-list">
                {whyChoose.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
            <motion.article className="service-card choice-card" {...fadeUp} transition={{ duration: 0.58, delay: 0.08 }}>
              <Users aria-hidden="true" />
              <h3>Our Target Clients</h3>
              <div className="compact-list">
                {targetClients.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="section objectives-section">
          <div className="section-heading centered">
            <h2>Project Objectives & Data Services</h2>
          </div>
          <div className="objective-grid">
            {objectives.map((item, index) => (
              <motion.article className="objective-card" key={item} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.03 }}>
                <CheckCircle2 aria-hidden="true" />
                <p>{item}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="products" className="section">
          <div className="section-heading split">
            <div>
              <h2>Product Areas & Data Solutions</h2>
              <p>
                Natural wellness support areas and professional data services for standardized herbal, agricultural, and
                local medicine development.
              </p>
            </div>
            <span>Smart Data & Natural Herbs, Smart Decisions</span>
          </div>

          <div className="product-grid">
            {products.map((item, index) => {
              const Icon = productIcons[index] || Leaf;
              return (
                <motion.article className="product-card" key={item} {...fadeUp} transition={{ duration: 0.5, delay: index * 0.035 }}>
                  <Icon aria-hidden="true" />
                  <h3>{item}</h3>
                  <p>
                    Developed with attention to research, safety, quality control, professional data organization,
                    packaging, reporting, and regulatory compliance.
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="service-band">
          <div className="service-grid">
            {serviceHighlights.map(([Icon, title, copy]) => (
              <motion.article className="service-card" key={title} {...fadeUp}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="industries" className="section industries-section">
          <div className="section-heading centered">
            <h2>Industries We Serve</h2>
            <p>
              BNS-SAMPROFF supports organizations that need reliable data systems, clean reporting, and practical
              decision support across operational and development sectors.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <motion.article className="industry-card" key={industry} {...fadeUp}>
                <CheckCircle2 aria-hidden="true" />
                <span>{industry}</span>
              </motion.article>
            ))}
          </div>
          <div className="engagement-panel">
            <h3>Flexible Payment & Engagement</h3>
            <div className="pill-list">
              {engagementTerms.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="funding" className="funding-section">
          <div className="funding-grid">
            <motion.div className="funding-copy" {...fadeUp}>
              <BadgeDollarSign aria-hidden="true" />
              <h2>Funding Requirement</h2>
              <p>
                Estimated funding requirement: <strong>USD 85,000</strong>. This support will help expand herbal
                cultivation, data systems, processing, packaging, certification and export readiness.
              </p>
              <div className="pill-list">
                {opportunities.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>

            <div className="funding-list">
              {funding.map(([title, desc]) => (
                <motion.article className="funding-item" key={title} {...fadeUp}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="section">
          <div className="section-heading">
            <h2>Sample International Donor Organizations</h2>
          </div>
          <div className="donor-table" role="table" aria-label="Sample donor organizations">
            <div className="donor-row donor-head" role="row">
              <span role="columnheader">Organization</span>
              <span role="columnheader">Country</span>
              <span role="columnheader">Focus Area</span>
            </div>
            {donors.map(([org, country, focus]) => (
              <div className="donor-row" role="row" key={org}>
                <strong role="cell">{org}</strong>
                <span role="cell">{country}</span>
                <span role="cell">{focus}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-panel">
            <div className="contact-header">
              <div className="section-heading">
                <h2>Contact & Partnership Enquiry</h2>
                <p>
                  Contact us for IT support, business branding, website development, graphic design, presentations,
                  video adverts, hardware and software support, data cleaning, analysis, dashboards, professional
                  reports, questionnaire design, agricultural data systems, and local medicine data organization in Ghana.
                </p>
              </div>
              <div className="stamp-card" aria-label="Official company stamp">
                <img src="/images/samproff-company-stamp.jpeg" alt="BNS-SAMPROFF Limited Company official stamp" />
              </div>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href="tel:+233596308848">
                <Phone aria-hidden="true" />
                <span>+233 596 308 848</span>
              </a>
              <a className="contact-card" href="https://wa.me/393505830180">
                <MessageCircle aria-hidden="true" />
                <span>+39 350 583 0180</span>
              </a>
              <a className="contact-card" href="mailto:samproff2002@yahoo.co.uk">
                <Mail aria-hidden="true" />
                <span>samproff2002@yahoo.co.uk</span>
              </a>
              <div className="contact-card">
                <MapPin aria-hidden="true" />
                <span>Sunyani, Bono Region, Ghana</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <strong>BNS-SAMPROFF LIMITED COMPANY</strong>
        <span>Turning Data Into Direction | Smart Data. Smart Decisions.</span>
        <span>Turning Herb and Data into Direction | Professional IT & Branding Solutions for Modern Businesses</span>
      </footer>
    </div>
  );
}

export default BNSSamproffWebsite;
