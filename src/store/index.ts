import Vue from "vue";
import Vuex from "vuex";
import { chatModule } from "./chat-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chatModule,
  },
});
