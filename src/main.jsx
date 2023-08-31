// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import Login from './Login.jsx'
// // import Btvn from './btvn.jsx'
// import './assets/css/App.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <Login /> */}
//     {/* <Btvn/> */}
//     <App/>
//   </React.StrictMode>
// )
import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
// import Root from "./routes/root.jsx";
// import ErrorPage from "./error-page";
// import Contact from "./routes/contact";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./config/axios"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider/> */}
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);
