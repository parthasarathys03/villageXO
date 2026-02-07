"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "villagexo50@gmail.com",
      description: "Detailed queries & partnerships",
      action: "Send Email",
      link: "mailto:villagexo50@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9345522396",
      description: "Direct conversation (10 AM - 6 PM)",
      action: "Call Us",
      link: "tel:+919345522396",
      color: "bg-clay-terracotta",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-br from-earthy-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Connect With Us
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have questions? Ready to book? We're here to help you plan your authentic village experience.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="hover-lift border-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl ${method.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-earthy-brown text-lg">{method.title}</h3>
                            <p className="text-base font-semibold text-primary mb-1">{method.value}</p>
                            <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                            <Button asChild variant="outline" size="lg" className="w-full mt-2 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white h-14 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                              <a href={method.link} target="_blank" rel="noopener noreferrer">{method.action}</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-earthy-brown to-deep-earth text-white border-none shadow-xl rounded-3xl overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-golden-harvest" />
                      Village Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90 leading-relaxed mb-4">
                      8, Kothamagalam Main Road, Needamagalam,<br />
                      Thiruvarur-614404, Tamil Nadu
                    </p>
                    <p className="text-xs text-golden-harvest italic">
                      *Exact GPS coordinates shared after booking confirmation for privacy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Inquiry Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-accent/5 p-6 sm:p-8">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                    Send an Inquiry
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">Full Name</Label>
                      <Input id="name" placeholder="John Doe" className="h-12 border-2 rounded-xl focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-2 rounded-xl focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold">Phone / WhatsApp</Label>
                      <Input id="phone" placeholder="+1..." className="h-12 border-2 rounded-xl focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="font-semibold">Number of Guests</Label>
                      <Input id="guests" type="number" min="1" max="7" placeholder="2" className="h-12 border-2 rounded-xl focus:ring-primary" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="message" className="font-semibold">Your Message / Dates Interested</Label>
                      <Textarea id="message" placeholder="Tell us when you're planning to visit and any special requirements..." className="min-h-[150px] border-2 rounded-2xl focus:ring-primary py-4" />
                    </div>
                    <div className="md:col-span-2">
                      <Button className="w-full h-16 text-xl font-bold bg-clay-terracotta hover:bg-clay-terracotta/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                        <Send className="w-6 h-6 mr-3" />
                        Send Inquiry
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Booking Checklist */}
              <motion.div
                className="mt-8 sm:mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-earthy-brown mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-paddy-green" />
                  Booking Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Maximum 7 guests per session",
                    "50% advance to confirm booking",
                    "Notify food allergies in advance",
                    "Comfortable with squat toilets",
                    "Willing to participate in farm work",
                    "Respect for village culture & privacy",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-accent/5 rounded-xl border border-accent/10">
                      <div className="w-2 h-2 rounded-full bg-paddy-green" />
                      <span className="text-sm sm:text-base font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}