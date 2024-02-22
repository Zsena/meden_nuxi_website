<template>
    <article :class="`small-card ${bgClass} ${textBaseColor}`">
      <p class="text-xl mt-4">{{ description }}</p>
      <NuxtLink :to="url">
        <p :class="`text-xl mt-4 font-bvpBold ${textColor}`">{{ urlTitle }}</p>
      </NuxtLink>
    </article>
  </template>
  
  <script setup>

  import {defineProps } from "vue";
  
  const props = defineProps({
    urlTitle: String,
    description: String,
    bgClass: String,
    textColor: String,
    textBaseColor: String,
    url: String,
  });
  
  </script>