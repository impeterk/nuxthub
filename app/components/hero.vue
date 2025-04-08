<script setup lang="ts">
  import src from '~/assets/AboutMeNoBg.avif'
</script>
<template>
  <div class="bg-background relative grid h-1/2 w-full grid-cols-1 grid-rows-1 rounded-lg border">
    <ClientOnly>
      <FlickeringGrid
        class="relative inset-0 z-0"
        :square-size="4"
        :grid-gap="4"
        color="#60A5FA"
        :max-opacity="0.2"
        :flicker-chance="0.6"
      />
    </ClientOnly>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <ParticleImage :image-src="src" :mouse-force="'15'" class="h-full" canvas-height="400" />
    </div>
  </div>
</template>
