<script setup lang="ts">
  import src from '~/assets/RiTerminalFill.png'

  const colorMode = useColorMode()
  const color = computed(() => (colorMode.value === 'dark' ? '#f8fafc' : '#020618'))
</script>
<template>
  <div class="flex h-[250px] w-full items-center justify-center">
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
  </div>
</template>
