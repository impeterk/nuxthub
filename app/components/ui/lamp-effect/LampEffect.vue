<template>
  <div
    :class="
      cn(
        'bg-background relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md',
        $props.class
      )
    "
  >
    <div class="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
      <div
        :style="{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto right-1/2 h-56 w-60 overflow-visible from-indigo-400 via-transparent to-transparent text-white opacity-50 [--conic-position:from_70deg_at_center_top] dark:from-indigo-500"
      >
        <div
          class="bg-background absolute bottom-0 left-0 z-20 h-40 w-full [mask-image:linear-gradient(to_top,white,transparent)]"
        />
        <div
          class="bg-background absolute bottom-0 left-0 z-20 h-full w-40 [mask-image:linear-gradient(to_right,white,transparent)]"
        />
      </div>

      <div
        :style="{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }"
        class="animate-conic-gradient bg-gradient-conic absolute inset-auto left-1/2 h-56 w-60 from-transparent via-transparent to-indigo-400 text-white opacity-50 [--conic-position:from_290deg_at_center_top] dark:to-indigo-500"
      >
        <div
          class="bg-background absolute right-0 bottom-0 z-20 h-full w-40 [mask-image:linear-gradient(to_left,white,transparent)]"
        />
        <div
          class="bg-background absolute right-0 bottom-0 z-20 h-40 w-full [mask-image:linear-gradient(to_top,white,transparent)]"
        />
      </div>

      <div
        class="bg-background absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"
      ></div>

      <div
        class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"
      ></div>

      <div
        class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-indigo-400 opacity-50 blur-3xl dark:bg-indigo-500"
      ></div>

      <div
        class="animate-spotlight absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-indigo-400 blur-2xl"
      ></div>

      <div
        class="animate-glowing-line absolute inset-auto z-50 h-0.5 w-60 max-w-[calc(100vw-2*0.5rem)] -translate-y-28 bg-indigo-400"
      ></div>

      <div
        :class="
          cn(
            'bg-background absolute inset-auto z-40 h-44 w-full translate-y-[-12.5rem]',
            props.aboveClass
          )
        "
      >
        <slot name="above" />
      </div>
    </div>

    <div
      :class="cn('relative z-50 flex -translate-y-80 flex-col items-center px-5', props.defClass)"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, type HTMLAttributes } from 'vue'
  import { cn } from '@/lib/utils'

  interface LampEffectProps {
    delay?: number
    duration?: number
    class?: HTMLAttributes['class']
    aboveClass?: string
    defClass?: string
  }

  const props = withDefaults(defineProps<LampEffectProps>(), {
    delay: 0.5,
    duration: 0.8,
  })

  const durationInSeconds = computed(() => `${props.duration}s`)
  const delayInSeconds = computed(() => `${props.delay}s`)
</script>

<style scoped>
  /* Spotlight Animation */
  .animate-spotlight {
    animation: spotlight-anim ease-in-out v-bind(durationInSeconds) forwards;
    animation-delay: v-bind(delayInSeconds);
  }

  /* Glowing Line Animation */
  .animate-glowing-line {
    animation: glowing-line-anim ease-in-out v-bind(durationInSeconds) forwards;
    animation-delay: v-bind(delayInSeconds);
  }

  /* Conic Gradient Animation */
  .animate-conic-gradient {
    animation: conic-gradient-anim ease-in-out v-bind(durationInSeconds) forwards;
    animation-delay: v-bind(delayInSeconds);
  }

  /* Keyframes for Spotlight */
  @keyframes spotlight-anim {
    from {
      width: 8rem;
    }
    to {
      width: 16rem;
    }
  }

  /* Keyframes for Glowing Line */
  @keyframes glowing-line-anim {
    from {
      width: 15rem;
    }
    to {
      width: 30rem;
    }
  }

  /* Keyframes for Conic Gradient */
  @keyframes conic-gradient-anim {
    from {
      opacity: 0.5;
      width: 15rem;
    }
    to {
      opacity: 1;
      width: 30rem;
    }
  }
</style>
