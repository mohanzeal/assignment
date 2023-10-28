<script lang="ts">
import ChatBoxContainer from "./components/ChatBoxContainer.vue";

export default {
  components: {
    ChatBoxContainer,
  },
};
</script>

<template>
  <div id="app">
    <ChatBoxContainer />
  </div>
</template>

<style>
#scroller * {
  overflow-anchor: none;
}

#anchor {
  overflow-anchor: auto;
  height: 1px;
}
</style>
