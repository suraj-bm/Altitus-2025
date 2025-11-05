"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "EVENTS", href: "/events" },
  { name: "LEADERBOARD", href: "/scoreboard" },
  { name: "GALLERY", href: "/gallery" },
  { name: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#1D3557]/30 transition-shadow duration-300 ${scrolled ? "shadow-[0_0_15px_rgba(230,57,70,0.3)]" : ""}`}>
      <div className="hidden md:block">
        <div className="relative h-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
            <div className="flex items-center h-full">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:drop-shadow-[0_0_10px_#E63946] transition-all">
                  <Image src="/altius-bg.png" alt="Altius 2025" fill className="object-cover" priority />
                </div>
                <span className="goldman-bold text-xl text-white tracking-widest group-hover:text-[#E63946] transition-colors whitespace-nowrap">
                  ALTIUS <span className="text-[#E63946]">2025</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link href={link.href} className="relative group">
                      <span className={`text-sm goldman-regular uppercase tracking-wide transition-colors whitespace-nowrap ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}>
                        {link.name}
                      </span>
                      {isActive && <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E63946]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                      {!isActive && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E63946] group-hover:w-full transition-all duration-300" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src="/altius-bg.png" alt="Altius 2025" fill className="object-cover" priority />
          </div>
          <span className="goldman-bold text-lg text-white tracking-wider">
            ALTIUS <span className="text-[#E63946]">2025</span>
          </span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#E63946] transition-colors p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#1D3557]/30">
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-lg goldman-regular tracking-wider transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-[#E63946]"}`}>
                    {link.name}
                    {isActive && <motion.div layoutId="activeMobileNav" className="h-0.5 bg-[#E63946] mt-1 w-12" />}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
