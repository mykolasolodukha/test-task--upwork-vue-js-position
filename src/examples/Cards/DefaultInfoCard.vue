<template>
  <div class="card">
    <div class="p-3 mx-4 text-center card-header">
      <div
        :class="iconBg"
        class="icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-lg"
      >
        <i class="opacity-10" :class="classIcon" aria-hidden="true" />
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center">
        {{ title }}
      </h6>
      <span class="text-xs">{{ desc }}</span>
      <hr class="my-3 horizontal dark" />
      <h5 class="mb-0">
        {{ price }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultInfoCard",
  props: {
    iconBg: {
      type: String,
      default: "bg-white",
    },
    classIcon: {
      type: String,
      required: true,
    },
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
    price: { type: String, default: "" },
  },
};
</script>
