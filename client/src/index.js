import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage.jsx";
// import Home from "./pages/Home.jsx";
// import PostDetail from "./pages/PostDetail.jsx";
// import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
// import UserProfile from "./pages/UserProfile.jsx";
// import Authors from "./pages/Authors.jsx";
// import CreatePost from "./pages/CreatePost.jsx";
// import EditPost from "./pages/EditPost.jsx";
// import DeletePost from "./pages/DeletePost.jsx";
// import CategoryPosts from "./pages/CategoryPosts.jsx";
// import AuthorPosts from "./pages/AuthorPosts.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Login /> },
            // { path: "posts/:id", element: <PostDetail /> },
            // { path: "register", element: <Register /> },
            // { path: "login", element: <Login /> },
            // { path: "profile/:id", element: <UserProfile /> },
            // { path: "authors", element: <Authors /> },
            // { path: "create", element: <CreatePost /> },
            // { path: "posts/categories/:category", element: <CategoryPosts /> },
            // { path: "posts/users/:id", element: <AuthorPosts /> },
            { path: "dashboard/", element: <Dashboard /> },
            // { path: "posts/:id/edit", element: <EditPost /> },
            // { path: "posts/:id/delete", element: <DeletePost /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
