<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import User1 from "../../assets/images/users/user-01.png";

const target = ref(null);
const dropdownStatus = ref(false);

onClickOutside(target, () => {
  dropdownStatus.value = false;
});

const logoutHandler = () => {
  console.log("Logout from profile area");
};
</script>

<template>
  <div class="mx-2 relative" ref="target">
    <a
      href="#"
      class="flex gap-x-2"
      @click.prevent="dropdownStatus = !dropdownStatus"
    >
      <div>
        <h4 class="text-sm font-semibold">John Doe</h4>
        <p class="text-xs">Admin</p>
      </div>
      <img :src="User1" alt="profile image" width="40" class="rounded-full" />
    </a>

    <!-- Dropdown  -->
    <div
      v-show="dropdownStatus"
      class="absolute -right-[.25rem] mt-[.75rem] flex h-[11rem] w-[220px] flex-col rounded-sm border border-stroke bg-white"
    >
      <ul class="flex h-auto flex-col overflow-y-auto py-1">
        <!-- Messages -->
        <li>
          <a
            href="#"
            class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600"
          >
            <i class="ri-user-4-line ri-lg"></i>
            <h5 class="text-md font-normal">My Profile</h5>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600"
          >
            <i class="ri-lock-2-line ri-lg"></i>
            <h5 class="text-md font-normal">Update Password</h5>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex gap-2 px-5 py-2 items-center hover:text-indigo-600"
          >
            <i class="ri-settings-5-line ri-lg"></i>
            <h5 class="text-md font-normal">Settings</h5>
          </a>
        </li>
        <li class="mt-1">
          <a
            @click.prevent="logoutHandler"
            class="flex gap-2 border-t border-stroke px-5 py-2 items-center cursor-pointer hover:text-indigo-600"
          >
            <i class="ri-logout-circle-r-line ri-lg"></i>
            <h5 class="text-md font-normal">Logout</h5>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
