<template>
  <section>
    <h2>Contador con script en src</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareConuter }}</h3>
    <hr />
    <div>
      <button @click="incrementCounter()">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>
