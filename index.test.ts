import { test, expect, describe } from 'bun:test';

test('2+2', () => {
  expect(2 + 2).toBe(4);
});

describe('express', () => {
  test('测试主接口', async () => {
    const res = await fetch('http://localhost:3333');
    const data = await res.json();
    expect(data).toEqual({ message: 'Hello World' });
  });
});
