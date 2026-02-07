"use client";

import { motion } from "framer-motion";
import { Camera, CameraOff, Eye, UserCheck, Heart, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PhotographyPage() {
  const guidelines = [
    {
      icon: UserCheck,
      title: "Consent First",
      description: "Always ask for permission before taking close-up photos of villagers, especially children and elders.",
      color: "text-paddy-green",
      bg: "bg-paddy-green/10",
    },
    {
      icon: Camera,
      title: "Personal Use",
      description: "Photography for personal memories and social media is welcome. Tag us @VillageXO!",
      color: "text-earthy-brown",
      bg: "bg-earthy-brown/10",
    },
    {
      icon: CameraOff,
      title: "Restricted Areas",
      description: "Avoid photography inside private prayer rooms or during sensitive cultural rituals unless invited.",
      color: "text-clay-terracotta",
      bg: "bg-clay-terracotta/10",
    },
    {
      icon: Eye,
      title: "Be Present",
      description: "We encourage 'digital pauses'. Put the camera away for at least an hour to truly feel the experience.",
      color: "text-golden-harvest",
      bg: "bg-golden-harvest/10",
    },
  ];

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
            <Badge className="mb-4 bg-clay-terracotta text-white px-4 py-1.5 uppercase tracking-wider">Etiquette</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Photography Policy
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Capturing memories with respect, dignity, and mindfulness for our village hosts.
          </motion.p>
        </div>
      </motion.section>

      {/* Photography Image */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1585563003575-a00e42c64603?auto=compress&cs=tinysrgb&w=800"
                alt="Tourist taking respectful photo of Indian village life"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                The Lens of Respect
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  At VillageXO, we believe that the best way to remember an experience is to live it fully. However, we understand the desire to capture the beauty of our village.
                </p>
                <p>
                  Our photography policy is simple: <strong>The comfort of our villagers comes before the quality of your photo.</strong>
                </p>
                <div className="bg-accent/5 p-6 rounded-2xl border-l-4 border-clay-terracotta italic">
                  "A camera can be a bridge or a barrier. We ask you to use it as a bridge to share our culture, not as a barrier to experiencing it."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Guidelines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple rules to ensure everyone feels comfortable and respected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {guidelines.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover-lift transition-all duration-300">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                        <Icon className={`w-8 h-8 ${item.color}`} />
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

      {/* Professional Media */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-golden-harvest mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Professional Media & Commercial Use
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                Professional photography, drone filming, or commercial media projects require separate discussion and formal permission from the Village Council and VillageXO.
              </p>
              <p>
                We charge a separate media fee for commercial shoots, 100% of which goes into the Village Community Fund for infrastructure projects.
              </p>
              <Separator className="my-8" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm px-4 py-1.5 border-2 border-clay-terracotta text-clay-terracotta">No Drones without permission</Badge>
                <Badge variant="outline" className="text-sm px-4 py-1.5 border-2 border-primary text-primary">No tripod setups in narrow paths</Badge>
                <Badge variant="outline" className="text-sm px-4 py-1.5 border-2 border-secondary text-secondary">Respect host privacy</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}