# Web App

A small yet impressive web application showcasing skills in both frontend and backend development. The application features a user-friendly interface and seamless interaction with a backend server.

---

## Features

### Frontend Setup

- **Single-Page Application (SPA)**: Built with React for a smooth and seamless user experience.
- **Responsive Design**: Ensures compatibility across devices of all sizes.
- **Interactive Elements**:
  - A form for submitting data (Login - Sign up).
  - A dynamic store for displaying products.

### Backend Setup

- **RESTful API**: Built with Node.js and Express.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Routes**:
  - `GET /api/products`: Retrieve all products.
  - `POST /api/products`: Submit new products.
  - `PUT /api/products/:id`: Update existing products.
- **Security**: Input validation and error handling for robust performance.

---

## Setup Instructions

Follow these steps to set up and run the application locally.

### Prerequisites

- Node.js
- MongoDB
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/lamiaaselim/web-app
cd web-app
```

### Step 2: Set Up the Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend folder and add your MongoDB URI:

```plaintext
MONGO_URI=your_mongodb_uri
```

Start the backend server:

```bash
npm start
```

The backend will run on [http://localhost:8082/api](http://localhost:8082/api).

### Step 3: Set Up the Frontend

Navigate to the frontend folder:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

### Backend

Create a `.env` file in the `backend` folder and include the following variables:

```plaintext
# Set the environment to development or production
NODE_ENV="development"

# Database configuration
MONGO_URI=your_mongodb_connection_string

# Server configuration
PORT=8082

# JWT configuration
JWT_SECRET='jwtSecret'
```

### Frontend

Create a `.env` file in the `backend` folder and include the following variables:

```plaintext
API_KEY=your_api_key
API_SECRET=your_api_secret
REACT_APP_PROUCTS_API="http://localhost:8082/api/products"
REACT_APP_IMAGES_API="http://localhost:8082/api/"
REACT_APP_USER_API="http://localhost:8082/api/user"
REACT_APP_API_KEY="secret-key"
REACT_APP_ENV="development"
```

## Troubleshooting

### Backend not connecting to MongoDB

- Ensure your MongoDB instance is running.
- Double-check the `MONGO_URI` in the `.env` file.

### Frontend not connecting to Backend

- Ensure the backend server is running.
- Check for CORS issues in the browser console.

---

## License

- This project is open-source and available under the MIT License.
