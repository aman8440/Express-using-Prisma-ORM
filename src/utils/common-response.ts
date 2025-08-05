/**
 * A common response wrapper for both success and error
 * @param success - true or false
 * @param message - string message
 * @param data - optional data (object or null)
 */
export const commonResponse = (
  success: boolean,
  message: string,
  data: any = null
) => {
  return {
    success,
    message,
    data,
  };
};