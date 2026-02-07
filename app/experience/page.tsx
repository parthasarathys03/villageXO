"use client";

import { motion } from "framer-motion";
import { Wheat, Beef, CookingPot, Palette, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ExperiencePage() {
  return (
    <main>
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-earthy-brown via-earthy-brown to-clay-terracotta text-warm-cream py-16 sm:py-20 relative overflow-hidden"
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
            The VillageXO Experience
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg opacity-95 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real participation in Tamil village life. Every activity is seasonal and depends
            on what's actually happening in the village that day.
          </motion.p>
        </div>
      </motion.section>

      {/* Farming Experience */}
      <section id="farming" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  className="p-3 sm:p-4 rounded-2xl bg-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Wheat className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </motion.div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                    Farming Experience
                  </h2>
                  <Badge variant="outline" className="mt-2">Season-Dependent</Badge>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p className="font-semibold text-foreground">
                  In VillageXO, farming is not an activity — it is life itself.
                </p>
                <p>
                  You work barefoot in wet paddy fields, slow and mindful. Local farmers guide
                  you through real agricultural tasks that happen on that day.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-earthy-brown mt-4 sm:mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  What You May Do
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Transplant rice saplings in wet fields</li>
                  <li>Prepare and sow seeds</li>
                  <li>Understand soil types and water flow</li>
                  <li>Learn traditional growing methods (no machinery)</li>
                  <li>Experience seasonal rhythms shaping village life</li>
                </ul>
                <Card className="mt-4 sm:mt-6 border-primary/30 bg-primary/5">
                  <CardContent className="pt-4 sm:pt-6">
                    <p className="text-xs sm:text-sm text-muted-foreground italic">
                      <strong>Important:</strong> We cannot promise specific activities. You participate in what's
                      actually happening on the farm that day. Clothes will get muddy. Real work involved.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/7415326/pexels-photo-7415326.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="South Asian man planting rice in lush green field"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/18620460/pexels-photo-18620460.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Indian farmer spreading seeds in vibrant green rice field"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
                <img
                  src="https://images.pexels.com/photos/17034795/pexels-photo-17034795.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Farmer carrying basket in lush paddy field"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Cattle Experience */}
      <section id="cattle" className="py-12 sm:py-16 lg:py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/35545895/pexels-photo-35545895.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Senior Indian man standing with cow in rural courtyard"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
                <img
                  src="https://images.pexels.com/photos/30147594/pexels-photo-30147594.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cow and her calf in rural village setting"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1739066112286-be4f0662ec9f?w=800&auto=format&fit=crop&q=80"
                alt="Cattle in rural farm setting"
                className="mt-4 rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  className="p-3 sm:p-4 rounded-2xl bg-secondary/20"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Beef className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                  Cattle Experience
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  Cattle are not assets — they are family.
                </p>
                <p>
                  Direct relationship with cattle as family members. Safe, supervised activities
                  where animal welfare comes first always.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-earthy-brown mt-4 sm:mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Activities
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Feed cows and calves</li>
                  <li>Clean and maintain cattle spaces</li>
                  <li>Learn traditional cattle care</li>
                  <li>Observe or assist in milking (optional, based on comfort)</li>
                  <li>Understand cattle's role in integrated farming</li>
                </ul>
                <Card className="mt-4 sm:mt-6 border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">The Integrated System</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm space-y-2">
                    <p>Crops → Feed people</p>
                    <p>Crop waste → Feed cattle</p>
                    <p>Cattle → Support soil fertility</p>
                    <p>Soil → Nourish next harvest</p>
                    <p className="font-semibold text-foreground mt-3 sm:mt-4 text-sm sm:text-base">
                      Nothing wasted. Everything connected.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Traditional Cooking */}
      <section id="cooking" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  className="p-3 sm:p-4 rounded-2xl bg-primary/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CookingPot className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Traditional Cooking
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  Lunch is not a meal — it is a cultural experience cooked with hands, fire, and memory.
                </p>
                <p>
                  Food prepared together, not served. Home cooking with local families using
                  traditional methods passed through generations.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-earthy-brown mt-4 sm:mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  The Process
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Wood-fire cooking (no gas)</li>
                  <li>Clay or iron vessels</li>
                  <li>Fresh local ingredients</li>
                  <li>Simple tools, natural pace</li>
                  <li>Participation: cutting, stirring, grinding, or observing</li>
                </ul>
                <h3 className="text-lg sm:text-xl font-semibold text-earthy-brown mt-4 sm:mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  The Meal
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Served on fresh banana leaf</li>
                  <li>Simple, balanced village dishes</li>
                  <li>Seasonal vegetables, rice-based staples</li>
                  <li>Eating together with family</li>
                  <li>Vegetarian by default (notify if changes needed)</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/14596422/pexels-photo-14596422.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Woman in colorful attire cooks on traditional clay stove"
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/7026382/pexels-photo-7026382.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sizzling meal cooked outdoors on traditional clay stove"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
                <img
                  src="https://pixabay.com/get/g9c201343a062860634acbd70d4d2ace431b1ebc2d2be5b0b4ec3db8824c72dbd8706dd5a68707aca228e22832b927b44.jpg"
                  alt="Traditional banana leaf meal"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Culture Micro-Workshop */}
      <section id="culture" className="py-12 sm:py-16 lg:py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://pixabay.com/get/g5465ef6c8ab1b6451e186ab484c7027bcab3fa7e69a86d59cec3555682a4d7de8abfcc78930e940611562b3f324cd37d.jpg"
                  alt="Traditional kolam rice flour art"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
                <img
                  src="https://images.pexels.com/photos/32054494/pexels-photo-32054494.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Villagers crafting in rural setting, weaving palm leaves"
                  className="rounded-xl shadow-lg w-full aspect-square object-cover hover-scale"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1756806431541-e94fb7df9157?w=800&auto=format&fit=crop&q=80"
                alt="Hands weaving palm fronds into a mat"
                className="mt-4 rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover hover-scale"
              />
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  className="p-3 sm:p-4 rounded-2xl bg-secondary/20"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Palette className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                  Culture Micro-Workshop
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  Culture is something you touch, create, and remember — not something you watch from a distance.
                </p>
                <p>
                  Hands-on cultural workshop guided by local villagers. Create something yourself,
                  don't just watch. Slow, patient guidance with no time pressure.
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-earthy-brown mt-4 sm:mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Available Activities
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">(Choose ONE, based on availability)</p>
                <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
                  <li><strong>Kolam Art:</strong> Draw traditional floor patterns with rice flour</li>
                  <li><strong>Palm Leaf Craft:</strong> Create everyday objects from dried palm leaves</li>
                  <li><strong>Coconut Leaf Weaving:</strong> Weave baskets or functional forms</li>
                  <li><strong>Bamboo Craft:</strong> Make small items, learn bamboo's role</li>
                  <li><strong>Folk Instrument Try-Out:</strong> Try traditional instruments</li>
                </ul>
                <Card className="mt-4 sm:mt-6 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">What You Take Home</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs sm:text-sm space-y-2">
                    <p>• The item you made yourself</p>
                    <p>• Knowledge behind the craft</p>
                    <p>• Deeper understanding of village creativity</p>
                    <p className="text-xs text-muted-foreground italic mt-2">
                      NOT a souvenir shop item — this is something you created with your hands.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Closing Reflection */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="p-3 sm:p-4 rounded-2xl bg-accent/20 shadow-inner"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Coffee className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
              Closing Reflection
            </h2>
          </motion.div>
          
          <motion.div
            className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
            <p className="font-semibold text-foreground mt-4 sm:mt-6 text-base sm:text-lg">
              This is when the experience truly settles.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              No feedback session. No sales talk. No donation requests. The conversation ends
              when it feels complete.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
