'use client';
import { useState } from 'react';

export const AdCard = ({ ad }: { ad: any }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const analyzeAd = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/ai/spy-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adData: ad })
      });
      const data = await res.json();
      setAnalysis(data.analysis);
    } catch (err) {
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-4 hover:border-orange-500 transition-all">
      {analysis ? (
        <div className="bg-black p-4 text-xs text-gray-300 h-64 overflow-y-auto whitespace-pre-wrap border border-gray-700 rounded">
          {analysis}
          <button onClick={() => setAnalysis(null)} className="text-orange-500 mt-2 block">Fermer</button>
        </div>
      ) : (
        <>
          <div className="aspect-video bg-gray-900 mb-4 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Ad Creative</span>
          </div>
          <h3 className="text-white font-bold mb-2">{ad.brandName}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{ad.copy}</p>
          <button 
            onClick={analyzeAd}
            className="w-full bg-gray-800 hover:bg-orange-600 py-2 rounded text-white text-sm transition-colors"
          >
            {loading ? 'Analyse en cours...' : 'Analyser avec IA'}
          </button>
        </>
      )}
    </div>
  );
};
