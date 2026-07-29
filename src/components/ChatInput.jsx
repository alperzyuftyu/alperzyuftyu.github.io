import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput ({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')
  function saveInputText (event) {
    setInputText(event.target.value)
  }

  function sendMessage () {
    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: 'user', id: crypto.randomUUID() }
    ]
    setChatMessages(newChatMessages)

    const response = Chatbot.getResponse(inputText)
    setChatMessages([
      ...newChatMessages,
      { message: response, sender: 'robot', id: crypto.randomUUID() }
    ])

    setInputText('')
  }
  function keyDown (element) {
    const key = element.key
    if (key === 'Enter') {
      sendMessage()
    } else if (key === 'Escape') {
      setInputText('')
    }
  }

  return (
    <div className='chat-input-container'>
      <input
        className='chat-input'
        placeholder='Send a message to Cahtbot'
        size='30'
        onChange={saveInputText}
        value={inputText}
        onKeyDown={keyDown}
      />
      <button onClick={sendMessage} className='send-button'>
        Send
      </button>
    </div>
  )
}
