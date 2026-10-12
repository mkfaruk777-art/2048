"use client";

import { useState } from "react";

const PHONE_NUMBER = "8801760359596"; // Faruk Electric & AC Servicing
const WHATSAPP_NUMBER = "8801760359596"; // WhatsApp number in international format

const content = {
  bn: {
    top: "বাংলাদেশজুড়ে ইলেকট্রিক ও AC সার্ভিস",
    navServices: "সার্ভিসসমূহ",
    navAbout: "আমাদের সম্পর্কে",
    navContact: "যোগাযোগ",
    heroTag: "বাড়ি ও অফিসের জন্য সার্ভিস",
    heroTitle: "ইলেকট্রিক ও AC সমস্যায়\nসহজ সমাধান",
    heroText: "AC সার্ভিসিং, ইনস্টলেশন, মেরামত এবং ইলেকট্রিক কাজের জন্য যোগাযোগ করুন। আপনার সুবিধামতো সময় ঠিক করুন।",
    call: "ফোন করুন",
    whatsapp: "WhatsApp-এ বুক করুন",
    servicesLabel: "আমাদের সার্ভিস",
    servicesTitle: "আপনার প্রয়োজনীয় সার্ভিস এক জায়গায়",
    servicesText: "প্রাথমিকভাবে যেসব সার্ভিস দেওয়া হয়—আপনার ব্যবসার সেবার তালিকা অনুযায়ী পরে সম্পাদনা করতে পারবেন।",
    acTitle: "AC সার্ভিসিং ও মেরামত",
    acText: "সাধারণ AC সার্ভিসিং, কুলিং সমস্যা পরীক্ষা, পানি পড়া ও প্রাথমিক ট্রাবলশুটিং।",
    installTitle: "AC ইনস্টলেশন",
    installText: "নতুন AC স্থাপন, স্থান পরিবর্তন ও ইনস্টলেশনের প্রয়োজনীয় কাজ।",
    electricTitle: "ইলেকট্রিক মেরামত",
    electricText: "সুইচ, সকেট, লাইট, ফ্যান ও সাধারণ বৈদ্যুতিক সমস্যার কাজ।",
    wiringTitle: "ওয়্যারিং ও নিরাপত্তা পরীক্ষা",
    wiringText: "ওয়্যারিং, সার্কিট ব্রেকার ও বৈদ্যুতিক সংযোগ পরীক্ষা—প্রয়োজন অনুযায়ী।",
    whyLabel: "কেন যোগাযোগ করবেন",
    whyTitle: "পরিষ্কার যোগাযোগ, সুবিধাজনক বুকিং",
    why1: "ফোন বা WhatsApp-এ সরাসরি কথা বলুন",
    why2: "কাজের ধরন ও সময় আগে আলোচনা করুন",
    why3: "বাংলাদেশজুড়ে সার্ভিসের জন্য যোগাযোগ করুন",
    howTitle: "কীভাবে বুক করবেন?",
    step1: "সার্ভিস বেছে নিন",
    step2: "ফোন বা WhatsApp-এ সমস্যাটি জানান",
    step3: "সময় ও কাজের মূল্য নিশ্চিত করুন",
    contactTitle: "আপনার সার্ভিস দরকার?",
    contactText: "আপনার কাজের বিবরণ জানাতে এখনই যোগাযোগ করুন।",
    footer: "Faruk Electric & AC Servicing — ঢাকা",
    disclaimer: "সার্ভিসের প্রাপ্যতা, মূল্য ও সময় ফোনে নিশ্চিত করে নিন।",
    language: "English",
  },
  en: {
    top: "Reliable electrical and AC service across Bangladesh",
    navServices: "Services",
    navAbout: "Why us",
    navContact: "Contact",
    heroTag: "For homes and offices",
    heroTitle: "A simpler solution for\nelectrical & AC issues",
    heroText: "Contact us for AC servicing, installation, repairs and electrical work. Arrange a time that suits you.",
    call: "Call now",
    whatsapp: "Book on WhatsApp",
    servicesLabel: "Our services",
    servicesTitle: "Essential services in one place",
    servicesText: "These are starter service descriptions. You can edit them to match your actual service list.",
    acTitle: "AC servicing & repair",
    acText: "Routine servicing, cooling checks, water leakage checks and basic troubleshooting.",
    installTitle: "AC installation",
    installText: "New AC installation, relocation and related installation work.",
    electricTitle: "Electrical repairs",
    electricText: "Switches, sockets, lights, fans and common electrical issues.",
    wiringTitle: "Wiring & safety checks",
    wiringText: "Wiring, circuit breaker and electrical connection checks as needed.",
    whyLabel: "Why contact us",
    whyTitle: "Clear communication, convenient booking",
    why1: "Speak directly by phone or WhatsApp",
    why2: "Discuss the work and timing in advance",
    why3: "Ask us about service coverage across Bangladesh",
    howTitle: "How to book",
    step1: "Choose a service",
    step2: "Describe the issue by phone or WhatsApp",
    step3: "Confirm timing and price",
    contactTitle: "Need a service?",
    contactText: "Contact us now and tell us what you need.",
    footer: "ফারুক ইলেকট্রিক & AC সার্ভিসিং — Bangladesh",
    disclaimer: "Please confirm service availability, pricing and timing by phone.",
    language: "বাংলা",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"bn" | "en">("bn");
  const t = content[lang];

  const phoneHref = PHONE_NUMBER ? `tel:+${PHONE_NUMBER.replace(/\D/g, "")}` : "#contact";
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(lang === "bn" ? "আমি ইলেকট্রিক/AC সার্ভিস নিতে চাই।" : "Hello, I would like to book an electrical/AC service.")}`
    : "#contact";

  return (
    <main>
      <div className="topbar">
        <div className="container topbarInner">
          <span><span className="statusDot" /> {t.top}</span>
          <button className="languageButton" onClick={() => setLang(lang === "bn" ? "en" : "bn")} aria-label="Change language">
            <span>文</span> {t.language}
          </button>
        </div>
      </div>

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#home" aria-label="Electric and AC Service home">
            <span className="brandIcon">⚡</span>
            <span className="brandWords"><strong>Faruk Electric & AC</strong><small> SERVICE · BANGLADESH</small></span>
          </a>
          <nav className="navLinks">
            <a href="#services">{t.navServices}</a>
            <a href="#why">{t.navAbout}</a>
            <a href="#contact">{t.navContact}</a>
          </nav>
          <a className="headerCall" href={phoneHref}>↗ {t.call}</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroGlow" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow"><span className="eyebrowLine" /> {t.heroTag}</div>
            <h1>{t.heroTitle}</h1>
            <p className="heroText">{t.heroText}</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href={phoneHref}><span>☎</span> {t.call}</a>
              <a className="button buttonWhatsApp" href={whatsappHref} target={WHATSAPP_NUMBER ? "_blank" : undefined} rel="noreferrer"><span>◉</span> {t.whatsapp}</a>
            </div>
            <div className="trustRow">
              <span className="trustIcon">✓</span>
              <span>{lang === "bn" ? "বুকিংয়ের আগে কাজ ও মূল্য নিয়ে আলোচনা করুন" : "Discuss the job and price before booking"}</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="AC and electrical service illustration">
            <div className="visualOrb orbOne" />
            <div className="visualOrb orbTwo" />
            <div className="serviceIllustration">
              <div className="toolBadge badgeBolt">⚡</div>
              <div className="acUnit">
                <div className="acBrandMark">AC</div>
                <div className="acVent"><i /><i /><i /><i /><i /><i /></div>
                <div className="acLight" />
              </div>
              <div className="toolBadge badgeSnow">❄</div>
              <div className="toolbox">
                <div className="toolboxHandle" />
                <div className="toolboxFront"><span>+</span><span>−</span><span>⌁</span></div>
              </div>
              <div className="floorShadow" />
            </div>
            <div className="floatingCard">
              <span className="floatingCheck">✓</span>
              <span><strong>{lang === "bn" ? "সহজ বুকিং" : "Easy booking"}</strong><small>{lang === "bn" ? "ফোন ও WhatsApp" : "Phone & WhatsApp"}</small></span>
            </div>
          </div>
        </div>
        <div className="heroBottomLine" />
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow"><span className="eyebrowLine" /> {t.servicesLabel}</div>
              <h2>{t.servicesTitle}</h2>
            </div>
            <p>{t.servicesText}</p>
          </div>
          <div className="serviceGrid">
            <article className="serviceCard">
              <div className="serviceIcon acIcon">❄</div><span className="cardNumber">01 / AC</span>
              <h3>{t.acTitle}</h3><p>{t.acText}</p><a href={whatsappHref} className="textLink">{t.whatsapp} <span>↗</span></a>
            </article>
            <article className="serviceCard">
              <div className="serviceIcon installIcon">↗</div><span className="cardNumber">02 / INSTALL</span>
              <h3>{t.installTitle}</h3><p>{t.installText}</p><a href={whatsappHref} className="textLink">{t.whatsapp} <span>↗</span></a>
            </article>
            <article className="serviceCard">
              <div className="serviceIcon electricIcon">ϟ</div><span className="cardNumber">03 / ELECTRIC</span>
              <h3>{t.electricTitle}</h3><p>{t.electricText}</p><a href={whatsappHref} className="textLink">{t.whatsapp} <span>↗</span></a>
            </article>
            <article className="serviceCard">
              <div className="serviceIcon wiringIcon">⌁</div><span className="cardNumber">04 / SAFETY</span>
              <h3>{t.wiringTitle}</h3><p>{t.wiringText}</p><a href={whatsappHref} className="textLink">{t.whatsapp} <span>↗</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="whySection section" id="why">
        <div className="container whyGrid">
          <div className="whyVisual">
            <div className="whyBigIcon">⚡</div>
            <div className="whyStamp"><strong>AC</strong><span>+ ELECTRIC</span></div>
            <div className="whyCaption">{lang === "bn" ? "বাংলাদেশজুড়ে সার্ভিস" : "Service across Bangladesh"}</div>
          </div>
          <div className="whyCopy">
            <div className="eyebrow"><span className="eyebrowLine" /> {t.whyLabel}</div>
            <h2>{t.whyTitle}</h2>
            <ul className="checkList">
              <li><span>✓</span>{t.why1}</li>
              <li><span>✓</span>{t.why2}</li>
              <li><span>✓</span>{t.why3}</li>
            </ul>
            <a className="button buttonPrimary" href="#contact">{t.navContact} <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="howSection section">
        <div className="container">
          <div className="eyebrow"><span className="eyebrowLine" /> {t.howTitle}</div>
          <div className="stepsGrid">
            <div className="step"><span className="stepNum">01</span><div className="stepIcon">⌕</div><h3>{t.step1}</h3></div>
            <div className="step"><span className="stepNum">02</span><div className="stepIcon">☏</div><h3>{t.step2}</h3></div>
            <div className="step"><span className="stepNum">03</span><div className="stepIcon">✓</div><h3>{t.step3}</h3></div>
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="container contactInner">
          <div><div className="eyebrow eyebrowLight"><span className="eyebrowLine" /> {lang === "bn" ? "যোগাযোগ করুন" : "GET IN TOUCH"}</div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><p className="contactNumber">01760-359596</p></div>
          <div className="contactActions">
            <a className="button buttonWhite" href={phoneHref}>☎ {t.call}</a>
            <a className="button buttonWhatsApp contactWhatsapp" href={whatsappHref} target={WHATSAPP_NUMBER ? "_blank" : undefined} rel="noreferrer">◉ {t.whatsapp}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerMain">
          <a className="brand brandFooter" href="#home"><span className="brandIcon">⚡</span><span className="brandWords"><strong>Faruk Electric & AC</strong><small> SERVICE · BANGLADESH</small></span></a>
          <p>{t.disclaimer}</p>
        </div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} {t.footer}</span><span>{lang === "bn" ? "সেবা • যত্ন • আস্থা" : "Service • Care • Trust"}</span></div>
      </footer>
      <div className="mobileQuickActions">
        <a href={phoneHref}>☎ {t.call}</a><a href={whatsappHref} target={WHATSAPP_NUMBER ? "_blank" : undefined} rel="noreferrer">◉ WhatsApp</a>
      </div>
    </main>
  );
}
