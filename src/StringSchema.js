export default class StringSchema {
  constructor(validator) {
    this.validators = [...validator];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  startsFromUpperCase() {
    const regexp = /[A-Z]/;
    const validator = (value) => regexp.test(value[0]);
    return new StringSchema([...this.validators, validator]);
  }

  length(num) {
    const validator = (value) => value.length === num;
    return new StringSchema([...this.validators, validator]);
  }

  hasExclamation() {
    const validator = (value) => value.includes('!');
    return new StringSchema([...this.validators, validator]);
  }
}
