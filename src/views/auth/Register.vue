<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Auth', 'Register']" />

    <div class="card min-h-[78vh] px-16 py-10">
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20">
        <!-- Left Side  -->
        <div class="w-full">
          <div class="mb-10">
            <p class="text-xs font-normal text-gray-700 dark:text-gray-100">
              Start free now
            </p>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">
              Sign Up to T-Admin Panel
            </h3>
          </div>

          <form
            class="p-6 border border-gray-300 dark:border-gray-400 rounded-md"
          >
            <div class="mb-3">
              <label
                for="fullName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Full Name</label
              >
              <input
                type="text"
                id="fullName"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="Example: John Smith"
                required
              />
            </div>
            <div class="mb-3">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="mail@example.com"
                required
              />
            </div>
            <div class="mb-3">
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Phone</label
              >
              <input
                type="tel"
                id="phone"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="01XXX-XXXXXXX"
                required
              />
            </div>
            <div class="mb-3">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                id="password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="Enter password"
                required
              />
            </div>

            <div class="mb-3">
              <label
                for="confirm_password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm Password</label
              >
              <input
                type="password"
                id="confirm_password"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                placeholder="Enter confirm password"
                required
              />
            </div>

            <div class="flex items-start mb-3">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-indigo-600 hover:underline dark:text-indigo-600"
                  >terms and conditions</a
                ></label
              >
            </div>

            <button
              type="submit"
              class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>

          <div
            class="text-sm font-normal text-gray-700 dark:text-gray-100 text-center mt-7"
          >
            <p>Already have an account?
              <RouterLink to="/login">
                Login
              </RouterLink>
            </p>
          </div>
        </div>

        <!-- Right Side  -->
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
              src="../../assets/images/Illustration/login.svg"
              alt="Login Svg"
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
