const { invoke } = require('jest-e2e-serverless/lib/utils/lambda');
const { config } = require('./config');

const { region } = config;
const functionName = config.lambdas.handler1;

describe('handler1', () => {
  test('should execute function and return response', async () => {
    const result = await invoke(region, functionName, {
      body: JSON.stringify({ value: [2, 3, 4] }),
    });

    expect.assertions(2);
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual({
      message: 'Hello from handler1: [4,9,16]',
    });
  });
});
