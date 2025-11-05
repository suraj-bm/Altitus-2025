"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import { EVENT_START_DATE, events } from "@/lib/mockData";

export default function Home() {
  const featuredEvents = events.filter(e => e.isLive).slice(0, 3);

  const scrollToContent = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#1D3557]/20 to-[#0B0C10]">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E63946]/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1D3557]/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Content - Perfectly Centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8">
          {/* Logo with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative inline-block mb-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/altius-bg.png"
                alt="Altius Logo"
                width={240}
                height={240}
                className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60"
                priority
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(230, 57, 70, 0.4))',
                }}
              />
            </motion.div>
            
            {/* Animated Wings/Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#E63946]/30 blur-3xl rounded-full -z-10"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F1FAEE] goldman-bold leading-none tracking-wide mb-3"
          >
            ALTIUS <span className="text-[#E63946]">2025</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#457B9D] font-semibold montserrat-semibold tracking-wide mb-2"
          >
            Soar Beyond Limits 🚀
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-[#C5C6C7] inter-regular max-w-3xl leading-relaxed mb-6"
          >
            Inter-Department Technical Fest | Srinivas Institute of Technology
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl hover:border-[#E63946]/50 transition-all">
              <Calendar className="text-[#E63946] flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-[#C5C6C7]/60 inter-medium uppercase tracking-wider">Date</span>
                <span className="text-[#F1FAEE] text-sm md:text-base inter-semibold">Nov 10, 2025</span>
              </div>
            </div>
            <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl hover:border-[#1D3557]/50 transition-all">
              <MapPin className="text-[#1D3557] flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-[#C5C6C7]/60 inter-medium uppercase tracking-wider">Venue</span>
                <span className="text-[#F1FAEE] text-sm md:text-base inter-semibold">SIT, Mangalore</span>
              </div>
            </div>
            <div className="flex items-center gap-3 glass px-5 py-3 rounded-xl hover:border-[#457B9D]/50 transition-all">
              <Users className="text-[#457B9D] flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-[#C5C6C7]/60 inter-medium uppercase tracking-wider">Expected</span>
                <span className="text-[#F1FAEE] text-sm md:text-base inter-semibold">500+ Students</span>
              </div>
            </div>
          </motion.div>

          {/* Countdown Timer with Enhanced Spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="w-full max-w-4xl mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-10 lg:mb-12"
          >
            <CountdownTimer targetDate={EVENT_START_DATE} />
          </motion.div>

          {/* CTA Buttons with Industry-Grade Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-stretch sm:items-center w-full max-w-2xl px-4"
          >
            <Link href="/events" className="flex-1 sm:flex-initial">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative px-8 md:px-10 lg:px-12 py-4 md:py-4.5 lg:py-5 bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#1D3557] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl font-bold text-base md:text-lg inter-bold shadow-xl shadow-[#457B9D]/40 hover:shadow-2xl hover:shadow-[#457B9D]/60 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Events
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
            
            <Link href="/register" className="flex-1 sm:flex-initial">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative px-8 md:px-10 lg:px-12 py-4 md:py-4.5 lg:py-5 bg-gradient-to-r from-[#E63946] to-[#C5283D] text-white rounded-xl font-bold text-base md:text-lg inter-bold shadow-xl shadow-[#E63946]/40 hover:shadow-2xl hover:shadow-[#E63946]/60 transition-all duration-300 overflow-hidden border-2 border-[#E63946]/50 hover:border-[#E63946]"
              >
                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register Now
                  <motion.span
                    className="inline-block"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    ⚡
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
            className="text-[#457B9D] hover:text-[#F1FAEE] transition-colors"
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 md:py-28 lg:py-36 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1FAEE] mb-5 md:mb-7 goldman-bold">
              About <span className="text-[#E63946]">Altius 2025</span>
            </h2>
            <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-7 md:mb-10 rounded-full" />
            <p className="text-[#C5C6C7] text-base md:text-lg lg:text-xl max-w-4xl mx-auto inter-regular leading-relaxed">
              Altius 2025 is the premier inter-department technical fest at Srinivas Institute of Technology. 
              Bringing together brilliant minds from across departments to compete, collaborate, and celebrate innovation. 
              Experience cutting-edge technology, intense competitions, and unforgettable moments.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mb-20 md:mb-28">
            {[
              { value: "20+", label: "Events" },
              { value: "500+", label: "Participants" },
              { value: "6", label: "Departments" },
              { value: "3", label: "Days" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:border-[#457B9D]/50 hover:scale-105 transition-all group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-blue-red bg-clip-text text-transparent goldman-bold mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-[#C5C6C7] inter-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Events */}
          {featuredEvents.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-20"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-4 md:mb-6 goldman-bold">
                  Live <span className="text-[#E63946]">Events</span>
                </h3>
                <p className="text-[#C5C6C7] text-base md:text-lg lg:text-xl inter-regular mt-4 md:mt-5">
                  Join the action happening right now
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
