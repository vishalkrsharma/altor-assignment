# altor-assignment

This project fetches data from the Altor API and renders it in a dashboard which consists of tables and charts.

## Table of Contents

- [altor-assignment](#altor-assignment)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [APIs](#apis)
  - [Installation](#installation)

## Technologies Used

- **Next.js:** A React framework for building efficient and scalable web applications.
- **MongoDB:** MongoDB is a source-available, cross-platform, document-oriented database program.
- **Prisma:** A modern database toolkit that simplifies database access and management with type-safe queries.
- **Shadcn UI:** A custom UI library designed for a clean and intuitive user interface.
- **pnpm:** A fast, disk space-efficient package manager.

## APIs

This section outlines the APIs available for integration with the Ecommerce Admin panel. Ensure you have the necessary API keys and endpoints configured in your environment.

- **Data API:** `/api/data`

  - `POST` - Get Altor data from MongDB Database.

## Installation

To get started with Altor Assignment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vishalkrsharma/altor-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd altor-assignment
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Set up environment variables: Create a `.env` file based on the provided `.env.example`. You can use the example file as a template for configuring your environment variables.

5. Run the application:

   ```bash
   pnpm dev
   ```

The development server should now be accessible at http://localhost:3000.
