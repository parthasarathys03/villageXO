"use client";

import { motion } from "framer-motion";
import { Star, Quote, User, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Montgomery",
      country: "Canada",
      rating: 5,
      date: "January 2026",
      text: "I spent two hours transplanting actual rice alongside a farmer who's done this for 40 years. This wasn't tourism — it was real participation. My back was sore, my hands were muddy, and my heart was full.",
    },
    {
      name: "Hans Kruger",
      country: "Germany",
      rating: 5,
      date: "December 2025",
      text: "The most grounding experience of my 3-week India trip. No performance, no staging. Just real work and genuine connection. The wood-fire lunch was the best meal I've had in years.",
    },
    {
      name: "Priya Sundaram",
      country: "India",
      rating: 5,
      date: "February 2026",
      text: "As an Indian from the city, I learned more about my own culture in 6 hours than years of reading. We often look at villages with pity, but VillageXO shows us they are the ones who truly know how to live.",
    },
    {
      name: "Emma Lawson",
      country: "Australia",
      rating: 5,
      date: "November 2025",
      text: "Eating on a banana leaf, cooked with local spices over a wood fire — this is the authentic India I was searching for. Worth every rupee and every minute spent on the road.",
    },
    {
      name: "James Chen",
      country: "Singapore",
      rating: 5,
      date: "January 2026",
      text: "The cattle work was surprisingly peaceful. There is a deep calm in feeding a cow and understanding its role in the ecosystem. Vijay's vision for economic dignity is inspiring.",
    },
    {
      name: "Elena Rossi",
      country: "Italy",
      rating: 5,
      date: "October 2025",
      text: "The cultural craft workshop was a highlight. Weaving palm leaves requires so much patience and skill. I treasure the small basket I made myself.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-clay-terracotta via-earthy-brown to-clay-terracotta text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5 uppercase tracking-wider">Testimonials</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Guest Experiences
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Read the stories of people from around the world who have participated in the VillageXO movement.
          </motion.p>
        </div>
      </motion.section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <Card className="border-2 hover-lift transition-all duration-300 bg-gradient-to-br from-warm-cream/50 to-white">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-golden-harvest text-golden-harvest" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-primary/10" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-earthy-brown">{review.name}</CardTitle>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                          <MapPin className="w-3 h-3" />
                          {review.country} • {review.date}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-foreground/80 leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-12 h-12 text-golden-harvest mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Have you visited us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              We value every guest's feedback. If you've participated in VillageXO, please share your story with us. Your experience helps others understand the value of cultural participation.
            </p>
            <div className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer font-bold text-lg">
              Share Your Experience
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}