<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import User1 from "../../assets/images/users/user-01.png";
import User2 from "../../assets/images/users/user-02.png";
import User3 from "../../assets/images/users/user-03.png";
import User5 from "../../assets/images/users/user-05.png";

const target = ref(null);
const dropdownStatus = ref(false);

onClickOutside(target, () => {
  dropdownStatus.value = false;
});

const messages = ref([
  {
    name: "Harris Johnson",
    message: "How are you?",
    time: "5 min ago",
    image: User1,
  },
  {
    name: "Maria Logan",
    message: "How are you?",
    time: "10 min ago",
    image: User2,
  },
  {
    name: "John Doe",
    message: "I will let you know",
    time: "25 min ago",
    image: User3,
  },
  {
    name: "Morgan Thomas",
    message: "In this portrait of Erickson from 1981...",
    time: "1 hr ago",
    image: User5,
  },
  {
    name: "Harris Johnson",
    message: "How are you?",
    time: "5 min ago",
    image: User1,
  },
  {
    name: "Maria Logan",
    message: "How are you?",
    time: "10 min ago",
    image: User2,
  },
  {
    name: "John Doe",
    message: "I will let you know",
    time: "25 min ago",
    image: User3,
  },
  {
    name: "Morgan Thomas",
    message: "In this portrait of Erickson from 1981...",
    time: "1 hr ago",
    image: User5,
  },
]);
</script>

<template>
  <li class="relative" ref="target">
    <a href="#" @click.prevent="dropdownStatus = !dropdownStatus">
      <i class="ri-message-2-line ri-xl"></i>
    </a>

    <!-- Dropdown  -->
    <div
      v-show="dropdownStatus"
      class="absolute -right-[.5rem] mt-[1.25rem] flex h-[25rem] w-[350px] flex-col rounded-sm border border-stroke bg-white dark:bg-neutral-600 dark:border-neutral-900"
    >
      <div class="px-5 py-3">
        <h5>Messages</h5>
      </div>
      <ul class="flex h-auto flex-col overflow-y-auto">
        <!-- Messages -->
        <li v-for="(message, index) in messages" :key="index">
          <a
            href="#"
            class="flex gap-4 border-t border-stroke dark:border-neutral-900 px-5 py-3 text-xs"
          >
            <div class="w-12 h-12 rounded-full">
              <img :src="message.image" alt="avatar" />
            </div>
            <div>
              <h5 class="text-xs font-bold">{{ message.name }}</h5>
              <p class="text-justify">{{ message.message }}</p>
              <p class="text-gray-400">{{ message.time }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <p class="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-normal text-white bg-red-500 rounded-full -top-2 -end-2 dark:border-gray-900">20</p>
  </li>
</template>
