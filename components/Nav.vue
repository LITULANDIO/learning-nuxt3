<template>
  <div class="bg-red-600 h-25">
      <ul class="list-disc text-white">
      <li>
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'todos'}">Todos ({{ todos.length }})</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
 const { data: todos } = await useFetch(`https://jsonplaceholder.typicode.com/todos`)

</script>

<style>

</style>