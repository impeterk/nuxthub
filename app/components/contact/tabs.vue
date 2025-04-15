<template>
  <Tabs default-value="contact" class="w-full">
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
    <TabsContent value="book"> <ContactBook /> </TabsContent>
  </Tabs>
</template>
