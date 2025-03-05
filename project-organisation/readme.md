# Routing and cleanup

This project is a Node.js Express API server designed for refactor the code base so it adheres to the directory structure.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

`. Install dependencies:

```bash
npm install
```

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

## API Documentation

The API endpoints are documented.Here’s how to access it:

## API Endpoints

The following endpoints are available:


## Configuration

Environment-specific configurations are set in `.env` file. This file is not available.

Create a `.env` file with a `PG_URI` variable with a valid PostgreSQL connection string

## Backend

- Set up a Node.js server using the built-in http module in package.json.
  `"type": "module",`

- The pg package connect your PostgreSQL database.
  
  

## Dependencies

- [Express.js](https://expressjs.com/) is a fast, minimalist web framework for Node.js that simplifies building APIs and web applications.
- [Dotenv](https://www.npmjs.com/package/dotenv) is a Node.js package that loads environment variables from a .env file into process.env for secure configuration management.
- [pg](https://www.npmjs.com/package/pg) is a PostgreSQL client for Node.js that enables seamless interaction with PostgreSQL databases using JavaScript.
- [sequelize](https://sequelize.org/) Sequelize is a powerful Node.js ORM (Object-Relational Mapping) for SQL databases such as PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It provides an easy-to-use API for defining models, managing database interactions, and handling complex queries using JavaScript or TypeScript. With built-in support for migrations, associations, transactions, and hooks, Sequelize simplifies database management while maintaining flexibility and performance
