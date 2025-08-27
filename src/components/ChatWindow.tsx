import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Loader2 } from 'lucide-react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import { sendToOpenAI } from '../services/openai.ts';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Sumanth SV, an AI Engineer & Software Developer. I'd be happy to answer any questions about my work, experience, or projects. What would you like to know?",
      type: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const responseText = await sendToOpenAI(text, messages);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseText,
        type: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: error instanceof Error && error.message.includes('API key') 
          ? "I'm currently experiencing some technical difficulties. In the meantime, feel free to check out my projects on GitHub or reach out via email at sumanthsv04@gmail.com!"
          : "I'm currently experiencing some technical difficulties. In the meantime, feel free to check out my projects on GitHub or reach out via email at sumanthsv04@gmail.com!",
        type: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ 
            type: "spring", 
            damping: 25, 
            stiffness: 300,
            duration: 0.3 
          }}
          className="
            fixed bottom-24 
            right-6 md:right-6 sm:right-2 
            w-96 md:w-96 sm:w-[90%] 
            h-[500px] glass-effect 
            rounded-2xl border border-white/20 
            shadow-2xl z-40 flex flex-col 
            overflow-hidden chat-window
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Sumanth SV</h3>
                <p className="text-gray-400 text-xs">AI Engineer & Software Developer</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="glass-effect p-2 rounded-full hover-glow transition-all duration-300"
            >
              <X className="w-4 h-4 text-white" />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide chat-messages">
            {messages.map((message, index) => (
              <MessageBubble
                key={message.id}
                message={message.content}
                sender={message.type}
                isLatest={index === messages.length - 1}
              />
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start mb-4"
              >
                <div className="glass-effect px-4 py-3 rounded-2xl border border-white/10 mr-4">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                    <span className="text-gray-300 text-sm">Sumanth is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <InputBar onSendMessage={sendMessage} disabled={isTyping} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;