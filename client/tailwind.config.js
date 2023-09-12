/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
   theme: {
      extend: {
         boxShadow: {
            base: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
