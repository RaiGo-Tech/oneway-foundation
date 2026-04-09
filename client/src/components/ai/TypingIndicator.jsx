const TypingIndicator = () => (
  <div className="flex justify-start mb-4">
    <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl px-4 py-3 shadow-lg max-w-xs">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.16s]" />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.08s]" />
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
      </div>
    </div>
  </div>
);

export default TypingIndicator;

