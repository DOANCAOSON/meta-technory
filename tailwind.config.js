/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "colorBlack": "#000",
        "colorBlackbland": "#505050",
        "color": "#FFFFFF",
        "mainstream": "#B26135",
        "headerbackgrou": "#FFF",
        "headerbackgbtnFooter": "#FFF",
        "backgroundBtn": "#B26135",
        "textmainstream": "#B26135",
        "line": "#B26135",
        "linepayment": "rgba(80, 80, 80, 0.50)",
        "loginline": "rgba(80, 80, 80, 0.30)",
        "bgmobileheader": "rgba(0, 0, 0, 1)",

        // api
        "colormeta": "##fff"
      },
      boxShadow: {
        'boxshadowbottom': '0px 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}