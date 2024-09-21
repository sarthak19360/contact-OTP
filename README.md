# OTP Sender Application Documentation

## Product Overview

The OTP Sender is a web application designed to send One-Time Passwords (OTPs) via SMS to contacts. It provides a user-friendly interface for managing contacts, sending OTPs, and viewing message history.

## Key Features

- Contact Management
- OTP Generation and Sending
- Message History Tracking
- Responsive Web Interface

## Technology Stack

### Frontend

- React: A JavaScript library for building user interfaces
- React Router: For handling routing in the application
- Tailwind CSS: A utility-first CSS framework for rapid UI development
- Lucide React: For including icons in the UI

### Backend

- Node.js: JavaScript runtime for the server
- Express: Web application framework for Node.js
- Prisma: Next-generation ORM for Node.js and TypeScript
- Twilio: For sending SMS messages

## Development Tools

- TypeScript: Superset of JavaScript that adds static types
- dotenv: For managing environment variables

## Architecture and Design Decisions

- Separation of Concerns: The application is divided into frontend and backend, allowing for independent development and scaling.
- RESTful API: The backend exposes RESTful endpoints for sending SMS and fetching message history.
- Component-Based Architecture: The frontend is built using reusable React components, promoting code reusability and maintainability.
- Responsive Design: Tailwind CSS is used to create a responsive layout that works well on various device sizes.
- Database Abstraction: Prisma ORM is used for database operations, providing type safety and easy database schema management.
- Environment Configuration: Sensitive information like API keys are stored in environment variables for security.

## Good Practices Implemented

- Error Handling: Both frontend and backend implement error handling to provide a smooth user experience and easier debugging.
- Code Organization: The codebase is organized into logical components and modules for better maintainability.
- Type Safety: TypeScript is used throughout the project to catch type-related errors early in the development process.
- Asynchronous Operations: Promises and async/await are used for handling asynchronous operations, improving code readability.
- Static File Serving: The backend serves static files from the build directory, allowing for easy deployment of the full-stack application.

## API Endpoints

- POST /send-sms: Sends an SMS with the provided OTP to the specified contact.
- GET /get-history: Retrieves the message history.

## Future Improvements

- Implement user authentication and authorization
- Add pagination for message history
- Implement rate limiting for SMS sending
- Add unit and integration tests
- Set up CI/CD pipeline for automated testing and deployment

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a ```.env``` file
4. Run the development server:
   ```bash
   npm run dev
   ```
