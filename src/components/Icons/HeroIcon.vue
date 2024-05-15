<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline';
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import { UserIcon } from '@heroicons/vue/24/outline';
import { MapPinIcon } from '@heroicons/vue/24/outline';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { WalletIcon } from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { LockClosedIcon } from '@heroicons/vue/24/outline';
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="card p-8">
    <div class="space-y-2">
      <h3 class="text-lg font-medium dark:text-gray-50">Hero Icons</h3>
      <p class="text-sm font-regular dark:text-gray-400">
        Checkout
        <a href="https://heroicons.com" class="text-indigo-600 dark:text-indigo-400 font-medium"
          >Hero Icons</a
        >
        library to find more
      </p> 
      <div
        class="flex items-center border dark:text-gray-50 border-gray-300 dark:border-gray-50 p-3 space-x-1 md:space-x-5 rounded-md"
      >
        <HomeIcon class="size-8"/> 
        <EnvelopeIcon class="size-8"/> 
        <UserIcon class="size-8"/> 
        <MapPinIcon class="size-8"/> 
        <PaperAirplaneIcon class="size-8"/> 
        <WalletIcon class="size-8"/> 
        <CheckCircleIcon class="size-8"/> 
        <LockClosedIcon class="size-8"/> 
        <ExclamationCircleIcon class="size-8"/>  
      </div>
    </div>
  </div>
</template>
