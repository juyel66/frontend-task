// main.jsx
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

// Success এর জন্য আলাদা layout (Navbar/Footer ছাড়া)
const SuccessLayout = () => <AccountSuccessPage />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/password",
        element: <ForgotPassword />,
      },
      {
        path: "/emailverification",
        element: <EmailVerification />,
      },
      {
        path: "/emailverificationpage",
        element: <EmailVerificationPage />,
      },
    ],
  },
  // Success route Root এর বাইরে থাকবে
  {
    path: "/success",
    element: <SuccessLayout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
