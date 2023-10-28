<script lang="ts">
import ComposeSection from "./ComposeSection.vue";
import ConversationArea from "./ConversationArea.vue";

export default {
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
    },
  },
  mounted() {
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("getConversations");
  },
};
</script>

<template>
  <div class="chat-box-container">
    <ConversationArea />
    <ComposeSection v-model="currentMessage" @submit="sendReply" />
  </div>
</template>

<style>
.chat-box-container {
  max-width: 500px;
  max-height: 400px;
}
</style>
