import { MapPin, Train, Plane, Car, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LocationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Location & Access</h1>
          <p className="body-lg opacity-90">
            Olimathi Village, Near Thiruvarur, Tamil Nadu, India
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="heading-lg text-earthy-brown mb-4">Find Us</h2>
            <Badge variant="outline" className="text-sm">
              Exact GPS location shared after booking confirmation
            </Badge>
          </div>
          
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="aspect-video bg-accent/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="heading-sm text-earthy-brown mb-2">Olimathi Village</p>
                  <p className="body-base text-muted-foreground">
                    Near Thiruvarur, Tamil Nadu
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Google Maps link provided after booking
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Distance Markers */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-12 text-center">
            Distance from Major Cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Thiruvarur</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">20-30 min</p>
                <p className="text-sm text-muted-foreground">Approximately 15-20 km</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Tanjavur</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">1 hour</p>
                <p className="text-sm text-muted-foreground">Approximately 60 km</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Kumbakonam</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">1-1.15 hrs</p>
                <p className="text-sm text-muted-foreground">Approximately 65-70 km</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-12 text-center">
            How to Get There
          </h2>

          {/* By Air */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-md text-earthy-brown">By Air</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Chennai International Airport (MAA)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 body-base text-foreground/80">
                  <p>• Distance: Approximately 320-350 km</p>
                  <p>• Travel time: 6-7 hours by road</p>
                  <p>• Largest airport, most international connections</p>
                  <p className="text-sm text-muted-foreground italic">
                    Recommended for international travelers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Trichy International Airport (TRZ)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 body-base text-foreground/80">
                  <p>• Distance: Approximately 140-160 km</p>
                  <p>• Travel time: 3.5-4 hours by road</p>
                  <p>• Closer alternative, domestic & select international flights</p>
                  <p className="text-sm text-muted-foreground italic">
                    More convenient if available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* By Train */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Train className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="heading-md text-earthy-brown">By Train</h3>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Thiruvarur Junction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 body-base text-foreground/80">
                <p>
                  <strong>Nearest railway station:</strong> 20-30 minutes from Olimathi Village
                </p>
                <p>
                  <strong>Well connected to:</strong> Chennai, Trichy, Tanjavur, Kumbakonam, and other major Tamil Nadu cities
                </p>
                <p>
                  <strong>Pickup available:</strong> We can arrange pickup from Thiruvarur Junction on request (quoted separately, typically ₹1,500-2,000)
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Ideal if arriving by train from Chennai, Trichy, or other cities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* By Road */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <Car className="h-8 w-8 text-accent" />
              </div>
              <h3 className="heading-md text-earthy-brown">By Road</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Self-Drive</CardTitle>
                </CardHeader>
                <CardContent className="body-base text-foreground/80">
                  <p className="mb-2">GPS coordinates provided after booking</p>
                  <p className="mb-2">Parking available</p>
                  <p className="text-sm text-muted-foreground">
                    Roads are accessible by car. Last stretch includes narrow rural roads.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">From Kumbakonam</CardTitle>
                </CardHeader>
                <CardContent className="body-base text-foreground/80">
                  <p className="mb-2">1-1.15 hours travel time</p>
                  <p className="mb-2">Pickup: ₹4,000-5,500</p>
                  <p className="text-sm text-muted-foreground">
                    AC vehicle, per vehicle charge
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">From Tanjavur</CardTitle>
                </CardHeader>
                <CardContent className="body-base text-foreground/80">
                  <p className="mb-2">1 hour travel time</p>
                  <p className="mb-2">Pickup: ₹4,500-6,000</p>
                  <p className="text-sm text-muted-foreground">
                    AC vehicle, per vehicle charge
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Road Conditions */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Road Conditions & Tips
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6 space-y-4 body-base text-foreground/80">
              <div className="flex items-start gap-3">
                <Navigation className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Road Quality</p>
                  <p>
                    Most roads are well-maintained. The last stretch includes narrow rural roads,
                    fully accessible by car. Large buses are not recommended.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Monsoon Travel</p>
                  <p>
                    Rural roads may slow travel during monsoon season (June-September). Allow extra
                    time if traveling during this period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Travel Time Buffer</p>
                  <p>
                    Allow a little extra time for rural navigation. Patience with rural travel
                    conditions is part of the experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Suggested Itinerary */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Suggested Itinerary Integration
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6 space-y-4 body-base text-foreground/80">
              <p>
                VillageXO fits well into South India temple circuit tours. Combine with nearby
                cultural attractions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-foreground">Thanjavur</p>
                  <p className="text-sm text-muted-foreground">
                    Big Temple (Brihadeeswara Temple) - UNESCO World Heritage Site
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Kumbakonam</p>
                  <p className="text-sm text-muted-foreground">
                    Multiple ancient temples, cultural hub
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trichy</p>
                  <p className="text-sm text-muted-foreground">
                    Rock Fort Temple, Sri Ranganathaswamy Temple
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pondicherry</p>
                  <p className="text-sm text-muted-foreground">
                    French colonial heritage, beaches
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mt-4">
                VillageXO can be a day trip from any of these bases. Plan overnight stay in nearby town.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
