import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 py-3 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">everysha256hash.com</h1>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
