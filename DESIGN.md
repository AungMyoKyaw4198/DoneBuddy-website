---
name: Companion Quest
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#494454'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#825100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-pet:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-task:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  label-stat:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button-text:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  container-padding: 20px
  element-gap: 12px
---

## Brand & Style

The design system is centered on the concept of "Emotional Productivity." It bridges the gap between a utilitarian habit tracker and a nurturing pet simulator. The brand personality is encouraging, whimsical, and deeply rewarding, designed to reduce the anxiety of task management by framing it as "care" for a digital companion.

The design style is **Tactile Modern RPG**. It combines the clean layouts of modern SaaS applications with the "squishy," interactive physical metaphors found in casual mobile games. By utilizing depth, soft shadows, and exaggerated rounded corners, every interaction feels like pressing a physical button or holding a collectible card. This approach fosters an emotional bond through a high-visual-feedback environment where success is celebrated with vibrant, saturated bursts of color.

## Colors

The palette uses "Vibrant Pastels"—colors that have high saturation to feel playful but are balanced with enough white value to remain soft and non-threatening. 

- **Primary (Friendly Purple):** Used for the core brand identity, pet names, and major navigation elements. It represents the "magic" of the world.
- **Secondary (Success Green):** Reserved for completion states, healing your pet, and positive streaks.
- **Tertiary (Energy Orange):** Used for "Hard" tasks, energy levels, and urgent notifications.
- **Neutral (Soft Slate):** Provides a grounding base for text and secondary interface elements to ensure the vibrant colors pop without causing eye strain.

The difficulty hierarchy is strictly enforced: Easy tasks use soft mint greens, Medium tasks use warm ambers, and Hard tasks use soft corals. This allows users to gauge their daily effort at a glance.

## Typography

This design system employs a dual-font strategy to balance character with readability.

- **Headlines & Names:** Uses **Plus Jakarta Sans**. Its rounded terminals and open apertures feel welcoming and "bubbly," perfect for pet names and screen titles.
- **Tasks & Descriptions:** Uses **Be Vietnam Pro**. This font offers exceptional legibility for longer task descriptions while maintaining a contemporary, friendly warmth that matches the brand.
- **Stats & UI Labels:** Uses **Lexend**. Designed specifically for readability, it is used for high-glance data like "Feeding Streaks" or "XP" counters to ensure the user never feels overwhelmed by the game mechanics.

## Layout & Spacing

The layout follows a **Fluid Content Model** with generous internal margins to prevent the UI from feeling cluttered. We prioritize a "card-stacking" rhythm where each task or pet stat is housed in a distinct container.

A 4px baseline grid ensures vertical rhythm. Elements are grouped using a "containment" philosophy: tasks are nested within category containers (To-Do, Dailies, Habits) with a consistent 12px gap between items. Page margins are set to a comfortable 20px on mobile to ensure tactile elements aren't accidentally triggered near the screen edges.

## Elevation & Depth

Visual hierarchy is achieved through **Ambient Tonal Layers**. Surfaces do not just "float"; they appear to have physical thickness.

- **Level 0 (Floor):** The main background, usually a very light tint of the primary or neutral color.
- **Level 1 (Cards):** Pure white surfaces with a soft, 15% opacity shadow tinted with the primary color (e.g., a purple-tinted shadow). This makes the cards feel like they belong to the environment.
- **Level 2 (Active Elements):** Buttons and active checkboxes feature a "pressed" state where the shadow is removed and the element shifts 2px downward, simulating a physical click.
- **Level 3 (Pop-ups):** Use a backdrop blur (Glassmorphism) to keep the pet visible in the background while the user interacts with menus or shops.

## Shapes

The shape language is "Organic and Friendly." Sharp corners are strictly avoided to prevent the UI from feeling "corporate" or "sharp." 

Standard components use a 0.5rem radius, while primary containers like the Pet Display or Task Groups use 1.5rem (rounded-xl) to feel like soft, cradling frames. Buttons should often utilize a "Squircle" appearance or a Pill-shape for secondary actions to maximize the "Modern RPG" aesthetic.

## Components

- **Tactile Buttons:** Primary buttons should have a subtle bottom border (2-3px darker than the button color) to create a 3D effect. On click, the button should move down by that amount.
- **Habit Cards:** These are the primary unit of the design system. They include a category icon on the left, the task title in the center, and a large, "squishy" checkbox on the right.
- **Pet Status Bars:** Instead of thin lines, use thick, rounded progress bars for Hunger and Health. Use gradients (e.g., Orange to Yellow for Energy) to make the stats feel "alive."
- **Mood Chips:** Small, highly rounded badges (e.g., "Healthy", "Hungry") that use the Difficulty palette to communicate the pet's state.
- **Task Groups:** Use a "Container Tier" approach where a large grey-tinted card holds multiple white task cards, creating a clear visual bucket for "Dailies" vs "Habits."
- **Floating Action Button (FAB):** A large, circular '+' button for adding tasks, using a drop shadow with 20% spread to indicate it sits high above the content.