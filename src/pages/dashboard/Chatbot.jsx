import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "System online. I am your SecureOps AI assistant. How can I augment your operations today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedPrompts = [
    "Scan network for anomalies",
    "Analyze recent firewall logs",
    "What is the current threat level?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock AI response delay
    setTimeout(() => {
      const aiResponses = [
        "Analyzing... No severe anomalies detected. Background noise is within acceptable parameters.",
        "Logs analyzed. 3 failed SSH attempts from recognized internal IPs. Flagged for review.",
        "Threat level is currently MODERATE. Recommend updating IDS signatures.",
        "Executing protocol. I have correlated this intent with recent malware behaviors. Creating report now."
      ];
      
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { id: Date.now(), text: response, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          AI Ops Control <Sparkles className="h-6 w-6 text-cyber-neon" />
        </h1>
        <p className="text-gray-400 mt-1">Natural language interface for security operations</p>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 glass-panel flex flex-col overflow-hidden mb-4 rounded-xl border-cyber-700/50">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={msg.id} 
              className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyber-900 border border-cyber-neon flex items-center justify-center">
                  <Bot className="h-6 w-6 text-cyber-neon" />
                </div>
              )}
              
              <div className={`max-w-[70%] p-4 rounded-lg ${
                msg.sender === 'user' 
                  ? 'bg-blue-600/20 border border-blue-500/50 text-white rounded-tr-none' 
                  : 'bg-cyber-800 border border-cyber-700 text-gray-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyber-900 border border-blue-500 flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
              )}
            </motion.div>
          ))}
          
          {isTyping && (
             <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-cyber-900 border border-cyber-neon flex items-center justify-center">
                  <Bot className="h-6 w-6 text-cyber-neon" />
                </div>
                <div className="bg-cyber-800 border border-cyber-700 p-4 rounded-lg rounded-tl-none flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-neon rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyber-neon rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-cyber-neon rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-cyber-900/50 border-t border-cyber-700">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            {predefinedPrompts.map((prompt, idx) => (
              <button 
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-4 py-2 bg-cyber-800 border border-cyber-700 rounded-full text-sm text-gray-300 hover:text-white hover:border-cyber-neon/50 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="flex relative"
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask SecureOps AI..." 
              className="flex-1 bg-cyber-800 border border-cyber-700 rounded-lg rounded-r-none px-6 py-4 text-white focus:outline-none focus:border-cyber-neon focus:ring-1 focus:ring-cyber-neon"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-6 py-4 bg-cyber-neon text-cyber-900 font-bold rounded-r-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span className="hidden sm:inline">Submit</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
