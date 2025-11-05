"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Zap, Trophy, Lightbulb, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E63946] opacity-[0.03] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1D3557] opacity-[0.05] rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section - What is Altius */}
      <section className="relative pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#F1FAEE] mb-4 goldman-bold tracking-tight">
              ABOUT <span className="text-[#E63946]">ALTIUS</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F1FAEE] font-light mb-4 montserrat-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              SOAR BEYOND LIMITS
            </motion.p>

            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className="text-lg md:text-xl text-[#C5C6C7] leading-relaxed max-w-4xl mx-auto inter-regular"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Altius 2025 is the flagship inter-department technical fest of <span className="text-[#F1FAEE] font-semibold">Srinivas Institute of Technology, Mangalore</span>. 
              A three-day celebration where innovation meets creativity, bringing together brilliant minds from 13 departments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats - Compact */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Calendar, value: "3", label: "Days" },
              { icon: Users, value: "500+", label: "Participants" },
              { icon: Zap, value: "20+", label: "Events" },
              { icon: MapPin, value: "13", label: "Departments" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 text-center hover:border-[#E63946]/30 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#E63946]/20 to-[#1D3557]/20 mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#E63946]" size={20} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-2 goldman-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#C5C6C7] inter-regular">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Participate - Compact */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-[#0B0C10] to-[#151A21]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#F1FAEE] mb-4 goldman-bold tracking-tight">
              WHY <span className="text-[#E63946]">PARTICIPATE?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: "Compete & Win",
                description: "Battle for glory with exciting prizes, cash rewards, and industry recognition.",
              },
              {
                icon: Network,
                title: "Network",
                description: "Connect with 500+ talented peers, industry professionals, and tech leaders.",
              },
              {
                icon: Lightbulb,
                title: "Learn & Grow",
                description: "Gain hands-on experience through workshops and real-world challenges.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-8 hover:border-[#E63946]/30 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#E63946]/20 to-[#1D3557]/20 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#E63946]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F1FAEE] mb-3 goldman-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#C5C6C7] text-base inter-regular leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When & Where + Mission - Side by Side */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* When & Where */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-[#F1FAEE] mb-6 goldman-bold flex items-center justify-center gap-2">
                <Calendar className="text-[#E63946]" size={28} />
                WHEN & WHERE
              </h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-sm text-[#457B9D] mb-1 inter-regular uppercase">Date</p>
                  <p className="text-xl font-bold text-[#F1FAEE] goldman-bold">Nov 10-12, 2025</p>
                </div>
                <div className="h-px bg-[#1F2833]/50 my-4" />
                <div>
                  <p className="text-sm text-[#457B9D] mb-1 inter-regular uppercase">Location</p>
                  <p className="text-lg font-semibold text-[#F1FAEE] inter-regular">Srinivas Institute of Technology</p>
                  <p className="text-sm text-[#C5C6C7] inter-regular">Mangalore, Karnataka</p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-[#F1FAEE] mb-6 goldman-bold flex items-center justify-center gap-2">
                <Zap className="text-[#E63946]" size={28} />
                OUR MISSION
              </h3>
              <p className="text-base text-[#C5C6C7] leading-relaxed inter-regular text-center">
                To foster <span className="text-[#F1FAEE] font-semibold">innovation</span>, 
                <span className="text-[#F1FAEE] font-semibold"> creativity</span>, and 
                <span className="text-[#F1FAEE] font-semibold"> collaboration</span> among students while providing 
                a platform to showcase technical excellence and develop practical skills for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Compact */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-[#0B0C10] to-[#151A21]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] mb-4 goldman-bold tracking-tight">
              ALTIUS <span className="text-[#E63946]">2025</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent mx-auto mb-6" />
            
            <p className="text-lg md:text-xl text-[#C5C6C7] inter-regular leading-relaxed">
              Srinivas Institute of Technology's Premier Inter-Department Technical Fest
            </p>
            
            <p className="text-base md:text-lg text-[#457B9D] mt-4 montserrat-light tracking-wide">
              Innovation • Competition • Collaboration
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
