# Design System

Guide du système de design du thème Jekyll Maxime.

## 🎨 Principes de Design

- **Performance First** : < 3s temps de chargement, score Lighthouse 95+
- **Mobile First** : Design responsive
- **Accessibilité** : Conformité WCAG 2.1 AA
- **BEM Methodology** : `.block__element--modifier`

---

## 🎨 Système de Couleurs

### Configuration via `_data/theme.yml`

```yaml
colors:
  primary: "#2563eb"
  primary_light: "#3b82f6"
  primary_dark: "#1d4ed8"
  secondary: "#10b981"
  secondary_light: "#34d399"
  secondary_dark: "#059669"
```

### Variables CSS (`_sass/_variables.scss`)

```scss
:root {
  // Couleurs primaires (bleu)
  --color-primary: #2563eb;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1d4ed8;

  // Couleurs secondaires (vert)
  --color-secondary: #10b981;
  --color-secondary-light: #34d399;
  --color-secondary-dark: #059669;

  // Gradients
  --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  --gradient-text: linear-gradient(135deg, var(--color-primary), var(--color-secondary));

  // Couleurs de thème
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;
  --color-border: #e2e8f0;
}
```

### Variables RGB pour transparence (`_sass/_theme-config.scss`)

```scss
:root {
  --color-primary-rgb: 37, 99, 235;
  --color-secondary-rgb: 16, 185, 129;
}

// Usage
background: rgba(var(--color-primary-rgb), 0.1);
box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.25);
```

### Mode Sombre

```scss
:root[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #cbd5e1;
  --color-border: #334155;

  // Gradients ajustés
  --gradient-primary: linear-gradient(135deg, #3b82f6, #22c55e);
}
```

---

## 📝 Typographie

```scss
:root {
  // Polices
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;

  // Tailles
  --text-xs: 0.75rem;      // 12px
  --text-sm: 0.875rem;     // 14px
  --text-base: 1rem;       // 16px
  --text-lg: 1.125rem;     // 18px
  --text-xl: 1.25rem;      // 20px
  --text-2xl: 1.5rem;      // 24px
  --text-3xl: 1.875rem;    // 30px
  --text-4xl: 2.25rem;     // 36px
  --text-5xl: 3rem;        // 48px
}
```

---

## 📏 Espacement

```scss
:root {
  --space-xs: 0.25rem;     // 4px
  --space-sm: 0.5rem;      // 8px
  --space-md: 1rem;        // 16px
  --space-lg: 1.5rem;      // 24px
  --space-xl: 3rem;        // 48px
  --space-2xl: 6rem;       // 96px
  --space-3xl: 12rem;      // 192px
}
```

---

## 📐 Layout

```scss
:root {
  --layout-header-height: 80px;
  --layout-container-max-width: 1440px;
  --layout-container-padding: clamp(24px, 5vw, 48px);
}
```

### Breakpoints

```scss
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

---

## 🧩 Composants

### Convention de nommage BEM

```scss
.deep-stack-btn {           // Block
  &__icon { }          // Element
  &--primary { }       // Modifier
  &--secondary { }
  &--large { }
}
```

### Liste des composants

| Composant | Fichier HTML | Fichier SCSS |
|-----------|--------------|--------------|
| Badge | `_includes/components/badge.html` | `_sass/components/_badge.scss` |
| CTA Button | `_includes/components/cta-button.html` | `_sass/components/_cta-button.scss` |
| Title Hero | `_includes/components/title-hero.html` | `_sass/components/_title-hero.scss` |
| Card Quote | `_includes/components/card-quote.html` | `_sass/components/_card-quote.scss` |
| Card Highlight | `_includes/components/card-highlight.html` | `_sass/components/_card-highlight.scss` |
| Card Experience | `_includes/components/card-experience.html` | `_sass/components/_card-experience.scss` |
| Section Header | `_includes/components/section-header.html` | `_sass/components/_section-header.scss` |
| Stat Number | `_includes/components/stat-number.html` | `_sass/components/_stat-number.scss` |
| List Checked | `_includes/components/list-checked.html` | `_sass/components/_list-checked.scss` |
| Image Circle | `_includes/components/image-circle.html` | `_sass/components/_image-circle.scss` |

**Documentation complète** : [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)

---

## 🎭 Animations

```scss
// Définies dans _theme-config.scss
@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Transitions

```scss
:root {
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}
```

---

## ♿ Accessibilité

### Skip Link

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Focus States

Tous les éléments interactifs ont des états `:focus` visibles.

### Contraste

- Texte normal : ratio minimum 4.5:1
- Texte large : ratio minimum 3:1

---

## 📁 Structure des fichiers SCSS

```
_sass/
├── _variables.scss       # Design tokens CSS
├── _theme-config.scss    # Config thème + mixins RGB
├── _mixins.scss          # Mixins SCSS
├── _base.scss            # Styles de base
├── components/           # Styles des composants
├── layouts/              # Header, footer, sections
├── pages/                # Styles spécifiques pages
├── utilities/            # Classes utilitaires
└── main.scss             # Point d'entrée
```

---

## 🔗 Documentation associée

- **[COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md)** - Référence technique des composants
- **[/pages/examples/](/pages/examples/)** - Showcase live du design system
- **[theme-creation-plan.md](./theme-creation-plan.md)** - Plan d'extraction du thème

---

*Dernière mise à jour : Janvier 2026*
