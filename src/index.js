import React from 'react';
import ReactDOM from 'react-dom/client';

import "./assets/scss/themes.scss";

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Error from "./component/LandingPage/error";
import Login from './component/LandingPage/Auth/login';
import Signup from './component/LandingPage/Auth/signup';
import ResetPassword from './component/LandingPage/Auth/reset-password';
import Index from './component/LandingPage/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  
    <Routes>
      
        <Route path="/error" element={<Error />} />

      <Route path="/login" element={<Login />} />


      <Route path="/signup" element={<Signup />} />

      
      <Route path="/resetpassword" element={<ResetPassword />} />   
      <Route path="/" element={<Index />} />   
      <Route path="/home" element={<Index />} />   


      <Route path="*" element={<Error/>} />



    </Routes>
  </BrowserRouter>
);


reportWebVitals();
