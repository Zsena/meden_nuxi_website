<script setup lang="ts">
// useHead({
//   title: 'Meden Épületgépészet',
//   meta: [
//     { name: 'description', content: 'My amazing site.' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
//   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
// })

// useSeoMeta({
//   ogTitle: 'Meden Épületgépészet',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: '',
//   twitterCard: 'summary_large_image',
// })


</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
