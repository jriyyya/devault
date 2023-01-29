import "./globals.css";
import { Signika_Negative } from "@next/font/google";

const signika_negative = Signika_Negative({
  subsets: ["latin"],
  variable: "--font-Signika_Negative",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${signika_negative.className}`}>{children}</body>
    </html>
  );
}
