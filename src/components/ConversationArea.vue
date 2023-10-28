<script lang="ts">
import { defineComponent } from "vue";
import MessageEntry from "./MessageEntry.vue";

export default defineComponent({
  components: {
    MessageEntry,
  },
  methods: {
    scrollToBottom() {
      const scrollingElement = document.getElementById(
        "scroller"
      ) as HTMLElement;

      const config = { childList: true };

      const callback = function (mutationsList: any[]) {
        for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
            window.scrollTo(0, document.body.scrollHeight);
          }
        }
      };

      const observer = new MutationObserver(callback);
      observer.observe(scrollingElement, config);
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
