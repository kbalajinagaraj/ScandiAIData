# DPDP Compliance Experts - AI-Powered Privacy Solutions

## Project Overview

A sophisticated multi-page website for DPDP (Digital Personal Data Protection) compliance consulting services with a strong emphasis on AI-powered solutions. The website features a clean Scandinavian design aesthetic with minimalist layouts, generous whitespace, and professional typography.

## Design Philosophy

- **Scandinavian Minimalism**: Clean lines, ample whitespace, and functional design
- **Color Palette**: Neutral base with professional blue accent (hsl(210, 100%, 50%))
- **Typography**: Inter for body text, Space Grotesk for headings
- **Responsive**: Fully responsive design across all breakpoints
- **Dark Mode**: Complete dark mode support with smooth transitions

## Key Features

### Pages
1. **Home**: Hero section with animated statistics, services preview, products highlight, AI consultation preview, client showcase, and 360° solutions visualization
2. **Services**: Detailed presentation of 5 consulting services with key benefits
3. **Products**: Exclusive showcase of 5 AI-powered compliance products with detailed features
4. **About**: Company mission, vision, values, and track record
5. **Contact**: Contact form with product interest selection and contact information

### AI-Powered Products
1. **AI Compliance Assistant**: 24/7 virtual legal expert for DPDP queries
2. **Smart Consent Intelligence Platform**: AI-powered consent lifecycle management
3. **Privacy Risk Predictor**: ML-based proactive risk detection
4. **Intelligent Document Analyzer**: AI-driven contract analysis and gap identification
5. **Adaptive Training Engine**: Personalized compliance training with gamification

### Consulting Services
1. Gap Assessment Review
2. Consulting, Advisory & Audit
3. Data Protection Officer as a Service
4. Training Programs for DPDP Compliance
5. Contract Review & Data Processing Agreements

## Technical Stack

### Frontend
- React with TypeScript
- Wouter for routing
- TailwindCSS for styling
- Shadcn UI components
- Framer Motion for animations
- React Hook Form with Zod validation
- TanStack Query for data fetching

### Backend
- Express.js server
- In-memory storage (MemStorage)
- Zod validation
- RESTful API endpoints

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get all newsletter subscribers (admin)

## Data Models

### Contact Submission
- name (required)
- email (required, validated)
- phone (optional)
- company (optional)
- message (required, min 10 characters)
- productInterest (optional)

### Newsletter Subscriber
- email (required, unique, validated)

## Development

The application runs on a single port with Vite serving the frontend and Express handling the backend. Hot reload is enabled for both frontend and backend development.

To start the application:
```bash
npm run dev
```

## Design Tokens

### Colors
- Primary: Blue (hsl(210, 100%, 50%))
- Background: White (light) / Dark gray (dark)
- Card: Light gray (light) / Darker gray (dark)
- Text: Dark gray (light) / Light gray (dark)

### Spacing
- Small: 0.5rem - 1rem
- Medium: 1.5rem - 2rem
- Large: 3rem - 4rem

### Typography Scale
- Hero: text-5xl to text-7xl
- Section Headers: text-4xl to text-5xl
- Card Titles: text-2xl to text-3xl
- Body: text-base to text-lg

## Recent Changes

- Implemented complete frontend with all 5 pages
- Created 5 detailed product showcases with features and use cases
- Built responsive navigation with mobile menu
- Added dark mode toggle throughout
- Implemented contact form with validation
- Created newsletter subscription in footer
- Set up backend API endpoints with proper validation
- Configured in-memory storage for development

## User Preferences

- Clean, professional Scandinavian design
- AI-focused messaging and branding
- Emphasis on automation and intelligent solutions
- Comprehensive product and service information
- Easy navigation and contact options
