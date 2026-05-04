'use client';
import { AdCard } from '@/components/spy/AdCard';

export default function SpyToolPage() {
  const mockAds = [
    { brandName: 'Brand A', copy: 'Découvrez nos offres exclusives...', likes: 1200, daysActive: 15 },
    { brandName: 'Brand B', copy: 'Profitez de -50% sur tout le site!', likes: 850, daysActive: 30 },
  ];

  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Spy Tool</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAds.map((ad, i) => <AdCard key={i} ad={ad} />)}
      </div>
    </div>
  );
}
