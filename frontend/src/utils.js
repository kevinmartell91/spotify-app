/**
 * Hight-order function for async/await error handling
 * @param {function} fn an async funtion
 * @returns {function}
 */
export const catchError = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.log(err);
    });
  };
};
