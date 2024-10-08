import type { Metadata } from "next";
import "@/styles/main.css";
import { Sidebar } from "@/components/molecules/Sidebar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Orbiz",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          aria-disabled="true"
          aria-atomic="true"
        ></div>
        <Sidebar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
