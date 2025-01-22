// Utility function for error handling
export const handleApiError = (error, defaultMessage) => {
  throw new Error(error.response?.data?.error || defaultMessage);
};
