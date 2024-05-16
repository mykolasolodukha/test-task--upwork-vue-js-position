<template>
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)" />
      </span>
      <input
        :id="id"
        :type="type"
        class="form-control"
        :class="getClasses(size, valid)"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :required="isRequired"
        @input="event => $emit('update:modelValue', event.target.value)"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VsudInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    icon: { type: String, default: "" },
    iconDir: { type: String, default: "" },
    name: { type: String, default: "" },
    id: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "" },
    isRequired: Boolean,
  },
  emits: ["update:modelValue"],
  methods: {
    getClasses: (size, valid) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
    hasIcon: (icon) => (icon ? "input-group" : null),
  },
};
</script>
