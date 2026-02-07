"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users, Landmark, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Cultural Continuity",
      description: "We don't just 'preserve' culture like a museum; we keep it alive by making it economically viable for the next generation.",
      color: "text-clay-terracotta",
      bg: "bg-clay-terracotta/10",
    },
    {
      icon: ShieldCheck,
      title: "Economic Dignity",
      description: "Farmers are paid for their knowledge and hospitality, ensuring they don't have to leave their land for urban labor.",
      color: "text-paddy-green",
      bg: "bg-paddy-green/10",
    },
    {
      icon: Users,
      title: "Real Connection",
      description: "No performance, no staging. Every interaction is a genuine exchange between human beings sharing a day.",
      color: "text-earthy-brown",
      bg: "bg-earthy-brown/10",
    },
    {
      icon: Landmark,
      title: "Living Civilization",
      description: "Access to agricultural wisdom that has sustained communities for millennia without modern industrial systems.",
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
            <Badge className="mb-4 bg-clay-terracotta text-white px-4 py-1.5">Our Story</Badge>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why VillageXO Exists
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A movement to reclaim the dignity of rural life through direct participation and cultural exchange.
          </motion.p>
        </div>
      </motion.section>

      {/* Founder Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-golden-harvest/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-clay-terracotta/20 rounded-full blur-2xl" />
              <img
                src="https://images.pexels.com/photos/31715061/pexels-photo-31715061.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vijay M in Olimathi Village"
                className="rounded-3xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                A Letter from Vijay M
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed italic">
                <p>
                  "I didn't create VillageXO to show villages. I created it because villages are disappearing — not physically, but culturally. When a village becomes a place people only want to leave, we lose more than just farms; we lose our human baseline."
                </p>
                <p>
                  "In the city, we are consumers. In the village, we are participants. My goal is to give guests a chance to touch the earth, work with their hands, and realize that the farmer is not a figure of poverty, but a master of survival and sustainability."
                </p>
                <p>
                  "At VillageXO, you don't watch. You participate. You work. You eat. You learn. And in doing so, you help keep this civilization alive."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-earthy-brown">Vijay M</p>
                  <p className="text-sm text-muted-foreground">Founder, VillageXO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Core Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we approach the village experience with respect and purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="w-full flex flex-col border-2 hover-lift transition-all duration-500 hover:shadow-2xl hover:border-primary/30 group">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-4 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm`}>
                        <Icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-earthy-brown to-deep-earth rounded-[2.5rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-golden-harvest/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-clay-terracotta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5 uppercase tracking-wider">The Impact</Badge>
                <h2 className="text-3xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Economic Dignity Model
                </h2>
                <div className="space-y-4 text-lg opacity-90 leading-relaxed">
                  <p>
                    Every booking directly supports the village ecosystem. We don't operate on charity; we operate on value.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-golden-harvest shrink-0" />
                      <span><strong>Host Families:</strong> Paid premium rates for their hospitality and time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-golden-harvest shrink-0" />
                      <span><strong>Farming Community:</strong> Income for agricultural guidance and field use.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-golden-harvest shrink-0" />
                      <span><strong>Local Artisans:</strong> Direct earnings from workshops and material prep.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl text-center border border-white/20 hover-lift">
                  <p className="text-3xl sm:text-5xl font-bold text-golden-harvest mb-2">100%</p>
                  <p className="text-sm sm:text-base opacity-80 uppercase tracking-wide">Authentic Engagement</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl text-center border border-white/20 hover-lift">
                  <p className="text-3xl sm:text-5xl font-bold text-golden-harvest mb-2">75%</p>
                  <p className="text-sm sm:text-base opacity-80 uppercase tracking-wide">Direct Village Pay</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl text-center border border-white/20 hover-lift">
                  <p className="text-3xl sm:text-5xl font-bold text-golden-harvest mb-2">0</p>
                  <p className="text-sm sm:text-base opacity-80 uppercase tracking-wide">Stock Photography</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl text-center border border-white/20 hover-lift">
                  <p className="text-3xl sm:text-5xl font-bold text-golden-harvest mb-2">∞</p>
                  <p className="text-sm sm:text-base opacity-80 uppercase tracking-wide">Human Connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}