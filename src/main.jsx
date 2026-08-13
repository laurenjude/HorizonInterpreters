import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Smooth scroll with ease-out timing for a subtle feel
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollToY(targetY, duration = 600) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start;
  function step(timestamp) {
    if (!start) start = timestamp;
    const time = Math.min(1, (timestamp - start) / duration);
    const eased = easeOutCubic(time);
    window.scrollTo(0, Math.round(startY + diff * eased));
    if (time < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener(
  "click",
  (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          const rect = el.getBoundingClientRect();
          smoothScrollToY(window.scrollY + rect.top - 0);
        }
      }
    }
  },
  true,
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
