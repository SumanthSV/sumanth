import React from 'react';
import { motion } from 'framer-motion';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-16 z-50 flex flex-col items-end">
      
      {/* Speech bubble tagline */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-3 relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-2xl shadow-lg max-w-[220px] text-sm font-medium"
        >
          Wanna get to know more about me?{" "}
          <span className="font-extrabold">Let’s talk!</span>
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-gradient-to-r from-purple-600 to-cyan-500 rotate-45"></div>
        </motion.div>
      )}

      {/* Button itself */}
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full shadow-lg overflow-hidden bg-white flex items-center justify-center relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          damping: 15, 
          stiffness: 300,
          delay: 0.8
        }}
      >
        <motion.img
          src="/Chatbot.jpg"
          alt={isOpen ? "Close Chat" : "Open Chat"}
          className="w-full h-full object-cover"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Glow ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-purple-400/40"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default ChatButton;
