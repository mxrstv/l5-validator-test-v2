export default class ObjectSchema {
  constructor(schema) {
    this.validators = schema;
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    return keys.every((key) => this.validators[key].isValid(value[key]) === true);
  }

  // eslint-disable-next-line class-methods-use-this
  shape(schema) {
    return new ObjectSchema(schema);
  }
}
