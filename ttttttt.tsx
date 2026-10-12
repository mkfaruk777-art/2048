import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electric & AC Service | Dhaka",
  description:
    "AC servicing, installation, repair and electrical services in Dhaka. Book by phone or WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
