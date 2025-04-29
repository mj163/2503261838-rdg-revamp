# 2503261838-rdg-revamp Project Documentation

This comprehensive documentation includes all aspects of the project, from mission and vision to development setup and release management.

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
    - [Release Management](#release-management)
    - [Frontend](#frontend)
    - [Hosting & Deployment](#hosting--deployment)
    - [Analytics & Monitoring](#analytics--monitoring)
- [Project Structure](#project-structure)
- [Brand Assets](#brand-assets)
    - [Colors](#colors)
    - [Typography](#typography)
- [Development](#development)
    - [Setup](#setup)
    - [SSH Key Configuration](#ssh-key-configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Release Process](#release-process)
    - [Commit Workflow](#commit-workflow)
    - [Conventional Commits](#conventional-commits)
    - [Git Release Process](#git-release-process)
    - [Release Management Tech Stack](#release-management-tech-stack)
- [License](#license)
- [Contact](#contact)

## About the Project

<details>
<summary>Click to expand project details</summary>

This is a research project design to investigate how a small business may automate business workflows and streamline operations.

- Build: 2503261838-rdg-v0.1.1-ws-prod
- Github:

### Mission

Advancing business goals through in-depth research, development, comprehensive software testing, peer reviews and testing. We evaluate SaaS offerings with innovative proof-of-concept models and deliver actionable insights.

### Vision

To integrate automations and streamline operations using technology innovation, and unbiased, AI-driven research and development solutions that empower our businesses to thrive.

</details>

## Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

### Release Management

- Conventional Commits for structured version control
- release-it for automated versioning and changelog generation
- Husky for Git hooks to enforce code quality

### Frontend

- Next.js App Router (for static pages)
- TypeScript
- ShadCN UI + Radix for component library
- Tailwind CSS for styling
- React Hook Form + Zod for form validation

### Hosting & Deployment

- Vercel (Free tier)
- Edge Functions for API routes
- Global CDN for performance

### Analytics & Monitoring

- Self-hosted Umami on Vercel
- Custom metrics collection

</details>

## Project Structure

<details>
<summary>Click to expand project structure</summary>

Directory structure:

```text
📁 _docs/                # Project documentation
📁 app/                  # Next.js app directory
  ├── favicon.ico        # Site favicon
  ├── globals.css        # Global CSS
  ├── layout.tsx         # Root layout
  └── page.tsx           # Home page
📁 data/                 # Data files
  ├── hero-content.ts    # Hero component content
📁 lib/                  # Utility functions
  ├── utils.ts           # Utility functions
📁 public/               # Static assets
📁 rdolcegroup/          # Component library
  ├── HeroComponent/     # Hero component
    ├── ui/              # UI components
      ├── button/        # Button components
      ├── hero/          # Hero UI components
    ├── README.md        # Component documentation
📁 types/                # TypeScript type definitions
  ├── hero.ts            # Hero component types
📁 .husky/               # Git hooks for Husky
📄 .env                  # Environment variables
📄 .eslintrc.js          # ESLint configuration
📄 .gitignore            # Git ignore rules
📄 .prettierignore       # Prettier ignore rules
📄 .prettierrc           # Prettier configuration
📄 .prettierrc.js        # Extended Prettier configuration
📄 .release-it.json      # Release-it configuration
📄 .swcrc                # SWC compiler configuration
📄 CHANGELOG.md          # Automated changelog
📄 commitlint.config.js  # Commit linting configuration
📄 eslint.config.mjs     # ESLint flat configuration
📄 next-env.d.ts         # Next.js TypeScript declarations
📄 next.config.ts        # Next.js configuration
📄 package.json          # Project dependencies
📄 postcss.config.mjs    # PostCSS configuration
📄 README.md             # Project documentation
📄 tsconfig.json         # TypeScript configuration
```

</details>

## Brand Assets

<details>
<summary>Click to expand brand assets</summary>

### Colors

Primary:

- Main: #446e88
- Dark: #3f617b
- Light: #96b8ca

Secondary:

- Yellow: #fde047
- Gold: #eab308

Neutral:

- Light: #F4F4F4
- Dark: #343A3F

### Typography

- Primary Font: Nunito Sans
- Secondary Font: Syne (for headings)

</details>

## Development

### Setup

<details>
<summary>Click to expand development setup instructions</summary>

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

</details>

### SSH Key Configuration

<details>
<summary>Click to expand SSH key configuration guide</summary>

1. **Check for Existing SSH Keys:**

    ```sh
    ls -al ~/.ssh
    ```

    Look for `id_ed25519` and `id_ed25519.pub`.

2. **Generate a New Key (if needed):**

    ```sh
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    Press Enter to accept defaults.

3. **Add Key to SSH Agent:**

    ```sh
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
    ```

4. **Add Public Key to GitHub:**

    - Copy key:
        ```sh
        pbcopy < ~/.ssh/id_ed25519.pub
        ```
    - Go to [GitHub SSH keys settings](https://github.com/settings/keys), click **New SSH key**, paste, and save.

5. **Set Remote to Use SSH:**

    ```sh
    git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
    ```

6. **Test Connection:**
    ```sh
    ssh -T git@github.com
    ```
    Should see:  
    `Hi YOUR_USERNAME! You've successfully authenticated, but GitHub does not provide shell access.`

</details>

## Deployment

<details>
<summary>Click to expand deployment information</summary>

The application is configured for deployment on Vercel with the following considerations:

- Automatic deployments from main branch
- Edge Functions for API routes
- Global CDN distribution
- PostgreSQL database connection via Neon Tech

</details>

## Contributing

<details>
<summary>Click to expand contributing guidelines</summary>

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

</details>

## Release Process

### Commit Workflow

<details>
<summary>Click to expand commit workflow and changelog automation</summary>

#### 📝 Automatically Generating a CHANGELOG.md

1. **Install Required Packages:**
    ```sh
    npm install --save-dev husky
    npm install --save-dev release-it @release-it/conventional-changelog
    ```
2. **Configure Husky:**

```bash
npm husky init
```

3. **Configure release-it:**
    - Add to your package.json scripts:
        ```json
        "release": "release-it"
        ```
    - Create a .release-it.json file:
        ```json
        {
            "plugins": {
                "@release-it/conventional-changelog": {
                    "preset": "conventionalcommits",
                    "infile": "CHANGELOG.md",
                    "header": "# Changelog\n\nAll notable changes to this project will be documented in this file."
                }
            },
            "git": {
                "commit": true,
                "commitMessage": "chore(release): v${version}",
                "tagName": "v${version}",
                "requireCleanWorkingDir": false,
                "requireUpstream": false,
                "push": true,
                "pushArgs": ["--follow-tags"]
            },
            "npm": {
                "publish": false
            },
            "github": {
                "release": true,
                "releaseName": "Release ${version}"
            },
            "hooks": {
                "before:init": [
                    "npm run lint",
                    "npm run type-check",
                    "npm run test"
                ],
                "after:bump": "echo 'Version bumped to ${version}'",
                "after:release": "echo Successfully released ${name} v${version} to GitHub."
            }
        }
        ```
    - Use **Conventional Commit messages** (e.g., `feat:`, `fix:`, `chore:`) for best results.
    - Run `npm run release` to update `CHANGELOG.md` automatically.

#### ✅ Submitting a Proper Commit (Conventional Commits)

To ensure your commits are automatically included in the generated `CHANGELOG.md`, always use
the [Conventional Commits](https://www.conventionalcommits.org/) format:

##### Commit Message Structure

```
type(scope?): description
```

- **type**: The kind of change (`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, etc.)
- **scope** (optional): The section of the codebase affected (e.g., `auth`, `api`, `ui`)
- **description**: Short summary of the change

##### Examples

- `feat: add user authentication`
- `fix(ui): correct button alignment`
- `docs: update README with setup instructions`
- `chore: update dependencies`

##### Step-by-Step Process

1. **Stage your changes:**
    ```sh
    git add .
    ```
2. **Commit using the Conventional Commits format:**
    ```sh
    git commit -m "feat: add dark mode toggle"
    ```
3. **Push your commit:**
    ```sh
    git push
    ```
4. **Run release-it to update the changelog:**
    ```sh
    npm run release
    ```

##### Result

Your commit message will appear under the appropriate section in `CHANGELOG.md` after running `release-it`.

**Tip:**

- Use clear, concise descriptions for maximum clarity in your changelog.
- Only commits that follow the conventional format will be included in the changelog.

##### 📦 Packages and JSON Configuration Needed

- **Packages:**

    - `release-it`
    - `@release-it/conventional-changelog`
    - (Optional for linting/formatting: `eslint`, `prettier`, `lint-staged`, `husky`, etc.)

- **Key JSON Config Files:**
    - `.release-it.json` (see above)
    - `package.json` scripts:
        ```json
        "scripts": {
          "release": "release-it"
        }
        ```
    - (Optionally) `.lintstagedrc.json`, `.eslintrc`, `.prettierrc` for code quality

</details>

### Conventional Commits

<details>
<summary>Click to expand conventional commits guide</summary>

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

These additional features have been added:

- Automatically determine version increments based on commit types:
- feat: commits → minor version bump (0.1.0 → 0.2.0)
- fix: commits → patch version bump (0.1.0 → 0.1.1)
- Commits with BREAKING CHANGE: → major version bump (0.1.0 → 1.0.0)

#### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, an optional **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Types and Version Bumps

The commit type must be one of the following:

| Type               | Version | Description                                                   |
| ------------------ | ------- | ------------------------------------------------------------- |
| `feat:`            | Minor   | New feature (1.x.0)                                           |
| `fix:`             | Patch   | Bug fix (1.0.x)                                               |
| `docs:`            | No bump | Documentation changes                                         |
| `style:`           | No bump | Code style changes                                            |
| `refactor:`        | No bump | Code refactoring                                              |
| `perf:`            | Patch   | Performance improvements                                      |
| `test:`            | No bump | Adding/updating tests                                         |
| `build:`           | No bump | Changes that affect the build system or external dependencies |
| `ci:`              | No bump | Changes to our CI configuration files and scripts             |
| `chore:`           | No bump | Maintenance tasks                                             |
| `BREAKING CHANGE:` | Major   | Breaking changes (x.0.0)                                      |
| `revert:`          | No bump | Reverts a previous commit                                     |

#### Scope

The scope is optional and should be a noun describing a section of the codebase (e.g., `auth`, `ui`, `api`).

#### Subject

The subject is a short description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end

#### Examples

```
feat(auth): add login functionality
fix(ui): resolve button alignment issue
docs: update API documentation
style: format code according to style guide
```

#### Breaking Changes

Breaking changes should be indicated by adding `!` after the type/scope or by adding a `BREAKING CHANGE:` entry in the footer:

```
feat(api)!: remove deprecated endpoints

BREAKING CHANGE: The /v1 API endpoints have been removed in favor of /v2.
```

#### Tools in this Project

This project uses:

- `@commitlint/cli` and `@commitlint/config-conventional` to validate commit messages
- `husky` to run commitlint on every commit
- `release-it` for versioning and releasing
- `@release-it/conventional-changelog` to generate changelogs from commits

</details>

### Git Release Process

<details>
<summary>Click to expand git release process guide</summary>

#### Prerequisites

- Access to the main repository
- Proper permissions to push tags and publish packages
- Node.js and npm installed
- GitHub Personal Access Token (see [Creating a GitHub Token](#creating-a-github-token-for-releases))

#### Verifying Remote Repositories

Before starting the release process, verify you're connected to the correct remote repository:

##### Check All Configured Remotes

```bash
git remote -v
```

This will show all configured remote repositories along with their URLs for both fetch and push operations. Example output:

```
origin https://github.com/username/repository.git (fetch)
origin https://github.com/username/repository.git (push)
```

##### Check Specific Remote Details

For more detailed information about a specific remote (like "origin"):

```bash
git remote show origin
```

This will show:

- The remote URL
- The tracked branches
- The local branches configured for 'git pull'
- The local branches configured for 'git push'

##### Verify Remote Connection

To check if you can actually connect to the remote repository:

```bash
git ls-remote --heads origin
```

This will list all the branches on the remote repository, verifying your connection and authentication.

##### Fix Remote URL (If Needed)

If you need to update the remote repository URL:

```bash
git remote set-url origin https://github.com/username/repository.git
```

#### Recommended Pre-Release Workflow

##### 1. Finish Work in Feature Branches

- Complete all work for the release
- Make sure tests pass on each branch
- Have code reviewed if applicable

##### 2. Merge to Main Using Pull Requests

- Create PR from feature branch to main
- Review changes
- Merge using GitHub's interface (preserves commit history)
- Or locally:
    ```bash
    git checkout main && git merge feature-branch
    ```

##### 3. Pull Latest Main

```bash
git checkout main
git pull origin main
```

##### 4. Run Pre-Release Tests

```bash
npm run lint
npm run test
npm run build
```

##### 5. Then Run Your Release

```bash
npx release-it
```

**Important Note**: Ensure all feature branches with changes meant for the release have been merged into the main branch before proceeding. Release tools like release-it are typically configured to only run from main/master branches.

#### Release Steps

##### 1. Prepare Your Repository

```bash
# Check repository status
git status                  # Should show no pending changes

# Sync with remote
git pull origin main        # Or your main branch name
```

##### 2. Verify Project Health

```bash
# Run validation checks
npm run lint                # Run linting
npm test                    # Run tests
npm run build               # Build the project
```

##### 3. Generate the Release

```bash
# Interactive release process
npx release-it              # Guides through version selection and changelog
```

#### Performing a Dry Run

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

#### Alternative Release Commands

```bash
# Specific version bumps
npx release-it minor        # For a minor release (0.1.0 → 0.2.0)
npx release-it major        # For a major release (1.0.0 → 2.0.0)
npx release-it patch        # For a patch release (1.0.1 → 1.0.2)
```

#### 4. Publish Package (If Needed)

```bash
# If release-it doesn't handle publishing
npm publish                 # Publishes to npm registry
```

#### Post-Release

- Verify the release appears correctly on GitHub
- Confirm package is available on npm (if applicable)
- Notify team members of the new release

#### Creating a GitHub Token for Releases

Here's how to create a GitHub Personal Access Token (PAT) for releases:

##### 1. Go to GitHub Settings

- Log in to your GitHub account
- Click on your profile icon in the top right
- Select "Settings"

##### 2. Navigate to Developer Settings

- Scroll down to the bottom of the sidebar menu
- Click on "Developer settings"

##### 3. Generate a Personal Access Token

- Select "Personal access tokens" → "Tokens (classic)"
- Click "Generate new token" → "Generate new token (classic)"
- Give your token a descriptive name (e.g., "release-it automation")

##### 4. Set Token Permissions

- For GitHub releases, select these scopes:
    - `repo` (Full control of private repositories)

</details>

### Release Management Tech Stack

<details>
<summary>Click to expand release management tech stack</summary>

#### Core Tools

- **release-it**: Primary release automation tool that handles version bumping, git tagging, and GitHub releases
- **@release-it/conventional-changelog**: Plugin for automated CHANGELOG.md generation based on commit history
- **commitlint**: Enforces conventional commit message format with `@commitlint/config-conventional`
- **Husky**: Manages Git hooks for pre-commit and commit-msg validation

#### Workflow Components

- **Conventional Commits**: Structured commit message format (`feat`, `fix`, `docs`, etc.)
- **GitHub Actions**: Integration with GitHub for automated release publishing
- **Semantic Versioning**: Automated version bumping based on commit types
- **Pre-release Validation**: Automated checks (`lint`, `type-check`, `test`) before releases

#### Configuration Files

- `.release-it.json`: Controls version bumping, changelogs, and GitHub releases
- `commitlint.config.js`: Defines commit message rules and validation
- `.husky/`: Contains Git hooks for enforcing standards

#### Workflow Description

This stack creates an efficient workflow where:

1. Developers follow conventional commit standards
2. Commits are automatically validated
3. Version numbers are derived from commit types
4. Changelogs are generated automatically
5. GitHub releases are created with consistent naming

This approach ensures consistent, automated releases with minimal manual intervention while maintaining high quality standards through pre-release validation.

</details>

## License

<details>
<summary>Click to expand license information</summary>

[MIT LICENSE](/LICENSE)

</details>

## Contact

<details>
<summary>Click to expand contact information</summary>

[concierge@rdolcegroup.com](mailto:concierge@rdolcegroup.com?subject=website_development)

</details>
