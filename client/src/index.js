import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import EditEntry from "./pages/EditEntry.jsx";
import DeleteEntry from "./pages/DeleteEntry.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Login /> },
            { path: "dashboard/", element: <Dashboard /> },
            { path: "edit-entry/", element: <EditEntry /> },
            { path: "delete-entry", element: <DeleteEntry /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
