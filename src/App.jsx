// App.js
import React, { useState } from "react";
import { sendMessageToOpenAI } from "./axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendMessageToOpenAI(
      "You're an anki-flashcards-maker. I will write you a french word and you should return this word, write coma, write the tranlation of this word, write '-' and write the usage of this word (sentance example when the word is used (in french!)). After writing the exmaple sentance you write the translation of this sentance in ukraining, placing it between (). Do not write the sentence example and its tranlation in english. Do what i wrote you to do and do not come up with own ideas. DO not write any word explanation and how it's used in the language, instead write the sentance how can it be used in french lagnuage",
      input
    );
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <div className="chat">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
}

export default App;
