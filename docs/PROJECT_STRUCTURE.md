# Structure du Projet

## 📁 Organisation des dossiers

```
maxime-lenne-website/
├── .github/                    # Configuration GitHub Actions
│   └── workflows/             # Workflows CI/CD
├── _data/                      # Données statiques
│   ├── translations.yml        # Traductions FR/EN
│   └── experiences.yml         # Données Notion
├── _includes/                  # Composants réutilisables
│   ├── components/            # Composants UI
│   └── sections/              # Sections de page
├── _layouts/                   # Templates de pages
│   ├── default.html           # Layout de base
│   ├── page.html              # Pages statiques
│   └── post.html              # Articles de blog
├── _sass/                      # Styles SCSS
│   ├── _variables.scss         # Design tokens
│   ├── _mixins.scss            # Utilitaires Sass
│   ├── _base.scss              # Styles de base
│   ├── components/             # Styles composants
│   └── utilities/               # Classes utilitaires
├── _plugins/                   # Plugins personnalisés
│   ├── notion_fetcher.rb       # Intégration Notion API
│   └── image_optimizer.rb      # Traitement d'images
├── assets/                     # Assets statiques
│   ├── css/                    # CSS compilé
│   ├── js/                     # Fichiers JavaScript
│   ├── images/                 # Images optimisées
│   └── fonts/                  # Polices web
├── _collections/               # Collections de contenu
│   ├── _posts/                 # Articles de blog
│   ├── _experiences/           # Expériences professionnelles
│   ├── _skills/                # Compétences
│   └── _testimonials/          # Témoignages
├── pages/                      # Pages statiques
├── docs/                       # Documentation
│   ├── AGENTS.md          # Conventions de développement
│   ├── PROJECT_STRUCTURE.md    # Ce fichier
│   ├── TECHNICAL_GUIDE.md      # Guide technique avancé
│   ├── DESIGN_SYSTEM.md        # Système de design
│   └── CONFORMITY_REPORT.md    # Rapport de conformité
├── _config.yml                 # Configuration Jekyll
├── _config.dev.yml             # Configuration développement
├── _config_prod.yml            # Configuration production
├── Gemfile                     # Dépendances Ruby
├── package.json                # Dépendances Node.js
├── Makefile                    # Commandes automatisées
├── CLAUDE.md                   # Guide pour assistants IA
└── README.md                   # Documentation principale
```

## 🔧 Fichiers de configuration

### Configuration Jekyll
- **`_config.yml`** - Configuration principale
- **`_config.dev.yml`** - Configuration développement
- **`_config_prod.yml`** - Configuration production

### Dépendances
- **`Gemfile`** - Dépendances Ruby (Jekyll, plugins)
- **`package.json`** - Dépendances Node.js (assets)
- **`.tool-versions`** - Versions asdf (Ruby, Node.js)

## 🎨 Architecture

### Layouts
- **`_layouts/default.html`** - Template de base
- **`_layouts/page.html`** - Pages statiques
- **`_layouts/post.html`** - Articles de blog

### Composants
- **`_includes/components/`** - Composants UI réutilisables
- **`_includes/sections/`** - Sections de page

### Styles
- **`_sass/_variables.scss`** - Design tokens
- **`_sass/components/`** - Styles composants
- **`_sass/utilities/`** - Classes utilitaires

## 📝 Contenu

### Collections
- **`_collections/_posts/`** - Articles de blog
- **`_collections/_experiences/`** - Expériences professionnelles
- **`_collections/_skills/`** - Compétences
- **`_collections/_testimonials/`** - Témoignages

### Pages statiques
- **`pages/`** - Pages avec support multi-langue
- **`index.md`** - Page d'accueil
- **`resume.md`** - Page CV

## 🚀 Déploiement

### GitHub Actions
- **Build automatique** sur push vers main
- **Sync Notion** quotidien via cron
- **Déploiement** automatique sur GitHub Pages

### Commandes utiles
```bash
# Développement
make serve          # Serveur de développement
make build          # Build de développement
make test           # Tests de qualité

# Production
make production     # Build de production
make clean          # Nettoyer les fichiers
```

## 📚 Documentation

### Guides principaux
- **`CLAUDE.md`** - Guide pour assistants IA
- **`docs/AGENTS.md`** - Conventions de développement
- **`docs/TECHNICAL_GUIDE.md`** - Guide technique avancé
- **`docs/DESIGN_SYSTEM.md`** - Système de design
- **`docs/CONFORMITY_REPORT.md`** - Rapport de conformité

### Fonctionnalités clés
- **Multi-langue** : Français (défaut) + Anglais
- **CMS** : Intégration Notion API
- **Performance** : < 3s chargement, Lighthouse 95+
- **Accessibilité** : WCAG 2.1 AA
- **Responsive** : Mobile-first design
