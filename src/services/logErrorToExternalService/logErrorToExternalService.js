/**
 * Send error report to external service
 * @typedef {import('react').ErrorInfo} ErrorInfo
 * @param {Error} error Error information
 * @param {ErrorInfo} errorInfo Captures which component contained the exception, and its ancestors
 */
export default function logErrorToExternalService(error, errorInfo) {
  // TODO: Send information
  console.log({ error, errorInfo });
}
