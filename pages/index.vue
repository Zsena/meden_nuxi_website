<script setup lang="ts">
const title = ref('Főoldal')
</script>

<template>
  <div class="h-screen">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <Hero />
    <h1 class="mt-32">{{ title }}</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>