"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4">

        {/* MOBILE */}
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-xl"
            aria-label="Open menu"
          >
            ☰
          </button>

          <span className="font-semibold">Alikhan Tuganbayev</span>
        </div>

        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-2 border-t pt-4">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink href="/research" onClick={() => setOpen(false)}>Research</MobileLink>
            <MobileLink href="/leadership" onClick={() => setOpen(false)}>Leadership</MobileLink>
            <MobileLink href="/initiative" onClick={() => setOpen(false)}>Initiative</MobileLink>
            <MobileLink href="/certificates" onClick={() => setOpen(false)}>Certificates</MobileLink>
            <MobileLink href="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
          </div>
        )}

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-between">
          <span className="font-semibold">Alikhan Tuganbayev</span>

          <div className="flex gap-1 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/research">Research</NavLink>
            <NavLink href="/leadership">Leadership</NavLink>
            <NavLink href="/initiative">Initiative</NavLink>
            <NavLink href="/certificates">Certificates</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>

      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-md hover:bg-gray-100 transition"
    >
      {children}
    </a>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 rounded-md hover:bg-gray-100 transition"
    >
      {children}
    </a>
  );
}
