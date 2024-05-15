<script setup lang="ts">
import UserDropdown from "../Common/UserDropdown.vue";
import NotificationDropdown from "../Common/NotificationDropdown.vue";
import MessageDropdown from "../Common/MessageDropdown.vue";
import ThemeDropdown from "../Common/ThemeDropdown.vue";
</script>

<template>
  <header class="sticky top-0 z-999 flex w-full bg-white shadow-md">
    <div
      class="flex flex-1 items-center text-gray-700 dark:text-gray-50 bg-gray-50 dark:bg-neutral-600 justify-between px-5 "
    >
      <!-- Left area -->
      <div class="flex gap-x-3 items-center">
        <!-- Hamburger Menu Icon -->
        <div>
          <i class="ri-menu-2-fill ri-lg"></i>
        </div>

        <!-- Search Bar -->
        <div class="px-2 hidden md:flex">
          <div class="relative w-[20rem]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
              <i class="ri-search-line ri-lg pr-2 text-gray-400"></i>
            </div>
            <input
              type="text"
              class="w-full pl-8 pr-4 py-2 bg-gray-200 dark:bg-neutral-800 text-gray-900 font-light placeholder:text-gray-400 border border-gray-400 dark:border-neutral-800 rounded focus:outline-none focus:border-gray-900 dark:focus:border-neutral-300 focus:ring-0"
              placeholder="Type to search..."
            />
          </div>
        </div>
      </div>

      <!-- Right area -->
      <ul class="flex gap-x-5 items-center py-3">
        <!-- Dark/Light mood -->
        <ThemeDropdown />

        <!-- Notifications -->
        <NotificationDropdown />

        <!-- Messages -->
        <MessageDropdown />

        <!-- User Profile -->
        <UserDropdown />
      </ul>
    </div>
  </header>
</template>
