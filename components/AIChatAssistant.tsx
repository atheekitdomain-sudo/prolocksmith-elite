import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { Box, Paper, IconButton, Typography, TextField, Fab, CircularProgress } from '@mui/material';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hi! I'm your AI Locksmith assistant. Ask me about key prices, lockout advice, or our services!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMsg,
        config: {
            systemInstruction: "You are a helpful, professional assistant for 'ProLocksmith Elite'. You provide estimated price ranges for services (e.g., car keys $80-$250, house lockout $90-$150), explain technical terms, and always encourage calling the emergency line (+94 77 438 0935) for urgent issues. Be concise and friendly. Do not give instructions on how to break into locks.",
        }
      });
      
      const text = response.text;
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please call us directly at +94 77 438 0935" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}>
      {!isOpen && (
        <Fab 
            color="primary" 
            aria-label="chat"
            onClick={() => setIsOpen(true)}
            sx={{ width: 64, height: 64 }}
        >
            <MessageSquare size={28} />
        </Fab>
      )}

      {isOpen && (
        <Paper 
            elevation={12} 
            sx={{ 
                width: { xs: 300, sm: 360 }, 
                height: 480, 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: 4,
                overflow: 'hidden' 
            }}
        >
          {/* Header */}
          <Box sx={{ bgcolor: 'primary.main', p: 2, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Bot size={20} />
              <Typography variant="subtitle1" fontWeight="bold">Locksmith Assistant</Typography>
            </Box>
            <IconButton onClick={() => setIsOpen(false)} size="small" sx={{ color: 'white' }}>
              <X size={20} />
            </IconButton>
          </Box>

          {/* Chat Area */}
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2, bgcolor: '#f5f5f5', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {messages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: msg.role === 'user' ? 'primary.main' : 'white',
                  color: msg.role === 'user' ? 'white' : 'text.primary',
                  borderBottomRightRadius: msg.role === 'user' ? 0 : 2,
                  borderBottomLeftRadius: msg.role === 'model' ? 0 : 2,
                  boxShadow: 1,
                  fontSize: '0.9rem'
                }}
              >
                {msg.text}
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ alignSelf: 'flex-start', p: 1.5, bgcolor: 'white', borderRadius: 2 }}>
                <CircularProgress size={16} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, bgcolor: 'white', borderTop: 1, borderColor: 'divider', display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask about prices..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <IconButton 
                color="primary" 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                sx={{ bgcolor: 'primary.50', '&:hover': { bgcolor: 'primary.100' } }}
            >
              <Send size={18} />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default AIChatAssistant;
