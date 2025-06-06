import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

// Define types for messages
interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi, how can I help you today?" },
  ]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Simulated bot reply
  const simulateBotReply = (userMessage: string) => {
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Sorry, I am not available right now. Please try again later.";

      if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you?";
      } else if (userMessage.toLowerCase().includes("job")) {
        botResponse = "Our pricing starts at $10. Let me know what you need!";
      } else if (userMessage.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
      setIsTyping(false);
    }, 2000); // Simulate delay for typing animation
  };

  // Send message when clicking send button
  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    // Simulate bot reply
    simulateBotReply(input);
  };

  // Send message when Enter key is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chat Icon to Open Popup */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-md"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Popup Box */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg border border-gray-300 p-4">
          {/* Chat Header */}
          <div className="flex justify-between items-center pb-3 border-b">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-60 overflow-y-auto p-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}>
                <div
                  className={`p-2 rounded-lg text-sm my-1 max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-black text-white self-end"
                      : "bg-gray-200 text-black self-start"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Animation */}
            {isTyping && (
              <div className="flex">
                <div className="bg-gray-200 text-black p-2 rounded-lg text-sm max-w-[70%]">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="flex items-center border-t pt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Added to detect Enter key
              className="w-full px-2 py-1 border rounded-md outline-none"
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="text-blue-600 px-2">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
