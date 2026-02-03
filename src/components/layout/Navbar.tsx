"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import Button from "@/components/ui/link-button";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center bg-transparent">
      <div className="flex items-center justify-between w-full max-w-[1440px] px-[10px] py-[10px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-[600] text-[34.595px] leading-normal z-50"
          style={{ fontFamily: "Inter" }}
        >
          <span className="text-[#D0FF71]">G</span>
          <span className="text-[#FFF]">D.</span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex-1 flex justify-center">
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
              <div className="flex flex-col space-y-4 text-sm p-4">
                <HoveredLink href="/resources/blogs">Blogs</HoveredLink>
                <HoveredLink href="/resources/careers">Careers</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* CTA Button */}
        <Button href="/contact" variant="primary" className="bg-[#FFF] text-[#000] hover:bg-[#D0FF71] z-50">
          Let&apos;s Talk
        </Button>
      </div>
    </div>
  );
}
