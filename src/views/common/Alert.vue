<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import Breadcrumb from "@/components/Partials/Breadcrumb.vue";
import BasicAlert from "@/components/Alert/BasicAlert.vue";
import BorderedAlert from "@/components/Alert/BorderedAlert.vue";
</script>

<template>
  <MainLayout>
    <!-- Breadcrumb -->
    <Breadcrumb :items="['Home', 'Common', 'Alert']" />

    <!-- Default Alert -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Basic alerts
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a basic alerts
        </p>
      </div>

      <div class="container mx-auto mt-10 space-y-5">
        <!-- Default -->
        <BasicAlert>
          <template #alert-text>
            <p>
              <strong>Default!</strong>
              This is a default alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Warning-->
        <BasicAlert colorClass="bg-yellow-300 text-yellow-900">
          <template #alert-text>
            <p>
              <strong>Warning!</strong>
              This is a warning alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Danger-->
        <BasicAlert colorClass="bg-red-300 text-red-900">
          <template #alert-text>
            <p>
              <strong>Danger!</strong>
              This is a danger alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Success-->
        <BasicAlert colorClass="bg-green-300 text-green-900">
          <template #alert-text>
            <p>
              <strong>Success!</strong>
              This is a success alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Info -->
        <BasicAlert colorClass="bg-indigo-300 text-indigo-900">
          <template #alert-text>
            <p>
              <strong>Info!</strong>
              This is a info alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Dark -->
        <BasicAlert colorClass="bg-slate-900 text-slate-50">
          <template #alert-text>
            <p>
              <strong>Dark!</strong>
              This is a dark alert!
            </p>
          </template>
        </BasicAlert>
      </div>
    </div>

    <!-- Icon Alert -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Alerts with icon
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a alerts with icon
        </p>
      </div>

      <div class="container mx-auto mt-10 space-y-5">
        <!-- Default -->
        <BasicAlert>
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-check-double-line mr-2 ri-2x"></i>
              <p>
                <strong>Default!</strong>
                This is a default alert!
              </p>
            </div>
          </template>
        </BasicAlert>

        <!-- Warning-->
        <BasicAlert colorClass="bg-yellow-300 text-yellow-900">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-error-warning-line mr-2 ri-2x"></i>
              <p>
                <strong>Warning!</strong>
                This is a warning alert!
              </p>
            </div>
          </template>
        </BasicAlert>

        <!-- Danger-->
        <BasicAlert colorClass="bg-red-300 text-red-900">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-prohibited-line mr-2 ri-2x"></i>
              <p>
                <strong>Danger!</strong>
                This is a danger alert!
              </p>
            </div>
          </template>
        </BasicAlert>

        <!-- Success-->
        <BasicAlert colorClass="bg-green-300 text-green-900">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-check-line mr-2 ri-2x"></i>
              <p>
                <strong>Success!</strong>
                This is a success alert!
              </p>
            </div>
          </template>
        </BasicAlert>

        <!-- Info -->
        <BasicAlert colorClass="bg-indigo-300 text-indigo-900">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-information-line mr-2 ri-2x"></i>
              <p>
                <strong>Info!</strong>
                This is a info alert!
              </p>
            </div>
          </template>
        </BasicAlert>

        <!-- Dark -->
        <BasicAlert colorClass="bg-slate-900 text-slate-50">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-checkbox-blank-circle-line mr-2 ri-2x"></i>
              <p>
                <strong>Dark!</strong>
                This is a dark alert!
              </p>
            </div>
          </template>
        </BasicAlert>
      </div>
    </div>

    <!-- Dismiss able alert -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Dismiss able alerts
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a dismiss able alerts
        </p>
      </div>

      <div class="container mx-auto mt-10 space-y-5">
        <!-- Default -->
        <BasicAlert :closeable="true">
          <template #alert-text>
            <p>
              <strong>Default!</strong>
              This is a default alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Warning-->
        <BasicAlert
          colorClass="bg-yellow-300 text-yellow-900"
          :closeable="true"
        >
          <template #alert-text>
            <p>
              <strong>Warning!</strong>
              This is a warning alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Danger-->
        <BasicAlert colorClass="bg-red-300 text-red-900" :closeable="true">
          <template #alert-text>
            <p>
              <strong>Danger!</strong>
              This is a danger alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Success-->
        <BasicAlert colorClass="bg-green-300 text-green-900" :closeable="true">
          <template #alert-text>
            <p>
              <strong>Success!</strong>
              This is a success alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Info -->
        <BasicAlert
          colorClass="bg-indigo-300 text-indigo-900"
          :closeable="true"
        >
          <template #alert-text>
            <p>
              <strong>Info!</strong>
              This is a info alert!
            </p>
          </template>
        </BasicAlert>

        <!-- Dark -->
        <BasicAlert colorClass="bg-slate-900 text-slate-50" :closeable="true">
          <template #alert-text>
            <p>
              <strong>Dark!</strong>
              This is a dark alert!
            </p>
          </template>
        </BasicAlert>
      </div>
    </div>

    <!-- Bordered Basic Alert -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Bordered alerts
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a bordered alerts
        </p>
      </div>

      <div class="container mx-auto mt-10 space-y-5">
        <!-- Default -->
        <BorderedAlert>
          <template #alert-text>
            <p>
              <strong>Default!</strong>
              This is a default alert!
            </p>
          </template>
        </BorderedAlert>

        <!-- Warning-->
        <BorderedAlert
          colorClass="bg-yellow-100 text-yellow-900 border-yellow-500"
        >
          <template #alert-text>
            <p>
              <strong>Warning!</strong>
              This is a warning alert!
            </p>
          </template>
        </BorderedAlert>

        <!-- Danger-->
        <BorderedAlert colorClass="bg-red-100 text-red-900 border-red-500">
          <template #alert-text>
            <p>
              <strong>Danger!</strong>
              This is a danger alert!
            </p>
          </template>
        </BorderedAlert>

        <!-- Success-->
        <BorderedAlert
          colorClass="bg-green-100 text-green-900 border-green-500"
        >
          <template #alert-text>
            <p>
              <strong>Success!</strong>
              This is a success alert!
            </p>
          </template>
        </BorderedAlert>

        <!-- Info -->
        <BorderedAlert
          colorClass="bg-indigo-100 text-indigo-900 border-indigo-500"
        >
          <template #alert-text>
            <p>
              <strong>Info!</strong>
              This is a info alert!
            </p>
          </template>
        </BorderedAlert>

        <!-- Dark -->
        <BorderedAlert
          colorClass="bg-slate-100 text-slate-900 border-slate-500"
        >
          <template #alert-text>
            <p>
              <strong>Dark!</strong>
              This is a dark alert!
            </p>
          </template>
        </BorderedAlert>
      </div>
    </div>

    <!-- Bordered Icon Alert -->
    <div class="card p-8 mb-10">
      <div class="mb-4">
        <h3 class="text-lg font-medium text-gray-900 dark:text-gray-50">
          Bordered icon alerts
        </h3>
        <p class="text-sm font-regular text-gray-500 dark:text-gray-400">
          Example of a bordered icon alerts
        </p>
      </div>

      <div class="container mx-auto mt-10 space-y-5">
        <!-- Default -->
        <BorderedAlert>
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-check-double-line mr-2 ri-2x"></i>
              <p>
                <strong>Default!</strong>
                This is a default alert!
              </p>
            </div>
          </template>
        </BorderedAlert>

        <!-- Warning-->
        <BorderedAlert
          colorClass="bg-yellow-100 text-yellow-900 border-yellow-500"
        >
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-error-warning-line mr-2 ri-2x"></i>
              <p>
                <strong>Warning!</strong>
                This is a warning alert!
              </p>
            </div>
          </template>
        </BorderedAlert>

        <!-- Danger-->
        <BorderedAlert colorClass="bg-red-100 text-red-900 border-red-500">
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-prohibited-line mr-2 ri-2x"></i>
              <p>
                <strong>Danger!</strong>
                This is a danger alert!
              </p>
            </div>
          </template>
        </BorderedAlert>

        <!-- Success-->
        <BorderedAlert
          colorClass="bg-green-100 text-green-900 border-green-500"
        >
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-check-line mr-2 ri-2x"></i>
              <p>
                <strong>Success!</strong>
                This is a success alert!
              </p>
            </div>
          </template>
        </BorderedAlert>

        <!-- Info -->
        <BorderedAlert
          colorClass="bg-indigo-100 text-indigo-900 border-indigo-500"
        >
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-information-line mr-2 ri-2x"></i>
              <p>
                <strong>Info!</strong>
                This is a info alert!
              </p>
            </div>
          </template>
        </BorderedAlert>

        <!-- Dark -->
        <BorderedAlert
          colorClass="bg-slate-100 text-slate-900 border-slate-500"
        >
          <template #alert-text>
            <div class="flex items-center">
              <i class="ri-checkbox-blank-circle-line mr-2 ri-2x"></i>
              <p>
                <strong>Dark!</strong>
                This is a dark alert!
              </p>
            </div>
          </template>
        </BorderedAlert>
      </div>
    </div>
  </MainLayout>
</template>
