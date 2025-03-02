# Quiz App - Seneca Assessment

## Project Overview
This project is an interactive quiz application that allows users to answer questions by toggling between different answer options. The application features dynamic backgrounds that change based on the user's performance, automatic progression to the next quiz when all answers are correct, and a responsive design that works across different screen sizes.

## Features

### Quiz Functionality
- Toggle-based selection UI for choosing between answer options
- Real-time feedback on answer correctness
- Animated transitions between questions
- Dynamic background colours that change based on the percentage of correct answers:
  - Default: Sunset gradient
  - ≥50% correct: Amber gradient
  - ≥75% correct: Yellow gradient
  - 100% correct: Seagreen gradient

### User Experience
- Automatic progression to the next quiz when all answers are correct
- Responsive design that adapts to different screen sizes
- Visual feedback through colour changes and animations
- Clean, centered UI with intuitive controls

### Technical Implementation
- Simulated API calls to fetch quiz data
- Loading states with visual indicators
- State management for tracking user selections and quiz progress
- Conditional styling based on user interactions

## Technologies Used
- React with TypeScript
- Tailwind CSS for styling
- Classnames library for conditional class application

## Known Limitations
- The current implementation of selection button styling is for demo purposes to match the assessment's specified design
- Not an ideal long-term solution—current implementation applies special button styles based on content rather than a scalable layout structure

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

## Project Structure
```
src/
├── components/
│   ├── loading-spinner.tsx
│   └── quiz-card.tsx
├── helper/
│   ├── get-background-color.tsx
│   ├── get-button-rounded-style.tsx
│   ├── get-initial-selections.tsx
│   └── index.ts
├── lib/
│   ├── data.ts
│   └── index.ts
└── App.tsx
```

## Future Improvements
- Implement a more maintainable approach to button styling
- Add more comprehensive progress tracking
- Implement a scoring system
- Add support for different question types
- Improve accessibility features
