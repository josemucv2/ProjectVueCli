<template>
  <div class="relative flex justify-center" >
    <p class="label mb-2">{{ label }}</p>
    <vs-input
      class="input-central"
      v-model="value"
      :placeholder="placeholder"
      v-on:keyup.enter="action"
      :type="type"
      :disabled="disabled"
    />
    <div class="max flex" v-if="amount">
      <span class="currency-indicator">{{ short_name }}</span>
      <span class="max-button ml-3" v-if="max" @click="$emit('maxAmount')"
        >Max</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
      default: "",
    },
    short_name: {
      type: String,
      required: false,
      default: "USD",
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    valueTo: {
      type: String,
      required: false,
      default: "",
    },
    amount: {
      type: Boolean,
      required: false,
      default: false,
    },
    max: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    currency: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    action() {
      this.$emit("action");
    },
  },
  mounted() {
    this.value = this.valueTo ? this.valueTo : "";
  },
  watch: {
    value() {
      this.$emit("value", this.value);
    },
    valueTo() {
      this.value = this.valueTo;
    },
  },
};
</script>

<style>
.max {
  position: absolute;
  right: 20px;
  top: 35px;
}

.currency-indicator {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  /* identical to box height */

  /* SimpleText */

  color: #3f3f3f;
}

.max-button {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Primary */

  color: #29bb89;
  cursor: pointer;
}

.label {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  /* Fonts Gray */

  color: #585858;
}
</style>
