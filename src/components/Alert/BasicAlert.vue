<script setup lang="ts">
defineProps({
  colorClass: {
    type: String,
    default: "bg-gray-200 text-gray-900",
  },
  closeable: {
    type: Boolean,
    default: false,
  } 
});

const closeAlertHandler = (event: any) => {
  event.target.parentElement.classList.add("hidden");
};
</script>

<template>
  <div :class="`flex justify-between py-4 px-8 rounded-md ${colorClass}`">
    <slot name="alert-text"></slot> 
    
    <button v-if="closeable" class="font-bold" @click="closeAlertHandler($event)">
      &#10005;
    </button>
  </div>
</template>
