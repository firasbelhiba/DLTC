"use client";

import { useState } from "react";
import Image from "next/image";
import { certifications, trackColors, filterTracks } from "@/data/certifications";

/* ── Dar Blockchain Logo (actual image from darblockchain.io) ─────── */
function Logo() {
  return (
    <a href="/" className="flex items-center">
      <Image
        src="/darblockchain-logo.png"
        alt="Dar Blockchain"
        width={152}
        height={39}
        className="h-[39px] w-auto"
        priority
      />
    </a>
  );
}

/* ── Arrow icon for buttons ───────────────────────────────────────── */
function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-2">
      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Hamburger Menu Icon ──────────────────────────────────────────── */
function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[6px] cursor-pointer">
      <span className="block w-[28px] h-[2px] bg-white" />
      <span className="block w-[28px] h-[2px] bg-white" />
      <span className="block w-[20px] h-[2px] bg-white" />
    </div>
  );
}

/* ── Pill Button (translucent, like darblockchain.io) ─────────────── */
function PillButton({
  children,
  href = "#",
  variant = "translucent",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "translucent" | "filled" | "dark";
  className?: string;
}) {
  const base = "inline-flex items-center rounded-[25px] px-5 py-3 text-[14px] font-medium transition-all";
  const styles = {
    translucent: `${base} bg-white/[0.15] text-white hover:bg-white/[0.25] backdrop-blur-sm`,
    filled: `${base} bg-accent text-white hover:bg-accent-hover`,
    dark: `${base} bg-bg-dark text-white hover:bg-[#1e1e2e]`,
  };
  return (
    <a href={href} className={`${styles[variant]} ${className}`}>
      {children}
      <Arrow />
    </a>
  );
}

/* ── Main Page ────────────────────────────────────────────────────── */
export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? certifications
      : activeFilter === "Expert"
        ? certifications.filter((c) => c.track.startsWith("Expert"))
        : certifications.filter((c) => c.track === activeFilter);

  return (
    <div className="min-h-screen">
      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <nav className="bg-bg-dark h-[82px] flex items-center px-8 sticky top-0 z-50">
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
          <Logo />
          <HamburgerIcon />
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="relative bg-bg-dark overflow-hidden min-h-[85vh]">
        {/* Background gradient/image effect — mimics the aurora glow on darblockchain.io */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l from-indigo-900/30 via-orange-800/15 to-transparent" />
          <div className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full bg-orange-600/8 blur-[150px]" />
          <div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] rounded-full bg-indigo-600/12 blur-[120px]" />
          <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-blue-600/8 blur-[80px]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row min-h-[85vh]">
          {/* Left: big heading */}
          <div className="flex-1 flex items-center pt-16">
            <h1 className="text-white text-[56px] md:text-[72px] lg:text-[80px] font-normal leading-[1.1] tracking-[-0.04em]">
              The DLTC<br />
              Certification<br />
              Program
            </h1>
          </div>
          {/* Right: description + CTA — vertically centered */}
          <div className="md:w-[380px] flex flex-col justify-center gap-6 pb-16 md:pb-0">
            <p className="text-text-light text-[16px] leading-[1.5]">
              The Distributed Ledger Technology Certification is a complete ecosystem of 36 certifications across 5 specialized tracks and 4 progressive levels, by Dar Blockchain Academy.
            </p>
            <div>
              <PillButton href="#certifications" variant="translucent">
                Explore Program
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats row ──────────────────────────────────────────────── */}
      <section className="bg-bg-light py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "36", label: "Certifications" },
              { value: "5", label: "Tracks" },
              { value: "4", label: "Levels" },
              { value: "13", label: "Fully Detailed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[48px] md:text-[64px] font-normal text-text-dark tracking-[-0.03em]">
                  {s.value}
                </div>
                <div className="text-[14px] text-text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction Text ──────────────────────────────────────── */}
      <section className="bg-bg-light py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-[900px]">
            <p className="text-text-muted text-[14px] uppercase tracking-[0.15em] mb-6">
              Introduction
            </p>
            <p className="text-text-dark text-[20px] md:text-[24px] leading-[1.6] font-normal">
              The DLTC program is designed to provide a structured, progressive path for Web3 professionals at every stage. From foundational blockchain concepts to advanced expert-level certifications, DLTC covers developer, business, security, and marketing tracks — giving learners the skills they need to thrive in the decentralized economy.
            </p>
          </div>
          <div className="mt-10">
            <PillButton href="#overview" variant="dark">
              Learn More
            </PillButton>
          </div>
        </div>
      </section>

      {/* ── Certification Roadmap (Visual Progression) ──────────── */}
      <section id="overview" className="bg-bg-dark py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-white text-[48px] md:text-[64px] font-normal tracking-[-0.04em] leading-[1.1] mb-6">
            Certification Roadmap
          </h2>
          <p className="text-[#888] text-[16px] leading-[1.6] mb-16 max-w-[600px]">
            Four progressive levels building from blockchain fundamentals to expert mastery across five specialized tracks.
          </p>

          {/* Horizontal level progression */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { level: "L1", title: "Foundation", subtitle: "Entry Point", count: 1, hours: "40h", color: "from-emerald-500 to-emerald-700" },
              { level: "L2", title: "Associate", subtitle: "Track Selection", count: 4, hours: "50–80h", color: "from-orange-500 to-orange-700" },
              { level: "L3", title: "Specialization", subtitle: "Deep Expertise", count: 26, hours: "50–120h", color: "from-blue-500 to-blue-700" },
              { level: "L4", title: "Expert", subtitle: "Mastery", count: 5, hours: "140–200h", color: "from-red-500 to-red-700" },
            ].map((l) => (
              <div key={l.level} className="relative group">
                <div className={`bg-gradient-to-br ${l.color} rounded-xl p-6 md:p-8 h-full transition-transform group-hover:scale-[1.02]`}>
                  <div className="text-white/30 text-[11px] font-mono tracking-widest uppercase mb-3">{l.level}</div>
                  <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-1">{l.title}</h3>
                  <p className="text-white/60 text-[13px] mb-6">{l.subtitle}</p>
                  <div className="flex items-baseline gap-2 mt-auto">
                    <span className="text-[36px] md:text-[48px] font-bold text-white leading-none">{l.count}</span>
                    <span className="text-white/50 text-[13px]">cert{l.count > 1 ? "s" : ""}</span>
                  </div>
                  <div className="text-white/40 text-[12px] mt-1">{l.hours} each</div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow flow indicator (desktop) */}
          <div className="hidden md:flex items-center justify-center gap-2 -mt-10 mb-8">
            {["Foundation → ", "Choose Your Track → ", "Specialize → ", "Master"].map((t, i) => (
              <span key={i} className="text-[13px] text-white/30 tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track Explorer (Interactive Table) ─────────────────────── */}
      <section id="certifications" className="bg-bg-light py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-text-dark text-[48px] md:text-[64px] font-normal tracking-[-0.04em] leading-[1.1] mb-6">
            Explore by Track
          </h2>
          <p className="text-text-muted text-[16px] leading-[1.6] mb-12 max-w-[700px]">
            36 certifications across 5 specialized tracks. Click any track to explore its certifications, from associate level through deep specializations.
          </p>

          {/* Track selector tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-black/[0.08] pb-4">
            {(["All", "Foundation", "Developer", "Business", "Security", "Marketing", "Expert"] as const).map((track) => {
              const count = track === "All"
                ? certifications.length
                : track === "Expert"
                  ? certifications.filter((c) => c.track.startsWith("Expert")).length
                  : certifications.filter((c) => c.track === track).length;
              return (
                <button
                  key={track}
                  onClick={() => setActiveFilter(track)}
                  className={`px-5 py-2.5 rounded-t-lg text-[14px] font-medium transition-all border-b-2 ${
                    activeFilter === track
                      ? "bg-accent/10 text-accent border-accent"
                      : "text-text-muted hover:text-text-dark border-transparent hover:bg-black/[0.03]"
                  }`}
                >
                  {track}
                  <span className="ml-1.5 text-[12px] opacity-60">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Grouped by Level */}
          {["L1", "L2", "L3", "L4"].map((level) => {
            const levelCerts = filtered.filter((c) => c.level === level);
            if (levelCerts.length === 0) return null;
            const levelMeta: Record<string, { title: string; color: string; dot: string }> = {
              L1: { title: "Level 1 — Foundation", color: "bg-emerald-500", dot: "bg-emerald-500" },
              L2: { title: "Level 2 — Associate", color: "bg-orange-500", dot: "bg-orange-500" },
              L3: { title: "Level 3 — Specialization", color: "bg-blue-500", dot: "bg-blue-500" },
              L4: { title: "Level 4 — Expert", color: "bg-red-500", dot: "bg-red-500" },
            };
            const meta = levelMeta[level];
            return (
              <div key={level} className="mb-10">
                {/* Level header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                  <h3 className="text-text-dark text-[18px] font-semibold">{meta.title}</h3>
                  <span className="text-text-muted text-[13px] ml-2">{levelCerts.length} certification{levelCerts.length > 1 ? "s" : ""}</span>
                </div>

                {/* Table header */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 px-5 py-3 text-[12px] font-semibold text-text-muted uppercase tracking-wider">
                  <div className="col-span-2">Code</div>
                  <div className="col-span-4">Certification</div>
                  <div className="col-span-2">Track</div>
                  <div className="col-span-1">Duration</div>
                  <div className="col-span-2">Prerequisites</div>
                  <div className="col-span-1">Status</div>
                </div>

                {/* Rows */}
                <div className="border border-black/[0.06] rounded-xl overflow-hidden">
                  {levelCerts.map((cert, idx) => {
                    const colors = trackColors[cert.track] || trackColors["Foundation"];
                    const isExpanded = expandedCert === cert.code;
                    return (
                      <div key={cert.code}>
                        <div
                          className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 items-center cursor-pointer transition-colors hover:bg-black/[0.02] ${
                            idx > 0 ? "border-t border-black/[0.05]" : ""
                          } ${isExpanded ? "bg-accent/[0.03]" : ""}`}
                          onClick={() => setExpandedCert(isExpanded ? null : cert.code)}
                        >
                          {/* Code */}
                          <div className="md:col-span-2">
                            <span className="font-mono text-[13px] text-accent font-semibold">{cert.code}</span>
                          </div>
                          {/* Name */}
                          <div className="md:col-span-4">
                            <span className="text-text-dark text-[15px] font-medium">{cert.name}</span>
                          </div>
                          {/* Track badge */}
                          <div className="md:col-span-2">
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold ${colors.bg} ${colors.text}`}>
                              {cert.track.replace("Expert — ", "E: ")}
                            </span>
                          </div>
                          {/* Duration */}
                          <div className="md:col-span-1">
                            <span className="text-text-muted text-[13px]">{cert.duration}</span>
                          </div>
                          {/* Prerequisites */}
                          <div className="md:col-span-2">
                            <span className="text-text-muted text-[13px]">{cert.prerequisites}</span>
                          </div>
                          {/* Status + expand */}
                          <div className="md:col-span-1 flex items-center justify-between">
                            <span className={`text-[12px] font-semibold ${cert.modules === "Full" ? "text-emerald-600" : "text-orange-500"}`}>
                              {cert.modules === "Full" ? "✓ Full" : "Roadmap"}
                            </span>
                            <svg
                              className={`w-4 h-4 text-text-muted transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {/* Expanded detail */}
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-0 border-t border-black/[0.05] bg-accent/[0.02]">
                            <div className="grid md:grid-cols-3 gap-6 pt-4">
                              <div>
                                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Level</div>
                                <div className="text-text-dark text-[14px]">{cert.levelTitle}</div>
                              </div>
                              <div>
                                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Duration</div>
                                <div className="text-text-dark text-[14px]">{cert.duration} total</div>
                              </div>
                              <div>
                                <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1">Prerequisites</div>
                                <div className="text-text-dark text-[14px]">{cert.prerequisites}</div>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-black/[0.05]">
                              <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">Modules</div>
                              <div className="text-text-dark text-[14px] leading-relaxed">
                                {cert.modules === "Full"
                                  ? "Full detailed curriculum available with lesson plans, assessments, and hands-on labs."
                                  : "Curriculum in development. Module structure and content are being finalized."}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Community / CTA Section ────────────────────────────────── */}
      <section className="bg-bg-dark py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h3 className="text-white text-[40px] md:text-[56px] font-normal tracking-[-0.03em] leading-[1.15] mb-6">
              Start Your<br />Blockchain<br />Certification Journey
            </h3>
            <p className="text-[#888] text-[15px] leading-[1.7] mb-8 max-w-[440px]">
              Join the Dar Blockchain Academy community. Whether you&apos;re a developer, business leader, security researcher, or marketer — there&apos;s a DLTC path for you.
            </p>
            <PillButton href="https://darblockchain.io" variant="translucent">
              Partner with Us
            </PillButton>
          </div>
          <div className="flex-1 relative min-h-[300px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-indigo-600/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[72px] font-bold text-white/10">DLTC</div>
                <div className="text-white/40 text-[14px] mt-2">dltcertification.io</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-bg-dark py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <Logo light />
              <p className="text-[#666] text-[14px] mt-5 leading-[1.6]">
                Gathering a new generation of change-makers through Blockchain.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[15px] font-medium mb-5">Company</h4>
              <ul className="space-y-3">
                {["About", "Services", "Ventures", "Community"].map((item) => (
                  <li key={item}>
                    <a href="https://darblockchain.io" className="text-[14px] text-[#666] hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[15px] font-medium mb-5">Resources</h4>
              <ul className="space-y-3">
                {["Blog", "Brand Guidelines", "Newsletter"].map((item) => (
                  <li key={item}>
                    <a href="https://darblockchain.io" className="text-[14px] text-[#666] hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[15px] font-medium mb-5">Reach us</h4>
              <p className="text-[14px] text-[#666] mb-4">contact@darblockchain.io</p>
              <div className="flex gap-3">
                {[
                  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "in", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { label: "f", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                ].map((icon) => (
                  <a key={icon.label} href="https://darblockchain.io" className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center hover:bg-white/[0.12] transition-colors">
                    <svg className="w-3.5 h-3.5 fill-[#666]" viewBox="0 0 24 24">
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px bg-white/[0.06] mb-8" />
          <p className="text-center text-[13px] text-[#444]">
            &copy; Dar Blockchain 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
