import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "../i18n";
import I18nProvider from "@/components/i18nProvider";

export const metadata: Metadata = {
  title: "Rafael Galazzi",
  description: "Full-Stack developer.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
        <body className="scroll-smooth h-full w-full bg-background text-foreground overflow-x-hidden">
            <I18nProvider>
                <div className="flex flex-col min-h-screen w-full">
                    <Navbar />
                    <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {children}
                    </main>
                    <Footer />
                </div>
            </I18nProvider>
        </body>
    </html>
  );
}
