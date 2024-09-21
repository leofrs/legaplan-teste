import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
    variable: "--font-inter-tight",
    weight: "500",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "legaplan Task",
    description: "legaplan - teste para desenvolvedor front-end júnior",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${interTight.variable}`}>{children}</body>
        </html>
    );
}
