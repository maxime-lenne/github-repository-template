# Guide Technique Avancé

Guide détaillé pour les aspects techniques avancés du projet.

## 🔌 Intégration Notion CMS

### Configuration de l'API
```ruby
# _plugins/notion_fetcher.rb
module Jekyll
  class NotionDataGenerator < Generator
    safe true
    priority :highest

    def generate(site)
      return unless ENV['NOTION_TOKEN']
      
      fetch_experiences(site)
      fetch_blog_posts(site) if ENV['NOTION_POSTS_DB']
    end

    private

    def fetch_experiences(site)
      # Récupération des expériences depuis Notion
      # Stockage dans site.data['experiences']
    end

    def fetch_blog_posts(site)
      # Récupération des articles depuis Notion
      # Stockage dans site.data['posts']
    end
  end
end
```

### Variables d'environnement
```bash
# .env (non commité)
NOTION_TOKEN=secret_xxx
NOTION_EXPERIENCES_DB=xxx
NOTION_POSTS_DB=xxx
```

### Structure des données Notion
```yaml
# _data/experiences.yml (généré automatiquement)
experiences:
  - id: "exp-001"
    company: "Nom de l'entreprise"
    role: "CTO"
    period: "2020-2024"
    description: "Description de l'expérience"
    technologies: ["Ruby", "Jekyll", "Notion API"]
    status: "published"
    lang: "fr"
```

## 🚀 GitHub Actions CI/CD

### Workflow principal
```yaml
# .github/workflows/build-deploy.yml
name: Build and Deploy
on:
  push:
    branches: [main]
  schedule:
    - cron: '0 6 * * *'  # Sync Notion quotidien
  workflow_dispatch:

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup asdf
        uses: asdf-vm/actions/setup@v3
        
      - name: Install dependencies
        run: |
          asdf install
          bundle install
          npm install
          
      - name: Fetch Notion content
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
        run: bundle exec jekyll build --config _config.yml,_config_prod.yml
        
      - name: Optimize assets
        run: |
          npm run optimize:images
          npm run minify:assets
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

### Workflows supplémentaires
- **PR Checks** : Lighthouse CI, liens cassés, vérification orthographique
- **Sécurité** : Dependabot, analyse CodeQL
- **Performance** : Surveillance de la taille des bundles

## 🔍 SEO et Performance

### Configuration SEO
```yaml
# _config.yml
plugins:
  - jekyll-seo-tag

# Valeurs SEO par défaut
title: "Maxime Lenne - CTO & Tech Product Leader"
description: "Expert en entrepreneuriat tech, innovation et développement produit"
url: "https://maxime-lenne.github.io"
author:
  name: "Maxime Lenne"
  twitter: "MaximeLenne"
  
social:
  name: "Maxime Lenne"
  links:
    - "https://twitter.com/MaximeLenne"
    - "https://linkedin.com/in/maximelenne"
    - "https://github.com/maxime-lenne"
```

### Objectifs de performance
- **Score Lighthouse** : 95+ (toutes catégories)
- **Core Web Vitals** : Vert pour toutes les métriques
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

### Optimisation des images
```ruby
# _plugins/image_optimizer.rb
# Génération automatique WebP avec fallbacks
# Images responsives avec srcset
# Implémentation du lazy loading
```

## 🛡 Sécurité et Bonnes Pratiques

### Headers de sécurité
```yaml
# _headers (Netlify) ou via plugin Jekyll
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Content Security Policy
```html
<!-- Dans _includes/head.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               img-src 'self' data: https:; 
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';">
```

### Gestion des environnements
- **Développement** : Utiliser le fichier `.env` (non commité)
- **Production** : GitHub Secrets pour les données sensibles
- **Clés API** : Rotation régulière, accès au minimum requis

## 🧪 Tests et Qualité

### Outils de test
```bash
# Tests locaux
bundle exec jekyll build --config _config.yml,_config_prod.yml
bundle exec htmlproofer ./_site --disable-external
lighthouse --output=html --output-path=./lighthouse-report.html http://localhost:4000
```

### Tests d'accessibilité
- **Automatisé** : axe-core dans CI/CD
- **Manuel** : Tests avec lecteur d'écran
- **Contraste des couleurs** : Ratio minimum 4.5:1
- **Navigation clavier** : Site entièrement accessible

### Checklist de qualité
- [ ] Code suit les guidelines de style
- [ ] Toutes les langues testées (FR/EN)
- [ ] Aucun lien cassé
- [ ] Images optimisées et responsives
- [ ] Score Lighthouse > 95
- [ ] Documentation mise à jour
- [ ] Message de commit suit la convention

## 📋 Gestion des Issues GitHub

### Templates d'issues

#### Template Feature Request
```markdown
## Description de la fonctionnalité
Description brève de la fonctionnalité

## User Story
En tant que [type d'utilisateur], je veux [fonctionnalité] afin que [bénéfice]

## Critères d'acceptation
- [ ] Critère 1
- [ ] Critère 2

## Considérations techniques
- Intégration Notion requise : Oui/Non
- Support multi-langue : Oui/Non
- Impact performance : Faible/Moyen/Élevé

## Labels
enhancement, notion-sync, i18n, performance
```

#### Template Bug Report
```markdown
## Description du bug
Description claire du problème

## Étapes pour reproduire
1. Aller à...
2. Cliquer sur...
3. Voir l'erreur

## Comportement attendu
Ce qui devrait se passer

## Comportement actuel
Ce qui se passe réellement

## Environnement
- Navigateur : [Chrome/Firefox/Safari]
- Appareil : [Desktop/Mobile]
- URL : [page spécifique]

## Labels
bug, needs-investigation
```

### Labels du projet
- **Type** : `enhancement`, `bug`, `documentation`, `refactor`
- **Priorité** : `critical`, `high`, `medium`, `low`
- **Zone** : `notion-sync`, `i18n`, `performance`, `seo`, `design`
- **Statut** : `needs-review`, `in-progress`, `blocked`, `ready-to-deploy`

## 🔧 Commandes Avancées

### Développement
```bash
# Serveur de développement avec configuration spécifique
bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload

# Build avec sync Notion
NOTION_TOKEN=xxx bundle exec jekyll build --config _config.yml,_config_prod.yml

# Tests de performance
lighthouse --output=html --output-path=./report.html https://maxime-lenne.github.io
```

### Optimisation des assets
```bash
# Optimiser les images
npm run optimize:images

# Minifier les assets
npm run minify:assets

# Générer les favicons
npm run generate:favicons

# Audit de sécurité
bundle audit
npm audit
```

### Maintenance
```bash
# Mettre à jour les dépendances
bundle update
npm update

# Audit de sécurité
bundle audit
npm audit

# Audit de performance
lighthouse --output=html --output-path=./report.html https://maxime-lenne.github.io
```

---

*Dernière mise à jour : Décembre 2024*
