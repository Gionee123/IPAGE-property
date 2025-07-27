import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { PropertyProvider } from "./context/PropertyContext";

// Define routes using the data router API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <PropertyProvider>
    <RouterProvider router={router} />
  </PropertyProvider>
);
