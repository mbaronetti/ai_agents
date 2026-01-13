# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A multi-agent system for Cursor IDE providing specialized AI agents for collaborative software development, optimized for modern React/TypeScript web applications.

## Architecture

### Agent System
JSON-based agent configurations in `.cursor/agents/`:

- **CollaborativeAgent** (`collaborative.json`): Main orchestrator that dynamically selects and coordinates agents based on task keywords and complexity
- **12 Specialized Agents**: ProductManager, Architect, Backend, DesignUX, FrontEnd, Reusability, Integration, Performance, Security, AIML, Innovation, Tasks

### Key Principles
All agents follow these core principles:
1. **No Overengineering**: Simple solutions over complex abstractions
2. **Expert Output**: High-signal, concise, actionable responses
3. **Modern Stack**: React 18+, Next.js 14+, TypeScript, TailwindCSS
4. **Web-First**: Desktop and mobile browsers, PWA support

### Agent Selection Keywords
- **UI/UX**: DesignUXExpertAgent
- **React/TypeScript/hooks**: FrontEndExpertAgent
- **API/database/serverless**: BackendExpertAgent
- **Performance/Core Web Vitals/bundle**: PerformanceOptimizer
- **Security/auth/CORS/CSP**: SecurityExpertAgent
- **AI/LLM/embeddings/RAG**: AIMLExpertAgent
- **Stripe/webhook/OAuth**: IntegrationExpertAgent

### Configuration Files
- `.cursor/agents/` - Agent JSON definitions
- `.cursor/rules` - Portable orchestration rules
- `.cursorrules` - Full workflow patterns

### Orchestration Rules
- `max_agents = 3` per task (light mode)
- Strict delegation: orchestrator does not generate code directly
- 5-phase workflow: Product → Design → Technical Review → Specialized Reviews → Collaboration

## Agent Invocation (in Cursor IDE)

```
@collaborative.json: [feature request]
@frontend.json: Implement [component]
@backend.json: Build API for [feature]
@designer.json: Create design for [component]
@performance.json: Optimize [feature]
@security.json: Review security for [feature]
@ai-ml.json: Add AI capabilities to [feature]
@integration.json: Integrate [third-party service]
```

## Workflow Patterns

| Pattern | Agent Sequence |
|---------|---------------|
| UI Component | Designer → Frontend → Reusability → Performance |
| Full Feature | Product → Architect → Designer → Frontend → Backend |
| API Development | Backend → Security → Performance |
| AI Feature | AIML → Frontend → Security → Performance |
| Third-Party | Integration → Backend → Security |
| Security Feature | Security → Backend → Frontend |
| Refactoring | Reusability → Frontend → Architect |

## Tech Stack Focus

- **Frontend**: React 18+, Next.js 14+, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Node.js, serverless, edge functions, Prisma/Drizzle
- **Deployment**: Vercel, Cloudflare, AWS
- **AI/ML**: Vercel AI SDK, OpenAI, Anthropic, RAG patterns

## Portability

To use these agents in another project:
1. Copy `.cursor/rules` to target project's `.cursor/rules`
2. Copy `.cursor/agents/` folder to target project's `.cursor/agents/`
