<script lang="ts">
import { defineComponent } from "vue";
import ComposeSection from "./ComposeSection.vue";
import ConversationArea from "./ConversationArea.vue";

export default defineComponent({
  components: {
    ConversationArea,
    ComposeSection,
  },

  data() {
    return {
      currentMessage: "",
    };
  },
  methods: {
    sendReply(reply: string) {
      const payload = {
        id: this.$store.state.chatModule.conversations.length,
        from: this.$store.state.chatModule.currentUser,
        message: reply,
        date: new Date(),
      };

      this.$store.commit("addConversation", payload);
      (this.$refs.conversationArea as any).scrollToBottom();
    },
  },
  mounted() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("getConversations");
  },
});
</script>

<template>
  <div class="chat-box-container">
    <ConversationArea ref="conversationArea" />
    <ComposeSection v-model="currentMessage" @submit="sendReply" />
  </div>
</template>

<style>
.chat-box-container {
  margin: 0 auto;
  max-width: 500px;
  max-height: 400px;
}
</style>
