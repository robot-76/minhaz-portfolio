import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Md Minhazur Rahman - Portfolio',
  description: 'Personal portfolio of Md Minhazur Rahman, showcasing research and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white p-4 fixed h-full">
          <h1 className="text-2xl font-bold mb-4">Md Minhazur Rahman</h1>
          <nav className="space-y-2">
            <Link href="/about" className="block hover:text-blue-300">About</Link>
            <Link href="/education" className="block hover:text-blue-300">Education</Link>
            <Link href="/research" className="block hover:text-blue-300">Research</Link>
            <Link href="/achievements" className="block hover:text-blue-300">Achievements</Link>
            <Link href="/publications" className="block hover:text-blue-300">Publications</Link>
            <Link href="/experience" className="block hover:text-blue-300">Experience</Link>
            <Link href="/skills" className="block hover:text-blue-300">Skills</Link>
            <Link href="/contact" className="block hover:text-blue-300">Contact</Link>
            <Link href="/references" className="block hover:text-blue-300">References</Link>
          </nav>
        </aside>
        <main className="ml-64 flex-1 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
