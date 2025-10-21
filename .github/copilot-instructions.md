# AI Agent Instructions for Grid Project

## Project Overview
This is an Angular 17+ demo project that showcases CSS Custom Properties (CSS Variables) integration with Angular for dynamic UI updates. The app displays a configurable grid of randomly generated playing cards.

## Key Architecture Components

### State Management
- Uses RxJS for state management via `StateService` (`src/app/services/state.service.ts`)
- Number of cards stored in RxJS BehaviorSubject
- Number of columns managed through CSS Custom Properties

### Main Components
1. `MainComponent` (`src/app/components/main/main.component.ts`)
   - Core component managing grid layout and card generation
   - Handles user input for number of cards/columns
   - Demonstrates CSS Custom Properties integration via `--num-columns`

2. `CardComponent` (`src/app/components/card/card.component.ts`)
   - Displays individual playing card
   - Receives card data through inputs

## Development Workflows

### Key Commands
```bash
ng serve        # Start development server (http://localhost:4200)
ng test        # Run Cypress tests
ng build       # Build production bundle
```

### Testing
- Project uses Cypress for both unit and e2e tests
- Test files located in `cypress/` directory
- Run tests with `ng test` command

## Project Patterns

### CSS Architecture
- Uses CSS Grid and Flex for layout
- CSS Custom Properties control dynamic styling
- Key example: Grid columns controlled via `--num-columns` property

### Component Communication
- State changes propagated through RxJS observables
- Example: `numCards$` observable in `StateService`

### Code Organization
- Standalone components (no NgModules)
- Services in `src/app/services/`
- Models in `src/app/models/`
- Components in `src/app/components/`

## Integration Points
- Angular v17+ features
- RxJS for state management
- CSS Custom Properties for dynamic styling
- Cypress for testing

Remember to maintain this patterns when making changes or adding new features to the project.