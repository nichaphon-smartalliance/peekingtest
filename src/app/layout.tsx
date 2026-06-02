import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextAuthProvider } from "@/context/auth/NextAuthProvider";
import { QueryProvider } from "@/context/query/QueryProvider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peeking",
  description: "API Linkage 2 Monitor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={geist.className}>
        <AntdRegistry>
          <NextAuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </NextAuthProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
