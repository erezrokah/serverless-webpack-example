'use strict';
import { map } from 'lodash-es';
import { square } from './utils';

export const handler = async event => {
  const { value } = JSON.parse(event.body);
  const result = map(value, square);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from handler1: ' + JSON.stringify(result),
    }),
  };
};
