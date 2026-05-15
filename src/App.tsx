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
  ["Products", "#products"],
  ["Funding", "#funding"],
  ["Partners", "#partners"],
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
                <Sprout aria-hidden="true" /> Natural Plant-Based Remedies from Ghana
              </span>
              <h1>Turning Herb and Data into Direction</h1>
              <p>
                BNS-SAMPROFF LIMITED COMPANY develops natural wellness products from indigenous Ghanaian medicinal plants
                through sustainable agriculture, research partnership, processing, packaging, export-ready quality
                systems, and professional data management. The company also provides data collection, data cleaning,
                monitoring, analysis, visualization, and reporting services to help organize agricultural and local
                medicine information accurately for better decision-making.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#funding">
                  Support the Initiative
                </a>
                <a className="button secondary" href="#products">
                  View Product Areas
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
              <h2>Global Donor & Investment Support Package</h2>
              <p>Prepared for international donors, investors, NGOs and strategic partners.</p>
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
              management initiative focused on developing natural plant-based wellness products derived from indigenous
              Ghanaian medicinal plants. The initiative aims to establish standardized herbal processing, packaging,
              branding, and export-ready natural wellness products, supported by accurate data collection, agricultural
              monitoring, field research, data analysis, visualization, and professional reporting.
            </p>
            <p>
              With strong experience in the data industry, the company helps organize agricultural and local medicine
              information into reliable datasets, dashboards, reports, and insights for donors, investors, researchers,
              clinics, farmers, and development partners. BNS-SAMPROFF also supports university students by involving
              them in supervised field data collection, research, agricultural monitoring, and reporting activities so
              they gain practical work experience and earn support for themselves.
            </p>
          </motion.article>

          <motion.article className="research-panel" {...fadeUp} transition={{ duration: 0.58, delay: 0.08 }}>
            <Handshake aria-hidden="true" />
            <h3>Research Partnership</h3>
            <p>
              In collaboration with Number Five Herbal Clinic, registered under the Sunyani Municipal Assembly, Bono
              Region, Ghana.
            </p>
          </motion.article>
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
                  sustainable herbal product development, agricultural data systems, and local medicine data organization
                  in Ghana.
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
        <span>Turning Herb and Data into Direction | Smart Data & Natural Herbs, Smart Decisions.</span>
      </footer>
    </div>
  );
}

export default BNSSamproffWebsite;
