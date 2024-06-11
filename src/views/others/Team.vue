<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue"; 
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Others', 'Teams']" />

    <div class="card p-8">
      <div class="space-y-2">
        <h3 class="text-lg font-medium dark:text-gray-50">Our Team</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <div class="flex flex-col items-center pb-5">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="../../assets/images/users/user-01.png"
                alt="Bonnie image"
              />
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                John Doe
              </h5>

              <span class="text-sm text-gray-500 dark:text-gray-200">
                Visual Designer
              </span>

              <div class="flex mt-4 md:mt-6 gap-x-3">
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-facebook-circle-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-twitter-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-instagram-fill ri-2x"></i> 
                </a>
              </div>
            </div>
          </div>

          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <div class="flex flex-col items-center pb-5">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="../../assets/images/users/user-02.png"
                alt="Bonnie image"
              />
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                Lisa Elejabet
              </h5>

              <span class="text-sm text-gray-500 dark:text-gray-200">
                Visual Designer
              </span>

              <div class="flex mt-4 md:mt-6 gap-x-3">
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-facebook-circle-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-twitter-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-instagram-fill ri-2x"></i> 
                </a>
              </div>
            </div>
          </div>

          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <div class="flex flex-col items-center pb-5">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="../../assets/images/users/user-03.png"
                alt="Bonnie image"
              />
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                John Smith
              </h5>

              <span class="text-sm text-gray-500 dark:text-gray-200">
                Visual Designer
              </span>

              <div class="flex mt-4 md:mt-6 gap-x-3">
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-facebook-circle-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-twitter-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-instagram-fill ri-2x"></i> 
                </a>
              </div>
            </div>
          </div>

          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <div class="flex flex-col items-center pb-5">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="../../assets/images/users/user-04.png"
                alt="Bonnie image"
              />
              <h5
                class="mb-1 text-xl font-medium text-gray-900 dark:text-white"
              >
                Goddy Watson
              </h5>

              <span class="text-sm text-gray-500 dark:text-gray-200">
                Visual Designer
              </span>

              <div class="flex mt-4 md:mt-6 gap-x-3">
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-facebook-circle-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-twitter-fill ri-2x"></i> 
                </a>
                <a href="#" class="font-medium text-gray-500 dark:text-gray-50">
                  <i class="ri-instagram-fill ri-2x"></i> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
