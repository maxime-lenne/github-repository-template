# Conventions

Advanced coding conventions and guidelines.

## Code Style

### General Principles

- Write readable, self-documenting code
- Follow the DRY principle (Don't Repeat Yourself)
- Keep functions small and focused
- Use meaningful names for variables and functions

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | kebab-case | `user-service.ts` |
| Classes | PascalCase | `UserService` |
| Functions | camelCase | `getUserById` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Variables | camelCase | `userName` |

### File Organization

```typescript
// 1. Imports (external first, then internal)
import { useState } from 'react';
import { UserService } from './services';

// 2. Types/Interfaces
interface Props {
  name: string;
}

// 3. Constants
const DEFAULT_VALUE = 10;

// 4. Component/Function
export function Component({ name }: Props) {
  // Implementation
}
```

---

## CSS/Styling Conventions

### Methodology

Use BEM (Block Element Modifier) or CSS Modules:

```css
/* BEM */
.block { }
.block__element { }
.block--modifier { }

/* Example */
.card { }
.card__title { }
.card--featured { }
```

### CSS Variables

```css
:root {
  --color-primary: #2563eb;
  --spacing-md: 1rem;
  --font-size-base: 16px;
}
```

---

## Testing Conventions

### Test File Naming

- Unit tests: `*.test.ts` or `*.spec.ts`
- Integration tests: `*.integration.test.ts`
- E2E tests: `*.e2e.test.ts`

### Test Structure

```typescript
describe('ComponentName', () => {
  describe('methodName', () => {
    it('should do something when condition', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

---

## Project Organization

### Directory Structure

```text
project-root/
├── .github/            # GitHub configuration
│   ├── workflows/      # CI/CD workflows
│   └── ISSUE_TEMPLATE/ # Issue templates
├── docs/               # Documentation
├── node_modules/       # Dependencies (Bun)
├── package.json        # Project config
├── bun.lock            # Lock file
├── CLAUDE.md           # AI assistant guide
└── README.md           # Main documentation
```

### Import Order

1. External packages
2. Internal modules (absolute paths)
3. Relative imports
4. Styles

---

## Git Conventions

### Branch Naming

```text
feature/short-description
fix/issue-number-description
refactor/component-name
docs/update-readme
```

### Commit Messages (Gitmoji + Commitlint)

This project uses **Gitmoji** with **Commitlint** for commit conventions:

```bash
# Use the interactive tool
bun run commit
```

Format: `:gitmoji: type: description`

Examples:

- `:sparkles: feat: Add user authentication`
- `:bug: fix: Fix login button not responding`
- `:memo: docs: Update README with installation steps`
- `:recycle: refactor: Refactor user service`
- `:wrench: chore: Update eslint configuration`

Common gitmojis:

| Code | Type | When to use |
|------|------|-------------|
| `:sparkles:` | feat | New feature |
| `:bug:` | fix | Bug fix |
| `:memo:` | docs | Documentation |
| `:art:` | style | Code style/format |
| `:recycle:` | refactor | Refactor |
| `:wrench:` | chore | Configuration |
| `:white_check_mark:` | test | Add tests |
| `:fire:` | chore | Remove code/files |
| `:rocket:` | chore | Deploy |
| `:lipstick:` | style | UI/style |
| `:tada:` | feat | Initial commit |
| `:arrow_up:` | chore | Upgrade dependencies |

Full reference: [gitmoji.dev](https://gitmoji.dev)

---

## Documentation

### Code Comments

```typescript
// Single line comment for brief explanations

/**
 * Multi-line comment for complex logic
 * explaining the why, not the what
 */

/** JSDoc for public APIs */
function publicFunction(param: string): void {
  // Implementation
}
```

### Markdown Style

- Follow markdownlint rules
- No trailing whitespace
- Single blank line between sections
- Use fenced code blocks with language identifier

---

*Last updated: 2026-02-03*
