# VillageXO Website

**Where farming is not shown — it is lived**

A comprehensive booking and informational website for VillageXO, an authentic Tamil village experience platform in Olimathi Village, Tamil Nadu, India.

## 🌾 Project Overview

VillageXO offers real participation in village life — not tourism, but access to living civilization. This website provides complete information about the experience, booking capabilities, and transparent communication about facilities and expectations.

## 🎨 Design System

### Color Palette (Natural & Granary Theme)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Earthy Brown | #8B6F47 | Main headings, key elements |
| Clay Terracotta | #D4735E | Primary buttons, CTAs, highlights |
| Paddy Green | #7C9473 | Secondary buttons, tags, accents |
| Golden Harvest | #E6C767 | Section dividers, subtle highlights |
| Warm Cream | #F5F0E8 | Main background |
| Mud Brown | #4A3F35 | Body text, footers |
| Deep Earth | #3E2723 | Footer background |

### Typography

- **Headers**: Crimson Text (Google Fonts)
- **Body**: Lora (Google Fonts)
- **Custom Utilities**: `heading-xl`, `heading-lg`, `heading-md`, `heading-sm`, `body-lg`, `body-base`, `body-sm`

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 📁 Project Structure

```
villagexo-website/
├── app/
│   ├── about/                 # About VillageXO page
│   ├── cancellation/          # Cancellation policy
│   ├── contact/               # Contact information
│   ├── experience/            # Detailed experience page
│   ├── facilities/            # Facilities & safety
│   ├── faq/                   # Comprehensive FAQ
│   ├── location/              # Location & transport
│   ├── pricing/               # Pricing calculator & booking
│   ├── globals.css            # Global styles with design tokens
│   ├── layout.tsx             # Root layout with Header/Footer
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # shadcn components
│   ├── Header.tsx             # Navigation header
│   └── Footer.tsx             # Site footer
├── lib/
│   └── utils.ts               # Utility functions
└── public/
    └── logo.jpeg              # VillageXO logo
```

## 📄 Pages Implemented

### Core Pages
1. **Home** (`/`) - Hero section, value cards, founder story, reviews, CTA
2. **Experience** (`/experience`) - Detailed activity descriptions with seasonal info
3. **Pricing & Booking** (`/pricing`) - Interactive pricing calculator
4. **FAQ** (`/faq`) - Comprehensive Q&A organized by category

### Information Pages
5. **About** (`/about`) - Founder story, mission, values, economic model
6. **Location** (`/location`) - Maps, transport options, travel info
7. **Facilities** (`/facilities`) - Honest facility descriptions, safety protocols
8. **Contact** (`/contact`) - Multiple contact methods, booking checklist
9. **Cancellation Policy** (`/cancellation`) - Clear refund timeline

### Additional Pages (To Be Created)
- `/founder` - Extended founder story
- `/impact` - Cultural preservation impact
- `/reviews` - Full testimonials page
- `/photography` - Photography policy
- `/travel-info` - Visa & travel information for international guests

## 🎯 Key Features

### Design Features
- ✅ Mobile-first responsive design
- ✅ Natural, warm color palette reflecting rural heritage
- ✅ Custom typography utilities
- ✅ Card-based layouts inspired by BookMyShow
- ✅ Authentic village photography (placeholder URLs currently)

### Functional Features
- ✅ Interactive pricing calculator
- ✅ Multi-currency display consideration
- ✅ Season-dependent activity disclaimers
- ✅ Mobile-friendly navigation
- ✅ Accordion FAQ sections
- ✅ Safety and transparency emphasis

### Content Features
- ✅ Honest facility descriptions
- ✅ Clear cancellation policy
- ✅ Villagers positioned as teachers, not attractions
- ✅ Cultural preservation messaging
- ✅ Economic dignity model explanation

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

The app will be available at `http://localhost:3000`

## 🎨 Customization

### Adding New Colors

Update `app/globals.css`:

```css
@theme inline {
  --color-your-color: #HEXCODE;
}

:root {
  --your-color: #HEXCODE;
}
```

### Adding New Typography Utilities

Update `app/globals.css`:

```css
@utility your-text-style {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  /* ... */
}
```

### Installing Additional shadcn Components

```bash
npx shadcn@latest add [component-name]
```

## 📝 Content Guidelines

### Tone & Voice
- **Calm, grounded, honest** - Not salesy or over-enthusiastic
- **Direct and transparent** - Set clear expectations
- **Respectful** - Villagers are teachers, not attractions
- **Story-driven** - Not feature-list driven

### Writing Rules
- Short sentences
- Clear paragraphs with breathing room
- No jargon without explanation
- Avoid guarantees for season-dependent activities

## 🌍 International Considerations

The website is designed with international appeal:
- Clear facility descriptions (squat toilets, basic amenities)
- Temperature in both Celsius and Fahrenheit (to be implemented)
- Distance in both km and miles (to be implemented)
- Multiple payment options listed
- Travel and visa information (to be expanded)

## 🔐 Security & Privacy

- All booking data should be handled securely
- Payment integration with Razorpay (to be implemented)
- Privacy policy and data handling (to be added)

## 🚧 Future Enhancements

### Phase 2 Features
- [ ] Razorpay payment integration
- [ ] Date picker with availability calendar
- [ ] Currency conversion (INR ↔ USD/EUR/GBP)
- [ ] Temperature/distance unit toggle
- [ ] Multi-language support (English primary)
- [ ] Real Google Maps integration
- [ ] Photo gallery with lightbox
- [ ] Video testimonials
- [ ] Blog/updates section
- [ ] Newsletter signup
- [ ] WhatsApp direct integration with pre-filled messages

### Phase 3 Features
- [ ] Booking management system
- [ ] Admin dashboard
- [ ] Email confirmations
- [ ] SMS notifications
- [ ] Certificate generation
- [ ] Photo upload for guests
- [ ] Review submission system

## 📞 Support

For questions about the website or VillageXO experience:
- **WhatsApp**: [Number to be added]
- **Email**: contact@villagexo.com
- **Phone**: [Number to be added]

## 📄 License

This project is proprietary to VillageXO.

## 🙏 Acknowledgments

- Design inspiration from Airbnb, BookMyShow, Booking.com
- Built with Next.js, Tailwind CSS, and shadcn/ui
- Photography placeholders from Unsplash

---

**VillageXO** - This is not tourism. This is access to living civilization.
