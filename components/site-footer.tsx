"use client";

import React from "react";

export function SiteFooter({
  className = "w-full bg-gray-100 mt-auto",
}: {
  className?: string;
}) {
  return (
    <footer
      style={{
        background: "#d8d8d8",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textAlign: "center",
      }}
      className="site-footer"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#"
          style={{
            color: "#3a5f7d",
            fontSize: "13px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          ABOUT US
        </a>
        <a
          href="#"
          style={{
            color: "#3a5f7d",
            fontSize: "13px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          TERMS OF USE
        </a>
        <a
          href="#"
          style={{
            color: "#3a5f7d",
            fontSize: "13px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          PRIVACY POLICY
        </a>
      </div>

      <div
        style={{
          color: "#5a5a5a",
          fontSize: "12px",
          marginTop: "4px",
        }}
      >
        © Medcom 2017. All Rights Reserved.
      </div>

      <a
        href="#"
        style={{
          color: "#3a5f7d",
          fontSize: "12px",
          fontWeight: "600",
          textDecoration: "none",
          marginTop: "4px",
          transition: "color 0.2s",
        }}
      >
        SITE MAP
      </a>
    </footer>
  );
}
