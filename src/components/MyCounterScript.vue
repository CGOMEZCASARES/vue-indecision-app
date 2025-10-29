<template>
  <section>
    <h2>Mi contador script</h2>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareConuter }}</h3>
    <hr />
    <div>
      <button @click="incrementCounter()">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareConuter = computed(() => counter.value * counter.value);
    const incrementCounter = () => {
      counter.value++;
    };
    const decrementCounter = () => {
      if (counter.value === 0) return;
      counter.value--;
    };

    return { counter, squareConuter, incrementCounter, decrementCounter };
  },
});
</script>
