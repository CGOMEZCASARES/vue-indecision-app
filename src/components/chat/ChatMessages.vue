<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chatRef">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message?.image"
      ></ChatBubble> -->

      <!-- forma corta -->

      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message"></ChatBubble>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();
const chatRef = ref<HTMLDivElement | null>(null);

watch(
  props.messages,
  () => {
    setTimeout(() => {
      console.log('message cambio', props.messages.length);
      console.log('ventana', chatRef.value?.scrollHeight);

      chatRef.value?.scrollTo({
        top: chatRef.value?.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  },
  { deep: true },
);
</script>
