import { format } from 'date-fns';
import { useEffect, useRef } from 'react';

const MessageBubble = ({ message, isUser, timestamp }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [message]);

  return (
    <div ref={ref} className={`flex ${isUser ? 'justify-end mb-4' : 'justify-start mb-4'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-lg ${
        isUser 
          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
          : 'bg-white/80 backdrop-blur-sm border border-white/50 text-gray-800'
      }`}>
        <p className="text-sm leading-relaxed">{message}</p>
        <p className={`text-xs mt-1 opacity-75 ${
          isUser ? 'text-orange-100' : 'text-gray-500'
        }`}>
          {timestamp ? format(new Date(timestamp), 'HH:mm') : ''}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;

