import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "Minimal Next.js App Router scaffold",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
