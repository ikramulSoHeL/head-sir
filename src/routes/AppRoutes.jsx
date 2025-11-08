import React from "react";
import { useRoutes } from "react-router-dom";

// components
import AppLayout from "../components/layouts/AppLayout.jsx";

// pages
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import AboutPage from "../pages/aboutPage/AboutPage.jsx";
import NewsPage from "../pages/newsPage/NewsPage.jsx";
import GalleryPage from "../pages/galleryPage/GalleryPage.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/news",
          element: <NewsPage />,
        },
        {
          path: "/gallery",
          element: <GalleryPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);
};

export default AppRoutes;
