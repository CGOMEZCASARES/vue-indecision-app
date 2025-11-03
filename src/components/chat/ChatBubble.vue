<template>
  <!-- Example Message -->

  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div v-if="!itsMine" class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize"> {{ message }}</span>
      <img
        v-if="image"
        :src="'https://yesno.wtf/assets/no/5-73e4adfe4da265a646fe517128bb5bf2.gif'"
        class="w-52 h-52 object-cover rounded"
        alt="YesNoResp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>
