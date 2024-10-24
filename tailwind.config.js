/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundColor: {
        main: "#151937",
      },
    },
  },
  // để sử dụng darkMode :"class"
  // darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
