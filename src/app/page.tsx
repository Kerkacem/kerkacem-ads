'use client';
import { KPICard } from '@/components/KPICard';
import { useMetaAccounts } from '@/hooks/useMetaAccounts';
import { DailyGrowthAdvisor } from '@/components/layout/DailyGrowthAdvisor';

export default function Dashboard() {
  const { accounts, loading, error } = useMetaAccounts('YOUR_DEV_TOKEN');

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <h1 className="text-2xl font-bold text-white mb-8">Tableau de Bord</h1>
      
      <DailyGrowthAdvisor workspaceId="current-workspace" />

      {loading ? (
        <p className="text-gray-400">Chargement des données...</p>
      ) : error ? (
        <p className="text-red-500">Erreur: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard title="Dépenses Totales" value="150,000 DZD" change="+12%" isPositive={true} />
          <KPICard title="Revenus Estimés" value="450,000 DZD" change="+8%" isPositive={true} />
          <KPICard title="ROAS" value="3.0" change="-2%" isPositive={false} />
          <KPICard title="Commandes" value="120" change="+15%" isPositive={true} />
        </div>
      )}

      <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Campagnes Récentes</h2>
      </div>
    </div>
  );
}
