# Conventional Commits Guide

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

These additional features have been added:

- Automatically determine version increments based on commit types:
- feat: commits → minor version bump (0.1.0 → 0.2.0)
- fix: commits → patch version bump (0.1.0 → 0.1.1)
- Commits with BREAKING CHANGE: → major version bump (0.1.0 → 1.0.0)

## Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, an optional **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Types

The commit type must be one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Scope

The scope is optional and should be a noun describing a section of the codebase (e.g., `auth`, `ui`, `api`).

### Subject

The subject is a short description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

### Examples

```
feat(auth): add login functionality
fix(ui): resolve button alignment issue
docs: update API documentation
style: format code according to style guide
```

## Breaking Changes

Breaking changes should be indicated by adding `!` after the type/scope or by adding a `BREAKING CHANGE:` entry in the footer:

```
feat(api)!: remove deprecated endpoints

BREAKING CHANGE: The /v1 API endpoints have been removed in favor of /v2.
```

## Tools in this Project

This project uses:

- `@commitlint/cli` and `@commitlint/config-conventional` to validate commit messages
- `husky` to run commitlint on every commit
- `release-it` for versioning and releasing
- `@release-it/conventional-changelog` to generate changelogs from commits
