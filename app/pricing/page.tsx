"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2, Sparkles, MessageCircle, CreditCard, ArrowRight, X, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// ─── Custom Mini Calendar ─────────────────────────────────────────────────────
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function MiniCalendar({
  selectedDates,
  onToggle,
}: {
  selectedDates: Date[];
  onToggle: (date: Date) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const selectedKeys = useMemo(
    () => new Set(selectedDates.map((d) => d.toDateString())),
    [selectedDates]
  );

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  // Build calendar grid
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#faf7f3] border-b border-gray-100">
        <button
          onClick={prevMonth}
          className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-gray-700" />
        </button>
        <span className="font-bold text-gray-900 text-sm sm:text-base">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button
          onClick={nextMonth}
          className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="h-4 w-4 text-gray-700" />
        </button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 border-b border-gray-100">
        {DAYS.map((d) => (
          <div key={d} className="text-center py-2 text-xs font-bold text-gray-500 uppercase tracking-wide">
            {d}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          if (!day) {
            return <div key={`e-${idx}`} className="aspect-square" />;
          }
          const date = new Date(viewYear, viewMonth, day);
          date.setHours(0, 0, 0, 0);
          const isPast = date < today;
          const isToday = date.toDateString() === today.toDateString();
          const isSelected = selectedKeys.has(date.toDateString());

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onToggle(date)}
              className={[
                "aspect-square flex items-center justify-center text-sm font-semibold transition-all duration-150 relative",
                isPast
                  ? "text-gray-300 cursor-not-allowed"
                  : isSelected
                  ? "bg-[#c0502a] text-white rounded-lg mx-0.5 my-0.5 shadow-md hover:bg-[#a8431f]"
                  : isToday
                  ? "text-[#c0502a] font-bold ring-2 ring-[#c0502a] rounded-lg mx-0.5 my-0.5 hover:bg-[#fce8dc]"
                  : "text-gray-900 hover:bg-[#fce8dc] hover:text-[#c0502a] rounded-lg mx-0.5 my-0.5",
              ].join(" ")}
            >
              {day}
              {isSelected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/70" />
              )}
            </button>
          );
        })}
      </div>

      <div className="px-4 py-2 bg-[#faf7f3] border-t border-gray-100 text-xs text-gray-500 text-center">
        Tap a date to select • Tap again to deselect
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [guestType, setGuestType] = useState<"indian" | "international">("indian");
  const [guestCount, setGuestCount] = useState(2);
  const [transport, setTransport] = useState<"self" | "kumbakonam" | "tanjavur">("self");
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  const basePrice = guestType === "indian" ? 2500 : 3500;

  const getTransportCost = () => {
    if (transport === "self") return 0;
    const isLarge = guestCount >= 5;
    if (transport === "kumbakonam") return isLarge ? 5500 : 4000;
    if (transport === "tanjavur") return isLarge ? 6000 : 4500;
    return 0;
  };

  const serviceFee = basePrice * guestCount;
  const transportCost = getTransportCost();
  const perSessionCost = serviceFee + transportCost;
  const numDates = selectedDates.length;
  const total = perSessionCost * (numDates || 1);
  const advance = Math.round(total * 0.5);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

  const formatDateFull = (date: Date) =>
    date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const transportLabel =
    transport === "self" ? "Self-Arrival" :
    transport === "kumbakonam" ? "Pickup from Kumbakonam" : "Pickup from Tanjavur";

  const toggleDate = (date: Date) => {
    setSelectedDates((prev) => {
      const key = date.toDateString();
      const exists = prev.some((d) => d.toDateString() === key);
      return exists ? prev.filter((d) => d.toDateString() !== key) : [...prev, date];
    });
  };

  const removeDate = (date: Date) => {
    setSelectedDates((prev) => prev.filter((d) => d.toDateString() !== date.toDateString()));
  };

  const buildWhatsAppMessage = () => {
    const dateLines = selectedDates.length > 0
      ? selectedDates
          .sort((a, b) => a.getTime() - b.getTime())
          .map((d) => `  - ${formatDateFull(d)}`)
          .join("\n")
      : "  - To be decided";
    const lines = [
      "Hello! I'd like to book a VillageXO experience.",
      "",
      `*Preferred Date(s):*`,
      dateLines,
      "",
      `*Guest Type:* ${guestType === "indian" ? "Indian" : "International"}`,
      `*Number of Guests:* ${guestCount}`,
      `*Transport:* ${transportLabel}`,
      `*Estimated Total:* ₹${total.toLocaleString("en-IN")}${numDates > 1 ? ` (${numDates} sessions)` : ""}`,
      "",
      "Please confirm availability and share payment details. Thank you!",
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919345522396?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const whatsIncluded = [
    "Farm participation (seasonal activities)",
    "Cattle interaction",
    "Traditional cooking & village lunch on banana leaf",
    "Cultural micro-workshop",
    "English-speaking coordinator/guide throughout",
    "Safety briefing",
    "Drinking water",
    "Shaded rest areas",
    "Certificate of Participation (if full experience completed)",
  ];

  const whatsNotIncluded = [
    "Transport (unless you book it)",
    "Personal items",
    "Any additional meals outside village lunch",
    "Tips (not expected or requested)",
  ];

  return (
    <main>
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
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pricing & Booking
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg opacity-95 mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Half-day immersion (5–6 hours) in Olimathi Village, Tamil Nadu
          </motion.p>
          <Badge className="bg-golden-harvest text-deep-earth font-semibold px-4 py-2">
            Maximum 7 guests per session
          </Badge>
        </div>
      </motion.section>

      {/* Booking Card */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-accent/5">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-earthy-brown flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                  <Sparkles className="h-6 w-6 text-golden-harvest" />
                  Book Your Experience
                </CardTitle>
                <CardDescription>All prices in Indian Rupees (INR)</CardDescription>
              </CardHeader>

              <CardContent className="pt-6 sm:pt-8 space-y-8">

                {/* Step 1 */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Step 1 — Guest Details
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label className="mb-2 block font-semibold text-sm">Guest Type</Label>
                      <Select value={guestType} onValueChange={(v) => setGuestType(v as "indian" | "international")}>
                        <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="indian">Indian — ₹2,500/person</SelectItem>
                          <SelectItem value="international">International — ₹3,500/person</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 block font-semibold text-sm">Number of Guests</Label>
                      <Select value={guestCount.toString()} onValueChange={(v) => setGuestCount(parseInt(v))}>
                        <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                            <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? "Guest" : "Guests"}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 block font-semibold text-sm">Transport Option</Label>
                      <Select value={transport} onValueChange={(v) => setTransport(v as "self" | "kumbakonam" | "tanjavur")}>
                        <SelectTrigger className="h-11"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="self">Self-Arrival (Free)</SelectItem>
                          <SelectItem value="kumbakonam">Pickup — Kumbakonam</SelectItem>
                          <SelectItem value="tanjavur">Pickup — Tanjavur</SelectItem>
                        </SelectContent>
                      </Select>
                      {transportCost > 0 && (
                        <p className="text-xs text-muted-foreground mt-1.5">₹{transportCost.toLocaleString("en-IN")} per vehicle</p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Step 2 — Date Picker */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Step 2 — Pick Your Date(s)
                    </p>
                    {selectedDates.length > 0 && (
                      <button
                        onClick={() => setSelectedDates([])}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 font-medium"
                      >
                        <Trash2 className="h-3 w-3" /> Clear all
                      </button>
                    )}
                  </div>

                  <MiniCalendar selectedDates={selectedDates} onToggle={toggleDate} />

                  {/* Selected date chips */}
                  {selectedDates.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        {selectedDates.length} date{selectedDates.length > 1 ? "s" : ""} selected:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[...selectedDates]
                          .sort((a, b) => a.getTime() - b.getTime())
                          .map((d) => (
                            <span
                              key={d.toDateString()}
                              className="inline-flex items-center gap-1.5 bg-[#c0502a]/10 border border-[#c0502a]/30 text-[#c0502a] text-xs font-semibold px-3 py-1.5 rounded-full"
                            >
                              <Calendar className="h-3 w-3" />
                              {formatDate(d)}
                              <button onClick={() => removeDate(d)} className="hover:text-red-700 transition-colors ml-0.5">
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Step 3 — Price Breakdown */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Step 3 — Price Summary
                  </p>
                  <div className="bg-[#faf7f3] rounded-xl p-5 space-y-3 border border-gray-200">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">
                        Service ({guestCount} × ₹{basePrice.toLocaleString("en-IN")})
                      </span>
                      <span className="font-bold text-gray-900">₹{serviceFee.toLocaleString("en-IN")}</span>
                    </div>
                    {transportCost > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Transport ({transportLabel})</span>
                        <span className="font-bold text-gray-900">₹{transportCost.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm border-t border-dashed border-gray-300 pt-3">
                      <span className="text-gray-700 font-medium">Cost per Session</span>
                      <span className="font-bold text-gray-900">₹{perSessionCost.toLocaleString("en-IN")}</span>
                    </div>
                    {numDates > 1 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#c0502a]" />
                          {numDates} sessions selected
                        </span>
                        <span className="font-semibold text-[#c0502a]">× {numDates}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                        Total Amount
                      </span>
                      <span className="text-2xl font-bold text-[#c0502a]" style={{ fontFamily: "var(--font-heading)" }}>
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <span className="text-amber-800 font-medium">50% Advance to Confirm</span>
                      <span className="font-bold text-amber-700">₹{advance.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Buttons */}
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full text-base sm:text-lg py-7 bg-[#c0502a] hover:bg-[#a8431f] text-white font-bold rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed"
                    disabled={selectedDates.length === 0}
                    onClick={() => setShowBookingDialog(true)}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Confirm & Proceed to Payment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {selectedDates.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center italic">
                      Select at least one date above to enable booking
                    </p>
                  )}

                  <div className="flex items-center gap-3">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground font-semibold">OR</span>
                    <Separator className="flex-1" />
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-base sm:text-lg py-7 border-2 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 font-bold rounded-2xl hover:scale-[1.02] transition-all duration-300"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5 fill-green-500 text-green-500" />
                    Enquire on WhatsApp
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Chat with us: <span className="font-semibold text-gray-700">+91 93455 22396</span>
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Booking Confirmation Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-earthy-brown flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
              <CheckCircle2 className="h-6 w-6 text-[#c0502a]" />
              Booking Summary
            </DialogTitle>
            <DialogDescription>Review your details and complete payment</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <div className="bg-[#faf7f3] rounded-xl p-4 space-y-2.5 text-sm border border-gray-200">
              <div>
                <span className="text-muted-foreground block mb-1.5 font-semibold text-xs uppercase tracking-wide">Selected Dates</span>
                <div className="space-y-1">
                  {[...selectedDates]
                    .sort((a, b) => a.getTime() - b.getTime())
                    .map((d) => (
                      <div key={d.toDateString()} className="flex items-center gap-2 text-gray-800 font-medium">
                        <Calendar className="h-3.5 w-3.5 text-[#c0502a] flex-shrink-0" />
                        {formatDateFull(d)}
                      </div>
                    ))}
                </div>
              </div>
              <Separator />
              <div className="flex justify-between"><span className="text-muted-foreground">Guest Type</span><span className="font-semibold">{guestType === "indian" ? "Indian" : "International"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Guests</span><span className="font-semibold">{guestCount}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Transport</span><span className="font-semibold">{transportLabel}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Per Session</span><span className="font-semibold">₹{perSessionCost.toLocaleString("en-IN")}</span></div>
              {numDates > 1 && <div className="flex justify-between"><span className="text-muted-foreground">Sessions</span><span className="font-semibold">× {numDates}</span></div>}
              <Separator />
              <div className="flex justify-between text-base">
                <span className="font-bold">Total</span>
                <span className="font-bold text-[#c0502a] text-lg">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <span className="text-amber-800 font-semibold">Advance (50%)</span>
                <span className="font-bold text-amber-700">₹{advance.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="font-semibold text-sm">Payment Methods:</p>
              {guestType === "indian" ? (
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>• UPI (PhonePe, Google Pay, Paytm, BHIM)</p>
                  <p>• Bank Transfer (NEFT / RTGS / IMPS)</p>
                  <p>• Debit / Credit Cards</p>
                </div>
              ) : (
                <div className="text-sm space-y-1 text-muted-foreground">
                  <p>• International Credit / Debit Cards</p>
                  <p>• PayPal</p>
                  <p>• Wise / TransferWise (recommended)</p>
                </div>
              )}
              <p className="text-xs text-muted-foreground italic mt-1">Payment details shared via WhatsApp after confirmation.</p>
            </div>

            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl text-base"
              onClick={() => { setShowBookingDialog(false); handleWhatsApp(); }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Confirm via WhatsApp
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              We'll confirm availability and send payment details within a few hours.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* What's Included */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full hover-lift">
                <CardHeader className="bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-heading)" }}>
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {whatsIncluded.map((item, i) => (
                      <motion.li key={i} className="flex items-start gap-3 text-sm sm:text-base" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="h-full hover-lift">
                <CardHeader className="bg-gradient-to-br from-muted/20 to-muted/10">
                  <CardTitle className="text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    What's NOT Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {whatsNotIncluded.map((item, i) => (
                      <motion.li key={i} className="flex items-start gap-3 text-sm sm:text-base" initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                        <span className="text-muted-foreground text-lg">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-2xl sm:text-3xl font-bold text-earthy-brown mb-8 sm:mb-12 text-center" style={{ fontFamily: "var(--font-heading)" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Transport Options
          </motion.h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              { icon: MapPin, title: "Option 1: Self-Arrival", description: "Drive to Olimathi Village using GPS coordinates (shared after booking)", details: "Free • Parking available • Last stretch includes narrow rural roads", color: "primary" },
              { icon: MapPin, title: "Option 2: Pickup from Kumbakonam", description: "Comfortable AC vehicle • 1–1.15 hours travel time", prices: { small: "₹4,000", large: "₹5,500" }, color: "secondary" },
              { icon: MapPin, title: "Option 3: Pickup from Tanjavur", description: "Comfortable AC vehicle • 1 hour travel time", prices: { small: "₹4,500", large: "₹6,000" }, color: "accent" },
            ].map((option, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2 sm:gap-3">
                      <option.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${option.color}`} />
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base space-y-2">
                    <p>{option.description}</p>
                    {option.details && <p className="text-xs sm:text-sm text-muted-foreground">{option.details}</p>}
                    {option.prices && (
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="flex justify-between items-center p-2.5 sm:p-3 bg-accent/5 rounded-lg">
                          <span className="text-xs sm:text-sm">1–4 guests:</span>
                          <span className="font-bold text-sm sm:text-base">{option.prices.small}</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 sm:p-3 bg-accent/5 rounded-lg">
                          <span className="text-xs sm:text-sm">5–7 guests:</span>
                          <span className="font-bold text-sm sm:text-base">{option.prices.large}</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6">
            Transport charge is per vehicle, not per person. Pickup from Thiruvarur Railway Station available on request.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <motion.section className="py-16 sm:py-20 bg-gradient-to-r from-primary via-clay-terracotta to-primary text-white relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center" style={{ fontFamily: "var(--font-heading)" }}>Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="bg-white/10 border-white/20 text-white hover-lift">
                <CardHeader><CardTitle className="text-base sm:text-lg">For Indian Guests</CardTitle></CardHeader>
                <CardContent className="text-xs sm:text-sm space-y-2">
                  <p>• UPI (PhonePe, Google Pay, Paytm, BHIM)</p>
                  <p>• Bank transfer (NEFT/RTGS/IMPS)</p>
                  <p>• Debit/Credit Cards</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="bg-white/10 border-white/20 text-white hover-lift">
                <CardHeader><CardTitle className="text-base sm:text-lg">For International Guests</CardTitle></CardHeader>
                <CardContent className="text-xs sm:text-sm space-y-2">
                  <p>• International Credit/Debit Cards</p>
                  <p>• PayPal</p>
                  <p>• Wise/TransferWise (recommended)</p>
                  <p>• Bank transfer</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="text-center text-sm sm:text-base opacity-95 space-y-3">
            <p>50% advance required to confirm booking • Balance due before or on arrival</p>
            <p className="text-xs sm:text-sm">Exact payment details shared after booking confirmation</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
