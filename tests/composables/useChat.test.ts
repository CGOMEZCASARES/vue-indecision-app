import { useChat } from '@/composables/useChat';
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
    const text = 'Hola mundo??';
    const { messages, onMessage } = useChat();
    
    await onMessage(text);   

    console.log(messages.value);
    const msg = messages.value.pop();

    expect(msg?.itsMine).toBe(false);
    //expect(msg?.image).not.toBe(text)
    expect(msg).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String),
    });
    
  });
});
