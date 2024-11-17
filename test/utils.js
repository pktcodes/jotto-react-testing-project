import checkPropTypes from 'check-prop-types';

/**
 * Return nodes(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {string} value - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/**
 * Component doesn't throw a warning when provided with the correct props
 * @param {Function} component
 * @param {Object} expectedProps
 */
const validateProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'prop',
    component.name
  );
  expect(propsError).toBeUndefined();
};

export { findByTestAttribute, validateProps };
