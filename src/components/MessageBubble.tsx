import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'bot';
  isLatest?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender, isLatest = false }) => {
  const { displayedText, isTyping } = useTypewriter(
    sender === 'bot' && isLatest ? message : message,
    sender === 'bot' && isLatest ? 30 : 0
  );
  const { speak, stop, isSpeaking, isSupported } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak(message);
    }
  };

  const isUser = sender === 'user';
  const textToShow = sender === 'bot' && isLatest ? displayedText : message;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl relative ${
            isUser
              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white ml-4'
              : 'glass-effect text-white mr-4 border border-white/10'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {textToShow}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-purple-300"
              >
                |
              </motion.span>
            )}
          </p>
          
          {!isUser && isSupported && !isTyping && (
            <motion.button
              onClick={handleSpeak}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -bottom-2 -right-2 glass-effect p-2 rounded-full hover-glow transition-all duration-300 group"
              title={isSpeaking ? "Stop speaking" : "Speak message"}
            >
              {isSpeaking ? (
                <VolumeX className="w-3 h-3 text-red-400" />
              ) : (
                <Volume2 className="w-3 h-3 text-purple-400 group-hover:text-purple-300" />
              )}
            </motion.button>
          )}
        </div>
        
        <div className={`text-xs text-gray-400 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {isUser ? 'You' : 'Sumanth SV'}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;