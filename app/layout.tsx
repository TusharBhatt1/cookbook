import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/lib/query-client.provider";
import { FavoritesProvider } from "@/lib/favorites-context";
import Favorites from "@/page-builders/favorites";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Recipe Finder",
    template: "%s | Recipe Finder",
  },
  description:
    "Discover, search, and save your favorite delicious recipes with ease.",
  keywords: ["recipes", "cooking", "food", "meal ideas", "recipe app"],
  authors: [{ name: "Tushar Bhatt" }],
  creator: "Tushar Bhatt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <QueryClientProvider>
          <FavoritesProvider>
            {children}
            <Favorites />
          </FavoritesProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
