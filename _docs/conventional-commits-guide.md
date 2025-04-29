# Conventional Commits Guide

For semantic-release to work properly, you need to use conventional commit messages:

## Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Types and Version Bumps

| Type               | Version   | Description              |
|--------------------|-----------|--------------------------|
| `feat:`            | Minor     | New feature (1.x.0)      |
| `fix:`             | Patch     | Bug fix (1.0.x)          |
| `docs:`            | No bump   | Documentation changes    |
| `style:`           | No bump   | Code style changes       |
| `refactor:`        | No bump   | Code refactoring         |
| `perf:`            | Patch     | Performance improvements |
| `test:`            | No bump   | Adding/updating tests    |
| `chore:`           | No bump   | Maintenance tasks        |
| `BREAKING CHANGE:` | Major     | Breaking changes (x.0.0) |

## Examples

```bash
# Patch release (1.0.1)
git commit -m "fix: resolve login issue with empty credentials"

# Minor release (1.1.0)
git commit -m "feat: add password reset functionality"

# Major release (2.0.0)
git commit -m "feat: update authentication system

BREAKING CHANGE: new auth system requires different API keys"
```
