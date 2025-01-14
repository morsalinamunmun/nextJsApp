import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight:['400', '600', '700']})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-4">
      <body className={poppins.className}>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
