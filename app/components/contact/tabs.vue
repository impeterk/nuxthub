<template>
  <Tabs default-value="contact" class="w-full max-w-lg">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="contact">
        <Icon name="lucide:send" />
        Get in touch
      </TabsTrigger>
      <TabsTrigger value="book">
        <Icon name="lucide:calendar-check" />
        Book a meeting
      </TabsTrigger>
    </TabsList>
    <TabsContent value="contact"><ContactForm /></TabsContent>
    <TabsContent value="book"> Hi </TabsContent>
  </Tabs>
</template>
