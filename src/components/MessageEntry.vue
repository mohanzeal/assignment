<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    entry: {
      type: Object,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="message-container" v-if="direction === 'left'">
    <div
      class="author-thumbnail"
      :title="`${entry.from.firstName} ${entry.from.lastName}`"
    >
      <img :src="entry.from.thumbnail" width="48px" height="48px" />
    </div>

    <div class="message-bubble" v-html="entry.message"></div>
  </div>
  <div
    v-else
    class="message-container current-user"
    :style="{
      justifyContent: 'end',
    }"
  >
    <div class="message-bubble" v-html="entry.message"></div>
    <div
      class="author-thumbnail"
      :title="`${entry.from.firstName} ${entry.from.lastName}`"
    >
      <img :src="entry.from.thumbnail" width="48px" height="48px" />
    </div>
  </div>
</template>

<style scoped>
.message-container {
  display: flex;
  width: 95%;
  align-self: flex-end;
  margin: 0;
  padding: 10px;
}

.author-thumbnail {
  width: 48px;
  height: 48px;
}
.author-thumbnail img {
  border-radius: 50%;
}
.message-bubble {
  width: 60%;
  margin: 0 12px;
  border-radius: 8px;
  padding: 8px;
  background-color: rgb(237, 236, 236);
}

.current-user .message-bubble {
  background-color: rgb(205, 205, 240);
  justify-content: end;
}
</style>
