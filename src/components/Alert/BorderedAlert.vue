<script setup>
defineProps({
  colorClass: {
    type: String,
    default: "bg-gray-100 text-gray-700 border-gray-500",
  },
  closeable: {
    type: Boolean,
    default: false,
  },
});

const closeAlertHandler = (event) => {
  event.target.parentElement.classList.add("hidden");
};
</script>

<template>
  <div
    :class="`flex justify-between py-4 px-8 rounded-md border ${colorClass}`"
  >
    <slot name="alert-text"></slot>

    <button
      v-if="closeable"
      class="font-bold"
      @click="closeAlertHandler($event)"
    >
      &#10005;
    </button>
  </div>
</template>
