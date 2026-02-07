"use client";

import { motion } from "framer-motion";
import { Globe, Plane, ShieldCheck, MapPin, Info, ExternalLink, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TravelInfoPage() {
  const travelTips = [
    {
      icon: ShieldCheck,
      title: "Visa Information",
      description: "Most nationalities require an e-Visa to enter India. Apply at least 2-4 weeks before travel through the official government portal.",
    },
    {
      icon: Globe,
      title: "Health & Vaccines",
      description: "Consult your travel doctor for recommended vaccinations (typically Hep A, Typhoid). Carry basic medicines for stomach upsets.",
    },
    {
      icon: Info,
      title: "Local Currency",
      description: "The Indian Rupee (INR) is the only currency accepted. ATMs are available in Thiruvarur (20 min away). Carry some cash for small village needs.",
    },
    {
      icon: MapPin,
      title: "Mobile Connectivity",
      description: "Airtel and Jio have the best coverage in rural Tamil Nadu. We recommend getting an eSIM or local SIM at the airport.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-br from-deep-earth via-mud-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-primary text-white px-4 py-1.5 uppercase tracking-wider">International Guests</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Visa & Travel Info
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Essential information for international travelers planning their visit to Olimathi Village.
          </motion.p>
        </div>
      </motion.section>

      {/* Travel Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/32227477/pexels-photo-32227477.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Passport and travel documents on an airplane"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                Preparing for India
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  Traveling to rural India is a rewarding journey, but it requires some preparation to ensure a smooth and comfortable experience.
                </p>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <Card className="border-2 bg-accent/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-primary" />
                        Official e-Visa Portal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">Always use the official government website for your visa application. Avoid third-party agencies.</p>
                      <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white h-14 font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
                        <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noopener noreferrer">Visit Official Portal</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {travelTips.map((tip, index) => {
              const Icon = tip.icon;
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
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {tip.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
              Useful Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Air India", link: "https://www.airindia.in/" },
                { title: "Indian Railways", link: "https://www.irctc.co.in/" },
                { title: "Tamil Nadu Tourism", link: "https://www.tamilnadutourism.tn.gov.in/" },
              ].map((link, i) => (
                <Button key={i} asChild variant="outline" className="h-20 text-xl border-2 border-earthy-brown text-earthy-brown hover:bg-earthy-brown hover:text-white font-bold rounded-[1.25rem] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </Button>
              ))}
            </div>
            <p className="mt-12 text-muted-foreground italic">
              "We recommend arriving in South India at least 2 days before your VillageXO experience to acclimate to the weather and time zone."
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}