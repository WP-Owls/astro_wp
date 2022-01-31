module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  mode: 'jit',
  plugins: [require('@tailwindcss/typography')],
};
