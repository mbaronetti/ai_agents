# 🤖 AI Agents - Collaborative Development System

A sophisticated multi-agent system for collaborative software development, featuring intelligent orchestration and specialized expert agents.

<a href="https://mbaronetti.github.io/ai_agents/" target="_blank" rel="noopener">mbaronetti.github.io/ai_agents</a>

## 🚀 Features

### Core System
- **CollaborativeAgent**: Intelligent orchestrator for dynamic multi-agent collaboration
- **Specialized Expert Agents**: Domain-specific agents for different aspects of development
- **Automated Workflows**: Streamlined design-to-implementation processes
- **Cross-Agent Communication**: Intelligent feedback loops and iterative improvements

### Expert Agents

#### 🧭 **ProductManagerAgent**
- Product strategy and management
- Requirements definition and prioritization
- User story creation and acceptance criteria
- KPI definition and success metrics

#### 🏗️ **ArchitectAgent**
- System architecture and technical design
- Architectural decision making
- Technical strategy and planning
- System integration and scalability

#### 🖥️ **BackendExpertAgent**
- Backend services and API development
- Database design and optimization
- Server-side implementation
- Infrastructure and deployment

#### 🎨 **DesignUXExpertAgent**
- Mobile-first UI/UX design expertise
- User experience optimization
- Visual design and layout expertise
- Accessibility and usability focus

#### 💻 **FrontEndExpertAgent**
- React Native/Expo development
- Technical implementation
- Code architecture and patterns
- Performance-conscious development

#### 🔄 **ReusabilityExpertAgent**
- DRY principles implementation
- Component reusability analysis
- Code consistency maintenance
- Architecture optimization

#### 📍 **LocalizationServicesOptimizer**
- Location services expertise
- GPS optimization
- Geolocation features
- Location-based functionality (if applicable)

#### ⚡ **PerformanceOptimizer**
- Performance optimization
- Memory management
- Rendering efficiency
- Bundle size optimization

#### 💡 **InnovationExpertAgent**
- Creative ideation
- Competitive analysis
- Strategic innovation
- Market trend analysis

#### 🤖 **AI/ML Expert Agent**
- AI/ML integration
- Intelligent features
- Predictive capabilities
- Machine learning implementation

#### 🔒 **Security Expert Agent**
- Security best practices
- Privacy protection
- Encryption implementation
- Compliance (GDPR, CCPA)

#### 📋 **TasksAgent**
- Progress tracking
- Improvement management
- Status monitoring
- Implementation tracking

## 🏗️ Architecture

### Smart Agent Selection System
The system automatically determines relevant agents based on:
- **Task keywords** (UI, performance, security, AI, location, etc.)
- **Component type** (UI component, location feature, performance-critical, etc.)
- **Complexity level** (simple UI vs. comprehensive feature)
- **Performance requirements** (light mode vs. full analysis)

### Workflow Patterns

#### UI Component Development
```
CollaborativeAgent: Develop a new [UI component] for our React Native/Expo app
```

#### Location-Heavy Feature Development
```
CollaborativeAgent: Develop a location-based [feature] for our React Native/Expo app
```

#### Performance-Critical Feature Development
```
CollaborativeAgent: Develop a performance-critical [feature] for our React Native/Expo app
```

#### AI-Powered Feature Development
```
CollaborativeAgent: Develop an AI-powered [feature] for our React Native/Expo app
```

## 🛠️ Setup

### Prerequisites
- Node.js (v16 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mbaronetti/ai_agents.git
   cd ai_agents
   ```

2. **Configure Cursor IDE**
   - Ensure you have Cursor IDE installed
   - The `.cursor` directory contains all agent configurations
   - Agents are automatically available in your Cursor workspace

## 📖 Usage

### Basic Usage
1. Open your project in Cursor IDE
2. Use the agent system by invoking specific agents:
   ```
   @collaborative.json: [your feature request]
   ```

### Agent Invocation Examples

#### For Product Management
```
@product-manager.json:: Define requirements for a new user profile feature
```

#### For UI/UX Design
```
@designer.json:: Create a modern login screen for our app
```

#### For Technical Implementation
```
@frontend.json:: Implement a reusable button component
```

#### For Performance Optimization
```
@performance.json:: Optimize the image loading in our gallery component
```

#### For Security Implementation
```
@security.json:: Implement secure user authentication
```

#### For Location Features
```
@location.json:: Add GPS-based restaurant recommendations
```

#### For AI/ML Features
```
@ai-ml.json:: Implement AI-powered product recommendations
```

## 🎯 Project Context

This system is optimized for **React Native/Expo applications** with:
- Mobile-first design principles
- User experience optimization
- Maintainable reusable code architecture
- Performance optimization
- Security best practices
- AI/ML integration capabilities (if applicable)
- Location services (if applicable)
- Innovative competitive features

## 📁 Project Structure

```
ai_agents/
├── .cursor/
│   ├── agents/
│   │   ├── collaborative.json      # Main orchestrator agent
│   │   ├── product-manager.json    # Product management expert
│   │   ├── architect.json          # System architecture expert
│   │   ├── backend.json            # Backend development expert
│   │   ├── designer.json           # UI/UX design expert
│   │   ├── frontend.json           # Frontend development expert
│   │   ├── reusability.json        # Code reusability expert
│   │   ├── location.json           # Location services expert
│   │   ├── performance.json        # Performance optimization expert
│   │   ├── innovation.json         # Innovation and strategy expert
│   │   ├── ai-ml.json             # AI/ML integration expert
│   │   ├── security.json           # Security and privacy expert
│   │   ├── tasks.json              # Progress tracking expert
│   │   └── README.md               # Agent documentation
│   └── agents.json                 # Agent configuration
├── .cursorrules                    # Cursor IDE rules
├── PROJECT_AGNOSTIC_MIGRATION.md   # Migration documentation
└── README.md                       # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Cursor IDE's advanced AI capabilities
- Designed for collaborative development workflows
- Optimized for React Native/Expo development

---

**Note**: This is an AI-powered development system. The agents work best when used within Cursor IDE with the provided configuration files. 