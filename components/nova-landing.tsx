"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProductMockup } from "./ProductMockup";
import {
  features,
  solutions,
  testimonials,
  faqs,
  processSteps,
  navLinks,
  trustedLogos,
  statValues,
  statFormats,
  statLabels,
} from "@/lib/data";

export default function NovaLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [solution, setSolution] =
    useState<keyof typeof solutions>("Engineering");
  const [testimonial, setTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [countsStarted, setCountsStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [showBackTop, setShowBackTop] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && (setDemoOpen(false), setMenuOpen(false));
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = demoOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [demoOpen]);
  useEffect(() => {
    const timer = setInterval(
      () => setTestimonial((v) => (v + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(
      () => setActiveStep((step) => (step + 1) % processSteps.length),
      3200,
    );
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onScroll = () =>
      setShowBackTop(window.scrollY > window.innerHeight * 0.35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!countsStarted) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(statValues.map((value) => Math.round(value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [countsStarted]);

  return (
    <div className="nova-site">
      <header className="site-nav">
        <a href="#top" className="brand">
          <span className="brand-mark">✦</span> NOVA
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-cta"
            href="#pricing"
            onClick={() => setMenuOpen(false)}
          >
            Start free <ArrowRight size={16} />
          </a>
        </nav>
        <div className="nav-actions">
          <a className="signin" href="#footer">
            Sign in
          </a>
          <a className="button button-dark nav-cta" href="#pricing">
            Start free <ArrowRight size={16} />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="pill">
              <span className="pulse-dot" /> The future of focused work
            </div>
            <h1>
              Build better.
              <br />
              <em>Work smarter.</em>
            </h1>
            <p>
              One intelligent workspace for projects, people, and the work that
              moves your business forward.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#pricing">
                Start free <ArrowRight size={17} />
              </a>
              <button
                className="button button-ghost"
                onClick={() => setDemoOpen(true)}
              >
                <span className="play">
                  <Play size={12} fill="currentColor" />
                </span>{" "}
                Watch demo
              </button>
            </div>
            <div className="hero-proof">
              <div className="mini-avatars">
                <b>MC</b>
                <b>JE</b>
                <b>PS</b>
                <b>+9k</b>
              </div>
              <span>Loved by 10,000+ ambitious teams</span>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-sun" />
            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="hero-note note-top">
              <Sparkles size={15} /> AI found 3 wins <strong>↗</strong>
            </div>
            <div className="hero-note note-bottom">
              <span className="note-check">
                <Check size={14} />
              </span>
              <span>
                <strong>Workflow shipped</strong>
                <small>Just now · Orbit launch</small>
              </span>
            </div>
            <div className="hero-orbit">
              <div className="orbit-ring" />
              <div className="orb-character">
                <div className="character-face">
                  <i />
                  <i />
                </div>
                <div className="character-body" />
              </div>
              <div className="orbit-card card-a">
                <BarChart3 size={18} />
                <span>
                  <strong>+42%</strong>
                  <small>team momentum</small>
                </span>
              </div>
              <div className="orbit-card card-b">
                <span className="tiny-spark">✦</span>
                <span>
                  <strong>On track</strong>
                  <small>7 tasks complete</small>
                </span>
              </div>
            </div>
            <div className="hero-caption">
              A calmer way to make progress <ArrowRight size={15} />
            </div>
          </div>
        </section>

        <section className="trusted">
          <span className="trusted-label">Trusted by teams at</span>
          <div className="logos" aria-label="Trusted companies">
            <div className="logos-track">
              <div className="logos-set">
                {trustedLogos.map((logo) => (
                  <strong key={logo}>{logo}</strong>
                ))}
              </div>
              <div className="logos-set" aria-hidden="true">
                {trustedLogos.map((logo) => (
                  <strong key={logo}>{logo}</strong>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section features" id="features">
          <SectionHeading
            eyebrow="Everything in sync"
            title="Your work, with a little more lift."
            copy="NOVA brings the clarity of a great plan and the energy of a great team into one intelligent workspace."
          />
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, copy, tone }, i) => (
              <article className={`feature-card ${tone}`} key={title}>
                <div className="feature-icon">
                  <Icon size={21} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <span className="feature-arrow">↗</span>
                {i === 0 && (
                  <div className="feature-visual automation">
                    <div />
                    <div />
                    <div />
                  </div>
                )}
                {i === 1 && (
                  <div className="feature-visual lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                {i === 2 && (
                  <div className="feature-visual faces">
                    <b>MC</b>
                    <b>JE</b>
                    <b>PS</b>
                  </div>
                )}
                {i === 3 && (
                  <div className="feature-visual bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                )}
                {i === 4 && (
                  <div className="feature-visual flow">
                    <span>Brief</span>
                    <ArrowRight />
                    <span>Build</span>
                    <ArrowRight />
                    <span>Ship</span>
                  </div>
                )}
                {i === 5 && (
                  <div className="feature-visual assistant">
                    <Sparkles size={18} />
                    <span>What&apos;s next?</span>
                    <ArrowRight size={15} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section product-section" id="product">
          <div className="product-copy">
            <SectionHeading
              eyebrow="Meet your new operating system"
              title="More momentum. Less management."
              copy="NOVA makes the invisible work visible, then helps you do less of it. Set direction, stay aligned, and let the small stuff take care of itself."
            />
            <ul className="check-list">
              <li>
                <span>
                  <Check size={14} />
                </span>{" "}
                One clear view of every moving piece
              </li>
              <li>
                <span>
                  <Check size={14} />
                </span>{" "}
                AI that works with your team, not around it
              </li>
              <li>
                <span>
                  <Check size={14} />
                </span>{" "}
                Insights that turn activity into action
              </li>
            </ul>
            <a className="text-link" href="#how-it-works">
              Explore the workspace <ArrowRight size={16} />
            </a>
          </div>
          <ProductMockup />
        </section>

        <section className="section process-section" id="how-it-works">
          <SectionHeading
            eyebrow="The NOVA method"
            title="From first thought to shipped."
            copy="A simple rhythm for turning good ideas into meaningful progress."
          />
          <div className="process-grid">
            {processSteps.map(([num, title, copy], i) => (
              <button
                className={`process-step ${activeStep === i ? "active" : ""}`}
                key={num}
                onClick={() => setActiveStep(i)}
                aria-pressed={activeStep === i}
              >
                <span className="process-number">{num}</span>
                <span className="process-line">
                  <span className={activeStep >= i ? "filled" : ""} />
                </span>
                <span className="process-step-content">
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="stats-band" ref={statsRef}>
          <div className="stats-inner">
            {statLabels.map((label, i) => (
              <div className="stat" key={label}>
                <strong>
                  {counts[i] >= 1000000
                    ? `${(counts[i] / 1000000).toFixed(0)}M+`
                    : counts[i] >= 1000
                      ? `${Math.round(counts[i] / 1000)}K+`
                      : `${counts[i]}${statFormats[i]}`}
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <SectionHeading
            eyebrow="Built for your kind of ambitious"
            title="One platform. Every kind of team."
            copy="NOVA flexes around the way you work, whether you are shipping software, campaigns, or your next big idea."
          />
          <div className="solution-tabs">
            {Object.keys(solutions).map((name) => (
              <button
                className={solution === name ? "active" : ""}
                key={name}
                onClick={() => setSolution(name as keyof typeof solutions)}
              >
                {name}
              </button>
            ))}
          </div>
          <div className={`solution-panel ${solutions[solution].color}`}>
            <div className="solution-copy">
              <span className="solution-kicker">
                NOVA FOR {solution.toUpperCase()}
              </span>
              <h3>{solutions[solution].title}</h3>
              <p>{solutions[solution].copy}</p>
              <ul>
                {solutions[solution].points.map((point) => (
                  <li key={point}>
                    <Check size={15} />
                    {point}
                  </li>
                ))}
              </ul>
              <a className="button button-dark" href="#pricing">
                See how it works <ArrowRight size={16} />
              </a>
            </div>
            <div className="solution-art">
              <div className="solution-window">
                <div className="solution-window-head">
                  <span /> <span /> <span />
                </div>
                <div className="solution-graph">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="solution-rows">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="solution-bubble">
                <Sparkles size={15} /> NOVA insight
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <SectionHeading
            eyebrow="Good work, by design"
            title="The calm behind the momentum."
          />
          <div className="testimonial-wrap">
            <div className="testimonial-quote">
              <div className="quote-mark">“</div>
              <blockquote>{testimonials[testimonial].quote}</blockquote>
              <div className="testimonial-person">
                <div className="person-avatar">
                  {testimonials[testimonial].initials}
                </div>
                <div>
                  <strong>{testimonials[testimonial].name}</strong>
                  <span>{testimonials[testimonial].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-side">
              <span>WHAT OUR CUSTOMERS SAY</span>
              <div className="testimonial-controls">
                <button
                  onClick={() =>
                    setTestimonial(
                      (testimonial - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() =>
                    setTestimonial((testimonial + 1) % testimonials.length)
                  }
                  aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={i === testimonial ? "active" : ""}
                    onClick={() => setTestimonial(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <SectionHeading
            eyebrow="Simple, honest pricing"
            title="More progress. Less overhead."
            copy="Start free, then grow into the plan that fits your momentum."
          />
          <div className="billing-toggle">
            <button
              className={!annual ? "active" : ""}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={annual ? "active" : ""}
              onClick={() => setAnnual(true)}
            >
              Yearly <span>Save 20%</span>
            </button>
          </div>
          <div className="pricing-grid">
            {[
              {
                name: "Starter",
                price: annual ? "0" : "0",
                copy: "For personal projects and small teams.",
                features: [
                  "Up to 3 teammates",
                  "Unlimited projects",
                  "Core AI assistant",
                  "Basic integrations",
                ],
                featured: false,
                cta: "Start for free",
              },
              {
                name: "Pro",
                price: annual ? "16" : "20",
                copy: "For teams ready to do their best work.",
                features: [
                  "Everything in Starter",
                  "Advanced AI workflows",
                  "Unlimited integrations",
                  "Priority support",
                ],
                featured: true,
                cta: "Start 14-day trial",
              },
              {
                name: "Enterprise",
                price: "Custom",
                copy: "For organizations moving at scale.",
                features: [
                  "Everything in Pro",
                  "Advanced permissions",
                  "Dedicated success partner",
                  "Custom security review",
                ],
                featured: false,
                cta: "Talk to sales",
              },
            ].map((plan) => (
              <article
                className={`price-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="popular">MOST POPULAR</span>}
                <h3>{plan.name}</h3>
                <p>{plan.copy}</p>
                <div className="price">
                  {plan.price === "Custom" ? (
                    plan.price
                  ) : (
                    <>
                      <sup>$</sup>
                      {plan.price}
                      <small>/ seat / mo</small>
                    </>
                  )}
                </div>
                <a
                  className={`button ${plan.featured ? "button-light" : "button-dark"}`}
                  href="#footer"
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="faq-intro">
            <SectionHeading
              eyebrow="Questions, answered"
              title="Good to know."
              copy="Still curious? We like that. Here are a few things teams ask us most."
            />
            <a className="text-link" href="mailto:hello@nova.work">
              Ask us anything <ArrowRight size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                key={q}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <ChevronDown size={19} />
                </button>
                <div className="faq-answer">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-decoration cta-left">✦</div>
          <div className="cta-content">
            <span className="eyebrow">Make room for meaningful work</span>
            <h2>
              Ready to work
              <br />
              <em>smarter?</em>
            </h2>
            <p>Join the teams building better ways to move forward.</p>
            <a className="button button-dark" href="#pricing">
              Start free <ArrowRight size={17} />
            </a>
          </div>
          <div className="cta-decoration cta-right">
            <div className="cta-orbit">
              <span>✦</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">✦</span> NOVA
            </a>
            <p>The intelligent workspace for teams doing meaningful work.</p>
            <div className="socials">
              <a href="#footer" aria-label="X">
                𝕏
              </a>
              <a href="#footer" aria-label="LinkedIn">
                in
              </a>
              <a href="#footer" aria-label="Instagram">
                ◎
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <a href="#features">Features</a>
              <a href="#product">Product tour</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">Changelog</a>
            </div>
            <div>
              <strong>Solutions</strong>
              <a href="#solutions">Engineering</a>
              <a href="#solutions">Marketing</a>
              <a href="#solutions">Design</a>
              <a href="#solutions">Startups</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#footer">About</a>
              <a href="#footer">
                Careers <small>We&apos;re hiring</small>
              </a>
              <a href="#footer">Contact</a>
              <a href="#footer">Press kit</a>
            </div>
            <div className="newsletter">
              <strong>Stay in the loop</strong>
              <p>Product notes, delivered occasionally.</p>
              {subscribed ? (
                <div className="subscribed">
                  <Check size={16} /> You&apos;re on the list.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.includes("@")) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <button aria-label="Subscribe">
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 NOVA Technologies, Inc.</span>
          <div>
            <a href="#footer">Privacy</a>
            <a href="#footer">Terms</a>
            <a href="#footer">Security</a>
          </div>
          <span>Made for momentum.</span>
        </div>
      </footer>

      {showBackTop && (
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
      {demoOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="NOVA demo"
          onClick={() => setDemoOpen(false)}
        >
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setDemoOpen(false)}
              aria-label="Close demo"
            >
              <X />
            </button>
            <div className="demo-play">
              <Play size={25} fill="currentColor" />
            </div>
            <span className="eyebrow">A 90-second tour</span>
            <h2>
              Work, <em>with lift.</em>
            </h2>
            <p>
              See how NOVA gives your team the clarity to make meaningful
              progress every day.
            </p>
            <button
              className="button button-dark"
              onClick={() => setDemoOpen(false)}
            >
              Got it <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}