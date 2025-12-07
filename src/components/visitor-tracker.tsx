"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
   useEffect(() => {
      const hasNotified = sessionStorage.getItem("n8n_visitor_notified");

      if (!hasNotified) {
         // 2. Replace with your ACTUAL n8n Production URL
         const N8N_WEBHOOK_URL =
            "https://lazybee.app.n8n.cloud/webhook/portfolio-visit";

         fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               timestamp: new Date().toISOString(),
               page: "Home",
               screen: `${window.innerWidth}x${window.innerHeight}`,
            }),
         }).catch((err) => console.error("Tracking error:", err));

         // 3. Mark as notified so we don't spam on refresh
         sessionStorage.setItem("n8n_visitor_notified", "true");
      }
   }, []);

   return null;
}
