<template>
  <section>
    <h2>Contador con script en src</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareConuter }}</h3>
    <hr />
    <div>
      <button class="btn mr-3" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>
<style scoped>
.btn {
  @apply py-2 px-5 bg-violet-500 min-w-10 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
}
</style>
