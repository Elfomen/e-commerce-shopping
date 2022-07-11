import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Context/user-context';
import { CategoryProvider } from './Context/category-context'
import { CardDropdownProvider } from './Context/card-dropdown-contex';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CardDropdownProvider>
        <UserProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </UserProvider>
      </CardDropdownProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
