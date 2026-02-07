"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Navigation, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LocationPage() {
  const travelOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Nearest airports: Trichy (3.5-4 hrs) or Chennai (6-7 hrs). Private taxi recommended from the airport.",
    },
    {
      icon: Train,
      title: "By Train",
      description: "Nearest major junction: Thiruvarur (20-30 min). Connections available from Chennai, Trichy, and Bangalore.",
    },
    {
      icon: Car,
      title: "By Road",
      description: "Well-connected by highway. Last stretch includes narrow but fully paved rural roads.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-deep-earth via-earthy-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5">Tamil Nadu, India</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Finding Your Way
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Olimathi Village is tucked away in the heart of the Kaveri Delta, a landscape shaped by ancient agriculture and traditions.
          </motion.p>
        </div>
      </motion.section>

      {/* Map Placeholder with Animation */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              className="lg:col-span-2 relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-earthy-brown/5 rounded-[2.5rem] group-hover:bg-earthy-brown/10 transition-colors duration-500" />
              <img
                src="https://images.pexels.com/photos/31715055/pexels-photo-31715055.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Aerial view of village farmland"
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full aspect-video object-cover group-hover:scale-[1.01] transition-transform duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-clay-terracotta/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-clay-terracotta rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm px-3 py-1 text-sm border-2">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Olimathi Village, Thiruvarur
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm px-3 py-1 text-sm border-2">
                  <Sparkles className="w-4 h-4 mr-2 text-golden-harvest" />
                  Kaveri Delta Region
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="border-2 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                    Distance Markers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Kumbakonam</span>
                    <span className="text-primary font-bold">~ 40 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Tanjavur</span>
                    <span className="text-primary font-bold">~ 60 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Trichy</span>
                    <span className="text-primary font-bold">~ 110 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Chennai</span>
                    <span className="text-primary font-bold">~ 310 km</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-clay-terracotta text-white rounded-3xl shadow-lg">
                <CardContent className="p-6 text-center">
                  <Navigation className="w-10 h-10 mx-auto mb-4 opacity-80" />
                  <h3 className="font-bold text-xl mb-2">GPS Privacy</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    To maintain the tranquility of our hosts' homes, exact coordinates are shared only after booking confirmation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Options Grid */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Travel Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {travelOptions.map((option, index) => {
              const Icon = option.icon;
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
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}