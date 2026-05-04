import { useState } from 'react';
import axios from 'axios';

export default function ChatInterface() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/chat', { message: input });
      setMessages([...newMessages, { role: 'assistant', content: response.data.reply }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'عذراً، حدث خطأ أثناء الاتصال.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container" style={{ direction: 'rtl', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <div className="messages" style={{ minHeight: '400px', border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'left' : 'right' }}>
            <strong>{msg.role === 'user' ? 'أنت:' : 'مساعد Gemini:'}</strong>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && <p>جاري الكتابة...</p>}
      </div>
      <div className="input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
          style={{ width: '100%', height: '100px', padding: '0.5rem' }}
        />
        <button onClick={sendMessage} disabled={loading} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
          إرسال
        </button>
      </div>
    </div>
  );
}
