<template>
  <section>
    <h2>Counter</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareConuter }}</h3>
    <hr />
    <div>
      <button @click="incrementCounter()">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

/*  otra firna de hacerlo sin interfaz
const props = defineProps({
  value: { type: Number, required: true },
}); */

/* otra forma sin interdaz
const props = defineProps<{
  value: number;
}>(); */

/* pongo interrogacion para indicar que es opcional */
interface Props {
  value?: number;
  text: string;
}

const props = defineProps<Props>();

console.log('Hola mundo');
const counter = ref(props.value ?? 5);
const squareConuter = computed(() => counter.value * counter.value);
const incrementCounter = () => {
  counter.value++;
};
const decrementCounter = () => {
  if (counter.value === 0) return;
  counter.value--;
};
</script>
