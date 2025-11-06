<template>
  <!--  Message -->
  <div v-if="itsMine" class="flex justify-end">
    <div data-test-id="MineChatBubbleMessage" class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Received Message -->
  <div v-else class="flex">
    <div data-test-id="chatBubbleMessage" class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize"> {{ message }}</span>
      <img v-if="image" :src="image" class="w-52 h-52 object-cover rounded" alt="YesNoResp" />
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
