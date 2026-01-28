import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://be4breach.example"),
  title: {
    default: "Be4Breach",
    template: "%s | Be4Breach",
  },
  description:
    "AI-powered cybersecurity solutions for proactive enterprise defense.",
  applicationName: "Be4Breach",
  keywords: [
    "cybersecurity",
    "AI security",
    "enterprise security",
    "threat intelligence",
    "incident response",
  ],
  openGraph: {
    title: "Be4Breach",
    description:
      "AI-powered cybersecurity solutions with proactive threat intelligence.",
    url: "https://be4breach.example",
    siteName: "Be4Breach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be4Breach",
    description:
      "AI-powered cybersecurity solutions with proactive threat intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-dark text-brand-white font-sans antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[140px]" />
            <div className="absolute bottom-[-240px] right-[-140px] h-[420px] w-[420px] rounded-full bg-brand-red/10 blur-[120px]" />
          </div>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.25em] focus:text-brand-dark"
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
