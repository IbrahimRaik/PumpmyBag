/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FFBB36', // Add your custom color here
        'custom-yellow': '#FFF500',
        'custom-thick-yellow': '#FFE711',
        'custom-light-green':'#BDFF00',
        'custom-thin-yellow': '#FFF500',
        'custom-thick-orange':'#FF6B00',
        'custom-thick-red':'#FF0505',
        'custom-white': '#f8f9fa',
        'custom-gray': '#6A6A6A',
        'custom-dark-gray': '#000000CC',
        'custom-dark-green':'#24EE12',
        'custom-red':'#DF2D2D',
        'custom-confirm-green': '#43D936',
        'custom-green':'#00FF0A',
        'custom-button-color':'#00FF1A',
        'custom-black':'#000000',
        'custom-light-gray':'#B7B7B2',
      },
      fontFamily: {
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'malgun': ['Malgun Gothic', 'sans-serif'], // Add Malgun Gothic to your theme
        'inter': ['Inter', 'sans-serif'], // Add Inter font to your theme
        'malgun': ['"Malgun Gothic"', 'sans-serif'],  // Custom font
        'oxygen': ['"Oxygen"', 'sans-serif'], // Custom font
      },
      fontSize: {
        'custom': ['28px', '57.28px'],
        'custom-h1': ['60px', { lineHeight: '1.2' }],
        'custom-lg': '18.31px', // Define a custom font size
        'custom-sm': '18.35px', // Define a custom font size
        'custom-md': '18.2px', // Define a custom font size
        'custom-xl': '48px', // Define a custom font size
        'lg':"22px"
      },
      lineHeight: {
        'custom': '47.28px',
        'custom-lg': '41.64px', // Define a custom line height
        'custom-sm': '22.21px', // Define a custom line height
        'custom-md': '19.45px', // Define a custom line height
        'custom-xl': '57.28px', // Define a custom line height
        'extra-loose': '55.82px',
      },
      screens: {
        'xs': '480px', // xs screens (480px and above) Example of adding a custom extra small breakpoint
        'sm': '640px', //sm screens (640px and above)
        'md': '768px', //md screens (768px and above), 
        'lg': '1024px', //lg screens (1024px and above),
        'xl': '1280px', //xl screens (1280px and above),
        '2xl': '1536px', //2xl screens (1536px and above),
      },
      letterSpacing: {
        'tight-custom': '-0.02em',  // Custom letter spacing (-2%)
      },
    },
  },
  plugins: [],
}

