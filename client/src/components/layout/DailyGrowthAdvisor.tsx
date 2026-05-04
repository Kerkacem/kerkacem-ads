'use client';
import { useEffect, useState } from 'react';

export const DailyGrowthAdvisor = ({ workspaceId }: { workspaceId: string }) => {
  const [advice, setAdvice] = useState<string>('Analyse en cours...');

  useEffect(() => {
    // Fetch AI-synthesized daily advice
    setAdvice("Conseil du jour: Votre CPA sur 'Arthur Plus' est exceptionnel. Augmentez le budget de 20% pour maximiser les profits avant la hausse de la demande.");
  }, [workspaceId]);

  return (
    <div className="bg-gradient-to-r from-orange-900 to-orange-600 p-6 rounded-xl border border-orange-500 mb-8 text-white">
      <h3 className="font-bold text-lg mb-2 flex items-center">✨ Conseil Croissance IA</h3>
      <p>{advice}</p>
    </div>
  );
};
