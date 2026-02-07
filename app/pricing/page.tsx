"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Users, MapPin, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PricingPage() {
  const [guestType, setGuestType] = useState<"indian" | "international">("indian");
  const [guestCount, setGuestCount] = useState(2);
  const [transport, setTransport] = useState<"self" | "kumbakonam" | "tanjavur">("self");

  const basePrice = guestType === "indian" ? 2500 : 3500;
  
  const getTransportCost = () => {
    if (transport === "self") return 0;
    const isLarge = guestCount >= 5;
    if (transport === "kumbakonam") {
      return isLarge ? 5500 : 4000;
    }
    if (transport === "tanjavur") {
      return isLarge ? 6000 : 4500;
    }
    return 0;
  };

  const serviceFee = basePrice * guestCount;
  const transportCost = getTransportCost();
  const total = serviceFee + transportCost;

  const whatsIncluded = [
    "Farm participation (seasonal activities)",
    "Cattle interaction",
    "Traditional cooking & village lunch on banana leaf",
    "Cultural micro-workshop",
    "English-speaking coordinator/guide throughout",
    "Safety briefing",
    "Drinking water",
    "Shaded rest areas",
    "Certificate of Participation (if full experience completed)",
  ];

  const whatsNotIncluded = [
    "Transport (unless you book it)",
    "Personal items",
    "Any additional meals outside village lunch",
    "Tips (not expected or requested)",
  ];

  return (
    <main>
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-earthy-brown via-clay-terracotta to-earthy-brown text-warm-cream py-16 sm:py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Pricing & Booking
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg opacity-95 mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Half-day immersion (5-6 hours) in Olimathi Village, Tamil Nadu
          </motion.p>
          <Badge className="bg-golden-harvest text-deep-earth font-semibold px-4 py-2">
            Maximum 7 guests per session
          </Badge>
        </div>
      </motion.section>

      {/* Pricing Calculator */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 shadow-2xl hover-lift">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-earthy-brown flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-golden-harvest" />
                  Calculate Your Price
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">All prices in Indian Rupees (INR)</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 sm:pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Guest Type */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <Label htmlFor="guest-type" className="mb-2 block font-semibold text-sm sm:text-base">Guest Type</Label>
                    <Select
                      value={guestType}
                      onValueChange={(value) => setGuestType(value as "indian" | "international")}
                    >
                      <SelectTrigger id="guest-type" className="h-11 sm:h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indian">Indian Guest</SelectItem>
                        <SelectItem value="international">International Guest</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
                      ₹{basePrice.toLocaleString("en-IN")} per person
                    </p>
                  </motion.div>

                  {/* Guest Count */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Label htmlFor="guest-count" className="mb-2 block font-semibold text-sm sm:text-base">Number of Guests</Label>
                    <Select
                      value={guestCount.toString()}
                      onValueChange={(value) => setGuestCount(parseInt(value))}
                    >
                      <SelectTrigger id="guest-count" className="h-11 sm:h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Transport */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <Label htmlFor="transport" className="mb-2 block font-semibold text-sm sm:text-base">Transport Option</Label>
                    <Select
                      value={transport}
                      onValueChange={(value) => setTransport(value as "self" | "kumbakonam" | "tanjavur")}
                    >
                      <SelectTrigger id="transport" className="h-11 sm:h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="self">Self-Arrival</SelectItem>
                        <SelectItem value="kumbakonam">Pickup from Kumbakonam</SelectItem>
                        <SelectItem value="tanjavur">Pickup from Tanjavur</SelectItem>
                      </SelectContent>
                    </Select>
                    {transportCost > 0 && (
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
                        ₹{transportCost.toLocaleString("en-IN")} per vehicle
                      </p>
                    )}
                  </motion.div>
                </div>

                <Separator className="my-6" />

                {/* Price Breakdown */}
                <motion.div
                  className="space-y-4 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <span>
                      Service Fee ({guestCount} × ₹{basePrice.toLocaleString("en-IN")})
                    </span>
                    <span className="font-semibold text-base sm:text-lg">₹{serviceFee.toLocaleString("en-IN")}</span>
                  </div>
                  {transportCost > 0 && (
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span>
                        Transport ({transport === "kumbakonam" ? "Kumbakonam" : "Tanjavur"})
                      </span>
                      <span className="font-semibold text-base sm:text-lg">₹{transportCost.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between items-center bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl">
                    <span className="text-lg sm:text-xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                      Total Amount
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button size="lg" className="w-full text-base sm:text-lg py-7 bg-clay-terracotta hover:bg-clay-terracotta/90 text-white font-bold rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl">
                    <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    Check Available Dates
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium italic">
                    50% advance required to confirm booking
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover-lift">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {whatsIncluded.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover-lift">
                <CardHeader className="bg-gradient-to-br from-muted/20 to-muted/10">
                  <CardTitle className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                    What's NOT Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {whatsNotIncluded.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <span className="text-muted-foreground text-lg">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-earthy-brown mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Transport Options
          </motion.h2>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: MapPin,
                title: "Option 1: Self-Arrival",
                description: "Drive to Olimathi Village using GPS coordinates (shared after booking)",
                details: "Free • Parking available • Last stretch includes narrow rural roads",
                color: "primary",
              },
              {
                icon: MapPin,
                title: "Option 2: Pickup from Kumbakonam",
                description: "Comfortable AC vehicle • 1-1.15 hours travel time",
                prices: { small: "₹4,000", large: "₹5,500" },
                color: "secondary",
              },
              {
                icon: MapPin,
                title: "Option 3: Pickup from Tanjavur",
                description: "Comfortable AC vehicle • 1 hour travel time",
                prices: { small: "₹4,500", large: "₹6,000" },
                color: "accent",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2 sm:gap-3">
                      <option.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${option.color}`} />
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base space-y-2">
                    <p>{option.description}</p>
                    {option.details && (
                      <p className="text-xs sm:text-sm text-muted-foreground">{option.details}</p>
                    )}
                    {option.prices && (
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="flex justify-between items-center p-2.5 sm:p-3 bg-accent/5 rounded-lg">
                          <span className="text-xs sm:text-sm">1-4 guests:</span>
                          <span className="font-bold text-sm sm:text-base">{option.prices.small}</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 sm:p-3 bg-accent/5 rounded-lg">
                          <span className="text-xs sm:text-sm">5-7 guests:</span>
                          <span className="font-bold text-sm sm:text-base">{option.prices.large}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6">
            Transport charge is per vehicle, not per person. Pickup from Thiruvarur Railway Station
            available on request (quoted separately).
          </p>
        </div>
      </section>

      {/* Payment Methods */}
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
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
            Payment Methods
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 border-white/20 text-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">For Indian Guests</CardTitle>
                </CardHeader>
                <CardContent className="text-xs sm:text-sm space-y-2">
                  <p>• UPI (PhonePe, Google Pay, Paytm, BHIM)</p>
                  <p>• Bank transfer (NEFT/RTGS/IMPS)</p>
                  <p>• Debit/Credit Cards</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white/10 border-white/20 text-white hover-lift">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">For International Guests</CardTitle>
                </CardHeader>
                <CardContent className="text-xs sm:text-sm space-y-2">
                  <p>• International Credit/Debit Cards</p>
                  <p>• PayPal</p>
                  <p>• Wise/TransferWise (recommended)</p>
                  <p>• Bank transfer</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center text-sm sm:text-base opacity-95 space-y-3">
            <p>
              50% advance required to confirm booking • Balance due before or on arrival
            </p>
            <p className="text-xs sm:text-sm">
              Exact payment details shared after booking confirmation
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
