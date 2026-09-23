import type { Metadata } from "next";
import { Tinos, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Tinos sets every notice (thesis T4). Plus Jakarta Sans lives only inside
// the logo lock-up; 400 and 600 stay loaded for the /banner graphic.
const tinos = Tinos({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-tinos",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "QPlan, planning evidence for sites in England",
  description:
    "Site screening, feasibility appraisals, precedent evidence and a planning assistant that answers from pinned statute, for sites in England. Where the evidence is thin, QPlan says so.",
  openGraph: {
    title: "QPlan, planning evidence for sites in England",
    description:
      "Site screening, feasibility appraisals, precedent evidence and a planning assistant that answers from pinned statute, for sites in England.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${tinos.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
