import { test, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 0,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
    console.log(wrapper.html());
  });

  test('render counter value correctly', () => {
    const val = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: val,
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    console.log(wrapper.find('h3').text());
    expect(wrapper.find('h3').text()).toContain(`Counter: ${val}`);
    expect(wrapper.find('[data-test-id="square-info"]').text()).toContain(`Square: ${val * val}`);

    expect(counterLabel?.text()).toContain(`Counter: ${val}`);
    expect(squareLabel?.text()).toContain(`Square: ${val * val}`);
  });

  // añado en este test async para poder usar 
  // promesas como la del evento click con await
  test('increments value +1', async() => {
    const val = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: val,
      },
    });

    const btnIncrement = wrapper.find('button');
    console.log(btnIncrement)
    await btnIncrement.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel?.text()).toContain(`Counter: ${val + 1}`);
    expect(squareLabel?.text()).toContain(`Square: ${(val+1) * (val+1)}`);
 
  });
    // promesas como la del evento click con await
  test('decrements value -2', async() => {
    const val = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: val,
      },
    });

    //const decrementsButton = wrapper.findAll('button')[1];
    const [,decrementsButton] = wrapper.findAll('button');
   
    console.log(decrementsButton)
    await decrementsButton?.trigger('click');
    await decrementsButton?.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel?.text()).toContain(`Counter: ${val - 2}`);
    expect(squareLabel?.text()).toContain(`Square: ${(val-2) * (val-2)}`);
 
  });
});
