"use client";

import React, { useState, useEffect } from "react";

export function MedcomHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        padding: isMobile ? "12px 16px" : "16px 24px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: isMobile ? "flex-start" : "space-between",
        gap: isMobile ? 12 : 0,
        minHeight: "auto",
      }}
    >
      {/* Logo section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 12 : 20,
          width: isMobile ? "100%" : "auto",
        }}
      >
        <img
          src="/Medcom.png"
          alt="Medcom"
          style={{
            height: isMobile ? 40 : 48,
            width: "auto",
            display: "block",
            flexShrink: 0,
          }}
        />
        {/* Contact info - hidden on mobile, shown on desktop */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              fontSize: 14,
              color: "#374151",
              borderLeft: "1px solid #e5e7eb",
              paddingLeft: 20,
            }}
          >
            <div style={{ fontWeight: 500 }}>📞 (800) 523-7542, option 1</div>
            <div>📧 MedcomReceipts@medcombenefit.com</div>
          </div>
        )}
      </div>

      {/* Contact info for mobile - shown below logo on small screens */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            fontSize: 12,
            color: "#374151",
            width: "100%",
          }}
        >
          <div style={{ fontWeight: 500 }}>📞 (800) 523-7542, option 1</div>
          <div>📧 MedcomReceipts@medcombenefit.com</div>
        </div>
      )}

      {/* Login section */}
      <div
        style={{
          fontSize: isMobile ? 14 : 16,
          fontWeight: 600,
          color: "#1f2937",
          marginLeft: isMobile ? "auto" : 0,
        }}
      >
        Login
      </div>
    </header>
  );
}
