# User Authentication and Management API

This project is a **Node.js + Express + MongoDB** application that provides user authentication and management functionalities. It includes user registration, login, and searching users via username or email.

## 📌 Features

- ✅ User Registration
- ✅ User Login with JWT Authentication
- ✅ User Search by Username or Email
- ✅ Secure Password Hashing using Bcrypt
- ✅ Environment Variables for Sensitive Data

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** BcryptJs for password hashing

---

## 🚀 Installation and Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server

```bash
npm start
```

The server will run on [**http://localhost:8000**](http://localhost:8000).

---

## 📌 API Endpoints

### 🔹 Register User

- **Endpoint:** `POST /api/users/register`
- **Description:** Registers a new user.
- **Request Body:**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "fullName": "John Doe",
  "gender": "Male",
  "dateOfBirth": "1995-06-15",
  "country": "USA"
}
```

- **Response:**

```json
{
  "message": "User registered successfully"
}
```

📷 **Screenshot:** *(![user login](https://github.com/user-attachments/assets/dc251cc0-8ece-45ef-b08d-61860b53fd46)
)*

---

### 🔹 Login User

- **Endpoint:** `POST /api/users/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

- **Response:**

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

📷 **Screenshot:** *(![user login](https://github.com/user-attachments/assets/aef94837-0ef0-4129-bd83-76080c913c71)
)*

---

### 🔹 Search User

- **Endpoint:** `GET /api/users/search/:query`
- **Description:** Searches for a user by username or email.
- **Request Params:**
  - `query` (string) → Username or email to search for.
- **Response:**

```json
{
  "_id": "user_id",
  "username": "john_doe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "gender": "Male",
  "dateOfBirth": "1995-06-15",
  "country": "USA"
}
```

- **If User Not Found:**

```json
{
  "message": "User not found"
}
```

📷 **Screenshot:** *(![user search](https://github.com/user-attachments/assets/9ce9f69d-65a9-4330-8664-51ed6c4b17fa)
)*

---

## 📂 Project Structure

```
project-root/
│── models/
│   └── user.model.js
│── routes/
│   └── user.routes.js
│── controllers/
│   └── user.controller.js
│── middlewares/
    └── authMiddleware.js
│   └── errorMiddleware.js
│── config/
│   └── db.js
│── utils/
    └── validate.js
│── .env
│── .gitignore
│── README.md
│── index.js
```

---

## 📜 License

This project is open-source and available under the MIT License.

