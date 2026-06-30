import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MedcomHeader } from "@/components/medcom-header";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://medcom-benefits.netlify.app";
const SITE_DOMAIN = "medcom-benefits.netlify.app";
const SITE_BRAND = "Medcom";

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_LOGIN_URL),
  title: {
    default: "Medcom - Client Login",
    template: "%s | Medcom",
  },
  description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`,
  keywords: [
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
    "WealthCare Portal",
    "WealthCare benefits portal",
    "WealthCare participant portal",
    "WealthCare employer portal",
    "WealthCare secure login",
    "benefits login",
    "employee benefits login",
    "employee benefits portal",
    "secure benefits login",
    "participant portal login",
    "employer portal login",
    "reimbursement account login",
    "account access login",
    "online benefits account login",
    "secure portal access",
    "health benefits",
    "health benefits login",
    "health savings account management",
    "HSA login",
    "FSA login",
    "dependent care FSA login",
    "dependent care reimbursement account",
    "healthcare reimbursement account",
    "medical expense reimbursement portal",
    "reimbursement account",
    "COBRA login",
    "COBRA administration services",
    "employee benefits administration",
    "benefits administration services",
    "online employee benefits platform",
    "employer benefits management",
    "third-party benefits administrator",
    "secure employee benefits portal",
    "benefits management platform",
    "benefits portal password reset",
    "participant portal authentication help",
    "handshake authentication login",
    "secure portal authentication",
    "employee portal verification",
    "secure reimbursement account access",
    "participant portal security",
    "account recovery portal login",
  ],
  authors: [{ name: SITE_BRAND }],
  creator: SITE_BRAND,
  publisher: SITE_BRAND,
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
    title: "Medcom - Client Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} - Employee Benefits Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medcom - Client Login",
    description: `${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`,
    images: ["/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

// Schema.org Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  logo: `${CANONICAL_LOGIN_URL}/Medcom.png`,
  description:
    "Medcom provides secure access to health, dependent care, and reimbursement benefits through the employee benefits portal.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "Medcom sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your Medcom profile.",
  publisher: {
    "@type": "Organization",
    name: SITE_BRAND,
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${CANONICAL_LOGIN_URL}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I login to my Medcom account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the Medcom login page and enter your UserId and Password to access your employee benefits portal.",
      },
    },
    {
      "@type": "Question",
      name: "What can I do through the Medcom portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage your health benefits, dependent care accounts, FSA, HSA, reimbursement accounts, and view your benefits information through the Medcom portal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my Medcom password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click on the forgot password link on the login page and follow the required verification steps to reset your password.",
      },
    },
    {
      "@type": "Question",
      name: "What is Medcom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medcom is a leading provider of employee benefits administration services, offering secure access to manage your flexible spending accounts, health savings accounts, and reimbursement benefits.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL_LOGIN_URL,
    },
  ],
};

const jsonLd = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="description" content={`${SITE_BRAND} – Secure client login for the employee benefits portal. Access your account, manage your health, dependent care, and reimbursement benefits.`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#254650" />
        <link rel="canonical" href={CANONICAL_LOGIN_URL} />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {jsonLd.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <MedcomHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}