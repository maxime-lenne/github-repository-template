# Technical Guide

Detailed guide for technical implementation aspects.

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Package Manager | Bun | >= 1.1.45 |
| Node | Node.js | >= 22.11.0 |
| Git Hooks | Husky | ^9.1.7 |
| Staged Files | lint-staged | ^16.2.7 |
| Commit Tool | gitmoji-cli | ^9.7.0 |
| Commit Lint | commitlint | ^20.4.1 |
| Markdown Lint | markdownlint-cli | ^0.47.0 |

---

## CI/CD

### Lint Workflow

The project runs linting on every push and PR to `main`:

```yaml
# .github/workflows/lint.yml
name: Lint

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  markdownlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - uses: oven-sh/setup-bun@v2
      - run: bun install --frozen-lockfile
      - run: bun run lint:md

  yamllint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - run: pip install yamllint
      - run: yamllint .
```

### Additional Workflows (Future)

- **PR Checks** - Tests, type checking
- **Security** - CodeQL analysis
- **Deploy** - Automated deployment

---

## Git Hooks

### Pre-commit Hook

Husky runs lint-staged automatically on commit:

```json
// package.json
{
  "lint-staged": {
    "*.md": "markdownlint --fix",
    "*.{yml,yaml}": "yamllint"
  }
}
```

### Commit-msg Hook

Commitlint validates commit messages against gitmoji convention:

```bash
# .husky/commit-msg
bun commitlint --edit "$1"
```

Configuration in `commitlint.config.js`:

```javascript
export default {
  extends: ['gitmoji'],
};
```

### Setup

Hooks are configured automatically via the `prepare` script:

```bash
bun install  # Runs "husky" automatically
```

---

## Dependency Management

### Renovate

Renovate is configured to:

- Group minor and patch updates
- Auto-merge patches for devDependencies
- Run updates on Monday morning (Europe/Paris timezone)

### Dependabot

Dependabot monitors:

- Bun dependencies (via package.json)
- GitHub Actions versions

---

## Available Scripts

```bash
# Install dependencies
bun install

# Lint all files
bun run lint

# Lint markdown only
bun run lint:md

# Auto-fix markdown issues
bun run lint:md:fix

# Lint YAML files
bun run lint:yaml

# Create a commit with gitmoji
bun run commit

# Setup husky hooks (runs automatically on install)
bun run prepare
```

---

## Linting Rules

### Markdownlint

Configuration in `.markdownlint.json`:

- Line length limits
- Heading structure
- List formatting
- Code block rules

### Yamllint

Configuration in `.yamllint.yml`:

- Indentation rules
- Line length
- Key ordering

---

## Development Workflow

### Daily Process

1. **Pull** - `git pull origin main`
2. **Branch** - `git checkout -b feature/description`
3. **Develop** - Make changes following conventions
4. **Lint** - `bun run lint`
5. **Commit** - `bun run commit` (uses gitmoji)
6. **Push** - `git push origin feature/description`
7. **PR** - Create pull request

### Pre-commit Checklist

- [ ] `bun run lint` passes
- [ ] Documentation updated if needed
- [ ] Commit uses gitmoji convention
- [ ] No sensitive data committed

---

## Issue Templates

### Bug Report

Uses `.github/ISSUE_TEMPLATE/bug_report.yml`:

- Description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

### Feature Request

Uses `.github/ISSUE_TEMPLATE/feature_request.yml`:

- Problem description
- Proposed solution
- Alternatives considered

---

*Last updated: 2026-02-03*
