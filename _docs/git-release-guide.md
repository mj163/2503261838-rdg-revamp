# Git Release Process Guide

This document outlines the standard process for creating and publishing a new release.

## Prerequisites

- Access to the main repository
- Proper permissions to push tags and publish packages
- Node.js and npm installed
- GitHub Personal Access Token (see [Creating a GitHub Token](#creating-a-github-token-for-releases))

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

## Creating a GitHub Token for Releases

Here's how to create a GitHub Personal Access Token (PAT) for releases:

### 1. Go to GitHub Settings

- Log in to your GitHub account
- Click on your profile icon in the top right
- Select "Settings"

### 2. Navigate to Developer Settings

- Scroll down to the bottom of the sidebar menu
- Click on "Developer settings"

### 3. Generate a Personal Access Token

- Select "Personal access tokens" → "Tokens (classic)"
- Click "Generate new token" → "Generate new token (classic)"
- Give your token a descriptive name (e.g., "release-it automation")

### 4. Set Token Permissions

- For GitHub releases, select these scopes:
    - `repo` (Full control of private repositories)
    - If your repository is public, you can just select `public_repo` instead

### 5. Generate and Copy the Token

- Click "Generate token"
- **IMPORTANT**: Copy the token immediately as GitHub will only show it once

### 6. Use the Token with release-it

- Option 1 - Set as an environment variable:

    ```bash
    export GITHUB_TOKEN=your_token_here
    ```

- Option 2 - Add to your .bashrc/.zshrc for persistence:

    ```bash
    echo 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc
    source ~/.zshrc
    ```

- Option 3 - Store in a .env file (add to .gitignore):
    ```
    # .env file
    GITHUB_TOKEN=your_token_here
    ```

### 7. Test Your Configuration

```bash
npx release-it --dry-run
```
