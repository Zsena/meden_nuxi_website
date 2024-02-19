<script setup lang="ts">
const title = ref('Rólunk')
</script>

<template>
  <div class="h-screen">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <!-- <Style type="text/css" children="body { background-color: blue; }" ></Style> -->
    </Head>

    <h1 class="mt-32">{{ title }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>