/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    '@csstools/postcss-oklab-function': { 'preserve': true },
  },
};

export default config;
