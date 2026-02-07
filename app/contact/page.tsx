import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="body-lg opacity-90">
            We're here to answer your questions and help you plan your visit
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                  <MessageCircle className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="heading-sm">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-base text-foreground/80">
                  Fastest way to reach us. Available for international guests too.
                </p>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Works internationally with WiFi
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-sm">Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-base text-foreground/80">
                  For detailed inquiries and booking confirmations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:contact@villagexo.com">
                    Send an Email
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  contact@villagexo.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="heading-sm">Phone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="body-base text-foreground/80">
                  Direct call for urgent matters or booking support.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+91">Call Us</a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  International charges may apply
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before You Contact */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Before You Contact Us
          </h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="heading-sm">Booking Inquiry Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 body-base">
              <p>To help us respond quickly, please share:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Preferred dates or date range</li>
                <li>Number of guests</li>
                <li>Guest nationality (Indian/International)</li>
                <li>Transport preference (Self-arrival/Kumbakonam/Tanjavur)</li>
                <li>Any dietary restrictions or allergies</li>
                <li>Any physical limitations or health concerns</li>
                <li>What draws you to this experience?</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-4">
                This helps us ensure VillageXO is the right fit for you and prepare appropriately.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="heading-lg text-earthy-brown">Location</h2>
          </div>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-4 text-center body-base">
                <p className="font-semibold text-foreground text-lg">
                  Olimathi Village
                </p>
                <p className="text-foreground/80">
                  Near Thiruvarur, Tamil Nadu, India
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">From Thiruvarur</p>
                    <p className="text-muted-foreground">20-30 minutes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">From Tanjavur</p>
                    <p className="text-muted-foreground">1 hour</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">From Kumbakonam</p>
                    <p className="text-muted-foreground">1-1.15 hours</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic mt-6">
                  Exact GPS location shared after booking confirmation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md mb-4">We'll Get Back to You</h2>
          <p className="body-lg opacity-90 mb-6">
            Most inquiries are answered within 24 hours. For urgent matters, WhatsApp is fastest.
          </p>
          <p className="body-base opacity-75">
            We value honest, clear communication — just like village conversations.
          </p>
        </div>
      </section>
    </main>
  );
}
