<script lang="ts" setup>
import { AppOtp } from '@/components/app';

// const otpOne = 
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppOtp :length="5"></AppOtp>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppOtp disabled :length="5"></AppOtp>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppOtp :length="3"></AppOtp>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppOtp type="password" :length="6"></AppOtp>
    </div>
  </div>
</template>

<style scoped></style>