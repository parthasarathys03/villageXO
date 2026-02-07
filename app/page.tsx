"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wheat, CookingPot, Palette, ArrowRight, Star, Sparkles, Heart, Bike } from "lucide-react";
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

type ExperienceCard = {
  icon: React.ComponentType<{ className?: string }>;
  id: string;
  title: string;
  description: string;
  seasonal: boolean;
  image: string;
  imageAlt: string;
};

// Custom Cow Icon Component
const CowIcon = ({ className }: { className?: string }) => (
  <img 
    src="/cow-icon.png" 
    alt="Cow Icon" 
    className={className}
  />
);

export default function Home() {
  const experienceCards: ExperienceCard[] = [
    {
      icon: Wheat,
      id: "farming",
      title: "Farming Experience",
      description: "Work barefoot in real paddy fields. Transplant rice saplings, understand soil and water flow.",
      seasonal: true,
      image: "https://images.pexels.com/photos/7415326/pexels-photo-7415326.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Farmer planting rice in lush green field",
    },
    {
      icon: CowIcon,
      id: "cattle",
      title: "Cattle Work",
      description: "Feed cows and calves, clean cattle spaces, learn traditional care as family members.",
      seasonal: false,
      image: "https://images.pexels.com/photos/35545895/pexels-photo-35545895.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Senior Indian man standing with cow in rural courtyard",
    },
    {
      icon: CookingPot,
      id: "cooking",
      title: "Traditional Cooking",
      description: "Cook on wood fire with clay vessels. Prepare authentic village meals together.",
      seasonal: false,
      image: "https://images.pexels.com/photos/14596422/pexels-photo-14596422.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Woman cooking on traditional clay stove",
    },
    {
      icon: Palette,
      id: "culture",
      title: "Cultural Crafts",
      description: "Create kolam art, weave palm leaves, or try folk instruments. Keep what you make.",
      seasonal: false,
      image: "https://images.pexels.com/photos/32054494/pexels-photo-32054494.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Villagers crafting in rural setting",
    },
    {
      icon: Bike,
      id: "mobility",
      title: "Village Mobility",
      description: "Explore the village by walking or cycling, following the natural rhythm of village life.",
      seasonal: false,
      image: "https://images.pexels.com/photos/258385/pexels-photo-258385.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Cyclist riding through peaceful village road",
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button asChild size="xl" className="bg-clay-terracotta hover:bg-clay-terracotta/90 text-white font-bold">
                <Link href="/pricing" className="flex items-center">
                  See Available Dates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="white" className="font-bold">
                <Link href="/experience">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Experience - Carousel */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-warm-cream via-background to-warm-cream/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Badge className="bg-clay-terracotta/10 text-clay-terracotta border-clay-terracotta/30 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Authentic Experiences
              </Badge>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earthy-brown mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              What You Experience
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Real participation in village life. Each activity depends on season and availability.
            </p>
          </motion.div>

          {/* Experience Cards Carousel */}
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {experienceCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <CarouselItem key={card.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Link href={`/experience#${card.id}`} className="block h-full">
                      <div className="experience-card relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                        {/* Image Section - 50% */}
                        <div className="relative h-48 sm:h-56 overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.imageAlt}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />
                          
                          {/* Floating Icon */}
                          <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          
                          {/* Seasonal Badge */}
                          {card.seasonal && (
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-golden-harvest text-deep-earth font-semibold shadow-lg">
                                Seasonal
                              </Badge>
                            </div>
                          )}
                          
                          {/* Title Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                              {card.title}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Content Section - 30% */}
                        <div className="p-5 sm:p-6">
                          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-3">
                            {card.description}
                          </p>
                        </div>
                        
                        {/* Learn More Button - 10% */}
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-primary hover:text-clay-terracotta transition-colors duration-200 flex items-center">
                              Learn More
                              <span className="ml-2 inline-block">
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 hover:translate-x-1" />
                              </span>
                            </span>
                            
                            {/* Decorative Element */}
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* View All Experiences Button */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-clay-terracotta hover:bg-clay-terracotta/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/experience" className="flex items-center gap-2">
                Explore All Experiences
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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
              <Button asChild variant="outline" size="lg" className="mt-4 sm:mt-6 font-bold">
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
            <Button asChild variant="outline" size="lg" className="font-bold">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How VillageXO Is Different */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How VillageXO Is Different
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              VillageXO is not designed as a demonstration space. It takes place inside a living village where daily work continues whether guests arrive or not.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-earthy-brown mb-6 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                No Performance Environment
              </h3>
              <p className="text-foreground/80 mb-4">
                There is:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>No stage</li>
                <li>No pre-arranged show</li>
                <li>No scripted cultural display</li>
                <li>No "activity zones" prepared only for visitors</li>
              </ul>
              <p className="text-foreground/80">
                Farm work happens because the season demands it.
                Cooking happens because families eat daily.
                Crafts happen because hands still practice them.
                Guests participate in what is already happening.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-earthy-brown mb-6 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                No Fixed Activity Checklist
              </h3>
              <p className="text-foreground/80 mb-4">
                Many rural tours offer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Pre-planned demonstrations</li>
                <li>Guaranteed craft lists</li>
                <li>Scheduled performances</li>
              </ul>
              <p className="text-foreground/80">
                VillageXO does not promise specific tasks.
                Activities depend on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-2">
                <li>Agricultural season</li>
                <li>Weather</li>
                <li>Host availability</li>
                <li>Natural village rhythm</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                This means each visit may differ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-earthy-brown mb-6 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                No Observer-Only Model
              </h3>
              <p className="text-foreground/80 mb-4">
                In many tours, guests:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Watch from the side</li>
                <li>Take photos</li>
                <li>Listen to explanations</li>
                <li>Leave unchanged</li>
              </ul>
              <p className="text-foreground/80">
                At VillageXO:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-2">
                <li>You work with your hands.</li>
                <li>You cook with families.</li>
                <li>You create something yourself.</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                Participation is central.
                Observation is secondary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-earthy-brown mb-6 flex items-center" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                No Resort Framing
              </h3>
              <p className="text-foreground/80 mb-4">
                VillageXO is not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>A themed rural property</li>
                <li>A curated heritage backdrop</li>
                <li>A commercial "village experience center"</li>
              </ul>
              <p className="text-foreground/80">
                It is a functioning agricultural community.
                Guests enter respectfully.
              </p>
              <p className="text-foreground/80 mt-4 font-semibold">
                What This Means for You
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mt-2">
                <li>You may get muddy</li>
                <li>Adjust to weather</li>
                <li>Move at village pace</li>
                <li>Experience simplicity</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                There is no theatrical polish.
                There is real life.
                VillageXO does not recreate village life.
                It joins it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline and Trust Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-earthy-brown to-deep-earth text-warm-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              VillageXO — Real Village Life, Led by Local Families
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-golden-harvest/20 text-golden-harvest rounded-full text-sm sm:text-base font-medium">
                  Participate. Not sightseeing.
                </span>
                <span className="px-4 py-2 bg-golden-harvest/20 text-golden-harvest rounded-full text-sm sm:text-base font-medium">
                  Real work. Real homes. Real people.
                </span>
                <span className="px-4 py-2 bg-golden-harvest/20 text-golden-harvest rounded-full text-sm sm:text-base font-medium">
                  Half-day rural participation (5–6 hours)
                </span>
              </div>
              <p className="text-lg sm:text-xl text-warm-cream/90 max-w-3xl mx-auto">
                Located near Thanjavur, Kumbakonam, and Thiruvarur • Tamil Nadu village setting • Seasonal farming and household cooking • Cultural creation guided by villagers
              </p>
            </div>
          </div>

          <div className="bg-earthy-brown/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-earthy-brown/40">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Hosted Directly by Verified Local Families
                </h3>
                <p className="text-warm-cream/80">
                  Every session is conducted by known and verified village host families.
                  No third-party operators. No staged coordinators.
                </p>
              </div>
              <div className="bg-warm-cream/10 rounded-2xl p-6 border border-warm-cream/20 flex-1">
                <h4 className="font-bold text-lg mb-3 text-golden-harvest" style={{ fontFamily: 'var(--font-heading)' }}>
                  Search VillageXO
                </h4>
                <p className="text-sm text-warm-cream/80 mb-4">
                  Plan Your Village Day
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="bg-earthy-brown/20 p-3 rounded-lg">
                    <p className="font-semibold mb-1">Date</p>
                    <p className="text-warm-cream/70">[Calendar Picker]</p>
                  </div>
                  <div className="bg-earthy-brown/20 p-3 rounded-lg">
                    <p className="font-semibold mb-1">Guests</p>
                    <p className="text-warm-cream/70">1–7 People</p>
                  </div>
                  <div className="bg-earthy-brown/20 p-3 rounded-lg">
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-warm-cream/70">Self / Kumbakonam / Tanjavur</p>
                  </div>
                </div>
              </div>
            </div>
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="xl" variant="secondary" className="bg-white text-primary hover:bg-warm-cream">
              <Link href="/pricing">Check Available Dates</Link>
            </Button>
            <Button asChild size="xl" variant="white">
              <Link href="/faq">Read FAQ First</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}