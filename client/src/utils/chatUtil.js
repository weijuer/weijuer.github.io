export function createThread(state, id, name) {
  state.threads = {
    ...state.threads,
    [id]: {
      id,
      name,
      messages: [],
      lastMessage: null
    }
  }
}

export function addMessage(state, message) {
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messages map
  state.messages = {
    ...state.messages,
    [message.id]: message
  }
}

export function setCurrentThread(state, id) {
  state.currentThreadID = id
  if (!state.threads[id]) {
    debugger
  }
  // mark thread as read
  state.threads[id].lastMessage.isRead = true
}
