# About the Project

This is a research project design to investigate how a small business may automate business workflows and streamline operations.

- Build: 2503261838-rdg-v0.1.1-ws-prod
- Github: 
---

### Mission

Advancing business goals through in-depth research, development, comprehensive software testing, peer reviews and testing. We evaluate SaaS offerings with innovative proof-of-concept models and deliver actionable insights.

### Vision

To integrate automations and streamline operations using technology innovation, and unbiased, AI-driven research and development solutions that empower our businesses to thrive.

## Tech Stack

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

## Project Structure

Directory structure:

```text
📁 app/
  ├── [...slug]/      # Dynamic routes (blog posts, tags)
  ├── about/          # About page
  ├── api/            # API routes
  ├── layout.tsx      # Root layout
  └── page.tsx        # Home page
📁 components/
  ├── blog/           # Blog-related components
  ├── landing/        # Landing page components
  ├── search/         # Search functionality
  └── shared/         # Shared UI components
📁 css/               # Global styles
📁 data/              # Global site data
  ├── config/         # Site configuration
📁 layouts/           # Custom Layouts
📁 lib/               # Utility functions and shared logic
📁 public/            # Static assets
📁 scripts/           # Static assets
📄 .env.example
📄 .eslintignore
📄 .eslintrc.js
📄 .gitignore
📄 .prettierrc
📄 contentlayer.config.ts
📄 jsconfig.json
📄 next-env.d.ts
📄 next.config.js
📄 package.json
📄 postcss.config.js
📄 tailwind.config.js
📄 tsconfig.json
```

## Brand Assets

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

## Development Setup

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Set up environment variables:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Deployment

The application is configured for deployment on Vercel with the following considerations:

- Automatic deployments from main branch
- Edge Functions for API routes
- Global CDN distribution
- PostgreSQL database connection via Neon Tech


## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[MIT LICENSE](LICENSE)

## Contact

[concierge@rdolcegroup.com](mailto:concierge@rdolcegroup.com?subject=website_development)
