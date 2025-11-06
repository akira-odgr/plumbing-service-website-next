import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const rubik = localFont({
    src: [
        {
            path: "./font/rubik-v31-latin/rubik-v31-latin-600.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./font/rubik-v31-latin/rubik-v31-latin-700.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-rubik",
});

const dmSans = localFont({
    src: "./font/dm-sans-v17-latin-regular.woff2",
    weight: "400",
    variable: "--font-dmSans",
});

export const metadata: Metadata = {
    title: "Plufi | plumbing Service website",
    description: "Quality plumbing solutions for homes and businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${rubik.variable} ${dmSans.variable} antialiased`}
            >
                <Header />
                <main className="min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
