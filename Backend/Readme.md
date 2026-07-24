# ThinkTogether Backend

> This document serves as a quick revision guide for the backend implementation of the ThinkTogether project. It explains the project architecture, folder structure, authentication flow, APIs, database models, and other important concepts that are useful during interviews.

---

# Project Overview

ThinkTogether is a collaborative idea-sharing platform where users can:

- Create an account using Email/Password
- Login using Google OAuth
- Share innovative ideas
- View ideas shared by others
- Manage their own ideas
- View user profiles
- Edit profile information

The backend is responsible for:

- User Authentication
- Authorization
- Session Management
- CRUD Operations
- Database Communication
- API Responses

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Passport.js
- Passport Local
- Passport Google OAuth 2.0
- Express Session
- Connect Mongo
- dotenv
- CORS

---

# Folder Structure

Backend
│
├── config
│   ├── db.js
│   └── googlePassport.js
│
├── controllers
├── middleware
├── models
│   ├── User.js
│   ├── Idea.js
│   └── Otp.js (optional)
│
├── routes
│   ├── user.js
│   ├── ideas.js
│   └── auth.js
│
├── utils
├── app.js
├── package.json
└── .env

---

# Backend Workflow

Frontend

↓

Axios Request

↓

Express Route

↓

Middleware

↓

Controller

↓

Mongoose Model

↓

MongoDB Atlas

↓

JSON Response

↓

Frontend

---

# Authentication

## Local Authentication

Uses:

- Passport Local Strategy
- Passport Local Mongoose

Flow:

Register
↓
Hash Password
↓
Store User
↓
Login
↓
Passport Authentication
↓
Session Created
↓
Cookie Sent
↓
Authenticated User

---

## Google Authentication

Uses:

- passport-google-oauth20

Flow:

Click Continue with Google
↓
Google Login
↓
Google Callback
↓
Find User
↓
If User Exists → Login
Else → Create New User
↓
Session Created
↓
Redirect Frontend

---

# Session Management

Package Used:

- express-session

Stores:

- User Session
- Login State

Session Cookie:

- connect.sid

Whenever the frontend makes a request:

```js
axios.get(url, {
  withCredentials: true,
});
⸻

Important Packages

* express
* mongoose
* passport
* passport-local
* passport-local-mongoose
* passport-google-oauth20
* express-session
* connect-mongo
* cors
* dotenv
* bcrypt

Important Concepts to Revise

* Express Routing
* Controllers
* Middleware
* Passport Authentication
* Sessions
* Cookies
* MongoDB Relationships
* Mongoose Populate
* CRUD Operations
* REST APIs
* Environment Variables
* CORS
* Axios withCredentials
* Authentication vs Authorization

Common Interview Questions

Why Passport.js?

Passport simplifies authentication and provides strategies for Local Login and Google OAuth.

Why Express Session?

To maintain user login state across multiple requests.

Why Mongoose?

Provides schema validation, model creation, and an easy way to interact with MongoDB.

Why Populate?

Populate replaces ObjectIds with actual referenced documents, making it easy to access user information associated with an idea.

Authentication vs Authorization

Authentication → Who are you?

Authorization → What are you allowed to do?

Why MongoDB?

* Flexible schema
* JSON-like documents
* Easy integration with Node.js

⸻

Future Improvements

* Profile Picture Upload
* Comments
* Likes
* Bookmarks
* Search & Filters
* Notifications
* Email Verification
* Password Reset
* Admin Dashboard
* Deployment