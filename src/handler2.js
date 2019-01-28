'use strict';
const _ = require('lodash');
const { cube } = require('./utils');

module.exports.handler = async event => {
  const { value } = JSON.parse(event.body);
  const result = _.map(value, cube);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from handler2: ' + JSON.stringify(result),
    }),
  };
};
