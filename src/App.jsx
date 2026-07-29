import { useState } from 'react'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessage } from './components/ChatMessage.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'

function App () {
  //array destructuring
  const [chatMessages, setChatMessages] = useState([])
  // array destructuring short cut
  //const [chatMessages, setChatMessages] = array;
  // const chatMessages =  array[0];
  // const setChatMessages = array[1];

  return (
    <div className='app-container'>
      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
