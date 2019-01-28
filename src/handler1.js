'use strict';
const _ = require('lodash');
const { square } = require('./utils');

module.exports.handler = async event => {
  const { value } = JSON.parse(event.body);
  const result = _.map(value, square);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from handler1: ' + JSON.stringify(result),
    }),
  };
};
