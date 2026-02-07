import { Droplets, Zap, Armchair, Heart, ShieldCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function FacilitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Facilities & Safety</h1>
          <p className="body-lg opacity-90">
            Basic, functional, and maintained by village families
          </p>
          <Badge className="mt-4 bg-golden-harvest text-deep-earth">
            Traditional Village Environment
          </Badge>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div className="body-base">
                  <p className="font-semibold text-foreground mb-2">
                    VillageXO operates within a real working village environment
                  </p>
                  <p className="text-foreground/80">
                    Facilities are simple, functional, and maintained by local families.
                    This is not a hotel or resort. Honest disclosure helps set clear expectations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Basic Facilities */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-12 text-center">
            Available Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Toilet Facilities */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-sm">Toilet Facilities</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Traditional Indian-style (squat) toilet</p>
                <p>Water-based cleaning system</p>
                <p>Clean and maintained by host household</p>
                <p className="text-sm text-muted-foreground italic">
                  Basic but clean — not hotel standard. If you have knee or mobility concerns
                  with squat toilets, please inform us.
                </p>
              </CardContent>
            </Card>

            {/* Water & Washing */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                  <Droplets className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="heading-sm">Water & Washing</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Private space to wash hands and feet</p>
                <p>Safe drinking water (filtered or boiled)</p>
                <p>Basic changing area provided</p>
                <p className="text-sm text-muted-foreground italic">
                  No shower facility in half-day format. Bring a change of clothes as farm
                  work may get muddy.
                </p>
              </CardContent>
            </Card>

            {/* Electricity */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="heading-sm">Electricity & Connectivity</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Electricity available</p>
                <p>Rural power interruptions may occur</p>
                <p>Phone charging possible (bring power bank as backup)</p>
                <p className="text-sm text-muted-foreground italic">
                  No guaranteed WiFi. Mobile signal varies. We encourage a digital pause.
                </p>
              </CardContent>
            </Card>

            {/* Rest Areas */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                  <Armchair className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="heading-sm">Seating & Rest</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Shaded outdoor seating</p>
                <p>Traditional floor seating for meals</p>
                <p>Chairs available if needed</p>
                <p className="text-sm text-muted-foreground italic">
                  Natural ventilation, no air-conditioning. Tamil Nadu can be hot (35-40°C
                  in summer).
                </p>
              </CardContent>
            </Card>

            {/* Drinking Water */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-sm">Drinking Water</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Safe drinking water provided</p>
                <p>Filtered or boiled water</p>
                <p>Hydration breaks encouraged</p>
                <p className="text-sm text-muted-foreground italic">
                  Guests may bring personal bottled water if preferred. Stay hydrated,
                  especially in summer.
                </p>
              </CardContent>
            </Card>

            {/* Cleanliness */}
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="heading-sm">Cleanliness Standard</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80 space-y-3">
                <p>Traditional household cleanliness</p>
                <p>Freshly prepared food in home kitchen</p>
                <p>Not commercial sanitization</p>
                <p className="text-sm text-muted-foreground italic">
                  Clean and safe, but different from hotel standards. Guests with specific
                  hygiene sensitivities should communicate in advance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Safety Protocols */}
      <section id="safety" className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-10 w-10 text-primary" />
              <h2 className="heading-lg text-earthy-brown">Safety & Emergency Protocols</h2>
            </div>
            <p className="body-lg text-foreground/80">
              VillageXO involves real rural participation. We prepare for emergencies with
              clarity and responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* On-Site Response */}
            <Card className="border-2">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="heading-sm">On-Site Response</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3 body-base text-foreground/80">
                <p>• Basic first-aid kit available at all times</p>
                <p>• Minor cuts, slips, or heat fatigue handled immediately</p>
                <p>• Activities paused if any guest feels discomfort</p>
                <p>• Farm tools supervised</p>
                <p>• Animal interaction controlled</p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  No one is expected to push through discomfort. Participation is flexible.
                </p>
              </CardContent>
            </Card>

            {/* Heat Protocol */}
            <Card className="border-2">
              <CardHeader className="bg-primary/5">
                <CardTitle className="heading-sm">Heat & Fatigue Protocol</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3 body-base text-foreground/80">
                <p>Tamil Nadu temperatures may reach 35-40°C in peak months</p>
                <p className="font-semibold text-foreground mt-4">
                  If a guest shows signs of dizziness, dehydration, or heat exhaustion:
                </p>
                <p>1. Move to shaded area immediately</p>
                <p>2. Provide water and rest</p>
                <p>3. Stop participation for that guest</p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  We provide shade breaks and flexible pacing. Best months for heat-sensitive
                  guests: November-February.
                </p>
              </CardContent>
            </Card>

            {/* Medical Facility */}
            <Card className="border-2">
              <CardHeader className="bg-accent/5">
                <CardTitle className="heading-sm">Nearest Medical Facility</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3 body-base text-foreground/80">
                <p>
                  <strong>Thiruvarur town:</strong> approximately 20-30 minutes from village
                </p>
                <p>Government and private hospitals available</p>
                <p>Emergency vehicle coordination arranged immediately if required</p>
                <p>Route to hospital known and pre-identified</p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  There is no delay in decision-making during emergencies.
                </p>
              </CardContent>
            </Card>

            {/* Guest Responsibility */}
            <Card className="border-2">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="heading-sm">Guest Responsibility</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3 body-base text-foreground/80">
                <p className="font-semibold text-foreground">
                  Guests must inform us in advance if they have:
                </p>
                <p>• Severe allergies</p>
                <p>• Heart conditions</p>
                <p>• Mobility limitations</p>
                <p>• Heat sensitivity</p>
                <p>• Recent injuries</p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  Honest disclosure helps us protect you. Participation is at your own
                  informed comfort level.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5 mt-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div className="body-base">
                  <p className="font-semibold text-foreground mb-2">
                    Important Clarity
                  </p>
                  <p className="text-foreground/80">
                    VillageXO is not a medical facility or controlled studio environment. It is a
                    working village space. We act responsibly and promptly — but guests participate
                    at their own informed comfort level.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            What to Bring
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-foreground mb-3">Essential</p>
                  <ul className="space-y-2 body-base text-foreground/80">
                    <li>• Change of clothes (farm work gets muddy)</li>
                    <li>• Towel</li>
                    <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                    <li>• Comfortable footwear (easily removable)</li>
                    <li>• Any personal medications</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-3">Optional</p>
                  <ul className="space-y-2 body-base text-foreground/80">
                    <li>• Personal bottled water</li>
                    <li>• Basic insect repellent</li>
                    <li>• Power bank</li>
                    <li>• Camera (respectful photography welcome)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
