<script setup lang="ts">
  // import src from '~/assets/AboutMeNoBg.avif'
</script>
<template>
  <section class="relative isolate h-full overflow-x-hidden bg-transparent font-sans">
    <div class="container mx-auto px-4">
      <ClientOnly fallback-tag="div">
        <HeroImage />
        <FlickeringGrid
          class="absolute top-0 left-0 z-0 h-[50vh] w-screen [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(30vw_circle_at_center,white,transparent)]"
          :square-size="6"
          :grid-gap="2"
          color="#60A5FA"
          :max-opacity="0.3"
          :flicker-chance="0.03"
        />
        Peterk.dev Fullstack developer
        <TextGenerateEffect
          :delay="2"
          :duration="1.5"
          class="mx-auto max-w-5xl"
          words="Scalable applications. From intial Figma design to Production."
        />
      </ClientOnly>
    </div>
  </section>
</template>
