export default class ArraySchema {
  constructor(validator) {
    this.validators = [...validator];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  maxDepth(maxDepth) {
    const validator = (value) => {
      const iter = (el, depth) => {
        if (!Array.isArray(el)) {
          return depth;
        }
        const result = el.map((item) => iter(item, depth + 1));
        return Math.max(...result);
      };
      return iter(value, 0) - 1 <= maxDepth;
    };
    return new ArraySchema([...this.validators, validator]);
  }
}
