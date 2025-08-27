# Interactive Portfolio with AI Chatbot

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion, featuring an interactive AI chatbot widget.

## Features

### Portfolio Features
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Glass morphism effects and gradient designs
- **Multi-page Navigation**: Home, Milestones, and About sections
- **Interactive Elements**: Hover effects, micro-interactions

### AI Chatbot Widget
- **Floating Chat Button**: Bottom-right corner with smooth animations
- **Sliding Chat Window**: Smooth slide-up animation with glass effect
- **Text Input**: Standard text input with send functionality
- **Voice Input**: Speech-to-text using Web Speech API
- **Typewriter Effect**: Bot responses appear with typing animation
- **Text-to-Speech**: "🔊 Speak" button for audio responses
- **Chat History**: Persistent conversation during session
- **Professional Persona**: AI responds as Sumanth SV with professional context

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Speech APIs**: Web Speech API (Recognition & Synthesis)
- **Routing**: React Router DOM

## Backend Requirements

To fully enable the chatbot functionality, you need to set up a backend endpoint at `/api/chat` that:

1. Receives POST requests with user messages
2. Includes the professional persona as a system message
3. Calls the OpenAI ChatGPT API
4. Returns the AI response

### Example Backend Implementation (Node.js/Express)

```javascript
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  
  const systemMessage = {
    role: "system",
    content: `You are Sumanth SV, an AI Engineer & Software Developer.
    [Include the full persona description here]`
  };
  
  const messages = [systemMessage, ...history, { role: "user", content: message }];
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });
    
    res.json({ response: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_actual_api_key_here
   ```
   Get your API key from: https://platform.openai.com/api-keys

4. **Start development server**
   ```bash
   npm run dev
   ```

## API Configuration

The chatbot uses OpenAI's GPT-3.5-turbo model through the ChatAnywhere API endpoint. Make sure to:

1. **Secure your API key**: Never commit your `.env` file to version control
2. **API Limits**: Be aware of your OpenAI usage limits and costs
3. **Error Handling**: The app includes comprehensive error handling for API failures

### Environment Variables

- `VITE_OPENAI_API_KEY`: Your OpenAI API key (required for chatbot functionality)

## Chatbot Features

### Voice Input
- Click the microphone button to start voice recognition
- Supports continuous speech recognition
- Visual feedback with pulse animation while recording
- Automatic text insertion when speech is detected

### Text-to-Speech
- Each bot message includes a "🔊 Speak" button
- Click to hear the response read aloud
- Toggle between play/stop functionality
- Uses browser's built-in speech synthesis

### Professional Persona
The chatbot is configured to respond as Sumanth SV with:
- First-person voice and professional tone
- Technical expertise in AI, web development, and cloud technologies
- Experience with real projects and hackathons
- Honest about learning areas while showing growth intent
- Focus on practical outcomes and real-world applications

## Mobile Responsiveness

The chatbot widget is fully responsive:
- Adapts to smaller screens
- Touch-friendly interface
- Optimized button sizes for mobile
- Proper spacing and typography scaling

## Browser Compatibility

- **Speech Recognition**: Chrome, Edge, Safari (with webkit prefix)
- **Speech Synthesis**: All modern browsers
- **Core Features**: All modern browsers supporting ES6+

## Customization

### Styling
- Modify `src/App.css` for custom animations
- Update Tailwind classes in components for design changes
- Adjust color schemes in the gradient classes

### Chatbot Behavior
- Update the persona in your backend `/api/chat` endpoint
- Modify typewriter speed in `useTypewriter.ts`
- Adjust speech recognition language in `useSpeechRecognition.ts`

## Performance Optimizations

- Lazy loading of chat components
- Efficient re-renders with React hooks
- Optimized animations with Framer Motion
- Minimal bundle size with tree shaking

## Security Considerations

- OpenAI API key is kept server-side only
- Frontend communicates only with your backend
- No sensitive data stored in browser
- CORS properly configured for API endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.