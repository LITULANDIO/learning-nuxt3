<template>
  <div>
       <h1 class="font-bold">Home</h1>
       <Greeting />
       {{ count }} <button @click="increment">increment</button>
  </div>
</template>

<script setup>
const { count, increment } = useCounter()

useMeta({ title: 'Home' })

</script>
