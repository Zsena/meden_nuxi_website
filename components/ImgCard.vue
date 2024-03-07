<template>
    <div :class="`${bgClass}`"
        class="img-card text-white h-full lg:h-fit">
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

        <NuxtImg :src="url" alt="viz-gáz" class="w-full object-cover mt-5 max-h-52 base-card-rounded" />

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