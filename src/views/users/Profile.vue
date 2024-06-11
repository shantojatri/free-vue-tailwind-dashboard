<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import User1 from "../../assets/images/users/user-01.png";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Users', 'Profile']" />

    <div class="card p-8">
      <div class="space-y-2">
        <h3 class="text-lg font-medium dark:text-gray-50">
          Profile Information
        </h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <form>
              <div class="grid gap-6 mb-3 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >First name</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >Last name</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="phone"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >Phone number</label
                >
                <input
                  type="tel"
                  id="phone"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="01XXX-XXXXXX"
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="email"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >Email address</label
                >
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="example@app.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="message"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >Your Bio</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:shadow-sm-light"
                  placeholder="Write your bio here..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </form>
          </div>

          <div
            class="w-full border dark:text-gray-50 border-gray-300 dark:border-gray-50 rounded-md p-6"
          >
            <div class="flex items-center gap-3 mb-5">
              <img
                class="w-10 h-10 rounded-full"
                :src="User1"
                alt="user-image"
              />
              <div class="font-medium dark:text-white">
                <div>John Doe</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  Admin
                </div>
              </div>
            </div>

            <form>
              <p
                class="text-sm font-medium mb-3 text-gray-900 dark:text-gray-50"
              >
                Upload Profile Image
              </p>
              <div class="flex items-center justify-center w-full mb-3">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-neutral-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-neutral-700"
                >
                  <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                  >
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

              <button
                type="submit"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
