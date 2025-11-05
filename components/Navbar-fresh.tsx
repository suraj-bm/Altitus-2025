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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-[#1D3557]/30 ${
        scrolled ? "shadow-[0_0_15px_rgba(230,57,70,0.3)]" : ""
      }`}
    >
      {/* Desktop & Tablet Navigation */}
      <div className="hidden md:block">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex items-center h-20 relative">
            
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0 z-20">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden group-hover:drop-shadow-[0_0_10px_#E63946] transition-all">
                  <Image
                    src="/altius-bg.png"
                    alt="Altius 2025"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="goldman-bold text-xl text-white tracking-widest group-hover:text-[#E63946] transition-colors whitespace-nowrap">
                  ALTIUS <span className="text-[#E63946]">2025</span>
                </span>
              </motion.div>
            </Link>

            {/* Navigation Links - Center */}
            <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="flex items-center gap-8 lg:gap-10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link href={link.href} className="relative group block">
                        <span
                          className={`text-sm goldman-regular uppercase tracking-wide transition-colors ${
                            isActive ? "text-white" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.name}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E63946]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {!isActive && (
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E63946] group-hover:w-full transition-all duration-300" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/altius-bg.png"
                alt="Altius 2025"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="goldman-bold text-lg text-white tracking-wider">
              ALTIUS <span className="text-[#E63946]">2025</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-[#E63946] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40"
          >
            <div className="flex flex-col items-center justify-center h-full px-6 space-y-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-2xl goldman-regular tracking-wider transition-all ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-[#E63946]"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="h-1 bg-[#E63946] mt-2 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
