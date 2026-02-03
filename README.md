# GitHub Repository Template
<!-- markdownlint-disable -->
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="80" height="80" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original-wordmark.svg" alt="Github Action" width="80" height="80" />
</p>

<p align="center">
  <strong>GitHub repository template with preconfigured code quality tools</strong>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Package%20Manager-Bun-black" alt="Bun" /></a>
  <a href="https://gitmoji.dev"><img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg" alt="Gitmoji" /></a>
</p>
<!-- markdownlint-restore -->
---

A ready-to-use GitHub repository template with linting, git hooks, and automatic dependency management.

## Features

- **Bun** - Fast and modern package manager
- **Gitmoji** - Conventional commits with emojis
- **Husky** - Automated Git hooks
- **lint-staged** - Incremental linting on staged files
- **Markdownlint** - Markdown file validation
- **Yamllint** - YAML file validation
- **Renovate** - Automatic dependency updates
- **Dependabot** - Security alerts and updates

## Installation

```bash
# Clone the template
git clone https://github.com/maxime-lenne/github-repository-template.git my-project
cd my-project

# Install dependencies
bun install
```

## Usage

### Commits with Gitmoji

```bash
bun run commit
```

This launches the interactive gitmoji assistant to create commits with conventional emojis.

### Linting

```bash
# Lint all files
bun run lint

# Lint Markdown only
bun run lint:md

# Auto-fix Markdown
bun run lint:md:fix

# Lint YAML files
bun run lint:yaml
```

### Git Hooks

Hooks are automatically configured via Husky:

- **pre-commit**: Runs lint-staged on modified files

## Sommaire de la documentation

| Fichier | Purpose | Description |
|---------|---------|-------------|
| [`AGENTS.md`](./AGENTS.md) | Guide IA | Ce fichier - conventions et règles pour les agents IA |
| [`PROJECT_STRUCTURE.md`](./PROJECT_STRUCTURE.md) | Architecture | Organisation des répertoires et fichiers du projet |
| [`CONVENTIONS.md`](./CONVENTIONS.md) | Code style | Conventions de nommage, style de code, git |
| [`TECHNICAL_GUIDE.md`](./TECHNICAL_GUIDE.md) | Implémentation | API, CI/CD, performance, sécurité, tests |
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) | UI/UX | Couleurs, typographie, spacing, accessibilité |
| [`COMPONENT_REFERENCE.md`](./COMPONENT_REFERENCE.md) | Composants | Référence technique des composants UI |
| [`FEATURES.md`](./FEATURES.md) | Fonctionnalités | Epics, user stories, statut des features |
| [`SCREEN_FLOW.md`](./SCREEN_FLOW.md) | Navigation | Flux d'écrans et parcours utilisateur |
| [`TASKS.md`](./TASKS.md) | Tâches | Suivi des tâches et backlog |

## Configuration

### Gitmoji

The `.gitmoji.json` file configures gitmoji-cli behavior:

- `emojiFormat: "emoji"` - Uses actual emojis (not codes)
- `capitalizeTitle: true` - Capitalizes the first letter of the message
- `scopePrompt: false` - No scope prompt

### Renovate

Renovate is configured to:

- Group minor and patch updates
- Auto-merge patches for devDependencies
- Run updates on Monday morning (Europe/Paris)

### Dependabot

Dependabot monitors:

- Bun dependencies (via package.json)
- GitHub Actions

## Customization

1. Update `package.json` with your project name
2. Modify linting rules according to your needs
3. Adjust Renovate/Dependabot configuration
4. Delete this README and create your own

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Maxime Lenne** - [maxime-lenne.fr](https://maxime-lenne.fr)

- GitHub: [@maxime-lenne](https://github.com/maxime-lenne)
- LinkedIn: [maximelenne](https://linkedin.com/in/maximelenne)
