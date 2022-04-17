<template>
  <div>
      <template v-if="todos">
        <div v-for="todo in todos" :key=todo.id>
            <nuxt-link :to="{name: 'todos-id', params: { id: todo.id } }"> {{ todo.title }} </nuxt-link>
        </div>
      </template>
      <div v-else>
          Loading...
      </div>
  </div>
</template>

<script setup>
 const { data: todos } = await useAsyncData('todos', () => $fetch(`https://jsonplaceholder.typicode.com/todos`), {
     lazy: true //loading data
 })
 //const { data: todos } = await useFetch(`https://jsonplaceholder.typicode.com/todos`)

</script>

<style >

</style>