# Git Release Process Guide

This document outlines the standard process for creating and publishing a new release.

## Prerequisites

- Access to the main repository
- Proper permissions to push tags and publish packages
- Node.js and npm installed
- GitHub Personal Access Token (see [Creating a GitHub Token](#creating-a-github-token-for-releases))

## Verifying Remote Repositories

Before starting the release process, verify you're connected to the correct remote repository:

### Check All Configured Remotes

```bash
git remote -v
```

This will show all configured remote repositories along with their URLs for both fetch and push operations. Example output:

```
origin https://github.com/username/repository.git (fetch)
origin https://github.com/username/repository.git (push)
```

### Check Specific Remote Details

For more detailed information about a specific remote (like "origin"):

```bash
git remote show origin
```

This will show:

- The remote URL
- The tracked branches
- The local branches configured for 'git pull'
- The local branches configured for 'git push'

### Verify Remote Connection

To check if you can actually connect to the remote repository:

```bash
git ls-remote --heads origin
```

This will list all the branches on the remote repository, verifying your connection and authentication.

### Fix Remote URL (If Needed)

If you need to update the remote repository URL:

```bash
git remote set-url origin https://github.com/username/repository.git
```

## Recommended Pre-Release Workflow

### 1. Finish Work in Feature Branches

- Complete all work for the release
- Make sure tests pass on each branch
- Have code reviewed if applicable

### 2. Merge to Main Using Pull Requests

- Create PR from feature branch to main
- Review changes
- Merge using GitHub's interface (preserves commit history)
- Or locally:
    ```bash
    git checkout main && git merge feature-branch
    ```

### 3. Pull Latest Main

```bash
git checkout main
git pull origin main
```

### 4. Run Pre-Release Tests

```bash
npm run lint
npm run test
npm run build
```

### 5. Then Run Your Release

```bash
npx release-it
```

**Important Note**: Ensure all feature branches with changes meant for the release have been merged into the main branch before proceeding. Release tools like release-it are typically configured to only run from main/master branches.

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

### Performing a Dry Run

Before creating an actual release, it's highly recommended to perform a dry run to validate the process:

```bash
# Dry run for interactive process
npx release-it --dry-run

# Dry run with specific version bump
npx release-it minor --dry-run
npx release-it major --dry-run
npx release-it patch --dry-run
```

A dry run will:

- Show which version would be used
- Display the generated changelog
- Show which Git commands would be executed
- Indicate which GitHub API calls would be made
- Preview npm publishing steps (if configured)

This helps catch configuration issues, authentication problems, or unexpected version bumps before making any actual changes.

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
