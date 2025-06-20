# Development Guide

## Setup Instructions

1. Clone repository
2. Run `bun install`
3. Copy `.env.example` to `.env.local`
4. Run `bun dev` to start development server

## Coding Standards

- Use TypeScript for all components
- Follow ESLint and Prettier configurations
- Use Tailwind CSS for styling
- Write meaningful commit messages

## Component Structure

- Place reusable components in `src/components/ui/`
- Layout components go in `src/components/layout/`
- Page-specific components stay in respective app directories

## Git Workflow

- Main branch: `main`
- Feature branches: `feature/description`
- Commit format: `type(scope): description`