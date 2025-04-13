<script setup lang="ts">
  // import src from '~/assets/AboutMeNoBg.avif'
</script>
<template>
  <section class="relative isolate min-h-[50vh] overflow-x-hidden bg-transparent font-sans">
    <div class="container mx-auto px-4">
      <ClientOnly fallback-tag="div">
        <template #fallback>
          <div class="bg-translate aspect-square size-[250px]" />
        </template>
        <HeroImage />
      </ClientOnly>
      <ClientOnly>
        <FlickeringGrid
          class="pointer-events-none absolute top-0 left-0 z-0 h-[50vh] w-screen [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(30vw_circle_at_center,white,transparent)]"
          :square-size="36"
          :grid-gap="0.5"
          color="#6366f1"
          :max-opacity="0.08"
          :flicker-chance="0.03"
        />
      </ClientOnly>

      <div class="space-y-2 text-center">
        <h1 class="text-5xl font-bold">Peterk.dev</h1>
        <h2 class="text-muted-foreground text-2xl font-semibold italic">Fullstack developer</h2>
        <TextGenerateEffect
          :delay="4"
          :duration="2"
          class="mx-auto mt-12 max-w-5xl text-xl"
          words="Scalable applications. From Figma design to Production."
        />
      </div>
    </div>
  </section>
</template>
