<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: this.$props.value,
    };
  },
  methods: {
    addConversion() {
      this.$emit("submit", this.message);
    },
  },
};
</script>

<template>
  <div class="compose-section-container">
    <textarea
      placeholder="type your message here..."
      v-model="message"
    ></textarea>
    <button @click="addConversion">
      <img src="icons/send.png" />
    </button>
  </div>
</template>

<style scoped>
.compose-section-container {
  margin: 5px 0;
  min-width: 500px;
  min-height: 50px;
  border: 1px solid black;
  overflow: scroll;

  display: flex;
  align-items: center;
  justify-content: center;
}
textarea {
  width: 90%;
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 10px;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  width: 48px;
  height: 48px;
}
img {
  width: 100%;
  height: 100%;
}

textarea {
  resize: none;
  padding: 10px;
}
</style>
