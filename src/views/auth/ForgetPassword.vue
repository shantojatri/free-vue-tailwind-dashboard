<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Auth', 'Forget Password']"/>

    <div class="card p-16">
      <form class="max-w-sm mx-auto p-8 border">
        <div class="mb-5 text-center">
          <h3 class="text-lg font-medium">Forgot password?</h3>
          <p class="text-sm font-normal mt-4">No worries, we'll send you reset instructions.</p>           
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
            placeholder="mail@example.com"
            required
          />
        </div> 
        <button
          type="submit"
          class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Reset Password
        </button>
      </form>
    </div>
  </MainLayout>
</template>
