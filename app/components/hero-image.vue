<script setup lang="ts">
  import src from '~/assets/RiTerminalFill.png'

  const colorMode = useColorMode()
  const color = computed(() => (colorMode.value === 'dark' ? '#f8fafc' : '#020618'))
</script>
<template>
  <div class="absolute top-0 left-0 z-100 flex w-full items-center justify-center">
    <ClientOnly fallback-tag="div">
      <template #fallback>
        <div class="bg-translate aspect-square h-[250px]" />
      </template>
      <div class="bg-transparent" :key="color">
        <ParticleImage
          :image-src="src"
          :color
          :particle-size="'1.25'"
          particle-gap="2"
          renderer="webgl"
          :mouse-force="'10'"
          canvas-height="275"
          :responsive-width="true"
        />
      </div>
    </ClientOnly>
  </div>
</template>
