"use client";

import { useState } from "react";
import { IndianRupee, Users, MapPin, Calendar, CheckCircle2 } from "lucide-react";
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
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Pricing & Booking</h1>
          <p className="body-lg opacity-90">
            Half-day immersion (5-6 hours) in Olimathi Village, Tamil Nadu
          </p>
          <Badge className="mt-4 bg-golden-harvest text-deep-earth">Maximum 7 guests per session</Badge>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2">
            <CardHeader className="bg-accent/5">
              <CardTitle className="heading-md text-earthy-brown">Calculate Your Price</CardTitle>
              <CardDescription>All prices in Indian Rupees (INR)</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Guest Type */}
                <div>
                  <Label htmlFor="guest-type" className="mb-2 block">Guest Type</Label>
                  <Select
                    value={guestType}
                    onValueChange={(value) => setGuestType(value as "indian" | "international")}
                  >
                    <SelectTrigger id="guest-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indian">Indian Guest</SelectItem>
                      <SelectItem value="international">International Guest</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground mt-1">
                    ₹{basePrice.toLocaleString("en-IN")} per person
                  </p>
                </div>

                {/* Guest Count */}
                <div>
                  <Label htmlFor="guest-count" className="mb-2 block">Number of Guests</Label>
                  <Select
                    value={guestCount.toString()}
                    onValueChange={(value) => setGuestCount(parseInt(value))}
                  >
                    <SelectTrigger id="guest-count">
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
                </div>

                {/* Transport */}
                <div>
                  <Label htmlFor="transport" className="mb-2 block">Transport Option</Label>
                  <Select
                    value={transport}
                    onValueChange={(value) => setTransport(value as "self" | "kumbakonam" | "tanjavur")}
                  >
                    <SelectTrigger id="transport">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self-Arrival</SelectItem>
                      <SelectItem value="kumbakonam">Pickup from Kumbakonam</SelectItem>
                      <SelectItem value="tanjavur">Pickup from Tanjavur</SelectItem>
                    </SelectContent>
                  </Select>
                  {transportCost > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      ₹{transportCost.toLocaleString("en-IN")} per vehicle
                    </p>
                  )}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="body-base">
                    Service Fee ({guestCount} × ₹{basePrice.toLocaleString("en-IN")})
                  </span>
                  <span className="font-semibold">₹{serviceFee.toLocaleString("en-IN")}</span>
                </div>
                {transportCost > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="body-base">
                      Transport ({transport === "kumbakonam" ? "Kumbakonam" : "Tanjavur"})
                    </span>
                    <span className="font-semibold">₹{transportCost.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between items-center text-lg">
                  <span className="heading-sm text-earthy-brown">Total Amount</span>
                  <span className="heading-sm text-primary">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <Button size="lg" className="w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Check Available Dates
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-2">
                50% advance required to confirm booking
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="bg-secondary/5">
                <CardTitle className="heading-sm flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 body-base">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-muted/20">
                <CardTitle className="heading-sm">What's NOT Included</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {whatsNotIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 body-base">
                      <span className="text-muted-foreground">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport Details */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">Transport Options</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Option 1: Self-Arrival
                </CardTitle>
              </CardHeader>
              <CardContent className="body-base space-y-2">
                <p>Drive to Olimathi Village using GPS coordinates (shared after booking)</p>
                <p className="text-sm text-muted-foreground">
                  Free • Parking available • Last stretch includes narrow rural roads
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Option 2: Pickup from Kumbakonam
                </CardTitle>
              </CardHeader>
              <CardContent className="body-base space-y-2">
                <p>Comfortable AC vehicle • 1-1.15 hours travel time</p>
                <div className="flex justify-between items-center text-sm">
                  <span>1-4 guests:</span>
                  <span className="font-semibold">₹4,000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>5-7 guests:</span>
                  <span className="font-semibold">₹5,500</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Option 3: Pickup from Tanjavur
                </CardTitle>
              </CardHeader>
              <CardContent className="body-base space-y-2">
                <p>Comfortable AC vehicle • 1 hour travel time</p>
                <div className="flex justify-between items-center text-sm">
                  <span>1-4 guests:</span>
                  <span className="font-semibold">₹4,500</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>5-7 guests:</span>
                  <span className="font-semibold">₹6,000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Transport charge is per vehicle, not per person. Pickup from Thiruvarur Railway Station
            available on request (quoted separately).
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg mb-8 text-center">Payment Methods</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-base">For Indian Guests</CardTitle>
              </CardHeader>
              <CardContent className="body-sm space-y-2">
                <p>• UPI (PhonePe, Google Pay, Paytm, BHIM)</p>
                <p>• Bank transfer (NEFT/RTGS/IMPS)</p>
                <p>• Debit/Credit Cards</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-base">For International Guests</CardTitle>
              </CardHeader>
              <CardContent className="body-sm space-y-2">
                <p>• International Credit/Debit Cards</p>
                <p>• PayPal</p>
                <p>• Wise/TransferWise (recommended)</p>
                <p>• Bank transfer</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center body-base opacity-90">
            <p className="mb-4">
              50% advance required to confirm booking • Balance due before or on arrival
            </p>
            <p className="text-sm">
              Exact payment details shared after booking confirmation
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
