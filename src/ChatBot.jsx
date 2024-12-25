//#region ChatBot
// App.js
import React, { useState } from "react";
import "./App.css";

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSendMessage = async () => {
    setIsError(false)
    try {
      if (input.trim() !== "") {
        const userInput = input;
        setMessages([...messages, { sender: "user", text: userInput }]);
        setInput("");
        setIsLoading(true);
        const session = await ai.languageModel.create({
          systemPrompt: "You are an AI chatbot",
        });
        const result = await session.prompt(userInput);
        console.log(result, userInput);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: result },
        ]);
        setIsLoading(false);
        setInput("");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chatbot</h3>
      </div>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            <span>{message.text}</span>
          </div>
        ))}
        <span>{isLoading ? "Typing..." : ""}</span>
        <span className="error">{isError ? "Error Generating Response!" : ""}</span>
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
//#endregion
