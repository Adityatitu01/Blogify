import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react'
import Homepage from './routes/Homepage.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import PostListPage from './routes/PostListPage.jsx';
import Write from './routes/Write.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log("Clerk Publishable Key:", PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
 {
  path: '/',
  element: <MainLayout />,
  children:[
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/posts",
      element: <PostListPage />,
    },
    {
      path: "/:slug",
      element: <SinglePostPage />,
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
