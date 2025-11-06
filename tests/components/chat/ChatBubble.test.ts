import { mount } from '@vue/test-utils';
import { test, describe, expect } from 'vitest';
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('<ChatBubble />', () => {
  test('render own message ok', () => {
    const message = 'Hola mundo';

    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });

    expect(wrapper.find('[data-test-id="MineChatBubbleMessage"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="MineChatBubbleMessage"]').text()).toContain(message);
    expect(wrapper.find('[data-test-id="chatBubbleMessage"]').exists()).toBeFalsy();
  });

  test('render not mine message ok', () => {
    const data = {
      message: 'yes',
      itsMine: false,
    };         

    const wrapper = mount(ChatBubble, {
      props: data
    });

    console.log(wrapper.html())

    expect(wrapper.find('[data-test-id="chatBubbleMessage"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="chatBubbleMessage"] img').exists()).toBeFalsy();
    expect(wrapper.find('[data-test-id="chatBubbleMessage"]').text()).toContain(data.message);
    expect(wrapper.find('[data-test-id="MinechatBubbleMessage"]').exists()).toBeFalsy();
  });

  test('render not mine message with image ok', () => {
    const data = {
      message: 'yes',
      itsMine: false,
      image:'imagen.jpg'
    };         

    const wrapper = mount(ChatBubble, {
      props: data
    });

    console.log(wrapper.html())

    expect(wrapper.find('[data-test-id="chatBubbleMessage"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="chatBubbleMessage"] img').exists()).toBe(true);
    expect(wrapper.find('[data-test-id="chatBubbleMessage"] img').isVisible()).toBe(true);
    expect(wrapper.find('[data-test-id="chatBubbleMessage"] img').attributes('src')).toContain(data.image);
    expect(wrapper.find('[data-test-id="chatBubbleMessage"]').text()).toContain(data.message);
    expect(wrapper.find('[data-test-id="MinechatBubbleMessage"]').exists()).toBeFalsy();
  });
});
