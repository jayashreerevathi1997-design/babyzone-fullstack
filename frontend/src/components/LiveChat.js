import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import './LiveChat.css';

const LiveChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [...prev, { text: inputText, sender: 'user' }]);
    setInputText('');

    // Auto reply after 1 second
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Thank you for your message! Our team will get back to you shortly.',
        sender: 'bot',
      }]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  if (!isOpen) return null;

  return (
    <div className="livechat-overlay">
      <div className="livechat-box">
        {/* Header */}
        <div className="livechat-header">
          <span className="livechat-encrypted">Messages are end-to-end encrypted</span>
          <button className="livechat-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="livechat-messages">
          {messages.length === 0 && (
            <p className="livechat-placeholder">Start askying what do you think!</p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`livechat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="livechat-quick">
          <span className="quick-label">Say hello to start</span>
          <div className="quick-btns">
            <button onClick={() => {
              setMessages(prev => [...prev, { text: 'Hello !', sender: 'user' }]);
              setTimeout(() => {
                setMessages(prev => [...prev, { text: 'Hi! Welcome to BabyZone. How can I help you today?', sender: 'bot' }]);
              }, 800);
            }}>Hello !</button>
          </div>
        </div>

        {/* Input */}
        <div className="livechat-input">
          <input
            type="text"
            placeholder="Type message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="send-msg-btn" onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
