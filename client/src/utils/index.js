/**
 * This method will mock an async request and return whatever you pass in after 1 second (1000 ms)
 * it should be used as a stop-gap until you are successfully communicating with your backend
 * but want to perform side effect / async behaviors on the frontend without being blocked by
 * backend progress
 *
 * @param {Value} val you want the request to return
 *
 * @returns {Value} whatever you passed in
 */
export const mockRequest = (value) =>
  new Promise((resolve) =>
    setTimeout((_) => {
      resolve(value);
    }, 1000)
  );
