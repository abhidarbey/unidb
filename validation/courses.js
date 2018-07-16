const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCoursesInput(data) {
  let errors = {};

  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.stream = !isEmpty(data.stream) ? data.stream : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(data.stream)) {
    errors.stream = 'Field of study field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
