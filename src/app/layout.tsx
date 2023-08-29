import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Template para projetos Next 13"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Sistema</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/users">Usuario</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
