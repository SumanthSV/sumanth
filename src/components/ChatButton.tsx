import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div>
        <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 z-50 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        damping: 15, 
        stiffness: 300,
        delay: 1 
      }}
    >
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {isOpen ? (
            <img
                src='/Chatbot.jpg'
                alt="Close Chat"
                className="w-18 h-18 rounded-full object-cover"
            />
            ) : (
            <img
                src="/Chatbot.jpg"
                alt="Open Chat"
                className="w-18 h-18 rounded-full object-cover"
            />
            )}
      </motion.div>
      
      {/* Pulse animation when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none"
      >
        {isOpen ? 'Close chat' : 'Chat with Sumanth'}
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </motion.div>
    </motion.button>
    </div>
    
  );
};

export default ChatButton;