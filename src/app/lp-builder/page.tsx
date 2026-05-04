'use client';
import { useState } from 'react';

export default function LPBuilderPage() {
  const [sections, setSections] = useState<string[]>([]);

  const addSection = (type: string) => {
    setSections([...sections, type]);
  };

  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Assembleur LP</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <button onClick={() => addSection('Hero')} className="bg-orange-500 p-4 rounded-xl">Hero</button>
        <button onClick={() => addSection('Benefits')} className="bg-orange-500 p-4 rounded-xl">Benefits</button>
        <button onClick={() => addSection('Social Proof')} className="bg-orange-500 p-4 rounded-xl">Social Proof</button>
        <button onClick={() => addSection('CTA')} className="bg-orange-500 p-4 rounded-xl">CTA</button>
      </div>

      <div className="border-2 border-dashed border-gray-800 p-12 min-h-[400px] flex flex-col gap-4">
        {sections.length === 0 && <p className="text-gray-500 text-center">Ajoutez des sections pour construire votre Landing Page</p>}
        {sections.map((s, i) => (
          <div key={i} className="bg-[#111111] p-6 rounded-xl border border-gray-800">{s} Section</div>
        ))}
      </div>
    </div>
  );
}
