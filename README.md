# AI Agents - Collaborative Development System

A multi-agent system for collaborative software development, featuring intelligent orchestration and specialized expert agents for modern React/TypeScript web applications.

[mbaronetti.github.io/ai_agents](https://mbaronetti.github.io/ai_agents/)

## Features

### Core System
- **CollaborativeAgent**: Intelligent orchestrator for multi-agent collaboration
- **Specialized Expert Agents**: Domain-specific agents for different aspects of development
- **Anti-Overengineering**: Simple, effective solutions over complex abstractions
- **High-Quality Output**: Expert-level, concise, actionable responses

### Expert Agents

| Agent | Role | Expertise |
|-------|------|-----------|
| **ProductManagerAgent** | Product Strategy | PRD, user stories, KPIs, scope management |
| **ArchitectAgent** | System Design | Architecture, API design, technical decisions |
| **BackendExpertAgent** | Backend | APIs, databases, serverless, edge functions |
| **DesignUXExpertAgent** | UI/UX Design | Responsive web, accessibility, design systems |
| **FrontEndExpertAgent** | Frontend | React 18+, Next.js 14+, TypeScript, TailwindCSS |
| **ReusabilityExpertAgent** | Component Architecture | DRY, design systems, monorepos |
| **IntegrationExpertAgent** | Third-Party APIs | Stripe, Auth0, webhooks, payments |
| **PerformanceOptimizer** | Web Performance | Core Web Vitals, bundle optimization, caching |
| **AIMLExpertAgent** | AI/ML | LLM integration, AI SDK, RAG, embeddings |
| **SecurityExpertAgent** | Web Security | OAuth, CORS, CSP, XSS/CSRF prevention |
| **InnovationExpertAgent** | Strategy | Creative ideation, competitive analysis |
| **TasksAgent** | Task Management | Progress tracking, improvement management |

## Architecture

### Smart Agent Selection
The system automatically selects relevant agents based on:
- **Keywords**: UI, performance, security, AI, API, etc.
- **Component type**: UI component, API, full feature
- **Complexity**: Simple task vs comprehensive feature

### Workflow Patterns

```
UI Component:        Designer → Frontend → Reusability → Performance
Full Feature:        Product → Architect → Designer → Frontend → Backend
API Development:     Backend → Security → Performance
AI Feature:          AI/ML → Frontend → Security → Performance
Third-Party:         Integration → Backend → Security
Security Feature:    Security → Backend → Frontend
Refactoring:         Reusability → Frontend → Architect
```

## Usage

### Basic Usage
Open your project in Cursor IDE and invoke agents:

```
@collaborative.json: [your feature request]
@frontend.json: Implement [component]
@backend.json: Build API for [feature]
```

### Examples

```bash
# Product definition
@product-manager.json: Define requirements for user authentication

# UI/UX design
@designer.json: Create a dashboard layout

# Frontend implementation
@frontend.json: Build a data table component with sorting

# Backend API
@backend.json: Create REST API for user management

# Performance optimization
@performance.json: Optimize bundle size

# Security review
@security.json: Review authentication implementation

# AI feature
@ai-ml.json: Add AI-powered search suggestions

# Third-party integration
@integration.json: Integrate Stripe payments
```

## Tech Stack

This system is optimized for modern web development:

- **Frontend**: React 18+, Next.js 14+, TypeScript, TailwindCSS
- **Backend**: Node.js, serverless, edge functions
- **Database**: PostgreSQL, Prisma/Drizzle
- **Deployment**: Vercel, Cloudflare, AWS
- **Mobile**: Responsive design, PWA

## Project Structure

```
ai_agents/
├── .cursor/
│   ├── agents/
│   │   ├── collaborative.json   # Main orchestrator
│   │   ├── product-manager.json # Product management
│   │   ├── architect.json       # System architecture
│   │   ├── backend.json         # Backend development
│   │   ├── designer.json        # UI/UX design
│   │   ├── frontend.json        # Frontend development
│   │   ├── reusability.json     # Component architecture
│   │   ├── integration.json     # Third-party integrations
│   │   ├── performance.json     # Performance optimization
│   │   ├── ai-ml.json           # AI/ML integration
│   │   ├── security.json        # Security
│   │   ├── innovation.json      # Innovation strategy
│   │   └── tasks.json           # Task management
│   └── rules                    # Portable rules
├── .cursorrules                 # Cursor IDE rules
├── CLAUDE.md                    # Claude Code guidance
└── README.md                    # This file
```

## Portability

To use these agents in another project:

1. Copy `.cursor/rules` to target project's `.cursor/rules`
2. Copy `.cursor/agents/` folder to target project's `.cursor/agents/`

## Key Principles

1. **No Overengineering**: Simple solutions over complex abstractions
2. **Simplicity First**: Working code > perfect architecture
3. **Expert Output**: High-signal, concise, actionable responses
4. **Modern Stack**: Latest stable technologies, battle-tested patterns
5. **Performance**: Core Web Vitals, bundle optimization, caching
6. **Security**: OWASP Top 10, secure by default
7. **Accessibility**: WCAG 2.1, semantic HTML, keyboard navigation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This is an AI-powered development system designed for use with Cursor IDE.
