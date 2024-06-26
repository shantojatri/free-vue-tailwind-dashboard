<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import { useToast, POSITION  } from "vue-toastification";

const toast = useToast();
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Common', 'Toast']" />

    <!-- Default toast -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Default toast
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a default toast
        </p>
      </div>

      <button
        @click="toast('This is default toast!')"
        class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      >
        Show Toast
      </button>
    </div>

    <!-- Toast placement -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Toast placement
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of different placement of toast
        </p>
      </div>

      <div class="space-x-2">
        <button
          @click="toast('This is default toast!')"
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Top Right
        </button>

        <button
          @click="toast('This is default toast!', { position: POSITION.TOP_CENTER })"
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Top Center
        </button>

        <button
          @click="toast('This is default toast!', { position: POSITION.TOP_LEFT })"
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Top left
        </button>

        <button
          @click="toast('This is default toast!', { position: POSITION.BOTTOM_RIGHT })"
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Bottom Right
        </button>

        <button
          @click="
            toast('This is default toast!', { position: POSITION.BOTTOM_CENTER })
          "
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Bottom Center
        </button>

        <button
          @click="toast('This is default toast!', { position: POSITION.BOTTOM_LEFT })"
          class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Bottom Left
        </button>
      </div>
    </div>

    <!-- Different types of toast -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Toast type
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of different types of toast
        </p>
      </div>

      <div class="space-x-2">
        <button
          @click="toast.success('This is success toast!')"
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Success Toast
        </button>

        <button
          @click="toast.error('This is error toast!')"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Error Toast
        </button>

        <button
          @click="toast.warning('This is success toast!')"
          class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Warning Toast
        </button>

        <button
          @click="toast.info('This is success toast!')"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Info Toast
        </button>
      </div>
    </div>

    <!-- Closeable toast -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Closeable toast
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of closeable toast
        </p>
      </div>

      <div class="space-x-2">
        <button
          @click="
            toast.success('This is success toast!', { closeButton: 'button' })
          "
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Success Toast
        </button>

        <button
          @click="
            toast.error('This is error toast!', { closeButton: 'button' })
          "
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Error Toast
        </button>

        <button
          @click="
            toast.warning('This is success toast!', { closeButton: 'button' })
          "
          class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Warning Toast
        </button>

        <button
          @click="
            toast.info('This is success toast!', { closeButton: 'button' })
          "
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Info Toast
        </button>
      </div>
    </div>

    <!-- Toast with progress -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Toast with progress
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of toast with progress
        </p>
      </div>

      <div class="space-x-2">
        <button
          @click="
            toast.success('This is success toast!', { hideProgressBar: false })
          "
          class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Success Toast
        </button>

        <button
          @click="
            toast.error('This is error toast!', { hideProgressBar: false })
          "
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Error Toast
        </button>

        <button
          @click="
            toast.warning('This is success toast!', { hideProgressBar: false })
          "
          class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Warning Toast
        </button>

        <button
          @click="
            toast.info('This is success toast!', { hideProgressBar: false })
          "
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Info Toast
        </button>
      </div>
    </div>
  </MainLayout>
</template>
