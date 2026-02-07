"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wheat, Beef, CookingPot, Palette, ArrowRight, Star, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const valueCards = [
    {
      icon: Wheat,
      title: "Farming Experience",
      description: "Work barefoot in real paddy fields. Transplant rice saplings, understand soil and water flow.",
      seasonal: true,
      gradient: "from-paddy-green/20 to-golden-harvest/20",
    },
    {
      icon: Beef,
      title: "Cattle Work",
      description: "Feed cows and calves, clean cattle spaces, learn traditional care as family members.",
      seasonal: false,
      gradient: "from-earthy-brown/20 to-clay-terracotta/20",
    },
    {
      icon: CookingPot,
      title: "Traditional Cooking",
      description: "Cook on wood fire with clay vessels. Prepare authentic village meals together.",
      seasonal: false,
      gradient: "from-clay-terracotta/20 to-golden-harvest/20",
    },
    {
      icon: Palette,
      title: "Cultural Crafts",
      description: "Create kolam art, weave palm leaves, or try folk instruments. Keep what you make.",
      seasonal: false,
      gradient: "from-golden-harvest/20 to-paddy-green/20",
    },
  ];

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/7415326/pexels-photo-7415326.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Farmer planting rice in lush green field",
      attribution: "Sajal's Gallery on Pexels",
    },
    {
      url: "https://images.pexels.com/photos/18620460/pexels-photo-18620460.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Indian farmer spreading seeds in vibrant green rice field",
      attribution: "GOWTHAM AGM on Pexels",
    },
    {
      url: "https://images.pexels.com/photos/17034795/pexels-photo-17034795.jpeg?auto=compress&cs=tinysrgb&w=1920",
      alt: "Farmer carrying basket in lush paddy field",
      attribution: "Rohit Narayan R on Pexels",
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      country: "Canada",
      rating: 5,
      text: "I transplanted actual rice for 2 hours alongside a farmer who's done this for 40 years. This wasn't tourism — it was real participation.",
    },
    {
      name: "Hans K.",
      country: "Germany",
      rating: 5,
      text: "The most grounding experience of my India trip. No performance, no staging. Just real work and genuine connection.",
    },
    {
      name: "Priya S.",
      country: "India",
      rating: 5,
      text: "As an Indian from the city, I learned more about my culture in 6 hours than years of reading. Farmers are true teachers.",
    },
    {
      name: "Emma L.",
      country: "Australia",
      rating: 5,
      text: "Eating on banana leaf, cooked on wood fire — this is the authentic India I was searching for. Worth every rupee.",
    },
  ];



  return (
    <main className="overflow-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[90vh] flex items-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="absolute inset-0 z-0"
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[90vh]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-earth/85 via-deep-earth/60 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge className="mb-4 sm:mb-6 bg-golden-harvest text-deep-earth text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Authentic Village Experience
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-warm-cream mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Where farming is not shown — it is lived
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-warm-cream/95 mb-4 sm:mb-6 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              In Olimathi Village, Tamil Nadu, you don't watch village life. You participate in it.
              Work barefoot in real paddy fields. Cook traditional meals on wood fire.
            </motion.p>
            
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-golden-harvest mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              This is not tourism. This is access to living civilization.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button asChild size="lg" className="bg-clay-terracotta hover:bg-clay-terracotta/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="/pricing">
                  See Available Dates
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-deep-earth transition-all duration-300">
                <Link href="/experience">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-earthy-brown mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What You Experience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Real participation in village life. Each activity depends on season and availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {valueCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`border-2 hover-lift h-full bg-gradient-to-br ${card.gradient} backdrop-blur-sm`}>
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4 flex items-center justify-between">
                        <motion.div
                          className="p-2.5 sm:p-3 rounded-xl bg-primary/20 backdrop-blur-sm"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        </motion.div>
                        {card.seasonal && (
                          <Badge variant="outline" className="text-xs">
                            Seasonal
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-semibold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story Snippet */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/31715061/pexels-photo-31715061.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional village house in Kodaikanal"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-3 sm:mb-4 bg-secondary text-white">
                <Heart className="w-3 h-3 mr-1.5" />
                Our Mission
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-earthy-brown mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Why VillageXO Exists
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  I didn't create VillageXO to show villages. I created it because villages
                  are disappearing — not physically, but culturally.
                </p>
                <p>
                  Farming became background. Community became concept. Tradition became performance.
                </p>
                <p>
                  VillageXO reverses this. Guests participate, not watch. Work on real farms,
                  eat what villagers eat.
                </p>
                <p className="font-semibold text-foreground">
                  This is not tourism. This is access to living civilization.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">— Vijay M, Founder</p>
              </div>
              <Button asChild variant="outline" className="mt-4 sm:mt-6 border-2 hover-scale">
                <Link href="/about">Read Full Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-earthy-brown mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              What Guests Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Real experiences from people who participated
            </p>
          </motion.div>

          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="border-2 hover-lift h-full bg-gradient-to-br from-warm-cream to-white">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <div className="min-w-0">
                            <CardTitle className="text-sm sm:text-base truncate">{review.name}</CardTitle>
                            <p className="text-xs sm:text-sm text-muted-foreground">{review.country}</p>
                          </div>
                          <div className="flex shrink-0">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-golden-harvest text-golden-harvest" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">"{review.text}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

          <div className="text-center mt-6 sm:mt-8">
            <Button asChild variant="outline" className="hover-scale">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 bg-gradient-to-r from-primary via-clay-terracotta to-primary text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Experience Village Life?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Half-day immersion. Real participation. Cultural continuity.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-warm-cream shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/pricing">Check Available Dates</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
              <Link href="/faq">Read FAQ First</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
