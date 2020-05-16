'use strict';
import { map } from 'lodash-es';
import { cube } from './utils';

export const handler = async (event) => {
  const { value } = JSON.parse(event.body);
  const result = map(value, cube);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from handler2: ' + JSON.stringify(result),
    }),
  };
};
