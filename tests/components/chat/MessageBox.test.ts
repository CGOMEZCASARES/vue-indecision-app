import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);
  const inputMessage = wrapper.find('[data-test-id="inputMessage"]');
  const buttonSendMessage = wrapper.find('[data-test-id="inputMessageSendBtn"]');
  console.log(wrapper.emitted(), "estado inicial");
  // console.log(wrapper.html());

  test('render button and inpunt ok', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(inputMessage.exists()).toBeTruthy();
    expect(buttonSendMessage.exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="inputMessageSendBtn"] svg').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="inputMessage"]').exists()).toBeTruthy();
  });

  test('render button and inpunt ok', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(inputMessage.exists()).toBeTruthy();
    expect(buttonSendMessage.exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="inputMessageSendBtn"] svg').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="inputMessage"]').exists()).toBeTruthy();
  });

  test('emits sendMessage event on button click with message value', async () => {
    const message = 'Hola Mundo';
    await inputMessage.setValue(message);

    await buttonSendMessage.trigger('click');

    console.log(wrapper.emitted());

    // uso pop para coger el ultimo elemento del emit
    expect(wrapper.emitted().sendMessage?.pop()).toEqual([message]);
    expect((<HTMLInputElement>inputMessage.element).value).toBe('');
  });

  test('emits sendMessage event on keyp enteress.enter with message', async () => {
    const message = 'Hola Mundo';
    await inputMessage.setValue(message);

    await inputMessage.trigger('keypress.enter');

    console.log(wrapper.emitted());

    // uso pop para coger el ultimo elemento del emit
    expect(wrapper.emitted().sendMessage?.pop()).toEqual([message]);
    expect((<HTMLInputElement>inputMessage.element).value).toBe('');
  });


  // vuelvo a crear las variables para reiniciar sus valores
  test('emits sendMessage event with no message', async () => {
    
    const w = mount(MessageBox);
    console.log(w.emitted(), "estado  inicial ultimo test");
    const iM = w.find('[data-test-id="inputMessage"]');
    const bM = w.find('[data-test-id="inputMessageSendBtn"]');

    await iM.trigger('keypress.enter');
    await bM.trigger('click');
    expect(w.emitted('sendMessage')).toBeFalsy();

  });
});
