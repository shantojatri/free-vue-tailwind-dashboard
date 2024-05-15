<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const target = ref(null);
const dropdownStatus = ref(false);

onClickOutside(target, () => {
  dropdownStatus.value = false;
});

const notifications = ref([
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil vero voluptatem. Sit nesciunt sunt odit!",
    date: "12 July, 2024",
  },
]);
</script>

<template>
  <li class="relative" ref="target">
    <a href="#" @click.prevent="dropdownStatus = !dropdownStatus">
      <i class="ri-notification-4-line ri-lg"></i>
    </a>

    <!-- Dropdown  -->
    <div
      v-show="dropdownStatus"
      class="absolute -right-[.5rem] mt-[1.25rem] flex h-[25rem] w-[350px] flex-col rounded-sm border border-stroke bg-white dark:bg-neutral-600 dark:border-neutral-900"
    >
      <div class="px-5 py-3">
        <h5>Notifications</h5>
      </div>
      <ul class="flex h-auto flex-col overflow-y-auto">
        <li v-for="(notification, index) in notifications" :key="index">
          <a
            href="#"
            class="flex flex-col gap-2.5 border-t border-stroke dark:border-neutral-900 px-5 py-2 text-xs"
          >
            <p class="text-justify">
              {{ notification.title }}
            </p>
            <p class="text-gray-400">{{ notification.date }}</p>
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>
