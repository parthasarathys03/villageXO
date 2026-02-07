"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Heart, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ImpactPage() {
  const impacts = [
    {
      icon: Handshake,
      title: "Fair Compensation",
      description: "Our hosts earn significantly more than minimum wage for their expertise and time, allowing them to reinvest in their farms.",
      color: "text-paddy-green",
      bg: "bg-paddy-green/10",
    },
    {
      icon: Sprout,
      title: "Sustainable Farming",
      description: "By valuing traditional methods, we encourage farmers to stick to organic and natural practices instead of moving to heavy machinery.",
      color: "text-earthy-brown",
      bg: "bg-earthy-brown/10",
    },
    {
      icon: TrendingUp,
      title: "Youth Retention",
      description: "Showing the younger generation that village life can be economically dignified helps slow down the rural-to-urban brain drain.",
      color: "text-clay-terracotta",
      bg: "bg-clay-terracotta/10",
    },
    {
      icon: Sparkles,
      title: "Cultural Pride",
      description: "When international guests travel across the world to learn a village craft, it reinstills a sense of pride in the local community.",
      color: "text-golden-harvest",
      bg: "bg-golden-harvest/10",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-br from-paddy-green via-earthy-brown to-paddy-green text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5 uppercase tracking-wider">Our Impact</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Cultural Preservation
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            How every VillageXO experience helps protect a living civilization and empowers its people.
          </motion.p>
        </div>
      </motion.section>

      {/* Impact Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {impacts.map((item, index) => {
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
                      <div className={`w-16 h-16 rounded-3xl ${item.bg} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                        <Icon className={`w-10 h-10 ${item.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-foreground/70 leading-relaxed">
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

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 sm:p-16 border-2 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                Dignity Over Pity
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Most rural tourism models rely on the "pity factor" — showing the village as a place of lack that needs charity. VillageXO completely flips this script.
                </p>
                <p className="font-bold text-earthy-brown text-xl">
                  We show the village as a place of abundance.
                </p>
                <p>
                  Abundance of knowledge, abundance of community, and abundance of time. When you pay for an experience, you are not giving a donation; you are paying a fair price for access to a high-value cultural education.
                </p>
                <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Village Pay", value: "75%" },
                    { label: "Stock Photos", value: "0" },
                    { label: "Staged Shows", value: "None" },
                    { label: "Real Impact", value: "Direct" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-accent/5 rounded-2xl">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}