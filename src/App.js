import { useCallback, useState, useEffect } from 'react';
import './App.css';
import { MessageList } from './components/MessageList';
import { SendMessage } from './components/SendMessage';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = useCallback((newmessage) => {
    setMessages([...messages, newmessage])
  }, [messages]);

  useEffect(() => {
    if (
      !messages.length || messages[messages.length - 1].author === "Bot"
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      setMessages([...messages, { author: 'Bot', text: 'I am robot' }])
    }, 1000);
  });

  return (
    <div className="App">
      <MessageList messages={messages} />
      <SendMessage message_={handleSend} />
    </div>
  );
}

export default App;
