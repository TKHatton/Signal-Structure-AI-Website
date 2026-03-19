'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/constants';
import SignalDot from '../SignalDot';

interface PulseChatProps {
  businessName: string;
  url: string;
  signalKey?: string;
}

interface ChatMessage {
  role: 'assistant' | 'user';
  content: string;
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
      >
        <SignalDot size={6} />
      </motion.span>
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
      >
        <SignalDot size={6} />
      </motion.span>
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
      >
        <SignalDot size={6} />
      </motion.span>
    </div>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  const isAssistant = message.role === 'assistant';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-3`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl font-body text-sm leading-relaxed ${
          isAssistant
            ? 'bg-stone text-navy rounded-bl-sm'
            : 'bg-navy text-white rounded-br-sm'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}

export default function PulseChat({ businessName, url, signalKey }: PulseChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Start chat session on mount
  useEffect(() => {
    const startChat = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/chat/start`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            business_name: businessName,
            url,
            signal_key: signalKey || null,
          }),
        });

        if (!res.ok) throw new Error('Failed to start chat');

        const data = await res.json();
        setSessionId(data.session_id);
        setMessages([data.message]);
      } catch {
        setError('Could not connect to our advisor. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    startChat();
  }, [businessName, url, signalKey]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isCompleted) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          message: userMessage,
        }),
      });

      if (!res.ok) throw new Error('Failed to send message');

      const data = await res.json();
      setMessages((prev) => [...prev, data.message]);

      if (data.completed) {
        setIsCompleted(true);
      }
    } catch {
      setError('Connection lost. Please refresh and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-card overflow-hidden">
      {/* Header */}
      <div className="bg-navy px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-copper/20 rounded-full flex items-center justify-center">
          <SignalDot size={8} />
        </div>
        <div>
          <p className="font-body text-sm font-medium text-white">Signal Pulse Advisor</p>
          <p className="font-body text-xs text-white/60">Signal & Structure AI</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}
        </AnimatePresence>
        {isLoading && <TypingIndicator />}
        {error && (
          <div className="bg-status-red/5 border border-status-red/20 rounded-lg p-3 mt-2">
            <p className="font-body text-xs text-status-red">{error}</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input or Completion Card */}
      {isCompleted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-4 bg-stone border-t border-warmgray/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-5 h-5 text-status-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="font-body text-sm font-medium text-navy">
              Conversation complete
            </p>
          </div>
          <p className="font-body text-xs text-warmgray">
            Your results are on their way to your inbox.
          </p>
        </motion.div>
      ) : (
        <form
          onSubmit={handleSend}
          className="px-4 py-3 bg-white border-t border-warmgray/10 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 rounded-lg border border-warmgray/30 font-body text-navy text-sm focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-copper text-white font-body font-medium px-4 py-2.5 rounded-lg hover:bg-copper/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}
