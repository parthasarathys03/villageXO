"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqSections = [
    {
      category: "About the Experience",
      icon: "🌾",
      questions: [
        {
          q: "What exactly is VillageXO?",
          a: "VillageXO is participation in real Tamil village life. You work on actual farms, cook traditional meals alongside local families, and learn cultural crafts hand-to-hand. This is not a tour or demonstration — it's real work guided by village hosts."
        },
        {
          q: "How is this different from other village tours?",
          a: "Most village tours show you activities as performances. At VillageXO, you do the actual work. Farming tasks are real and seasonal, not staged. Villagers are your teachers and hosts, not performers."
        },
        {
          q: "What language is spoken? I don't speak Tamil.",
          a: "Tamil is the primary language in the village. Our coordination team speaks English. During activities, guidance is given through demonstration and simple communication."
        },
        {
          q: "Can I come alone or do I need a group?",
          a: "Both welcome. We accept solo travelers and groups up to 7 people maximum."
        },
        {
          q: "Is this suitable for children?",
          a: "Yes, if they're comfortable with physical activity and basic facilities. Children must be supervised by parents. Minimum recommended age is 8 years."
        }
      ]
    },
    {
      category: "Activities & Participation",
      icon: "👨‍🌾",
      questions: [
        {
          q: "What farming activities will I do?",
          a: "It depends entirely on the season. Activities might include: transplanting rice saplings, sowing seeds, understanding soil and water flow. We cannot guarantee specific tasks — you participate in what's actually happening that day."
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
      icon: "💰",
      questions: [
        {
          q: "How much does it cost?",
          a: "Half-day immersion (5-6 hours): Indian guests ₹2,500 per person, International guests ₹3,500 per person. Transport from Kumbakonam: ₹4,000-5,500. Transport from Tanjavur: ₹4,500-6,000."
        },
        {
          q: "What's included in the price?",
          a: "Farm participation, cattle interaction, traditional cooking and village lunch on banana leaf, cultural micro-workshop, English-speaking coordinator, safety briefing, drinking water, shaded rest areas, and Certificate of Participation."
        },
        {
          q: "Can I get a refund if I cancel?",
          a: "7+ days before: 100% refund. 2-6 days before: 75% refund. Less than 48 hours: No refund. Weather cancellations by us: Full refund or free rescheduling."
        }
      ]
    },
    {
      category: "Facilities & Comfort",
      icon: "🏠",
      questions: [
        {
          q: "What are the toilet facilities like?",
          a: "Traditional Indian-style squat toilets with water-based cleaning. Clean and maintained by host households, but basic — not hotel standard. If you have mobility issues, please inform us."
        },
        {
          q: "Is there a shower?",
          a: "No shower facility in the half-day format. There's a private space to wash hands and feet after field work and change clothes."
        },
        {
          q: "Is the food safe to eat?",
          a: "Yes. Food is freshly prepared in the host family's home kitchen using clean, filtered or boiled water. It's traditional household cooking, maintained with care."
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
      icon: "🏥",
      questions: [
        {
          q: "Is it safe?",
          a: "Yes, with proper precautions. All activities are supervised. Farm tools are handled under guidance. Animal interactions are controlled. We have first-aid on site and clear emergency protocols."
        },
        {
          q: "What if I have a medical emergency?",
          a: "Basic first-aid is available immediately. The nearest hospital is in Thiruvarur, 20-30 minutes away. We have vehicle access and pre-identified routes."
        },
        {
          q: "Are there mosquitoes or insects?",
          a: "Yes, it's a natural rural environment. Mosquitoes are present seasonally. We recommend bringing basic insect repellent if you're sensitive."
        },
        {
          q: "Is it too hot for foreigners not used to Indian heat?",
          a: "Tamil Nadu gets very hot, especially March-June (35-40°C). We provide water, shade breaks, and flexible pacing. Best months: November-February."
        }
      ]
    },
    {
      category: "Location & Transport",
      icon: "📍",
      questions: [
        {
          q: "Where exactly is VillageXO?",
          a: "8, Kothamagalam Main Road, Needamagalam, Thiruvarur-614404, Tamil Nadu. About 1 hour from Tanjavur, 1-1.15 hours from Kumbakonam. Exact GPS shared after booking confirmation."
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
      icon: "📷",
      questions: [
        {
          q: "Can I take photos?",
          a: "Yes, personal photography is welcome. Be respectful — ask before photographing people's faces. Professional shoots require separate discussion."
        },
        {
          q: "What if I want to give money or gifts to the families?",
          a: "Your participation and respectful engagement IS the exchange. Tips are not expected or requested. If you want to support, the best way is sharing your experience with others."
        },
        {
          q: "Is this exploitative of villagers?",
          a: "No. Villagers are paid hosts and teachers, not attractions. They earn dignified income from their knowledge and expertise. VillageXO exists to preserve and honor village culture by keeping it economically valued."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg opacity-95 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need to know about the VillageXO experience
          </motion.p>
        </div>
      </motion.section>

      {/* FAQ Sections */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">{section.icon}</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                  {section.category}
                </h2>
              </div>
              <Card className="border-2 shadow-lg hover-lift">
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${sectionIndex}-${index}`}
                      className="px-4 sm:px-6 border-b last:border-b-0"
                    >
                      <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary py-4 sm:py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm lg:text-base text-foreground/80 pb-4 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <motion.section
        className="py-16 sm:py-20 bg-gradient-to-r from-accent/10 to-accent/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-earthy-brown mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to help. Reach out via WhatsApp, email, or phone.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-2xl h-16 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white rounded-2xl h-16 px-10 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300">
              <a href="mailto:contact@villagexo.com">
                <Mail className="w-6 h-6 mr-3" />
                Email Us
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
