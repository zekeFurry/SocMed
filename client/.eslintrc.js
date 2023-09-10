module.exports = {
    parser: '@babel/eslint-parser',
    // Specify the environments where your code will run
    env: {
      browser: true, // for browser-based projects
      node: true,    // for Node.js projects
      jest: true,    // if you're using Jest for testing
    },
    // Define your ESLint rules here
    rules: {
      // Example rules:
      "semi": ["error", "always"], // Enforce semicolons
      "indent": ["error", 2],     // Use 2 spaces for indentation
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  };  