"use client";

import { motion } from "framer-motion";
import { XCircle, RefreshCcw, Clock, ShieldCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CancellationPage() {
  const policies = [
    {
      icon: ShieldCheck,
      title: "7+ Days Before",
      value: "100% Refund",
      description: "Full refund of your advance payment. No questions asked.",
      color: "text-paddy-green",
      bg: "bg-paddy-green/10",
    },
    {
      icon: RefreshCcw,
      title: "2-6 Days Before",
      value: "75% Refund",
      description: "We retain 25% to compensate host families for preparation.",
      color: "text-golden-harvest",
      bg: "bg-golden-harvest/10",
    },
    {
      icon: Clock,
      title: "Less than 48 Hours",
      value: "No Refund",
      description: "Materials are bought and families are ready. Non-refundable.",
      color: "text-clay-terracotta",
      bg: "bg-clay-terracotta/10",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <motion.section
        className="bg-gradient-to-r from-deep-earth via-mud-brown to-deep-earth text-warm-cream py-16 sm:py-24 relative overflow-hidden"
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
            <Badge className="mb-4 bg-clay-terracotta text-white px-4 py-1.5 uppercase tracking-wider">Policies</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Cancellation Policy
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fair terms for our guests and dignified compensation for our village hosts.
          </motion.p>
        </div>
      </motion.section>

      {/* Refund Timeline */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-earthy-brown mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Refund Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we handle cancellations based on your arrival date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover-lift transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-full ${policy.bg} flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${policy.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold text-earthy-brown mb-1">
                        {policy.title}
                      </CardTitle>
                      <p className={`text-2xl font-bold ${policy.color}`}>{policy.value}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {policy.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="py-16 sm:py-24 bg-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border-2 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-clay-terracotta text-white">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown" style={{ fontFamily: 'var(--font-heading)' }}>
                Special Circumstances
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-earthy-brown">Weather Cancellations</h3>
                <p className="text-base text-foreground/80 leading-relaxed">
                  If <strong>we</strong> cancel the experience due to extreme weather or village emergencies, you are entitled to a <strong>100% refund</strong> or a free reschedule to a date of your choice.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-earthy-brown">Rescheduling</h3>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Guests can reschedule their visit once, up to 72 hours before arrival, subject to availability. Subsequent rescheduling or last-minute changes will be treated as cancellations.
                </p>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-earthy-brown">No-Shows</h3>
                <p className="text-base text-foreground/80 leading-relaxed">
                  Failure to arrive at the designated meeting point or village within 1 hour of the scheduled start time without prior notice will be considered a no-show and is non-refundable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            "We understand that travel plans change. However, our village hosts set aside their entire day and prepare fresh materials for your arrival. These policies ensure their time and labor are respected."
          </p>
          <div className="mt-8">
            <Badge variant="outline" className="text-sm px-4 py-1.5 border-2">VillageXO Coordination Team</Badge>
          </div>
        </div>
      </section>
    </main>
  );
}