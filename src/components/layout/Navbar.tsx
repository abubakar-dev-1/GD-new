"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Button from "@/components/ui/link-button";

// Animated hamburger / X icon
function AnimatedHamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top line → rotates to form X */}
      <path
        d={isOpen ? "M6 6L18 18" : "M3 6H21"}
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
        style={{ transformOrigin: "center" }}
      />
      {/* Middle line → fades out */}
      <path
        d="M3 12H21"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
        style={{ opacity: isOpen ? 0 : 1 }}
      />
      {/* Bottom line → rotates to form X */}
      <path
        d={isOpen ? "M18 6L6 18" : "M3 18H21"}
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300 ease-in-out"
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blogs" },
  { href: "/career", label: "Careers" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="w-full flex justify-center bg-transparent">
      {/* Main Navbar */}
      <div className="flex items-center justify-between w-full max-w-[1440px] px-[16px] sm:px-[20px] py-[10px] lg:px-[10px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-[600] text-[23.063px] lg:text-[34.595px] leading-normal z-50"
          style={{ fontFamily: "Inter" }}
        >
          <span className="text-[#D0FF71]">G</span>
          <span className="text-[#FFF]">D.</span>
        </Link>

        {/* Desktop Navigation Menu - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Menu setActive={setActive}>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Home">
                {null}
              </MenuItem>
            </Link>

            <Link href="/about">
              <MenuItem setActive={setActive} active={active} item="About Us">
                {null}
              </MenuItem>
            </Link>

            <Link href="/projects">
              <MenuItem setActive={setActive} active={active} item="Projects">
                {null}
              </MenuItem>
            </Link>

            <Link href="/services">
              <MenuItem setActive={setActive} active={active} item="Services">
                {null}
              </MenuItem>
            </Link>

            <Link href="/contact">
              <MenuItem setActive={setActive} active={active} item="Contact">
                {null}
              </MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="/blog">Blogs</HoveredLink>
                <HoveredLink href="/career">Careers</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Right side - Button and Mobile Menu */}
        <div className="flex items-center gap-[8px] sm:gap-[16px]">
          {/* CTA Button */}
          <Button href="/contact" variant="primary" className="bg-[#FFF] text-[#000] hover:bg-[#D0FF71] z-50 !px-[16px] !pl-[16px] !pr-[20px] sm:!pl-[24px] sm:!pr-[32px] text-[12px] sm:text-[14px]">
            Let&apos;s Talk
          </Button>

          {/* Hamburger Menu - Visible on mobile only */}
          <button
            className="lg:hidden z-50 p-1 sm:p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <AnimatedHamburger isOpen={mobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[97px] bg-[#000000] z-40 transition-all duration-400 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center py-[32px] sm:py-[40px] gap-[20px] sm:gap-[24px]">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#FFF] text-[20px] sm:text-[24px] font-medium transition-all duration-300 ease-out"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: mobileMenuOpen ? `${100 + i * 50}ms` : "0ms",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
