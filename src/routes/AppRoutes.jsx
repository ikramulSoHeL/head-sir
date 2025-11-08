import React from "react";
import { useRoutes, useLocation } from "react-router-dom";

// components
import AppLayout from "../components/layouts/AppLayout.jsx";

// pages
import LandingPage from "../pages/landingPage/LandingPage.jsx";
import AboutPage from "../pages/aboutPage/AboutPage.jsx";
import NewsPage from "../pages/newsPage/NewsPage.jsx";
import GalleryPage from "../pages/galleryPage/GalleryPage.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      {useRoutes([
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
          element: <ErrorPage />,
        },
      ])}
    </>
  );
};

export default AppRoutes;
