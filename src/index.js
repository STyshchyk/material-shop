import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./storage/store"
import { createHashRouter, RouterProvider} from "react-router-dom";
import Product from "./Pages/Product";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,

    },
    {
        path: "/product/:id",
        element: <Product/>
    }
]);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} base={"/"}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
