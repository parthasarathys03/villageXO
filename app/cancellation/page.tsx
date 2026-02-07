import { Calendar, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CancellationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Cancellation Policy</h1>
          <p className="body-lg opacity-90">
            Clear refund timeline and weather exception guidelines
          </p>
        </div>
      </section>

      {/* Policy Notice */}
      <section className="py-12 bg-muted/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div className="body-base">
                  <p className="text-foreground/80">
                    VillageXO operates with advance coordination involving farmers, cooking
                    households, and transport partners. This policy ensures fairness to all
                    parties while protecting guest interests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guest Cancellation Policy */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Calendar className="h-10 w-10 text-primary" />
            <h2 className="heading-lg text-earthy-brown">Guest Cancellation Timeline</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-secondary/50">
              <CardHeader className="bg-secondary/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-sm">7+ Days Before Visit</CardTitle>
                  <Badge className="bg-secondary text-white">100% Refund</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 body-base text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-2">
                      Full refund of all payments (service fee + transport if applicable)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Allows us adequate time to inform farmers and families, and potentially
                      accept other bookings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/50">
              <CardHeader className="bg-accent/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-sm">2-6 Days Before Visit</CardTitle>
                  <Badge className="bg-accent text-white">75% Refund</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 body-base text-foreground/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-2">
                      75% refund of service fee. Transport refund depends on vehicle cancellation
                      terms.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Partial refund accounts for coordination already done and limited
                      opportunity to replace the booking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/50">
              <CardHeader className="bg-destructive/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="heading-sm">Less than 48 Hours Before</CardTitle>
                  <Badge variant="destructive">No Refund</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 body-base text-foreground/80">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-2">
                      No refund for cancellations within 48 hours of visit
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We've already coordinated with farmers, families, and transport partners.
                      Ingredients purchased, schedules adjusted. Last-minute cancellations
                      impact village hosts directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather & Farm Conditions */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <RefreshCw className="h-10 w-10 text-secondary" />
            <h2 className="heading-lg text-earthy-brown">Weather & Farm Condition Changes</h2>
          </div>

          <Card className="border-2">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="heading-sm">
                VillageXO-Initiated Cancellation or Rescheduling
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="body-base text-foreground/80">
                <p className="font-semibold text-foreground mb-2">
                  If extreme weather prevents safe farming activity, guests may choose:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Reschedule</p>
                          <p className="text-sm text-foreground/80">
                            Choose a new date at no additional service charge
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <RefreshCw className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground mb-2">Full Refund</p>
                          <p className="text-sm text-foreground/80">
                            100% refund (transport excluded if vehicle already dispatched)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="font-semibold text-foreground mb-3">Examples of weather conditions that may require rescheduling:</p>
                <ul className="list-disc list-inside space-y-2 body-base text-foreground/80">
                  <li>Heavy rainfall making farm fields unsafe or inaccessible</li>
                  <li>Extreme heat warnings (above safe working temperatures)</li>
                  <li>Flooding or road conditions preventing safe access</li>
                  <li>Natural events affecting village operations</li>
                </ul>
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <p className="body-base text-foreground/80">
                    <strong>Our commitment:</strong> VillageXO will communicate weather or farm
                    condition concerns as early as possible. We prioritize guest safety and
                    meaningful experience over revenue.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transport Refund Details */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Transport Refund Clarification
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6 space-y-4 body-base text-foreground/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Cancellation 48+ Hours Before
                  </p>
                  <p>Full transport refund (if vehicle not yet confirmed with driver)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">
                    Cancellation Within 48 Hours
                  </p>
                  <p>Subject to driver/vendor charges (typically 50% if vehicle dispatched)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Transport refund is separate from service fee refund. Transport partners are
                independent vendors with their own cancellation terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Refund Processing */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Refund Processing
          </h2>
          <Card className="border-2">
            <CardContent className="pt-6 space-y-4 body-base text-foreground/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Processing Timeline</p>
                  <p>Refunds processed within 5-7 working days of cancellation request</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Refund Method</p>
                  <p>Returned via original payment method (UPI, card, bank transfer, etc.)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Confirmation</p>
                  <p>Email confirmation sent once refund is initiated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md text-earthy-brown mb-4">
            Questions About Cancellation?
          </h2>
          <p className="body-base text-foreground/80 mb-6">
            We understand plans change. Contact us if you need to discuss your booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors body-base font-semibold"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:contact@villagexo.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors body-base font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
