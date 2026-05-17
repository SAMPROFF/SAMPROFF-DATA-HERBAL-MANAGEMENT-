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

const industries = [
  "Agriculture & Nucleus Farming",
  "Mining & Energy",
  "Health & Pharmaceutical",
  "NGOs & Nonprofits",
  "Government Agencies",
  "Marketing & Retail",
  "Education & Research Institutions",
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
  ["Products", "#products"],
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
                <Database aria-hidden="true" /> Turning Data Into Direction
              </span>
              <h1>Smart Data. Smart Decisions.</h1>
              <p>
                BNS-SAMPROFF LIMITED COMPANY provides professional data cleaning, analysis, visualization, dashboards,
                reporting, questionnaire design, data collection support, and safe repository setup. The company also
                supports herbal and agricultural management through organized field data, research partnership, and
                practical decision-ready reports.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#data-services">
                  View Data Services
                </a>
                <a className="button secondary" href="#industries">
                  Industries We Serve
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
              <h2>Data, Herbal & Partnership Management</h2>
              <p>Prepared for institutions, companies, NGOs, farms, clinics, researchers, investors and strategic partners.</p>
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
              BNS-SAMPROFF LIMITED COMPANY is a Ghana-based herbal medicine, sustainable agriculture, and data
              management initiative focused on turning raw information into practical direction for decision-making. The
              company provides data cleaning, preparation, analysis, visualization, dashboards, professional reporting,
              questionnaire design, data collection support, and repository setup, while also supporting herbal and
              agricultural development with organized records and field insights.
            </p>
            <p>
              With strong experience in the data industry, the company helps organize agricultural and local medicine
              information into reliable datasets, dashboards, reports, and insights for donors, investors, researchers,
              clinics, farmers, and development partners. BNS-SAMPROFF also supports university students by involving
              them in supervised field data collection, research, agricultural monitoring, and reporting activities so
              they gain practical work experience and earn support for themselves.
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
                  We welcome donors, investors, NGOs, researchers, distributors and strategic partners interested in
                  data cleaning, analysis, dashboards, professional reports, questionnaire design, agricultural data
                  systems, and local medicine data organization in Ghana.
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
      </footer>
    </div>
  );
}

export default BNSSamproffWebsite;
