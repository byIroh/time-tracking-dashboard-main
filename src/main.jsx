import React from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";

import App from "./App";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(<App />);
