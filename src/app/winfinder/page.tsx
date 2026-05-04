'use client';
import { ProductCard } from '@/components/winfinder/ProductCard';

export default function WinFinderPage() {
  const mockProducts = [
    { name: 'Drone Pro Caméra', score: 92, margin: 45, price: 12000, competition: 'Low' },
    { name: 'Soin Visage Anti-Âge', score: 85, margin: 70, price: 3500, competition: 'Medium' },
  ];

  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">WinFinder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </div>
  );
}
