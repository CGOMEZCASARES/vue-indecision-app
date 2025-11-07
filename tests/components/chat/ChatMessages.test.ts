import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const messages: ChatMessage[] = [
  {
    id: 123,
    itsMine: true,
    message: 'Hola mundo?',
  },
  {
    id: 234,
    itsMine: false,
    message: 'No!!',
    image: 'nonono.jpg',
  },
];

describe('<ChatMessage />', () => {
  const wrapper = mount(ChatMessages, {
    props: { messages },
  });
  test('render OK', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scroll afert new message ', async () => {

    vi.useFakeTimers();    
    const scrollSpy = vi.fn();
    console.log(wrapper.vm.$refs)
    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollSpy;


    await wrapper.setProps({
      messages: [
        ...messages,
        {
          id: 345,
          itsMine: true,
          message: 'Hey!',
        },
      ],
    });


    vi.advanceTimersByTime(150);

    expect(scrollSpy).toHaveBeenCalled();
    expect(scrollSpy).toHaveBeenCalledTimes(1);
    expect(scrollSpy).toHaveBeenCalledWith({
        top: expect.any(Number),
        behavior: 'smooth',
    })

    vi.useRealTimers();

  });
});
