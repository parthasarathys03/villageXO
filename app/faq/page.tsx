import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQPage() {
  const faqSections = [
    {
      category: "About the Experience",
      questions: [
        {
          q: "What exactly is VillageXO?",
          a: "VillageXO is participation in real Tamil village life. You work on actual farms, cook traditional meals alongside local families, and learn cultural crafts hand-to-hand. This is not a tour or demonstration — it's real work guided by village hosts."
        },
        {
          q: "How is this different from other village tours?",
          a: "Most village tours show you activities as performances. At VillageXO, you do the actual work. Farming tasks are real and seasonal, not staged. Villagers are your teachers and hosts, not performers. You eat what they eat, work how they work."
        },
        {
          q: "What language is spoken? I don't speak Tamil.",
          a: "Tamil is the primary language in the village. Our coordination team speaks English. During activities, guidance is given through demonstration and simple communication. Language becomes secondary when you're working side by side."
        },
        {
          q: "Can I come alone or do I need a group?",
          a: "Both welcome. We accept solo travelers and groups up to 7 people maximum. Solo travelers often find the experience deeply personal."
        },
        {
          q: "Is this suitable for children?",
          a: "Yes, if they're comfortable with physical activity and basic facilities. Children must be supervised by parents. Farm work is real, so assess your child's ability to participate safely. Minimum recommended age is 8 years."
        }
      ]
    },
    {
      category: "Activities & Participation",
      questions: [
        {
          q: "What farming activities will I do?",
          a: "It depends entirely on the season. Activities might include: transplanting rice saplings, sowing seeds, understanding soil and water flow, learning traditional methods. We cannot guarantee specific tasks — you participate in what's actually happening on the farm that day."
        },
        {
          q: "What if I can't do physically demanding work?",
          a: "Participation is flexible. You work at your comfort level. If you need to observe or take breaks, that's completely fine. Just inform us of any limitations in advance."
        },
        {
          q: "Will I really milk a cow?",
          a: "Only if you're comfortable and the animal is calm. Animal welfare comes first. Most guests feed and clean cattle spaces. Milking is optional and supervised."
        },
        {
          q: "What cultural craft will I make?",
          a: "One of these, based on availability: Kolam floor art, palm leaf craft, coconut leaf weaving, bamboo craft, or folk instrument try-out. You keep what you make."
        }
      ]
    },
    {
      category: "Booking & Pricing",
      questions: [
        {
          q: "How much does it cost?",
          a: "Half-day immersion (5-6 hours): Indian guests ₹2,500 per person, International guests ₹3,500 per person. Transport from Kumbakonam: ₹4,000-5,500 depending on group size. Transport from Tanjavur: ₹4,500-6,000. Transport is per vehicle, not per person."
        },
        {
          q: "What's included in the price?",
          a: "Farm participation, cattle interaction, traditional cooking and village lunch on banana leaf, cultural micro-workshop, English-speaking coordinator/guide throughout, safety briefing, drinking water, shaded rest areas, and Certificate of Participation (if you complete the full experience)."
        },
        {
          q: "Can I get a refund if I cancel?",
          a: "7+ days before: 100% refund. 2-6 days before: 75% refund. Less than 48 hours: No refund (we've already coordinated with farmers and families). Weather cancellations by us: Full refund or free rescheduling."
        }
      ]
    },
    {
      category: "Facilities & Comfort",
      questions: [
        {
          q: "What are the toilet facilities like?",
          a: "Traditional Indian-style squat toilets with water-based cleaning. Clean and maintained by host households, but basic — not hotel standard. If you have knee or mobility issues with squat toilets, please inform us to discuss suitability."
        },
        {
          q: "Is there a shower?",
          a: "No shower facility in the half-day format. There's a private space to wash hands and feet after field work and change clothes."
        },
        {
          q: "Is the food safe to eat?",
          a: "Yes. Food is freshly prepared in the host family's home kitchen using clean, filtered or boiled water. It's traditional household cooking, not commercial sanitization, but maintained with care."
        },
        {
          q: "I have food allergies. Can you accommodate?",
          a: "Please inform us in advance. We'll work with the host family to avoid your allergens. However, customization is limited — this is home cooking, not a restaurant."
        },
        {
          q: "Is there WiFi?",
          a: "No guaranteed WiFi. This is a rural village. Mobile signal varies by network. We encourage a digital pause to fully engage with the experience."
        }
      ]
    },
    {
      category: "Safety & Health",
      questions: [
        {
          q: "Is it safe?",
          a: "Yes, with proper precautions. All activities are supervised. Farm tools are handled under guidance. Animal interactions are controlled. We have first-aid on site and clear emergency protocols."
        },
        {
          q: "What if I have a medical emergency?",
          a: "Basic first-aid is available immediately. The nearest hospital is in Thiruvarur, 20-30 minutes away. We have vehicle access and pre-identified routes. However, VillageXO is a rural space, not a medical facility."
        },
        {
          q: "Are there mosquitoes or insects?",
          a: "Yes, it's a natural rural environment. Mosquitoes are present seasonally. We recommend bringing basic insect repellent if you're sensitive."
        },
        {
          q: "Is it too hot for foreigners not used to Indian heat?",
          a: "Tamil Nadu gets very hot, especially March-June (35-40°C). We provide water, shade breaks, and flexible pacing. If you're heat-sensitive, consider visiting November-February."
        }
      ]
    },
    {
      category: "Location & Transport",
      questions: [
        {
          q: "Where exactly is VillageXO?",
          a: "Olimathi Village, near Thiruvarur, Tamil Nadu. About 1 hour from Tanjavur, 1-1.15 hours from Kumbakonam. Exact GPS shared after booking confirmation."
        },
        {
          q: "How do I get there?",
          a: "Self-drive with GPS coordinates, Pickup from Kumbakonam (₹4,000-5,500), Pickup from Tanjavur (₹4,500-6,000). Nearest airport: Chennai (6-7 hours), Trichy (3.5-4 hours). Nearest railway: Thiruvarur Junction (20-30 min)."
        },
        {
          q: "Are the roads good?",
          a: "Most roads are fine. Last stretch includes narrow rural roads, fully accessible by car. Large buses not recommended."
        }
      ]
    },
    {
      category: "Cultural & Behavioral",
      questions: [
        {
          q: "Can I take photos?",
          a: "Yes, personal photography is welcome. Be respectful — ask before photographing people's faces. Professional shoots require separate discussion."
        },
        {
          q: "What if I want to give money or gifts to the families?",
          a: "Your participation and respectful engagement IS the exchange. Tips are not expected or requested. If you want to support, the best way is sharing your experience with others who might value it."
        },
        {
          q: "Is this exploitative of villagers?",
          a: "No. Villagers are paid hosts and teachers, not attractions. They earn dignified income from their knowledge and expertise. VillageXO exists to preserve and honor village culture by keeping it economically valued, not to commodify it."
        }
      ]
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-earthy-brown text-warm-cream py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
          <p className="body-lg opacity-90">
            Everything you need to know about the VillageXO experience
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="heading-md text-earthy-brown mb-6">{section.category}</h2>
              <Card className="border-2">
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${sectionIndex}-${index}`}
                      className="px-6"
                    >
                      <AccordionTrigger className="text-left body-base font-semibold hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="body-base text-foreground/80">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-accent/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md text-earthy-brown mb-4">Still Have Questions?</h2>
          <p className="body-base text-foreground/80 mb-6">
            We're here to help. Reach out via WhatsApp, email, or phone.
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
