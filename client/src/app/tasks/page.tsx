'use client';
import { useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Optimiser campagne Mروحة', status: 'En cours', priority: 'Haute' },
    { id: 2, title: 'Créer Ad Copies Pompe Air', status: 'À faire', priority: 'Moyenne' },
  ]);

  return (
    <div className="p-8 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold text-white mb-6">Tâches</h1>
      <div className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden">
        {tasks.map(task => (
          <div key={task.id} className="p-4 border-b border-gray-800 flex justify-between items-center text-gray-300">
            <span>{task.title}</span>
            <span className={`px-2 py-1 rounded text-xs ${task.priority === 'Haute' ? 'bg-red-500/20 text-red-500' : 'bg-orange-500/20 text-orange-500'}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
