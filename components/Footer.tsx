"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const experienceLinks = [
    { name: "Farming Experience", href: "/experience#farming" },
    { name: "Cattle Experience", href: "/experience#cattle" },
    { name: "Traditional Cooking", href: "/experience#cooking" },
    { name: "Cultural Crafts", href: "/experience#culture" },
  ];

  const informationLinks = [
    { name: "About VillageXO", href: "/about" },
    { name: "Founder Story", href: "/founder" },
    { name: "Our Impact", href: "/impact" },
    { name: "Guest Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
  ];

  const policyLinks = [
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Photography Policy", href: "/photography" },
    { name: "Visa & Travel Info", href: "/travel-info" },
    { name: "Safety & Facilities", href: "/facilities" },
  ];

  return (
    <footer className="bg-deep-earth text-warm-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-golden-harvest mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              VillageXO
            </h3>
            <p className="text-base sm:text-lg opacity-80 mb-8 leading-relaxed max-w-xs">
              Where farming is not shown — it is lived. Authentic Tamil village experience.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-clay-terracotta hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {[
            { title: "Experience", links: experienceLinks },
            { title: "Information", links: informationLinks },
            { title: "Policies", links: policyLinks },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
            >
              <h4 className="text-lg font-bold text-golden-harvest mb-6 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base opacity-70 hover:opacity-100 hover:text-golden-harvest transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-clay-terracotta mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info & Location */}
        <motion.div
          className="border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-golden-harvest" />
              </div>
              <span className="text-sm sm:text-base">+91 [Your Number]</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="w-5 h-5 text-golden-harvest" />
              </div>
              <span className="text-sm sm:text-base">contact@villagexo.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-golden-harvest" />
              </div>
              <span className="text-sm sm:text-base">Olimathi Village, Tamil Nadu</span>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-sm opacity-50 mb-2">
              © {new Date().getFullYear()} VillageXO. All rights reserved.
            </p>
            <div className="flex items-center justify-center lg:justify-end gap-2 text-xs opacity-40">
              <Sparkles className="w-3 h-3" />
              <span>Authentic Tamil Culture Preservation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}