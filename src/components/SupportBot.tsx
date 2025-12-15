import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickReplies = [
  "Contact Sales",
  "Our Services",
  "Get a Quote",
  "Documentation",
];

const botResponses: { [key: string]: string } = {
  "hello": "Hello! I'm Aqua, your AI assistant. How can I help you today?",
  "hi": "Hi there! What can I do for you?",
  "services": "We offer Web Development, AI/ML Solutions, Mobile Apps, Cloud Solutions, ERP Systems, and Digital Marketing. Which one interests you?",
  "contact": "You can reach us at contact@bytechsol.com or call us at +92-XXX-XXXXXXX. Would you like to schedule a meeting?",
  "pricing": "Our pricing is customized based on your specific needs. Would you like to schedule a consultation to discuss your project?",
  "quote": "I'd be happy to help you get a quote! Could you tell me more about your project requirements?",
  "default": "I'm here to help! You can ask me about our services, pricing, or schedule a consultation. What would you like to know?",
};

function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi')) return botResponses.hello;
  if (message.includes('service')) return botResponses.services;
  if (message.includes('contact') || message.includes('email') || message.includes('phone')) return botResponses.contact;
  if (message.includes('price') || message.includes('cost')) return botResponses.pricing;
  if (message.includes('quote')) return botResponses.quote;
  
  return botResponses.default;
}

export function SupportBot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Aqua, your AI support assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 group"
          >
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-xl"
            />
            
            {/* Button */}
            <div className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-purple-600 to-blue-600' 
                : 'bg-gradient-to-br from-purple-500 to-blue-500'
            } shadow-2xl`}>
              <MessageCircle className="w-8 h-8 text-white" />
              
              {/* Notification dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-40 w-[400px] h-[600px] rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Glass Background */}
            <div className={`absolute inset-0 ${
              theme === 'dark'
                ? 'bg-slate-900/95 backdrop-blur-2xl border border-slate-700/50'
                : 'bg-white/95 backdrop-blur-2xl border border-slate-200/50'
            }`} />

            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10 bg-[length:200%_200%]"
            />

            {/* Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-slate-700/30">
              <div className="flex items-center gap-3">
                {/* Bot Avatar */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                      : 'bg-gradient-to-br from-purple-500 to-blue-500'
                  }`}>
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Online indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
                  />
                </motion.div>
                
                <div>
                  <h3 className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                    Aqua Assistant
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    Online now
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-slate-800 text-slate-400 hover:text-white'
                    : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="relative h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'bot'
                      ? theme === 'dark'
                        ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 to-blue-500'
                      : theme === 'dark'
                        ? 'bg-slate-700'
                        : 'bg-slate-200'
                  }`}>
                    {message.sender === 'bot' ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-slate-600" />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.sender === 'bot'
                      ? theme === 'dark'
                        ? 'bg-slate-800/50 text-white'
                        : 'bg-slate-100 text-slate-900'
                      : theme === 'dark'
                        ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
                        : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                      : 'bg-gradient-to-br from-purple-500 to-blue-500'
                  }`}>
                    <Bot className="w-4 h-4 text-white" />
                  </div>

                  <div className={`rounded-2xl px-4 py-3 ${
                    theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100'
                  }`}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          className={`w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-slate-600' : 'bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="relative px-6 py-3 border-t border-slate-700/30">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {quickReplies.map((reply) => (
                  <motion.button
                    key={reply}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickReply(reply)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="relative p-4 border-t border-slate-700/30">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-3 rounded-2xl transition-all focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-slate-800 text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500/50'
                      : 'bg-slate-100 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-purple-500/50'
                  }`}
                />
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                      : 'bg-gradient-to-br from-purple-500 to-blue-500'
                  } text-white shadow-lg`}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}