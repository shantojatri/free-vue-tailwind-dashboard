<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Users', 'Update Password']" />

    <div class="card p-8">
      <div class="space-y-2">
        <h3 class="text-lg font-medium dark:text-gray-50">Update Password</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <form>
              <div class="mb-3">
                <label
                  for="old_password"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >Old Password</label
                >
                <input
                  type="password"
                  id="old_password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="Enter old password ..."
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="new_password"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >New Password</label
                >
                <input
                  type="password"
                  id="new_password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="Enter new password ..."
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="confirm_password"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  id="confirm_password"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="Enter confirm password ..."
                  required
                />
              </div>

              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
