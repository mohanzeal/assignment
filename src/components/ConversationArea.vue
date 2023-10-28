<script lang="ts">
import { defineComponent } from "vue";
import MessageEntry from "./MessageEntry.vue";

export default defineComponent({
  components: {
    MessageEntry,
  },
  mounted() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 510);
  },
  methods: {
    scrollToBottom() {
      (document?.getElementById("anchor") as any).scrollIntoView(true);
    },
  },
});
</script>

<template>
  <div class="conversation-area-container" id="scroller">
    <div class="message-entry-container">
      <MessageEntry
        v-for="entry in $store.state.chatModule.conversations"
        :key="entry.id"
        :entry="entry"
        :direction="
          $store.state.chatModule.currentUser.id == entry.from.id
            ? 'right'
            : 'left'
        "
      />
    </div>
    <div id="anchor"></div>
  </div>
</template>

<style>
.conversation-area-container {
  min-width: 500px;
  min-height: 200px;
  height: 400px;
  overflow: scroll;
  border: 2px solid black;
}

.message-entry-container {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  max-width: 100%;
  justify-content: end;
}
</style>
