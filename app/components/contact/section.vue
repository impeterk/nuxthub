<script setup lang="ts"></script>

<template>
  <section class="container mx-auto grid grid-flow-row gap-8 px-4 lg:grid-flow-col">
    <NeonBorder
      class="h-full max-w-full"
      :animation-type="'full'"
      :duration="18"
      color1="var(--primary)"
      color2="var(--primary)"
    >
      <Card class="h-full w-full">
        <CardHeader>
          <CardTitle>
            <h3 class="text-2xl">Get in touch</h3>
          </CardTitle>
        </CardHeader>
        <CardContent class="h-full">
          <section class="flex h-full flex-col items-center">
            <p>Would you like to get in touch with me?</p>
            <p>You can leave a message, or schedule a meeting with me directly.</p>
            <p>Follow me on my socials</p>
            <div class="mx-auto mt-8 flex gap-4 text-4xl lg:mt-auto lg:mb-10">
              <Icon name="mdi:linkedin" />
              <Icon name="mdi:github" />
              <Icon name="mdi:instagram" />
            </div>
          </section>
        </CardContent>
      </Card>
    </NeonBorder>
    <ContactTabs class="shrink-0" />
  </section>
</template>

<style scoped></style>
