/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js,ftl}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
}
