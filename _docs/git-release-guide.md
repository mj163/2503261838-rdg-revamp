# Git Release Process Guide

This document outlines the standard process for creating and publishing a new release.

## Prerequisites

- Access to the main repository
- Proper permissions to push tags and publish packages
- Node.js and npm installed

## Release Steps

### 1. Prepare Your Repository

```bash
# Check repository status
git status                  # Should show no pending changes

# Sync with remote
git pull origin main        # Or your main branch name
```

### 2. Verify Project Health

```bash
# Run validation checks
npm run lint                # Run linting
npm test                    # Run tests
npm run build               # Build the project
```

### 3. Generate the Release

```bash
# Interactive release process
npx release-it              # Guides through version selection and changelog
```

### Alternative Release Commands

```bash
# Specific version bumps
npx release-it minor        # For a minor release (0.1.0 → 0.2.0)
npx release-it major        # For a major release (1.0.0 → 2.0.0)
npx release-it patch        # For a patch release (1.0.1 → 1.0.2)
```

### 4. Publish Package (If Needed)

```bash
# If release-it doesn't handle publishing
npm publish                 # Publishes to npm registry
```

## Post-Release

- Verify the release appears correctly on GitHub
- Confirm package is available on npm (if applicable)
- Notify team members of the new release
