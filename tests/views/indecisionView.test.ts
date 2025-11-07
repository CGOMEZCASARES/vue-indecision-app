import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/indecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

const mockChatMessages = {
    template: `<div data-test-id="mockChatMessages">Mock Chat</div> `,
};

describe('<IndecisionView />', () => {
  test('Render ok', () => {
    const wrapper = mount(IndecisionView);
    const chatMessagesComponent = wrapper.findComponent(ChatMessages);
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent({ name: 'ChatMessages' }));
    expect(chatMessagesComponent.exists()).toBe(true);
    expect(messageBoxComponent.exists()).toBe(true);
  });

  test('call onMessage when sendin a message', async () => {

    // cambio el componente para hacerlo mas sencillo ya que no es 
    // lo que me interesa testear
    const wrapper = mount(IndecisionView,
        {
            global: {
                stubs: {
                    ChatMessages: mockChatMessages,
                }
            }
        }
    );
    // const chatMessagesComponent = wrapper.findComponent(ChatMessages);
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    vi.useFakeTimers();
    messageBoxComponent.vm.$emit('sendMessage', 'Hola mundo!');

    vi.advanceTimersByTime(1500);

    console.log(wrapper.html())

    expect(wrapper.html()).toMatchSnapshot();

    vi.useRealTimers();
  });
});
