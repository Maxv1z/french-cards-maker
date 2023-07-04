# Anki maker using openAI API
#### 🤖 Flashcard Bot

Project Description
The Flashcard Bot project is a React application that utilizes the OpenAI API to generate flashcards based on user input. It allows users to input a prompt and receive a response containing a flashcard-style sentence in French along with its translation into Ukrainian. The purpose of this project is to demonstrate the power of natural language processing and AI in language learning.

The application provides a chat-like interface where users can interact with the Flashcard Bot. Each message exchange consists of the user inputting a prompt, such as a word in French, and the bot generating a sentence using the provided word. The bot's response is then displayed as a message in the chat, along with the user's original input.


# Usage
The main functionality of the Flashcard Bot is implemented in the App.js file. Let's break down the important parts:

```
import React, { useState } from "react";
import { sendMessageToOpenAI } from "./axios";
import "./App.css";
```
The useState hook is imported from React to manage the state of the input and messages.
The sendMessageToOpenAI function is imported from the axios.js file, which handles the communication with the OpenAI API.
The styles for the application are imported from the App.css file.

```
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendMessageToOpenAI(
      "Your prompt message",
      input
    );
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
  };

  // ...
}
```
The App component is defined as a functional component.
State variables are initialized using the useState hook. The input state stores the user's input, and the messages state stores the chat messages.
The handleMessageSubmit function is an asynchronous function that is called when the user submits a message. It sends the user's input to the sendMessageToOpenAI function and updates the messages state with the user's input and the bot's response.
The JSX code within the return statement defines the structure of the application's UI, including the chat messages and input field.

```
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
```
The JSX code renders the application's UI. The chat div contains the chat messages, which are dynamically generated based on the messages stored in the messages state. Each message is rendered as a div element with a unique key and a class name based on whether it is a user message or a bot message.
The input-container div contains an input field and a button for the user to enter their messages.
When the user types in the input field, the onChange event handler updates the input state with the current value of the input field.
When the user clicks the "Send" button, the onClick event handler triggers the handleMessageSubmit function, which sends the user's input to the OpenAI API and updates the chat messages accordingly.

##ScreenShots
![image](https://github.com/Maxv1z/french-cards-maker/assets/122612827/76118385-da04-4aa6-bbd1-95430f20f75b)

