"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Navigation, Sparkles, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function LocationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    message: ''
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `VillageXO Enquiry:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Guests: ${formData.guests}\n` +
      `Message: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919345522396?text=${whatsappMessage}`, '_blank');
    
    // Also send email
    const subject = encodeURIComponent(`VillageXO Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Guests: ${formData.guests}\n` +
      `Message: ${formData.message}`
    );
    
    window.open(`mailto:villagexo50@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '',
      message: ''
    });
    
    // Show success message
    alert('Enquiry sent! We will contact you shortly via WhatsApp and email.');
  };

  const travelOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Nearest airports: Trichy (3.5-4 hrs) or Chennai (6-7 hrs). Private taxi recommended from the airport.",
    },
    {
      icon: Train,
      title: "By Train",
      description: "Nearest major junction: Thiruvarur (20-30 min). Connections available from Chennai, Trichy, and Bangalore.",
    },
    {
      icon: Car,
      title: "By Road",
      description: "Well-connected by highway. Last stretch includes narrow but fully paved rural roads.",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-deep-earth via-earthy-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-golden-harvest text-deep-earth font-bold px-4 py-1.5">Tamil Nadu, India</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Finding Your Way
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Olimathi Village is tucked away in the heart of the Kaveri Delta, a landscape shaped by ancient agriculture and traditions.
          </motion.p>
        </div>
      </motion.section>

      {/* Map Placeholder with Animation */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <motion.div
              className="lg:col-span-2 relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-earthy-brown/5 rounded-[2.5rem] group-hover:bg-earthy-brown/10 transition-colors duration-500" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.344879033285!2d79.45475437492985!3d10.76338678936309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQ4LjIiTiA3OcKwMjcnMjUuMCJF!5e0!3m2!1sen!2sin!4v1738828800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full aspect-video border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm px-3 py-1 text-sm border-2">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  8, Kothamagalam Main Road, Needamagalam, Thiruvarur-614404
                </Badge>
                <Badge variant="outline" className="bg-white/50 backdrop-blur-sm px-3 py-1 text-sm border-2">
                  <Sparkles className="w-4 h-4 mr-2 text-golden-harvest" />
                  Kaveri Delta Region
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="border-2 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                    Distance Markers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Kumbakonam</span>
                    <span className="text-primary font-bold">~ 29 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Tanjavur</span>
                    <span className="text-primary font-bold">~ 40 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Trichy</span>
                    <span className="text-primary font-bold">~ 95 km</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <span className="font-semibold">Chennai</span>
                    <span className="text-primary font-bold">~ 310 km</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-clay-terracotta text-white rounded-3xl shadow-lg">
                <CardContent className="p-6 text-center">
                  <Navigation className="w-10 h-10 mx-auto mb-4 opacity-80" />
                  <h3 className="font-bold text-xl mb-2">GPS Privacy</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    To maintain the tranquility of our hosts' homes, exact coordinates are shared only after booking confirmation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Options Grid */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Travel Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {travelOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover-lift group">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {option.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Plan Your Visit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about reaching VillageXO? Send us an enquiry and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-accent/5 p-6 sm:p-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                  Send an Enquiry
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleEnquirySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="John Doe" 
                      className="h-12 border-2 rounded-xl focus:ring-primary" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-12 border-2 rounded-xl focus:ring-primary" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold">Phone / WhatsApp</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      placeholder="+1..." 
                      className="h-12 border-2 rounded-xl focus:ring-primary" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="font-semibold">Number of Guests</Label>
                    <select 
                      id="guests" 
                      name="guests"
                      className="w-full h-12 border-2 rounded-xl focus:ring-primary bg-background px-3 py-2"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      required 
                    >
                      <option value="">Select number</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message" className="font-semibold">Your Message / Dates Interested</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us when you're planning to visit and any special requirements..." 
                      className="min-h-[150px] border-2 rounded-2xl focus:ring-primary py-4" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button 
                      type="submit"
                      className="w-full h-16 text-xl font-bold bg-clay-terracotta hover:bg-clay-terracotta/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Send Enquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

    </main>
  );
}