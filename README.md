# Museum Project (Frontend and Backend)

This repository contains both the frontend and backend of the Museum of Antiques project. The frontend is built using Angular, and the backend is built using Spring Boot. The system provides functionality for managing and viewing museum artifacts.

## Museum Frontend (Angular)

### Description
The frontend of the Museum of Antiques is built using Angular. It communicates with the Spring Boot backend to display and manage artifact data, providing features such as artifact listing, search, and detail view.

## Prerequisites
Ensure the following are installed on your system:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **Yarn** (optional)
- **Angular CLI** (v19.2.11 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd museum-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Or, if using Yarn:
   ```bash
   yarn install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   Or, if using Yarn:
   ```bash
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Build for Production

To build the application for production:

```bash
npm run build
```
Or, if using Yarn:
```bash
yarn build
```

The production-ready files will be available in the `dist/first-app` directory.

## Additional Scripts

- **Watch for changes and rebuild**:
  ```bash
  npm run watch
  ```
  Or:
  ```bash
  yarn watch
  ```

# Museum Backend (Spring Boot)

This is the backend of the Museum of Antiques project, built using Spring Boot. It provides RESTful APIs for managing and retrieving museum artifact data.

---

## Prerequisites

Ensure the following are installed on your system:

- **Java** (JDK 17 or higher)
- **Maven** (v3.8 or higher)
- **MySQL** (v8.0 or higher)

---

## Configuration

1. Update the database configuration in `museum-api/src/main/resources/application.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://<your-database-host>:3306/museum_db?useUnicode=true&characterEncoding=utf8&serverTimezone=UTC
       username: <your-database-username>
       password: <your-database-password>
   ```

2. Ensure the database `museum_db` exists in your MySQL instance.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd museum-api
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

---

## Running the Application

1. Start the backend server:
   ```bash
   mvn spring-boot:run
   ```

2. The server will run on:
   ```
   http://localhost:8080
   ```

---

## API Endpoints

- **GET** `/api/artifacts` - Retrieve a list of artifacts.
- **GET** `/api/artifacts/{id}` - Retrieve details of a specific artifact.
- **POST** `/api/artifacts` - Add a new artifact.
- **PUT** `/api/artifacts/{id}` - Update an existing artifact.
- **DELETE** `/api/artifacts/{id}` - Delete an artifact.

---