import "./globals.css";
import { Karla } from "@next/font/google";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-Karla",
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
      <body className={`${karla.className}`}>{children}</body>
    </html>
  );
}
