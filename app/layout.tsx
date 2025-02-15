import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
