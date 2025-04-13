<script setup lang="ts"></script>

<template>
  <section class="container mx-auto flex flex-col gap-8 px-4 md:flex-row">
    <NeonBorder class="h-full max-w-full">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>
            <h3 class="text-2xl">Get in touch</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <section>
            <p>Would you like to get in touch with me?</p>
            <p>You can leave a message, or schedule a meeting with me directly.</p>
            <p>Follow me on my socials</p>
            <div class="flex gap-4 text-4xl">
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
