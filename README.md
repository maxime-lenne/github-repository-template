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

## Project Structure

```text
.
├── .github/
│   ├── dependabot.yml    # Dependabot configuration
│   └── workflows/
│       └── lint.yml      # CI for linting
├── .husky/
│   └── pre-commit        # Pre-commit hook
├── .gitmoji.json         # Gitmoji configuration
├── .markdownlint.json    # Markdownlint rules
├── .yamllint.yml         # Yamllint rules
├── renovate.json         # Renovate configuration
└── package.json          # Dependencies and scripts
```

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
