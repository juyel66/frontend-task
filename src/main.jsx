import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App';
import RegisterForm from "./Authentation/RegisterForm";
import EmailVerificationPage from "./Authentation/EmailVerificationPage";
import Login from './Authentation/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ForgotPassword from "./Authentation/ForgotPassword";
import EmailVerification from "./Authentation/EmailVerification";
import AccountSuccessPage from "./Authentation/AccountSuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

       {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/login",
        element: <Login />,
      },
          {
        path: "/register",
        element:<RegisterForm></RegisterForm>,
      },
            {
        path: "/password",
       element:<ForgotPassword></ForgotPassword>
      },
              {
        path: "/emailverification",
       element:<EmailVerification></EmailVerification>
      },
       {
        path: "/emailverificationpage",
       element:<EmailVerificationPage></EmailVerificationPage>
      },
       {
        path: "/success",
       element:<AccountSuccessPage></AccountSuccessPage>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
