"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Heart, Landmark, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FounderStoryPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-deep-earth via-mud-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-clay-terracotta text-white px-4 py-1.5 uppercase tracking-wider">The Visionary</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Founder's Story
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet Vijay M, the man behind VillageXO, and understand the journey from urban success to rural reclamation.
          </motion.p>
        </div>
      </motion.section>

      {/* Story Content */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <img
                src="https://images.pexels.com/photos/35545895/pexels-photo-35545895.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vijay M in rural setting"
                className="rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover hover-scale"
              />
              <div className="mt-8 p-6 bg-accent/5 rounded-2xl border-l-4 border-primary">
                <Quote className="w-10 h-10 text-primary opacity-20 mb-2" />
                <p className="text-xl font-bold text-earthy-brown italic leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                  "We are not looking for tourists. We are looking for people who want to remember what it means to be human in connection with the earth."
                </p>
                <p className="mt-4 font-bold text-primary">— Vijay M</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-base sm:text-lg text-foreground/80 leading-relaxed"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>The Turning Point</h2>
                <p>
                  For years, Vijay M worked in the high-pressure environments of India's tech hubs. Like many, he saw the rural-to-urban migration as a one-way street — a necessary step for "progress." But every visit back to his ancestral village told a different story.
                </p>
                <p>
                  He saw vibrant traditions being traded for industrial labor. He saw master farmers, who possessed thousands of years of inherited wisdom, being viewed as figures of pity rather than masters of sustainability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>The Birth of VillageXO</h2>
                <p>
                  VillageXO was born out of a simple question: <em>"Can we create a bridge where the city guest pays for the farmer's knowledge, not just their produce?"</em>
                </p>
                <p>
                  Vijay realized that the only way to save village culture was to make it economically viable. Not through charity, but through value. By opening the village as a site of participation rather than observation, he created a model where the farmer is the teacher and the guest is the student.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  { icon: Heart, title: "Respect", text: "Treating villagers as dignified hosts." },
                  { icon: Sparkles, title: "Authenticity", text: "Zero performance, 100% participation." },
                  { icon: Landmark, title: "Wisdom", text: "Honoring ancient farming secrets." },
                  { icon: Users, title: "Community", text: "Direct economic impact for families." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-accent/5 rounded-2xl hover-lift">
                    <item.icon className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-earthy-brown">{item.title}</h4>
                      <p className="text-sm opacity-80">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <h2 className="text-3xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>A Personal Invitation</h2>
                <p>
                  "I invite you to come to Olimathi with an open mind and a willing pair of hands. Leave your expectations of luxury at the gate, and prepare for a richness of experience that no five-star hotel can provide."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}