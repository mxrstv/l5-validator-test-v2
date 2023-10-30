/* eslint-disable class-methods-use-this */
// import NumberSchema from './NumberSchema.js';
import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value) === true;
    return new ArraySchema([validator]);
  }

  object() {
    return new ObjectSchema();
  }
}
