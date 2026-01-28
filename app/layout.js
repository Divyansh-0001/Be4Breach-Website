import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://beforebreach.example"),
  title: {
    default: "Before Breach",
    template: "%s | Before Breach",
  },
  description:
    "AI-first cybersecurity services delivering trusted, enterprise-grade defense.",
  applicationName: "Before Breach",
  keywords: [
    "cybersecurity",
    "AI security",
    "enterprise security",
    "threat intelligence",
    "incident response",
  ],
  openGraph: {
    title: "Before Breach",
    description:
      "Enterprise-grade cybersecurity services with AI-driven insights.",
    url: "https://beforebreach.example",
    siteName: "Before Breach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before Breach",
    description:
      "Enterprise-grade cybersecurity services with AI-driven insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-black text-brand-white font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.25em] focus:text-brand-black"
          >
            Skip to main content
          </a>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
