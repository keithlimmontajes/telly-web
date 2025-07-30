# telly-web
## Getting Started with Telly Plus App

Welcome to the Telly Plus App! This guide will help you set up, build, and run the application on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)

### Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/telly-plus-app.git
```

Navigate into the cloned directory:

```bash
cd telly-plus-app
```

### Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### Running the Application

For development, you can run the application using:

```bash
npm run dev
```

This will start the development server using Vite and you can view the app at `http://localhost:3000`.

### Building for Production

To build the application for production, use:

```bash
npm run build
```

This command will compile the app into static files for production.

### Previewing the Production Build

You can preview the production build locally with:

```bash
npm run preview
```

### Linting

To ensure code quality, you can run the linter with:

```bash
npm run lint
```

### Additional Information

- **Firebase**: Ensure your Firebase configuration is correctly set up in `src/config/firebase.ts`.
- **Tailwind CSS**: The project uses Tailwind CSS for styling. Styles are defined in `src/styles/main.scss`.
- **Redux**: The app uses Redux for state management, configured in `src/stores/store.ts`.

Feel free to explore and contribute to the project. If you encounter any issues, please open a new issue in the repository.
