import * as chat from '../../api/chat'
import { createThread, addMessage, setCurrentThread } from 'Utils/chatUtil'

// initial state
const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  }
}

// getters
const getters = {
  threads: state => state.threads,
  currentThread: state => {
    return state.currentThreadID ? state.threads[state.currentThreadID] : {}
  },
  currentMessages: state => {
    const thread = getters.currentThread(state)
    return thread.messages ? thread.messages.map(id => state.messages[id]) : []
  },
  unreadCount: ({ threads }) => {
    return Object.keys(threads).reduce((count, id) => {
      return threads[id].lastMessage.isRead ? count : count + 1
    }, 0)
  },
  sortedMessages: (state, getters) => {
    const messages = getters.currentMessages
    return messages.slice().sort((a, b) => a.timestamp - b.timestamp)
  }
}

// actions
const actions = {
  getAllMessages({ commit }) {
    chat.getAllMessages(messages => {
      commit('receiveAll', messages)
    })
  },
  sendMessage({ commit }, payload) {
    chat.createMessage(payload, message => {
      commit('receiveMessage', message)
    })
  },
  switchThread({ commit }, payload) {
    commit('switchThread', payload)
  }
}

// mutations
const mutations = {
  receiveAll(state, messages) {
    let latestMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      // mark the latest message
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      // add message
      addMessage(state, message)
    })
    // set initial thread to the one with the latest message
    setCurrentThread(state, latestMessage.threadID)
  },

  receiveMessage(state, message) {
    addMessage(state, message)
  },

  switchThread(state, id) {
    setCurrentThread(state, id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
