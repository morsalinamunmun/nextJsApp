import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "About Us page",
};

export default function AboutLayout({children}) {
    return (
        <div>
          <nav className="m-6">
          <ul className="flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
          </nav>
          {children}
        </div>
    );
  }