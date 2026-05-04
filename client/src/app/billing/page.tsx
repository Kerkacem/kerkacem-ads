'use client';

export default function BillingPage() {
  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Abonnement & Facturation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-bold text-white mb-4">Plan Actuel: Basic</h2>
          <div className="text-gray-400 mb-6">
            <p>Statut: <span className="text-green-500 font-bold">Trial</span></p>
            <p className="mt-2">Essai se termine dans: 3 jours</p>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-2 rounded-full w-[57%]"></div>
            </div>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded text-white font-bold transition-colors">
            Passer au Payant
          </button>
        </div>

        <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-bold text-white mb-4">Historique de Facturation</h2>
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="pb-4">Date</th>
                <th className="pb-4">Montant</th>
                <th className="pb-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">01/04/2026</td>
                <td className="py-2">14.99€</td>
                <td className="py-2 text-green-500">Payé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
