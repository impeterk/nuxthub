<script setup lang="ts">
  const route = useRoute()
  const activeTab = route.query.tab || 'contact'
</script>
<template>
  <Tabs :default-value="activeTab" class="w-full">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="contact" asChild>
        <NuxtLink to="?tab=contact">
          <Icon name="lucide:send" />
          Get in touch
        </NuxtLink>
      </TabsTrigger>
      <TabsTrigger value="book" asChild>
        <NuxtLink to="?tab=book">
          <Icon name="lucide:calendar-check" />
          Book a meeting
        </NuxtLink>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="contact"><ContactForm /></TabsContent>
    <TabsContent value="book"> <ContactBook /> </TabsContent>
  </Tabs>
</template>
