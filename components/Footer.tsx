import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const experienceLinks = [
    { name: "Farming Experience", href: "/experience#farming" },
    { name: "Cattle Experience", href: "/experience#cattle" },
    { name: "Traditional Cooking", href: "/experience#cooking" },
    { name: "Cultural Crafts", href: "/experience#culture" },
  ];

  const informationLinks = [
    { name: "About VillageXO", href: "/about" },
    { name: "Founder Story", href: "/founder" },
    { name: "Cultural Preservation", href: "/impact" },
    { name: "Reviews", href: "/reviews" },
  ];

  const policyLinks = [
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Photography Policy", href: "/photography" },
    { name: "Safety Guidelines", href: "/facilities#safety" },
    { name: "Travel Info", href: "/travel-info" },
  ];

  return (
    <footer className="bg-deep-earth text-warm-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="heading-sm text-golden-harvest mb-4">VillageXO</h3>
            <p className="body-sm mb-4">
              Where farming is not shown — it is lived. Authentic Tamil village
              experience in Olimathi Village, Tamil Nadu.
            </p>
            <div className="flex space-x-2">
              <Link
                href="tel:+91"
                className="text-warm-cream/80 hover:text-golden-harvest transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@villagexo.com"
                className="text-warm-cream/80 hover:text-golden-harvest transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="heading-sm text-golden-harvest mb-4">Experience</h4>
            <ul className="space-y-2">
              {experienceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-sm text-warm-cream/80 hover:text-golden-harvest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="heading-sm text-golden-harvest mb-4">Information</h4>
            <ul className="space-y-2">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-sm text-warm-cream/80 hover:text-golden-harvest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="heading-sm text-golden-harvest mb-4">Policies</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-sm text-warm-cream/80 hover:text-golden-harvest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="body-sm text-warm-cream/60">
              © {new Date().getFullYear()} VillageXO. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 body-sm text-warm-cream/60">
              <MapPin className="h-4 w-4" />
              <span>Olimathi Village, Thiruvarur, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
