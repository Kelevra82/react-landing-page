import { createRoot } from "react-dom/client";
import React from "react";
import { LandingPage } from "./Views/LandingPage";

const root = createRoot(window.bodyTag);
root.render(
  <main>
    <LandingPage />
  </main>
);
