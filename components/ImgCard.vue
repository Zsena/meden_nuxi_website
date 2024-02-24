<template>
    <div :class="`${bgClass}`"
        class="card p-5 text-white flex-col items-center md:flex-row md:items-center md:justify-between lg:flex-col lg:items-center">
        <div>
            <h3 class=" text-start mb-3 uppercase font-semibold ">
                {{ title }}
            </h3>
            <ol class="list-disc ml-8 text-[11px] sm:text-[13px] ">
                <li class="pl-2 pb-2 uppercase">{{ list1 }}</li>
                <li class="pl-2 pb-2 uppercase">{{ list2 }}</li>
                <li class="pl-2 pb-2 uppercase">{{ list3 }}</li>
                <li class="pl-2 pb-2 uppercase">{{ list4 }}</li>
            </ol>
        </div>

        <NuxtImg :src="url" alt="viz-gáz" class="rounded-lg mx-auto" />

    </div>
</template>

<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    title: String,
    list1: String,
    list2: String,
    list3: String,
    list4: String,
    bgClass: String,
    url: String,

});

</script>