<script setup lang="ts"> 
import UserDropdown from "../Common/UserDropdown.vue";
import NotificationDropdown from "../Common/NotificationDropdown.vue";
import MessageDropdown from "../Common/MessageDropdown.vue";
import ThemeDropdown from "../Common/ThemeDropdown.vue";

</script>

<template>
  <header class="sticky top-0 z-999 flex w-full bg-white shadow-md">
    <div
      class="flex flex-1 items-center bg-gray-50 justify-between px-5 text-gray-700"
    >
      <!-- Left area -->
      <div class="flex gap-x-3 items-center">
        <div>
          <i class="ri-menu-2-fill ri-lg"></i>
        </div>
        <div
          class="border border-gray-300 rounded overflow-hidden flex items-center px-2"
        >
          <i class="ri-search-line ri-lg pr-2"></i>
          <input
            type="text"
            class="px-4 py-2 border-0"
            placeholder="Type to search..."
          />
        </div>
      </div>

      <!-- Right area -->
      <ul class="flex gap-x-5 items-center py-3">
        <!-- Dark/Light mood -->
        <ThemeDropdown/>

        <!-- Notifications -->
        <NotificationDropdown/>

        <!-- Messages -->
        <MessageDropdown/>

        <!-- User Profile -->
        <UserDropdown />
      </ul>
    </div>
  </header>
</template>
