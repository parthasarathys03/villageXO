import { Wheat, Beef, CookingPot, Palette, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">The VillageXO Experience</h1>
          <p className="body-lg opacity-90">
            Real participation in Tamil village life. Every activity is seasonal and depends
            on what's actually happening in the village that day.
          </p>
        </div>
      </section>

      {/* Farming Experience */}
      <section id="farming" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <Wheat className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h2 className="heading-lg text-earthy-brown">Farming Experience</h2>
                  <Badge variant="outline" className="mt-2">Season-Dependent</Badge>
                </div>
              </div>
              
              <div className="space-y-4 body-base text-foreground/80">
                <p>
                  In VillageXO, farming is not an activity — it is life itself.
                </p>
                <p>
                  You work barefoot in wet paddy fields, slow and mindful. Local farmers guide
                  you through real agricultural tasks that happen on that day.
                </p>
                <h3 className="heading-sm text-earthy-brown mt-6">What You May Do</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Transplant rice saplings in wet fields</li>
                  <li>Prepare and sow seeds</li>
                  <li>Understand soil types and water flow</li>
                  <li>Learn traditional growing methods (no machinery)</li>
                  <li>Experience seasonal rhythms shaping village life</li>
                </ul>
                <p className="text-sm text-muted-foreground italic mt-4">
                  Important: We cannot promise specific activities. You participate in what's
                  actually happening on the farm that day. Clothes will get muddy. Real work involved.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
                alt="Rice transplanting in paddy field"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&h=400&fit=crop"
                alt="Farmer showing traditional technique"
                className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Cattle Experience */}
      <section id="cattle" className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop"
                alt="Feeding cattle in village"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/10">
                  <Beef className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="heading-lg text-earthy-brown">Cattle Experience</h2>
              </div>
              
              <div className="space-y-4 body-base text-foreground/80">
                <p className="font-semibold text-foreground">
                  Cattle are not assets — they are family.
                </p>
                <p>
                  Direct relationship with cattle as family members. Safe, supervised activities
                  where animal welfare comes first always.
                </p>
                <h3 className="heading-sm text-earthy-brown mt-6">Activities</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Feed cows and calves</li>
                  <li>Clean and maintain cattle spaces</li>
                  <li>Learn traditional cattle care</li>
                  <li>Observe or assist in milking (optional, based on comfort)</li>
                  <li>Understand cattle's role in integrated farming</li>
                </ul>
                <Card className="mt-6 border-secondary/20 bg-secondary/5">
                  <CardHeader>
                    <CardTitle className="text-base">The Integrated System</CardTitle>
                  </CardHeader>
                  <CardContent className="body-sm space-y-2">
                    <p>Crops → Feed people</p>
                    <p>Crop waste → Feed cattle</p>
                    <p>Cattle → Support soil fertility</p>
                    <p>Soil → Nourish next harvest</p>
                    <p className="font-semibold text-foreground mt-4">
                      Nothing wasted. Everything connected.
                    </p>
                  </CardContent>
                </Card>
                <p className="text-sm text-muted-foreground italic">
                  Many guests cite this as the most peaceful part of the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Traditional Cooking */}
      <section id="cooking" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary/10">
                  <CookingPot className="h-10 w-10 text-primary" />
                </div>
                <h2 className="heading-lg text-earthy-brown">Traditional Cooking & Village Lunch</h2>
              </div>
              
              <div className="space-y-4 body-base text-foreground/80">
                <p className="font-semibold text-foreground">
                  Lunch is not a meal — it is a cultural experience cooked with hands, fire, and memory.
                </p>
                <p>
                  Food prepared together, not served. Home cooking with local families using
                  traditional methods passed through generations.
                </p>
                <h3 className="heading-sm text-earthy-brown mt-6">The Process</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Wood-fire cooking (no gas)</li>
                  <li>Clay or iron vessels</li>
                  <li>Fresh local ingredients</li>
                  <li>Simple tools, natural pace</li>
                  <li>Participation: cutting, stirring, grinding, or observing</li>
                </ul>
                <h3 className="heading-sm text-earthy-brown mt-6">The Meal</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Served on fresh banana leaf</li>
                  <li>Simple, balanced village dishes</li>
                  <li>Seasonal vegetables, rice-based staples</li>
                  <li>Eating together with family</li>
                  <li>Vegetarian by default (notify if changes needed)</li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Guests often feel: light, naturally full, calm, clear-minded. This is not
                  restaurant food — it's authentic village style with moderate spice (adjustable).
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://images.unsplash.com/photo-1626509829740-0ed9a31e5e1c?w=800&h=600&fit=crop"
                alt="Wood fire cooking with clay vessels"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&h=400&fit=crop"
                alt="Banana leaf meal spread"
                className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Culture Micro-Workshop */}
      <section id="culture" className="py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1610632556993-be55a3b1a8e2?w=800&h=600&fit=crop"
                alt="Traditional craft making"
                className="rounded-lg shadow-lg w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/10">
                  <Palette className="h-10 w-10 text-secondary" />
                </div>
                <h2 className="heading-lg text-earthy-brown">Culture Micro-Workshop</h2>
              </div>
              
              <div className="space-y-4 body-base text-foreground/80">
                <p className="font-semibold text-foreground">
                  Culture is something you touch, create, and remember — not something you watch from a distance.
                </p>
                <p>
                  Hands-on cultural workshop guided by local villagers. Create something yourself,
                  don't just watch. Slow, patient guidance with no time pressure.
                </p>
                <h3 className="heading-sm text-earthy-brown mt-6">Available Activities</h3>
                <p className="text-sm text-muted-foreground">(Choose ONE, based on availability)</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>Kolam Art:</strong> Draw traditional floor patterns with rice flour, learn symbolic meaning</li>
                  <li><strong>Palm Leaf Craft:</strong> Create everyday objects from dried palm leaves</li>
                  <li><strong>Coconut Leaf Weaving:</strong> Weave baskets or functional forms</li>
                  <li><strong>Bamboo Craft:</strong> Make small items, learn bamboo's role in village life</li>
                  <li><strong>Folk Instrument Try-Out:</strong> Try traditional instruments, understand cultural role</li>
                </ul>
                <Card className="mt-6 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-base">What You Take Home</CardTitle>
                  </CardHeader>
                  <CardContent className="body-sm space-y-2">
                    <p>• The item you made yourself</p>
                    <p>• Knowledge behind the craft</p>
                    <p>• Deeper understanding of village creativity</p>
                    <p className="text-xs text-muted-foreground italic mt-2">
                      NOT a souvenir shop item — this is something you created with your hands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Closing Reflection */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="p-4 rounded-lg bg-accent/10">
              <Coffee className="h-10 w-10 text-accent" />
            </div>
            <h2 className="heading-lg text-earthy-brown">Closing Reflection</h2>
          </div>
          
          <div className="space-y-4 body-base text-foreground/80 text-center">
            <p>
              VillageXO ends the way village days always did — with tea, conversation, and
              a quiet sense of belonging.
            </p>
            <p>
              Natural tea or herbal drink. Simple village snacks. Open, relaxed seating.
              No agenda, no rush.
            </p>
            <p>
              Share thoughts from the day. Ask questions about village life. Exchange stories.
              Language, silence, laughter — all welcome.
            </p>
            <p className="font-semibold text-foreground mt-6">
              This is when the experience truly settles.
            </p>
            <p className="text-sm text-muted-foreground italic">
              No feedback session. No sales talk. No donation requests. The conversation ends
              when it feels complete.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
