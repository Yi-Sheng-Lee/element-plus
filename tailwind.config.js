module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'slate-300': 'rgb(226 232 240)',
                'gray-190': 'rgb(190 190 190) !important',
                'stone-400': 'rgb(168 162 158)',
                'emerald-200': 'rgb(167 243 208)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
