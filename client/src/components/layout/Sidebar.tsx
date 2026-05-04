'use client';
import { LayoutDashboard, Bot, Sparkles, Search, Package, CheckSquare, Users, Eye, BarChart3, Settings, CreditCard, Plug, LogOut, ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  { section: 'CAMPAGNES', items: [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Hub Agent IA', icon: Bot, path: '/hub' },
    { name: 'Assembleur LP', icon: Sparkles, path: '/lp-builder' },
    { name: 'WinFinder', icon: Search, path: '/winfinder' },
  ]},
  { section: 'DONNÉES', items: [
    { name: 'Produits', icon: Package, path: '/products' },
    { name: 'Tâches', icon: CheckSquare, path: '/tasks' },
    { name: 'Équipe', icon: Users, path: '/team' },
    { name: 'Spy Tool', icon: Eye, path: '/spy' },
    { name: 'Performance', icon: BarChart3, path: '/reports' },
  ]},
  { section: 'PARAMÈTRES', items: [
    { name: 'Abonnement', icon: CreditCard, path: '/billing' },
    { name: 'Intégrations', icon: Plug, path: '/integrations' },
    { name: 'Paramètres', icon: Settings, path: '/settings' },
  ]}
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-[#111111] border-r border-gray-800 h-screen transition-all ${collapsed ? 'w-20' : 'w-64'} flex flex-col`}>
      <div className="p-6 flex items-center justify-between">
        {!collapsed && <span className="text-orange-500 font-bold text-xl">[PLATFORM_NAME]</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((group) => (
          <div key={group.section} className="mb-6">
            {!collapsed && <h4 className="px-6 text-xs text-gray-500 font-semibold mb-2">{group.section}</h4>}
            {group.items.map((item) => (
              <Link key={item.name} href={item.path} className="flex items-center px-6 py-3 text-gray-300 hover:bg-[#f97316] hover:text-white transition-colors">
                <item.icon size={20} />
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-gray-800">
        <button className="flex items-center text-gray-400 hover:text-white">
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Déconnexion</span>}
        </button>
      </div>
    </aside>
  );
};
