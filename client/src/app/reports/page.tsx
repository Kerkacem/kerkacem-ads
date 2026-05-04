'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', spend: 4000, revenue: 2400 },
  { name: 'Mar', spend: 3000, revenue: 1398 },
  { name: 'Mer', spend: 2000, revenue: 9800 },
  { name: 'Jeu', spend: 2780, revenue: 3908 },
  { name: 'Ven', spend: 1890, revenue: 4800 },
];

export default function ReportsPage() {
  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Performance & Rapports</h1>
      
      <div className="bg-[#111111] p-6 rounded-xl border border-gray-800 h-96">
        <h2 className="text-white mb-4">Dépenses vs Revenus</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
            <Line type="monotone" dataKey="spend" stroke="#f97316" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
