<template>
  <section class="relative isolate overflow-hidden bg-black-base">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-blue-darker/40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <!-- Let's define the pattern -->
      <!-- The width and height should be double the size of a single checker -->
      <pattern
        id="pattern-checkers"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
      >
        <!-- Two instances of the same checker, only positioned apart on the `x` and `y` axis -->
        <!-- We will define the `fill` in the CSS for flexible use -->
        <!--<rect class="checker" x="0" width="1" height="100" y="0"/>
    <rect class="checker" x="100" width="100" height="1" y="100"/>-->
        <polyline points="0 10, 1000 10" fill="none" stroke="black" />
        <polyline points="10 0, 10 100" fill="none" stroke="black" />
      </pattern>

      <!-- Define the shape that will contain our pattern as the fill -->
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-checkers)"
      />
    </svg>
    <svg
      x="50%"
      y="-1"
      class="overflow-visible absolute top-0 right-1/4 base-rounded rotate-12 fill-blue-light/40"
    >
      <path
        class="cloud-float"
        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        stroke-width="0"
      ></path>
    </svg>
    <div
      class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-blue-light to-purple opacity-20"
        style="
          clip-path: polygon(
            73.6% 51.7%,
            91.7% 11.8%,
            100% 46.4%,
            97.4% 82.2%,
            92.5% 84.9%,
            75.7% 64%,
            55.3% 47.5%,
            46.5% 49.4%,
            45% 62.9%,
            50.3% 87.2%,
            21.3% 64.1%,
            0.1% 100%,
            5.4% 51.1%,
            21.4% 63.9%,
            58.9% 0.2%,
            73.6% 51.7%
          );
        "
      ></div>
    </div>
    <div
      class="mt-[-50px] flex h-screen items-center justify-center relative z-20"
    >
      <div
        class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8"
      >
        <h1 class="mt-10 h1 tracking-tight text-white">
          Épületgépészet
          <span class="text-blue-light">kivitelezés</span> szakértelemmel
          <span class="text-blue-light">Önnek</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Akár kis, akár nagy elektromos munkálatokról van szó, vállaljuk
          lakóingatlanok teljes körű elektromos újrahuzalozását, beleértve a
          falvésést, valamint a kapcsolók és világítótestek felszerelését is,
          mindezt garanciálisan.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Vállalkozásunk Víz Gáz és fűtés szerelés mellett foglalkozik gépi és magasnyomású mosóval való dugulás elhárítással valamint gépi, vegyszeres fűtés rendszer tisztítással is! 
        </p>
        <div class="mt-5 flex items-center justify-center gap-x-6">
          <NuxtLink
            href="/#celjaink"
            class="cloud-float-2 border-none text-white hover:text-purple transition-all"
            rel="noreferrer"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.78-8.841a.75.75 0 0 0-1.06 0l-1.97 1.97V.75a.75.75 0 0 0-1.5 0v6.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 10l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
