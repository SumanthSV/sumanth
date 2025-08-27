import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic, MicOff } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

interface InputBarProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const { transcript, isListening, isSupported, startListening, stopListening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setMessage(transcript);
    }
  }, [transcript]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="p-4 border-t border-white/10">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about my work..."
            disabled={disabled}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 pr-12"
          />
          
          {isSupported && (
            <motion.button
              type="button"
              onClick={handleMicClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 text-white pulse-glow' 
                  : 'glass-effect text-purple-400 hover:text-purple-300'
              }`}
              title={isListening ? "Stop recording" : "Start voice input"}
            >
              {isListening ? (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <MicOff className="w-4 h-4" />
                </motion.div>
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </motion.button>
          )}
        </div>
        
        <motion.button
          type="submit"
          disabled={!message.trim() || disabled}
          whileHover={{ scale: message.trim() && !disabled ? 1.05 : 1 }}
          whileTap={{ scale: message.trim() && !disabled ? 0.95 : 1 }}
          className={`p-3 rounded-full transition-all duration-300 ${
            message.trim() && !disabled
              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover-glow'
              : 'glass-effect text-gray-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </form>
      
      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-center"
        >
          <span className="text-sm text-red-400 flex items-center justify-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 bg-red-400 rounded-full"
            />
            <span>Listening...</span>
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default InputBar;