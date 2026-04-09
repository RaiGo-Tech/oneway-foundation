import { useState, useEffect, useRef, useCallback } from 'react';
import { chatAI } from '../../services/api';
import ChatWindow from './ChatWindow';
import { toast } from '../../context/ToastContext'; // Assuming ToastContext exists

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef(null);

  // Idle bounce animation
  useEffect(() => {
    if (isOpen) return;
    
    const resetIdle = () => {
      setIsIdle(false);
      setTimeout(() => setIsIdle(true), 3000);
    };

    idleTimerRef.current = setInterval(() => {
      resetIdle();
    }, 8000);

    return () => clearInterval(idleTimerRef.current);
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true, timestamp: new Date().toISOString() }]);
    setIsTyping(true);

    try {
      const response = await chatAI(userMessage);
      setMessages(prev => [...prev, { text: response, isUser: false, timestamp: new Date().toISOString() }]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      toast.error('Sorry, AI assistant is temporarily unavailable. Please try again.');
      setMessages(prev => [...prev, { text: 'Sorry, I am temporarily unavailable. Please WhatsApp or call us!', isUser: false, timestamp: new Date().toISOString() }]);
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, isTyping, toast]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const toggleChat = () => {
    if (!isOpen) {
      setMessages([{ text: 'Hello! I am ONEWAY Foundation Assistant. How can I help you today? 👋', isUser: false, timestamp: new Date().toISOString() }]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl border-4 border-white/50 flex items-center justify-center z-40 transition-all duration-300 backdrop-blur-xl
          ${isOpen 
            ? 'scale-0' 
            : 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-orange-500/50 hover:shadow-orange-600/60 hover:-translate-y-1 active:scale-95 ' + 
              (isIdle ? 'animate-bounce-slow' : '')
          }`}
      >
        <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {/* Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isTyping={isTyping}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSend={sendMessage}
      />
    </>
  );
};

export default AIWidget;

