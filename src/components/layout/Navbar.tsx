"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Button from "@/components/ui/link-button";

// Hamburger menu icon
const HamburgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Close icon
const CloseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center bg-transparent">
      {/* Main Navbar */}
      <div className="flex items-center justify-between w-full max-w-[1440px] px-[20px] py-[10px] lg:px-[10px]">
        {/* Logo - Mobile: 23.063px, Desktop: 34.595px */}
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
        <div className="flex items-center gap-[16px]">
          {/* CTA Button */}
          <Button href="/contact" variant="primary" className="bg-[#FFF] text-[#000] hover:bg-[#D0FF71] z-50">
            Let&apos;s Talk
          </Button>

          {/* Hamburger Menu - Visible on mobile only */}
          <button
            className="lg:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[97px] bg-[#090C08] z-40">
          <nav className="flex flex-col items-center py-[40px] gap-[24px]">
            <Link
              href="/"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/career"
              className="text-[#FFF] text-[24px] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
