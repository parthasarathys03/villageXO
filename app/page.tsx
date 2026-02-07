import Link from "next/link";
import Image from "next/image";
import { Wheat, Beef, CookingPot, Palette, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const valueCards = [
    {
      icon: Wheat,
      title: "Farming Experience",
      description: "Work barefoot in real paddy fields. Transplant rice saplings, understand soil and water flow. Seasonal farming tasks guided by local farmers.",
      seasonal: true,
    },
    {
      icon: Beef,
      title: "Cattle Work",
      description: "Feed cows and calves, clean cattle spaces, learn traditional care. Experience the calm of working with animals as family members.",
      seasonal: false,
    },
    {
      icon: CookingPot,
      title: "Traditional Cooking",
      description: "Cook on wood fire with clay vessels. Prepare authentic village meals with local families. Eat together on banana leaf.",
      seasonal: false,
    },
    {
      icon: Palette,
      title: "Cultural Crafts",
      description: "Create kolam art, weave palm leaves, or try folk instruments. Learn skills passed through generations. Keep what you make.",
      seasonal: false,
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
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop"
            alt="Farmers working in paddy field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-earth/80 to-deep-earth/40" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-golden-harvest text-deep-earth">
              Authentic Village Experience
            </Badge>
            <h1 className="heading-xl text-warm-cream mb-6">
              Where farming is not shown — it is lived
            </h1>
            <p className="body-lg text-warm-cream/90 mb-8 max-w-2xl">
              In Olimathi Village, Tamil Nadu, you don't watch village life. You participate in it.
              Work barefoot in real paddy fields. Cook traditional meals on wood fire.
              Learn from farmers who've lived this life for generations.
            </p>
            <p className="heading-sm text-golden-harvest mb-8">
              This is not tourism. This is access to living civilization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-clay-terracotta hover:bg-clay-terracotta/90">
                <Link href="/pricing">
                  See Available Dates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-warm-cream text-warm-cream hover:bg-warm-cream/10">
                <Link href="/experience">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-earthy-brown mb-4">
              What You Experience
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Real participation in village life. Each activity depends on season and availability.
              No guarantees, just authentic engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      {card.seasonal && (
                        <Badge variant="outline" className="text-xs">
                          Seasonal
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="heading-sm text-earthy-brown">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="body-base">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story Snippet */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=600&fit=crop"
                alt="Vijay M in village setting"
                className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-secondary text-white">Our Mission</Badge>
              <h2 className="heading-lg text-earthy-brown mb-6">
                Why VillageXO Exists
              </h2>
              <div className="space-y-4 body-base text-foreground/80">
                <p>
                  I didn't create VillageXO to show villages. I created it because villages
                  are disappearing — not physically, but culturally.
                </p>
                <p>
                  Farming became background. Community became concept. Tradition became performance.
                </p>
                <p>
                  VillageXO reverses this. Guests participate, not watch. Work on real farms,
                  eat what villagers eat. Learn how rural communities survived centuries without
                  modern systems.
                </p>
                <p className="font-semibold text-foreground">
                  This is not tourism. This is access to living civilization.
                </p>
                <p className="text-sm text-muted-foreground">— Vijay M, Founder</p>
              </div>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/about">Read Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-earthy-brown mb-4">
              What Guests Say
            </h2>
            <p className="body-lg text-muted-foreground">
              Real experiences from people who participated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <CardTitle className="text-base">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.country}</p>
                    </div>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-golden-harvest text-golden-harvest" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="body-sm text-foreground/80 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-6">Ready to Experience Village Life?</h2>
          <p className="body-lg mb-8 opacity-90">
            Half-day immersion. Real participation. Cultural continuity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-warm-cream">
              <Link href="/pricing">Check Available Dates</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/faq">Read FAQ First</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
