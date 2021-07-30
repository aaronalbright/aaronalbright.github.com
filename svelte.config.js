const sveltePreprocess = require('svelte-preprocess');
const preprocessOptions = {
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer')
        ]
    }
};

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions),
}