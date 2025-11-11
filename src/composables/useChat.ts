import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoRespose } from '@/interfaces/yes-no-response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getMessageResponse = async () => {
    // llamada http
    const resp = await fetch('https://yesno.wtf/api');
    const data: YesNoRespose = (await resp.json()) as YesNoRespose;
    console.log(data, 'data:');
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length == 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const { answer, image } = await getMessageResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
    //if (text.charAt(-1) == '?') getMessageResponse();
  };

  return { messages, onMessage };
};
