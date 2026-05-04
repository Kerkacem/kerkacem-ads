import ChatInterface from './components/ChatInterface';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <header>
        <h1>منصة Gemini - Claude Code</h1>
      </header>
      <main>
        <ChatInterface />
      </main>
    </div>
  );
}
