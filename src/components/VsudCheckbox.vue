<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="id" class="custom-control-label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "VsudCheckbox",
  props: {
    name: { type: String, default: "" },
    id: { type: String, default: "" },
    modelValue: { type: Boolean, default: false, required: false },
    checked: { type: Boolean },
  },
  emits: ["update:modelValue"],
};
</script>
