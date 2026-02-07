import { Heart, Target, Users, Sprout } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">About VillageXO</h1>
          <p className="body-lg opacity-90">
            Where farming is not shown — it is lived
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=1000&fit=crop"
                alt="Vijay M, Founder of VillageXO"
                className="rounded-lg shadow-xl w-full aspect-[3/4] object-cover"
              />
            </div>
            <div>
              <h2 className="heading-lg text-earthy-brown mb-6">Founder's Story</h2>
              <div className="space-y-4 body-base text-foreground/80">
                <p className="font-semibold text-foreground">
                  "I didn't create VillageXO to show villages. I created it because villages
                  are disappearing — not physically, but culturally."
                </p>
                <p>
                  Real village life was turning into something people only "visit" and photograph.
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
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-sm">Our Purpose</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80">
                Protect living village culture by ensuring traditional practices remain
                economically valued and actively practiced.
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="heading-sm">Dignity First</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80">
                Villagers are teachers and hosts, earning dignified income from knowledge —
                not attractions or charity recipients.
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="heading-sm">Real Participation</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80">
                Guests work alongside villagers in real tasks, not staged performances.
                Authentic engagement, not entertainment.
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
                  <Sprout className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="heading-sm">Cultural Continuity</CardTitle>
              </CardHeader>
              <CardContent className="body-base text-foreground/80">
                Preservation means practices remain lived and evolving, not frozen in time
                or museumified.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            The Problem Being Solved
          </h2>
          <div className="space-y-6 body-base text-foreground/80">
            <Card className="border-l-4 border-l-primary bg-primary/5">
              <CardContent className="pt-6">
                <p className="font-semibold text-foreground mb-2">Cultural Disappearance</p>
                <p>
                  As rural economies change, many traditional practices fade quietly: seasonal
                  farming knowledge, cattle-centered agriculture, wood-fire cooking, hand-based
                  crafts, and intergenerational skill transfer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary bg-secondary/5">
              <CardContent className="pt-6">
                <p className="font-semibold text-foreground mb-2">Economic Invisibility</p>
                <p>
                  When rural knowledge becomes economically invisible, it disappears. Youth see
                  no value in traditional skills. Communities lose living connections to their
                  heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent bg-accent/5">
              <CardContent className="pt-6">
                <p className="font-semibold text-foreground mb-2">Tourism Commodification</p>
                <p>
                  Most village tourism treats rural life as a spectacle. Villagers become
                  performers, culture becomes staged, and authentic connection is lost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            What Makes VillageXO Different
          </h2>
          <div className="space-y-4 body-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-destructive mb-2 text-base">
                  ❌ Typical Village Tour
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Staged demonstrations</li>
                  <li>• Villagers as performers</li>
                  <li>• Separate tourist meals</li>
                  <li>• Watch only</li>
                  <li>• 20-50 people bus tours</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-secondary mb-2 text-base">
                  ✓ VillageXO Experience
                </p>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Real seasonal farm work</li>
                  <li>• Villagers as teachers & hosts</li>
                  <li>• Cook and eat together</li>
                  <li>• Hands-on participation</li>
                  <li>• Max 7 guests (intimate)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Dignity Model */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-earthy-brown mb-8 text-center">
            Economic Dignity Model
          </h2>
          <div className="space-y-6 body-base text-foreground/80">
            <p className="text-center text-lg font-semibold text-foreground">
              Farmers are paid for knowledge, not pitied for lifestyle
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Farmers</p>
                  <p className="text-sm">Guide agricultural work and share knowledge</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Cooking Households</p>
                  <p className="text-sm">Share traditional methods and host meals</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold text-foreground mb-2">Artisans & Elders</p>
                  <p className="text-sm">Teach cultural activities and crafts</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-6">
              Hosts are partners in cultural continuity, not attractions or beneficiaries
              of charity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md mb-6">Experience It Yourself</h2>
          <p className="body-lg opacity-90 mb-8">
            If you are curious, respectful, and open to learning — VillageXO welcomes you.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-warm-cream">
            <Link href="/pricing">Check Available Dates</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
