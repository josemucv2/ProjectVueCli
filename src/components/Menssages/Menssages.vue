<template>
  <div v-if="habilitar">
    <p>{{ Label }}</p>
  </div>
</template>

<script>
export default {
  name: "MessagesAlert",
  props: {
    Label: {
      type: String,
      required: true,
      default: "",
    },
    habilitar: {
      type: Boolean,

      default: false,
    },
  },
};
</script>
