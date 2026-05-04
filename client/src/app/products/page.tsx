'use client';

export default function ProductsPage() {
  const products = [
    { name: 'Drone Pro Caméra', price: 12000, margin: 45, status: 'Active' },
    { name: 'Soin Visage', price: 3500, margin: 70, status: 'Active' },
  ];

  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Produits</h1>
        <button className="bg-orange-500 px-4 py-2 rounded text-white font-bold">+ Ajouter</button>
      </div>
      
      <div className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-gray-300">
          <thead className="bg-gray-900 text-gray-500 text-sm">
            <tr>
              <th className="p-4">Nom</th>
              <th className="p-4">Prix</th>
              <th className="p-4">Marge</th>
              <th className="p-4">Statut</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-t border-gray-800 hover:bg-gray-800">
                <td className="p-4 text-white">{p.name}</td>
                <td className="p-4">{p.price} DZD</td>
                <td className="p-4">{p.margin}%</td>
                <td className="p-4">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
