import { computed, ref } from 'vue';

export const useCounter = (numb: number = 5) => {
  const counter = ref(numb);

  return {
    counter: ref(counter),
    squareConuter: computed(() => counter.value * counter.value),
  };
};
