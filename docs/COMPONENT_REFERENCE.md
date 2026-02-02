# Component Reference - Jekyll Maxime Theme

Complete technical reference for all components in the Jekyll Maxime Theme.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [Badge](#badge)
  - [Title Hero](#title-hero)
  - [CTA Button](#cta-button)
  - [Images](#images)
  - [Lists](#lists)
  - [Cards](#cards)
  - [Section Components](#section-components)
  - [Animated Terminal](#animated-terminal)
- [Sections](#sections)
- [Theme Configuration](#theme-configuration)
- [CSS Custom Properties](#css-custom-properties)

---

## Overview

The theme uses a component-based architecture following BEM methodology:
- **Block**: The component name (`.deep-stack-btn`)
- **Element**: A child of the block (`.deep-stack-btn__icon`)
- **Modifier**: A variation of the block (`.deep-stack-btn--primary`)

### File Structure

```
_includes/
  components/           # Liquid component templates
    examples/           # Example includes for documentation
  sections/             # Full section templates
  theme/                # Theme helpers
    variables.html      # CSS custom properties injection

_sass/
  components/           # Component styles
  layouts/              # Layout styles
  utilities/            # Utility classes
  _variables.scss       # Design tokens
  _theme-config.scss    # Theme configuration layer
  _mixins.scss          # SCSS mixins
  main.scss             # Main entry point
```

---

## Components

### Badge

Labels and tags used in section headers.

| File | Path |
|------|------|
| HTML | `_includes/components/badge.html` |
| SCSS | `_sass/components/_badge.scss` |

#### Classes

| Class | Description |
|-------|-------------|
| `.deep-stack-hero__badge` | Hero section badge |
| `.deep-stack-hero__badge-text` | Badge text with gradient |
| `.deep-stack-about__badge-tag` | About section badge |
| `.deep-stack-services__badge` | Services section badge |

#### Liquid Parameters

```liquid
{% include components/badge.html
  type="hero"           # hero | about | services
  icon="rocket"         # Emoji or icon name
  text="Available"      # Badge text
%}
```

---

### Title Hero

Large titles with gradient highlight effect.

| File | Path |
|------|------|
| HTML | `_includes/components/title-hero.html` |
| SCSS | `_sass/components/_title-hero.scss` |

#### Classes

| Class | Description |
|-------|-------------|
| `.deep-stack-hero__title` | Main title container |
| `.deep-stack-hero__highlight` | Gradient highlighted text |

#### Liquid Parameters

```liquid
{% include components/title-hero.html
  title="CTO & Leader"      # Main title text
  highlight="Produit Tech"  # Highlighted portion
%}
```

---

### CTA Button

Call-to-action buttons with primary and secondary styles.

| File | Path |
|------|------|
| HTML | `_includes/components/cta-button.html` |
| SCSS | `_sass/components/_cta-button.scss` |

#### Classes

| Class | Description |
|-------|-------------|
| `.deep-stack-btn` | Base button class |
| `.deep-stack-btn--primary` | Primary gradient style |
| `.deep-stack-btn--secondary` | Secondary outline style |
| `.deep-stack-btn--large` | Large size modifier |
| `.deep-stack-cta-btn__icon` | Button icon |

#### Liquid Parameters

```liquid
{% include components/cta-button.html
  url="https://..."         # Link URL (default: theme.site.cta_url)
  text="Contact"            # Button text
  style="primary"           # primary | secondary
  size="large"              # default | large
  icon="arrow"              # arrow | download | none
  extern=true               # Open in new tab
  class="custom-class"      # Additional CSS classes
%}
```

---

### Images

Image components with various styles.

#### Image (Standard)

| File | Path |
|------|------|
| HTML | `_includes/components/image.html` |
| SCSS | `_sass/components/_image.scss` |

```liquid
{% include components/image.html
  src="/assets/images/photo.jpg"
  alt="Description"
  class="custom-class"
%}
```

#### Image Circle

| File | Path |
|------|------|
| HTML | `_includes/components/image-circle.html` |
| SCSS | `_sass/components/_image-circle.scss` |

```liquid
{% include components/image-circle.html
  src="/assets/images/avatar.jpg"
  alt="Profile photo"
  size="large"              # small | medium | large
%}
```

#### Image Secondary

| File | Path |
|------|------|
| HTML | `_includes/components/image-secondary.html` |
| SCSS | `_sass/components/_image-secondary.scss` |

---

### Lists

Various list components.

#### List Checked

| File | Path |
|------|------|
| HTML | `_includes/components/list-checked.html` |
| SCSS | `_sass/components/_list-checked.scss` |

| Class | Description |
|-------|-------------|
| `.list-checked` | Container |
| `.list-checked__item` | List item with checkmark |

```liquid
{% include components/list-checked.html
  items="Item 1, Item 2, Item 3"
%}
```

#### List Horizontal Icon

| File | Path |
|------|------|
| HTML | `_includes/components/list-horizontal-icon.html` |
| SCSS | `_sass/components/_list-horizontal-icon.scss` |

#### List Footer Link

| File | Path |
|------|------|
| HTML | `_includes/components/list-footer-link.html` |
| SCSS | `_sass/components/_list-footer-link.scss` |

---

### Cards

Card components for content display.

#### Card Quote

Testimonial cards.

| File | Path |
|------|------|
| HTML | `_includes/components/card-quote.html` |
| SCSS | `_sass/components/_card-quote.scss` |

```liquid
{% include components/card-quote.html
  quote="Testimonial text"
  author="Name"
  role="Position"
  company="Company"
  avatar="/path/to/avatar.jpg"
%}
```

#### Card Highlight

Feature/service highlight cards.

| File | Path |
|------|------|
| HTML | `_includes/components/card-highlight.html` |
| SCSS | `_sass/components/_card-highlight.scss` |

#### Card Experience

Resume/CV experience cards.

| File | Path |
|------|------|
| HTML | `_includes/components/card-experience.html` |
| SCSS | `_sass/components/_card-experience.scss` |

---

### Section Components

#### Section Header

| File | Path |
|------|------|
| HTML | `_includes/components/section-header.html` |
| SCSS | `_sass/components/_section-header.scss` |

```liquid
{% include components/section-header.html
  badge_icon="star"
  badge_text="Services"
  title="What I can do"
  highlight="for you"
  description="Section description"
%}
```

#### CTA Info

| File | Path |
|------|------|
| HTML | `_includes/components/cta-info.html` |
| SCSS | `_sass/components/_cta-info.scss` |

#### Stat Number

| File | Path |
|------|------|
| HTML | `_includes/components/stat-number.html` |
| SCSS | `_sass/components/_stat-number.scss` |

```liquid
{% include components/stat-number.html
  number="15+"
  label="Years of experience"
%}
```

---

### Animated Terminal

Typing animation terminal for hero sections.

| File | Path |
|------|------|
| HTML | `_includes/components/animated-terminal.html` |
| SCSS | `_sass/components/_animated-terminal.scss` |

```liquid
{% include components/animated-terminal.html %}
```

---

## Sections

### Section Classes

| Class | Description |
|-------|-------------|
| `.section` | Base section class |
| `.section--light` | Light background variant |
| `.section--dark` | Dark background variant |
| `.section--hero` | Hero section with decorative elements |
| `.section--gradient-light` | Gradient background (primary to secondary) |
| `.section--gradient-dark` | Dark gradient background |
| `.section--secondary` | Two-column layout variant |

### Section Grid

| Class | Description |
|-------|-------------|
| `.section__grid` | Base grid (1-2-3 columns responsive) |
| `.section__grid--2-col` | Two column grid |
| `.section__grid--3-col` | Three column grid |
| `.section__grid--4-col` | Four column grid |

### Section Includes

```liquid
{% include sections/cta-section.html
  title="Section Title"
  description="Section description"
%}

{% include sections/final-cta-section.html %}
```

---

## Theme Configuration

### Configuration File

Edit `_data/theme.yml` to customize the theme:

```yaml
# Site Branding
site:
  logo_text: "Your Name"
  cta_url: "https://your-calendar-link.com"
  cta_new_tab: true

# Colors
colors:
  primary: "#2563eb"
  primary_light: "#3b82f6"
  primary_dark: "#1d4ed8"
  secondary: "#10b981"
  secondary_light: "#34d399"
  secondary_dark: "#059669"

# Layout
layout:
  header_height: 80
  container_max_width: 1440

# Features
features:
  dark_mode: true
  language_switcher: true
```

---

## CSS Custom Properties

### Color Variables

```css
:root {
  /* Primary colors */
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-primary-rgb: 37, 99, 235;

  /* Secondary colors */
  --color-secondary: #10b981;
  --color-secondary-light: #34d399;
  --color-secondary-dark: #059669;
  --color-secondary-rgb: 16, 185, 129;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  --gradient-text: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
}
```

### Layout Variables

```css
:root {
  --layout-header-height: 80px;
  --layout-container-max-width: 1440px;
  --layout-container-padding: clamp(24px, 5vw, 48px);
}
```

### Using RGB Variables for Transparency

```scss
// Use RGB values for rgba() colors
background: rgba(var(--color-primary-rgb), 0.1);
box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.25);
```

---

## Best Practices

1. **Always use CSS custom properties** for colors instead of hardcoded values
2. **Follow BEM naming convention** for new components
3. **Use the theme configuration** for user-customizable values
4. **Test both light and dark themes** when making changes
5. **Test both language versions** (FR/EN) for layout issues
