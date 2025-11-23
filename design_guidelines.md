# Design Guidelines: Arabic Engineering Consultancy Website

## Design Approach

**Selected Approach:** Hybrid - Professional B2B with Modern Portfolio Showcase

Drawing inspiration from professional service platforms like Deloitte Digital, McKinsey Digital, and modern engineering showcases. The design balances corporate credibility with contemporary visual appeal, optimized for Arabic RTL layout.

**Core Principles:**
- Professional authority through structured layouts and consistent hierarchy
- Modern sophistication with clean geometry and purposeful whitespace
- Trust-building through clear information architecture
- Arabic-first design with natural RTL flow

---

## Typography System

**Font Families:**
- **Primary (Arabic):** Cairo or Tajawal from Google Fonts - modern, highly legible Arabic fonts with excellent RTL support
- **Secondary (English/Numbers):** Inter for Latin characters and numerical data
- **Accent (Headings):** IBM Plex Sans Arabic for hero and major headings

**Type Scale:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl (bold weight)
- Section Headings: text-4xl md:text-5xl (semibold)
- Subsection Headings: text-2xl md:text-3xl (semibold)
- Body Large: text-lg md:text-xl (regular)
- Body Standard: text-base (regular)
- Small Text: text-sm (regular)
- Button Text: text-base md:text-lg (medium weight)

**Hierarchy Rules:**
- All Arabic text uses increased line-height (leading-loose for body, leading-tight for headlines)
- Maintain 1.5x minimum size ratio between heading levels
- Use font-weight variations (regular/medium/semibold/bold) to create hierarchy without excessive size changes

---

## Layout System

**Spacing Primitives:**
Core spacing units from Tailwind: **4, 6, 8, 12, 16, 20, 24, 32**

**Section Spacing:**
- Mobile: py-12 md:py-16 lg:py-20 between major sections
- Desktop: py-20 lg:py-24 xl:py-32 for key sections (Hero, Portfolio, Contact)
- Inner spacing: p-6 md:p-8 for cards and containers
- Element spacing: gap-4 md:gap-6 lg:gap-8 for grids and flexbox layouts

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Text-heavy content: max-w-4xl for optimal Arabic readability
- Form containers: max-w-2xl for focused interaction

**Grid Systems:**
- Portfolio Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
- Values/Principles: grid-cols-1 md:grid-cols-2 gap-6
- Footer columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8

---

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- **Large hero image:** Engineering project photograph (modern building, infrastructure, or technical workspace) with subtle overlay for text legibility
- Headline + tagline stacked vertically with generous spacing (space-y-6)
- Primary CTA button with blurred background (backdrop-blur-sm bg-white/20) when over image
- CTA sizing: px-8 py-4 text-lg on desktop, px-6 py-3 text-base on mobile

### About / Vision / Mission Sections
- Two-column layout on desktop (lg:grid-cols-2) alternating text/visual positions
- Text blocks: max-w-prose with generous line-height
- Section headers with decorative underline element (w-16 h-1 mt-4)
- Vision/Mission as side-by-side cards on desktop with icons

### Principles/Values
- Grid of principle cards (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each card: p-8, rounded-2xl, with icon/number, title, and short description
- Subtle elevation (shadow-lg) on hover (only for interactive elements)
- Icon size: w-12 h-12 md:w-16 md:h-16

### Portfolio Gallery
- Masonry-style grid with varying card heights for visual interest
- Card structure: Image (aspect-video or aspect-square), Title (text-xl font-semibold), Category tag, Brief description
- Hover state: subtle scale transform (hover:scale-105 transition-transform)
- Cards: rounded-xl overflow-hidden shadow-md

### Lightbox/Modal (Portfolio Detail)
- Full-screen overlay with backdrop blur (backdrop-blur-lg)
- Content container: max-w-6xl mx-auto with image carousel + project details side-by-side on desktop
- Image area: 60% width on desktop, full width on mobile
- Navigation arrows: absolute positioned, large hit area (w-12 h-12)
- Close button: top-right, prominent (text-4xl)

### Contact Section
- Split layout: Form (60%) + Contact info/map placeholder (40%) on desktop
- Form fields: Full-width inputs with floating labels
- Input styling: px-4 py-3, rounded-lg, border-2 focus state
- Submit button: Full-width on mobile, auto-width on desktop (px-12 py-4)
- WhatsApp CTA: Secondary button style with icon, positioned below submit

### Signup Modal
- Centered modal: max-w-md, p-8, rounded-2xl
- Backdrop: Dark overlay (bg-black/60) with backdrop-blur-sm
- Compact form with clear hierarchy
- Checkbox with custom styling for better RTL support
- Success state: Transform into thank-you message with checkmark icon

### Footer
- Four-column grid on desktop reducing to single column on mobile
- Column 1: Company info + logo
- Column 2: Quick links
- Column 3: Contact details with icons
- Column 4: Social media icons (large touch targets: w-10 h-10)
- Bottom bar: Copyright + additional links, separated by border-t

### Buttons
- Primary: px-8 py-4, rounded-full, font-medium, shadow-lg
- Secondary: px-8 py-4, rounded-full, font-medium, border-2
- Icon buttons: Square (w-12 h-12), rounded-full, centered icon
- All buttons: Minimum 44px touch target, smooth transitions

---

## RTL-Specific Considerations

- All text naturally aligned to right (text-right for Arabic)
- Flexbox/Grid flows reversed (flex-row-reverse where appropriate)
- Padding/margin order reversed for asymmetric layouts
- Icons positioned on left side of text (mr-3 instead of ml-3)
- Navigation menus expand from right to left
- Form labels positioned above inputs (not floating right) for clarity
- Number badges and indicators on left side

---

## Images

**Required Images:**

1. **Hero Background (Critical):** 
   - High-quality engineering project photo (modern structure, infrastructure, or technical environment)
   - Dimensions: 1920x1080 minimum
   - Treatment: Subtle dark overlay (30-40% opacity) for text contrast

2. **About Section:**
   - Team photo or office/workspace image
   - Dimensions: 800x600
   - Placement: Alternating with text on desktop

3. **Portfolio Projects (6-8 images):**
   - Project photography showcasing completed engineering work
   - Dimensions: 600x400 (aspect-video)
   - Each with title, category, and description

4. **Vision/Mission Icons:**
   - Use Heroicons for consistency
   - Size: w-16 h-16 within circular containers

---

## Interaction Patterns

- Smooth scroll behavior for anchor navigation
- Stagger animations for portfolio grid items (subtle fade-in on scroll)
- Form validation: Inline error messages below fields with icon indicators
- Loading states: Spinner for form submissions (w-6 h-6)
- Toast notifications: Top-right positioned, slide-in animation
- Modal entrance: Fade backdrop + scale content (95% to 100%)

---

## Performance Considerations

- Lazy load portfolio images below fold
- Hero image: Optimized WebP with JPEG fallback
- Critical CSS for above-fold content
- Prefetch portfolio modal assets on hover