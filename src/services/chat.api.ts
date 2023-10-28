import { currentUser, conversation } from "./mockapi";

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const user = JSON.parse(currentUser);
    setTimeout(() => {
      resolve(user);
    }, 500);
  });
};

export const getConversations = () => {
  return new Promise((resolve) => {
    const conv = JSON.parse(conversation);
    setTimeout(() => {
      resolve(conv);
    }, 500);
  });
};
