'use client';
import { useState } from 'react';

export default function HubAgentPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('http://localhost:3000/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: messages })
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'ai', content: data.response }]);
    } catch (err) {
      console.error('Chat error:', err);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] p-8 bg-[#0a0a0a]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`p-4 rounded-lg ${m.role === 'user' ? 'bg-[#f97316] text-white ml-auto' : 'bg-[#111111] text-gray-300'}`}>
            {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          className="flex-1 bg-[#111111] border border-gray-800 p-3 rounded-lg text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question à l'agent IA..."
        />
        <button onClick={sendMessage} className="bg-orange-500 px-6 py-2 rounded-lg text-white font-bold">Envoyer</button>
      </div>
    </div>
  );
}
