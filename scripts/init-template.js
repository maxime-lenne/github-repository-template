#!/usr/bin/env bun
// Turn a fresh copy of the template into a new project.
// Run once by .github/workflows/init.yml on the first push of a repository
// created from the template; the script deletes itself so it never runs again.
//
// Env: GITHUB_REPOSITORY (owner/name), REPO_DESCRIPTION (optional)

import { unlink } from 'node:fs/promises';

const TEMPLATE_REPOSITORY = 'maxime-lenne/github-repository-template';

const repository = process.env.GITHUB_REPOSITORY;
if (!repository || repository === TEMPLATE_REPOSITORY) {
  console.error('Refusing to run: GITHUB_REPOSITORY must be set to a repository other than the template');
  process.exit(1);
}
const [, name] = repository.split('/');
const description = process.env.REPO_DESCRIPTION ?? '';

async function update(path, transform) {
  const file = Bun.file(path);
  await Bun.write(path, transform(await file.text()));
  console.log(`  ✔ ${path}`);
}

// package.json: project identity, fresh version
await update('package.json', text => {
  const pkg = JSON.parse(text);
  pkg.name = name;
  pkg.version = '0.0.0';
  pkg.description = description;
  return `${JSON.stringify(pkg, null, 2)}\n`;
});

// README.md / CONTRIBUTING.md: drop template-only sections, point links and
// badges to the new repository
await update('README.md', text => text
  .replace(/<!-- template-only:start -->[\s\S]*?<!-- template-only:end -->\n+/g, '')
  .replaceAll(TEMPLATE_REPOSITORY, repository)
  .replace(/^# .*$/m, `# ${name}`)
  .replace(/(<strong>).*(<\/strong>)/, `$1${description || name}$2`));

await update('CONTRIBUTING.md', text => text
  .replaceAll(TEMPLATE_REPOSITORY, repository)
  .replaceAll('cd github-repository-template', `cd ${name}`));

// CHANGELOG.md: history starts with the first release of the new project
await update('CHANGELOG.md', () => `# Changelog

All notable changes to this project will be documented in this file.
`);

// docs/TASKS.md: drop the template's own backlog
await update('docs/TASKS.md', () => `# Tasks

Project task tracking.

## Backlog

- [ ] Adapt README.md and docs/ to the project

## Completed

---

*Last updated: ${new Date().toISOString().slice(0, 10)}*
`);

await unlink(new URL(import.meta.url).pathname);
console.log('  ✔ removed scripts/init-template.js');
