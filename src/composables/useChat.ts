import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = (text: string) => {
    if (text.length == 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (text.charAt(-1) == '?') getMessageResponse();
  };

  const getMessageResponse = async() => {
    // llamada http
  };

  return { messages, onMessage };
};
