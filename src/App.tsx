import React, { useState } from 'react';
import { FaPaperPlane, FaSync } from 'react-icons/fa';
import { conversationFlow } from '../constants/conversationFlow';

// Define the type for a conversation step
type ConversationStep = {
  message: string;
  options?: { label: string; next: string }[];
};

// Define the type for the conversation flow object
type ConversationFlow = {
  [key: string]: ConversationStep;
};

// Define the type for a message
type Message = {
  text: string;
  sender: 'user' | 'bot';
};

const App: React.FC = () => {
  // Initialize messages with the bot's first message
  const [messages, setMessages] = useState<Message[]>([
    { text: conversationFlow.start.message, sender: 'bot' }
  ]);
  const [currentStep, setCurrentStep] = useState<string>('start');

  // Function to handle sending a message
  const handleSendMessage = (option?: string) => {
    const currentMessage = (conversationFlow as ConversationFlow)[currentStep];
    if (!currentMessage) return;

    // Add user's choice to the chat
    if (option) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: option, sender: 'user' }
      ]);
    }

    // Determine the next step based on the user's choice
    if (option && currentMessage.options) {
      const selectedOption = currentMessage.options.find((opt) => opt.label === option);
      if (selectedOption) {
        // Update the current step
        setCurrentStep(selectedOption.next);

        // Add bot's response to the chat
        const nextMessage = (conversationFlow as ConversationFlow)[selectedOption.next]?.message;
        if (nextMessage) {
          setTimeout(() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              { text: nextMessage, sender: 'bot' }
            ]);
          }, 10); // Small delay to simulate a natural conversation flow
        }
      }
    }
  };

  // Function to start a new conversation
  const handleStartNewConversation = () => {
    // Append the bot's initial message to the existing messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: conversationFlow.start.message, sender: 'bot' }
    ]);
    // Reset the current step to the start
    setCurrentStep('start');
  };

  // Get the current step's options
  const currentOptions = (conversationFlow as ConversationFlow)[currentStep]?.options || [];

  // Determine if there are buttons to display
  const hasButtons = currentOptions.length > 0;

  // Determine if the conversation has ended (no more options)
  const hasConversationEnded = !hasButtons;

  // Render the chat interface
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      {/* Chat History */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
              } mb-2`}
          >
            <div
              className={`rounded-lg p-3 max-w-xs ${message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-300 text-black rounded-bl-none'
                } whitespace-pre-wrap`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section (Buttons and Input Box) */}
      <div className="flex flex-col gap-2">
        {/* Quick Reply Buttons (Vertical Layout) */}
        {hasButtons && (
          <div className="overflow-y-auto max-h-48"> {/* Set a max height for buttons */}
            {currentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(option.label)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 whitespace-nowrap w-full mb-2"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Start New Conversation Button (Visible when conversation ends) */}
        {hasConversationEnded && (
          <button
            onClick={handleStartNewConversation}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 whitespace-nowrap w-full mb-2"
          >
            <FaSync className="inline-block mr-2" />
            Start New Conversation
          </button>
        )}

        {/* Input Box (Optional) */}
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border-none rounded-lg focus:outline-none"
            disabled
          />
          <button
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 ml-2"
            disabled
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;