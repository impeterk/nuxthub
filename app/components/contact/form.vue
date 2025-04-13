<script setup lang="ts"></script>

<template>
  <Card>
    <CardHeader>
      <CardTitle> Get in touch </CardTitle>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-1">
        <Label>Name</Label>
        <Input name="name" type="text" required />
      </div>
      <div class="space-y-1">
        <Label>Email</Label>
        <Input name="email" type="email" required />
      </div>

      <div class="space-y-1">
        <Label>Message</Label>
        <Textarea name="message" required :rows="5"></Textarea>
      </div>
    </CardContent>
    <CardFooter>
      <Button class="w-full"> <Icon name="lucide:send" /> Send Message</Button>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
