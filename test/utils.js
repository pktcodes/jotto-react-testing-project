/**
 * Return nodes(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {string} value - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
