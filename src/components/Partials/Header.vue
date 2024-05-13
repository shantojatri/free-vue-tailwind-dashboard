<script setup lang="ts"></script>

<template>
  <header
    class="sticky top-0 z-999 flex w-full bg-white shadow-md"
  >
    <div
      class="flex flex-1 items-center bg-gray-50 justify-between px-5 text-gray-700"
    >
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
      <ul class="flex gap-x-5 items-center py-3">
        <li>
          <a href="#">
            <i class="ri-sun-line ri-lg"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-notification-4-line ri-lg"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-message-2-line ri-lg"></i>
          </a>
        </li>
        <div class="mx-2">
          <a href="#" class="flex gap-x-2">
            <div>
              <h4 class="text-sm font-semibold">John Doe</h4>
              <p class="text-xs">Admin</p>
            </div>
            <img
              src="https://picsum.photos/100"
              alt="profile image"
              width="40"
              class="rounded-full"
            />
          </a>
        </div>
      </ul>
    </div>
  </header>
</template>
