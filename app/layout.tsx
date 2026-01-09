import "./globals.css";

export const metadata = {
  title: "Alikhan Tuganbayev | SDG & Public Policy Portfolio",
  description:
    "Public policy and international development portfolio focused on SDGs, research, and youth leadership in Central Asia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Navbar />
          <main className="mt-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
  <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
    <span className="font-semibold">Alikhan Tuganbayev</span>

    <div className="flex gap-6 text-sm">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/research">Research</a>
      <a href="/leadership">Leadership</a>
      <a href="/initiative">Initiative</a>
      <a href="/certificates">Certificates</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>
</header>

  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t pt-6 text-sm text-gray-500">
      © {new Date().getFullYear()} Alikhan Tuganbayev
    </footer>
  );
}
