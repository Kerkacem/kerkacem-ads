import { Sidebar } from '@/components/layout/Sidebar';
import { Bell } from 'lucide-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-[#0a0a0a] flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <header className="h-16 border-b border-gray-800 flex items-center justify-end px-8">
            <button className="text-gray-400 hover:text-white">
              <Bell size={20} />
            </button>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
