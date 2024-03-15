import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../../components/navigation";

export const metadata: Metadata = {
  description: "The best movies on the best framwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
