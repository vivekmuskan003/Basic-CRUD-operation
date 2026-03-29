# Basic CRUD Operations

This project is a simple demonstration of CRUD (Create, Read, Update, Delete) operations using example of notes having schema of title and description.

## Installation

To get started with this project, follow these steps:

1.  Install the necessary packages using npm:
    ```bash
    npm install
    ```

## Configuration

1.  This project requires a `.env` file for environment variables. You can create one by copying the example file:

    ```bash
    cp .env.example .env
    ```

2.  Once you have the `.env` file, you need to fill in the `MONGO_URI` with your MongoDB connection string.

    ```dotenv
    # .env
    MONGO_URI=mongodb://localhost:27017/yourdb
    ```