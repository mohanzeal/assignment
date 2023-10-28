import * as api from "./../../services/chat.api";

export const chatModule = {
  state: {
    currentUser: null,
    conversations: [],
  },
  mutations: {
    setCurrentUser(state: any, payload: any) {
      state.currentUser = payload;
    },
    setConversations(state: any, payload: any) {
      state.conversations = payload;
    },
    addConversation(state: any, payload: string) {
      state.conversations.push(payload);
    },
  },
  actions: {
    async getCurrentUser({ commit }: any) {
      const currentUser = await api.getCurrentUser();
      commit("setCurrentUser", currentUser);
    },
    async getConversations({ commit }: any) {
      const conversations = await api.getConversations();
      commit("setConversations", conversations);
    },
  },
};
