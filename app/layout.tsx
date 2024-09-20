import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "legaplan teste",
    description: "legaplan teste para desenvolvedor front-end júnior",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
