"use client";

import { useEffect } from "react";

interface GoogleConversionTrackerProps {
  conversionId: string;
  value?: number;
  currency?: string;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function GoogleConversionTracker({
  conversionId,
  value = 1.0,
  currency = "MXN",
}: GoogleConversionTrackerProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: conversionId,
        value,
        currency,
      });
    }
  }, [conversionId, value, currency]);

  return null;
}
