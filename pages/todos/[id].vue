<template>
<div>
  TODO ID - {{ route.params.id }}
  {{ todos }}
</div>
</template>

<script setup>

const route = useRoute()
 const { data: todos } = await useFetch(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`, {
     pick: ['id', 'title']
 })
useMeta({ title: `Todo - ${route.params.id}` })


</script>

<style>

</style>