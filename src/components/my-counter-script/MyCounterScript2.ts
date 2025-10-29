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
