import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./styles/global.scss";

// React Router
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppROutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
