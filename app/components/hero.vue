<script setup lang="ts">
  // import src from '~/assets/AboutMeNoBg.avif'
</script>
<template>
  <div class="relative isolate bg-transparent">
    <ClientOnly>
      <HeroImage />
    </ClientOnly>

    <LampEffect>
      <span>
        <ClientOnly fallback-tag="div">
          <template #fallback>
            <div class="size-12 bg-transparent" />
          </template>
          <TextGenerateEffect
            words="Nuxt is an open source framework that makes web development intuitive and powerful.Create performant and production-grade full-stack web apps and websites with confidence."
          />
        </ClientOnly>
      </span>
    </LampEffect>
  </div>
</template>
