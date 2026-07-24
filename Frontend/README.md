# ThinkTogether Frontend

> This document serves as a quick revision guide for the frontend implementation of the ThinkTogether project. It explains the project structure, routing, components, API communication, authentication flow, and important React concepts that are useful during interviews.

---

# Project Overview

The frontend of ThinkTogether is built using **React.js** and **Vite**.

It provides a responsive interface where users can:

- Register and Login
- Continue with Google
- View all ideas
- Create new ideas
- Edit/Delete their own ideas
- View detailed idea information
- Manage their profile
- Logout securely

The frontend communicates with the Express backend using Axios.

---

# Tech Stack

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- CSS
- JavaScript (ES6+)

---

# Folder Structure

```text
Frontend
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   │    ├── user
│   │    ├── ideas
│   │    └── common
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# Frontend Workflow

```text
User Action

↓

React Component

↓

Axios Request

↓

Express Backend

↓

MongoDB

↓

JSON Response

↓

React State Updated

↓

UI Re-rendered
```

---

# Routing

Routes are managed using

- React Router DOM

Example Routes

```text
/

/login

/signup

/profile

/profile/edit

/create

/myideas

/ideas/:id
```

---

# Components

Main components include

- Navbar
- Home
- Login
- Signup
- Explore
- Create Idea
- Idea Details
- My Ideas
- Profile
- Edit Profile

Each component is responsible for rendering a specific part of the application.

---

# React Concepts Used

- Functional Components
- JSX
- Props
- State Management
- Hooks
- Conditional Rendering
- Event Handling
- Lists using map()
- Forms
- Component Reusability

---

# Hooks Used

## useState

Used to store component data.

Example

```jsx
const [ideas, setIdeas] = useState([]);
```

---

## useEffect

Used for

- Fetching data
- Calling APIs
- Running code after rendering

Example

```jsx
useEffect(() => {
    fetchIdeas();
}, []);
```

---

## useNavigate

Used for page navigation.

Example

```jsx
const navigate = useNavigate();

navigate("/profile");
```

---

# Axios

Axios is used for API communication.

GET

```javascript
axios.get(url);
```

POST

```javascript
axios.post(url, data);
```

PUT

```javascript
axios.put(url, data);
```

DELETE

```javascript
axios.delete(url);
```

---

# Authentication

Local Login

```text
Login Form

↓

Axios POST

↓

Backend Authentication

↓

Session Created

↓

Redirect Home
```

Google Login

```text
Click Continue with Google

↓

Google Authentication

↓

Backend Callback

↓

Session Created

↓

Redirect Home
```

---

# Protected Requests

Whenever authentication is required

```javascript
axios.get(url,{
    withCredentials:true
});
```

This sends the session cookie.

---

# State Management

State stores

- User
- Ideas
- Profile Data
- Form Inputs

Updating state automatically updates the UI.

---

# Forms

Forms are controlled using

- useState
- onChange
- onSubmit

Example

```jsx
<input
    name="title"
    value={formData.title}
    onChange={handleChange}
/>
```

---

# CRUD Operations

Create

- New Idea

Read

- Fetch Ideas
- Fetch Profile

Update

- Edit Idea
- Edit Profile

Delete

- Delete Idea

---

# API Communication

Frontend communicates with backend using

```text
Axios

↓

Express API

↓

MongoDB

↓

JSON Response
```

---

# Bootstrap Components Used

- Navbar
- Card
- Buttons
- Forms
- Grid System
- Containers
- Alerts
- Badges

---

# Error Handling

API calls use

```javascript
try{
    ...
}
catch(err){
    console.log(err);
}
```

Errors are handled gracefully without crashing the application.

---

# Running the Frontend

Install dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Default URL

```text
http://localhost:5173
```

---

# Important Packages

- react
- react-dom
- react-router-dom
- axios
- bootstrap
- vite

---

# Important Concepts to Revise

- React Components
- JSX
- Props
- useState
- useEffect
- useNavigate
- Axios
- React Router
- Conditional Rendering
- Forms
- CRUD Operations
- Authentication Flow
- Bootstrap Layout

---

# Common Interview Questions

## Why React?

React allows building reusable UI components with efficient rendering using the Virtual DOM.

---

## Why Vite?

Vite provides extremely fast development builds and Hot Module Replacement.

---

## Why Axios?

Axios simplifies HTTP requests and response handling.

---

## Why useEffect?

To perform side effects like API calls after rendering.

---

## Why useState?

To manage dynamic data inside a component.

---

## Why React Router?

To enable navigation between pages without reloading the application.

---

# Learning Outcomes

Through this project I learned

- Building modern React applications
- Component-based architecture
- React Hooks
- Routing with React Router
- REST API Integration
- Authentication Flow
- CRUD Operations
- Axios Communication
- Bootstrap UI Development
- Connecting React with an Express backend

---

# Future Improvements

- Dark Mode
- Search & Filtering
- Infinite Scrolling
- Comments
- Likes
- Bookmarks
- Notifications
- Responsive Enhancements
- Profile Picture Upload
- Better Error Pages

---

# Author

**Sagar Raj**

**Project:** ThinkTogether Frontend
**Tech Stack:** React.js • Vite • Axios • Bootstrap • React Router DOM