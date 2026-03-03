import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Alikhan Tuganbayev | SDG & Public Policy Portfolio",
  description:
    "Public policy and international development portfolio focused on SDGs, research, and youth leadership in Central Asia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Navbar />
          <main className="mt-10 page-fade-in">{children}</main>
          <footer className="mt-20 border-t pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Alikhan Tuganbayev
          </footer>
        </div>
      </body>
    </html>
  );
}
