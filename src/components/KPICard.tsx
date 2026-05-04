import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const KPICard = ({ title, value, change, isPositive }: KPICardProps) => (
  <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
    <p className="text-gray-400 text-sm mb-2">{title}</p>
    <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
    <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {change} vs last period
    </p>
  </div>
);
