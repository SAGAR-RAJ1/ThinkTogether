import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer ,Bounce, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="light"
transition={Flip}
/>
    </BrowserRouter>

)
