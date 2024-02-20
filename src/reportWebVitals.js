// Function to report web vitals
const reportWebVitals = onPerfEntry => {
  // Check if the onPerfEntry callback function is provided and is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Asynchronously import the 'web-vitals' module
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web vitals function with the provided callback function
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Export the reportWebVitals function
export default reportWebVitals;
