# Car Dealer App

Car Dealer App is a modern web application built with Next.js and TypeScript. It allows users to filter vehicles by make and model year and view the corresponding models on a separate results page. The application is styled with Tailwind CSS and leverages React Select for custom select components, dynamic imports with Suspense, and loading skeletons for a smooth user experience.

## Features

- **Filter Page**
  - Fetches vehicle makes from the VPIC API.
  - Provides two dropdowns for selecting a vehicle make and a model year (from 2015 to the current year).
  - The "Next" button becomes active only after both selections are made.
- **Results Page**
  - Retrieves vehicle models based on the selected make and model year.
  - Displays a list of vehicle models with proper error handling.
  - Uses dynamic imports and Suspense with skeleton components to indicate loading states.
- **Environment Configuration**
  - The base API URL is stored in an environment variable (`NEXT_PUBLIC_VPIC_API_URL`) so that non-sensitive configuration can be tracked in Git.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps

1. **Clone the repository:**

````bash
git clone https://github.com/yourusername/car-dealer-app.git
cd car-dealer-app
```

**Install the dependencies:**

For npm:
```bash
npm install
````

Or for yarn:

```bash
yarn install
```

Configure Environment Variables:

Run the development server:

For npm:

```bash
npm run dev
```

Or for yarn:

```bash
yarn dev
```

Open your browser and navigate to http://localhost:3000 to view the application.
