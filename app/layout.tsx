import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/section/header";

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
        <html lang="en" data-theme="cupcake">
            <body className={`antialiased`}>
                <div className="flex flex-col gap-12">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
