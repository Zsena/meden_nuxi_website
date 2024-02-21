<template>
    <div :class="['card', bgColor]" class=" p-4 text-gray-950 w-[300px]">
      <h3 class="text-h4 lg:text-h5 xl:text-h4 text-center mt-8 uppercase p-4 ">{{ title }}</h3>

      <ol class="list-disc ml-8 p-4 mb-8">
      <li class="pl-8 py-2">{{ list1 }}</li>
      <li class="pl-8 py-2">{{ list2 }}</li>
      <li class="pl-8 py-2">{{ list3 }}</li>
      <li class="pl-8 py-2">{{ list4 }}</li>
      </ol>

    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title:String,
    list1:String,
    list2:String,
    list3:String,
    list4:String,
    bgColor: String, 
    url:String,

  });
  

  
  </script>
  
  <style>
  .card {
    border-radius: 1rem 1rem 1rem 0rem;
 
  }

  </style>

