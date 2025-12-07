"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
   useEffect(() => {
      const hasNotified = sessionStorage.getItem("n8n_visitor_notified");

      if (!hasNotified) {
         const N8N_WEBHOOK_URL =
            "https://lazybee.app.n8n.cloud/webhook/portfolio-visit";

         fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               timestamp: new Date().toISOString(),
               page: window.location.pathname,
               screen: `${window.innerWidth}x${window.innerHeight}`,
               device: window.innerWidth < 768 ? "Mobile" : "Desktop",
               referrer: document.referrer || "Direct",
            }),
         }).catch((err) => console.error("Tracking error:", err));

         sessionStorage.setItem("n8n_visitor_notified", "true");
      }
   }, []);

   return null;
}
