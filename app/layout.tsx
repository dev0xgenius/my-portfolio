import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";

export const metadata: Metadata = {
    title: "Portfolio Site",
    description: "Built by some geniuses at GenLabs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <div className="container">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
