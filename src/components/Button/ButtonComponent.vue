<template>
  <vs-button class="button-central" :disabled="disabled" @click="action">
    {{ label }}
  </vs-button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    action() {
      this.$emit("action");
    },
  },
};
</script>

<style>
.button-central {
  background-color: rgba(87, 225, 87, 0.75);
  border-radius: 8px;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 40px;
}
</style>
