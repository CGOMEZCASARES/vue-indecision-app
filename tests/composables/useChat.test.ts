import { useChat } from '@/composables/useChat';
import type { YesNoRespose } from '@/interfaces/yes-no-response';
import { describe, expect, test, vi } from 'vitest';

describe('use chat', () => {
  test('add messsage (no question) ok when onMessage is called', async () => {
    const text = 'Hola mundo';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    const msg = messages.value.pop();
    expect(msg?.itsMine).toBe(true);
    expect(msg?.message).toBe(text);
    expect(msg).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('add messsage (question) ok when onMessage is called', async () => {
    // vi.useFakeTimers();
    const text = 'Hola mundo??';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    // vi.advanceTimersByTime(2000);
    await new Promise((r) => setTimeout(r, 2000));

    console.log(messages.value);
    const [myMsg, reponseMsg] = messages.value;

    expect(messages.value.length).toBe(2);

    expect(myMsg?.itsMine).toBe(true);
    expect(reponseMsg?.itsMine).toBe(false);

    expect(reponseMsg).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String),
    });

    expect(myMsg).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
    // vi.useRealTimers();
  });

  test('question with mock response ', async () => {
    const mockResponse: YesNoRespose = {
      answer: 'no',
      forced: false,
      image: 'https://yesno.wtf/assets/no/5-73e4adfe4da265a646fe517128bb5bf2.gif',
    };

    //console.log(window.fetch)
    // con window.fecth, estoy sobreescribiendo la funcion fetch
    (window as any).fetch = vi.fn(async()=>({
      json: async () => mockResponse,
    })); 

    const text = 'Hola mundo??';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    // vi.advanceTimersByTime(2000);
    await new Promise((r) => setTimeout(r, 1600));

    console.log(messages.value);
    const [myMsg, reponseMsg] = messages.value;

    expect(reponseMsg).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: mockResponse.answer,
      image: mockResponse.image,
    });

    expect(myMsg).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });
});
