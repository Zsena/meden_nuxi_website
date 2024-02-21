<script setup lang="ts">
const title = ref("Főoldal");
</script>

<template>
  <main class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
     <Hero />
    <section class="min-h-[700px]">

    </section>
  </main>
</template>
