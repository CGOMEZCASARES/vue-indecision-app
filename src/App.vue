<template>
  <h1 class="text-3xl font-bold underline">Mi primera app</h1>
  <hr />
  <MyCounter :value="2" text="hola" />
  <MyCounterScript :value="3" />
  <MyCounterScript2 :value="4" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
