"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Droplets, Wind, Home, UserCheck, HeartPulse, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Home,
      title: "Traditional Housing",
      description: "Authentic village homes maintained for safety and hygiene. Clean, tiled floors, natural ventilation.",
    },
    {
      icon: Wind,
      title: "Natural Cooling",
      description: "No AC. Experience the natural cooling of high ceilings, cross-ventilation, and shaded outdoor spaces.",
    },
    {
      icon: ShieldAlert,
      title: "Toilets",
      description: "Traditional Indian-style squat toilets with water-based cleaning. Basic, clean, and private.",
    },
    {
      icon: Droplets,
      title: "Filtered Water",
      description: "Safe drinking water provided (filtered or boiled). We minimize plastic bottle usage.",
    },
  ];

  const safetyProtocols = [
    {
      title: "Supervised Activities",
      description: "Every farming and animal interaction is guided by experienced villagers.",
    },
    {
      title: "Heat Management",
      description: "Flexible pacing with mandatory hydration and shade breaks during activities.",
    },
    {
      title: "First-Aid Ready",
      description: "Basic first-aid kit on-site. Emergency vehicle access available at all times.",
    },
    {
      title: "Emergency Routes",
      description: "Pre-identified routes to the nearest multi-specialty hospital in Thiruvarur (20-30 min).",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-earthy-brown via-clay-terracotta to-earthy-brown text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5">Honest Facilities</Badge>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What to Expect
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We prioritize authenticity over luxury. Our facilities are basic, clean, and reflect real village life.
          </motion.p>
        </div>
      </motion.section>

      {/* Facilities Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover-lift group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-secondary/20">
                  <UserCheck className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                  Safety First Always
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                While we work in real fields and with real animals, your safety is our top priority. We have established protocols to ensure a safe experience for everyone.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {safetyProtocols.map((protocol, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 bg-white rounded-2xl shadow-md border border-accent/10 hover-lift"
                  >
                    <h3 className="font-bold text-earthy-brown mb-2">{protocol.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{protocol.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-paddy-green/20 to-transparent rounded-[2.5rem] -rotate-3" />
              <img
                src="https://images.pexels.com/photos/10914725/pexels-photo-10914725.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Village landscape showing clean environment"
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-golden-harvest mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              How to Prepare
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {[
                { title: "Clothing", text: "Wear loose, comfortable cotton clothes. Expect them to get muddy." },
                { title: "Footwear", text: "Easy-to-remove sandals or flip-flops. We work barefoot in fields." },
                { title: "Protection", text: "Bring a sun hat, sunglasses, and eco-friendly insect repellent." },
                { title: "Hydration", text: "We provide water, but bringing your own reusable bottle is encouraged." },
              ].map((tip, i) => (
                <Card key={i} className="border-2 rounded-2xl hover-lift bg-accent/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-clay-terracotta">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-foreground/80">{tip.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}