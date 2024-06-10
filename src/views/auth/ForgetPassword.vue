<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Auth', 'Forget Password']" />

    <div class="card min-h-[78vh] p-16">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20">
        <!-- Left Side  -->
        <div class="max-w-[700px] px-10">
          <div class="mb-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">
              T-Admin, Authentication
            </h3>
            <p class="text-xs font-normal text-gray-700 dark:text-gray-100">
              Welcome, Back to the T-admin
            </p>
          </div>
          <div class="text-end">
            <img
              class="w-full"
              src="../../assets/images/Illustration/forgot_password.svg"
              alt="Login Svg"
            />
          </div>
        </div>

        <!-- Right Side  -->
        <div class="w-full">
          <div class="mb-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">
              Forgot password?
            </h3>
            <p class="text-xs font-normal text-gray-700 dark:text-gray-100">
              No worries, we'll send you reset instructions.
            </p>
          </div>

          <form
            class="p-6 border border-gray-300 dark:border-gray-400 rounded-md"
          >
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="example@app.com"
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
      </div>
    </div>
  </MainLayout>
</template>
