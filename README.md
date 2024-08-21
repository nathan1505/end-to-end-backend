# Backend Application

This is the end-to-end web application backend. Follow the instructions below to set up and run the application.

## Prerequisites

Before you begin, ensure you have installed the following:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (version 10.x or higher)

## Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nathan1505/end-to-end-backend.git
   cd your-repository-directory
   ```

2. **Install Dependencies**
Navigate to the project directory (if you haven't already) and run:
   ```bash
   npm install
   ```

3. **Database Configuration**
Ensure that PostgreSQL is running on your local machine or a server you have access to. You will need to create a database and note the credentials.

4. **Set Environment Variables**
Create a .env file in the root of your project directory. Populate it with the following variables according to your database setup:
   ```
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   DB_HOST=your_database_host
   ```
Replace `your_database_user`, `your_database_password`, `your_database_name`, and `your_database_host` with your actual database configurations.

5. **Building the Application**
To compile the application (if it contains TypeScript or other build steps), run:
   ```bash
   npm run build
   ```

6. **Starting the Application**
To start the application, run:

   ```bash
   npm start
   ```

This should start the server, and it should be able to connect to your PostgreSQL database using the credentials provided in your .env file.

7. **Development**
For development purposes, you can start the application in development mode (if set up) by running:

   ```bash
   npm run dev
   ```
   
This may use tools like nodemon to automatically restart the server on file changes.
