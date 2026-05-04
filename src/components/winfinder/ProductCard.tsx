export const ProductCard = ({ product }: { 
  product: { name: string, score: number, margin: number, price: number, competition: string } 
}) => (
  <div className="bg-[#111111] border border-gray-800 rounded-xl p-5 hover:border-orange-500 transition-all">
    <div className="h-40 bg-gray-900 mb-4 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Product Image</span>
    </div>
    <h3 className="text-white font-bold mb-1">{product.name}</h3>
    <div className="flex gap-2 mb-4">
      <span className="bg-orange-500/20 text-orange-500 text-[10px] px-2 py-1 rounded">Score: {product.score}/100</span>
      <span className="bg-green-500/20 text-green-500 text-[10px] px-2 py-1 rounded">Marge: {product.margin}%</span>
    </div>
    <div className="text-gray-400 text-sm mb-4">
      <p>Prix vente: {product.price} DZD</p>
      <p>Concurrence: {product.competition}</p>
    </div>
    <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded text-white text-sm font-bold transition-colors">
      Analyse Complète
    </button>
  </div>
);
