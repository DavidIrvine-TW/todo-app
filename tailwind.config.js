/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //primary
        'bright-blue' : 'hsl(220, 98%, 61%)',
        'background1' : 'hsl(192, 100%, 67%)',
        'background2' : 'hsl(280, 87%, 65%)',
        //lightmode
        'lightgray' : 'hsl(0, 0%, 98%)',
        'vlghtgrayblue' : 'hsl(236, 33%, 92%)',
        'lghtgrayblue' : 'hsl(233, 11%, 84%)',
        'dgrayblue' : 'hsl(236, 9%, 61%)',
        'vdgrayblue' : 'hsl(235, 19%, 35%)',
        //darkmode
        'vdarkblue' : 'hsl(235, 21%, 11%)',
        'vdarkdesatblue': 'hsl(235, 24%, 19%)',
        'lghtgrayblue' : 'hsl(234, 39%, 85%)',
        'hovlghtgrayblue' : 'hsl(236, 33%, 92%)',
        'darkgrayblue' : 'hsl(234, 11%, 52%)',
        'vdarkgrayblue': 'hsl(233, 14%, 35%)',
        'vdarkgrayblue2' : 'hsl(237, 14%, 26%)',
      },
      screens: {
        mobile: '375px',
        desktop: '817px'
      },
      container: {
        center: true
      },
      fontFamily: {
        Joe : ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-dk': '2.5rem',
        'heading-mb': '1.25rem',

        'body-dk': '1.125rem',
        'body-mb': '0.75rem',

        'mobile-heading-l': '2rem',
        default: '1.125rem',

      },
      fontWeight : {
        bold : '700',
      },

      boxShadow: {
        boxshadowlight: '0px 5px 10px hsla(236, 9%, 61%, 0.5)',
        'boxshadowdark': '0px 5px 10px hsla(235, 24%, 19%, 0.5)'
      },
      lineHeight: {
        'heading-dk': '2.5rem',
        'heading-mb': '1.25rem',

        'body-dk': '1.125rem',
        'body-mb': '0.75rem'
      },
    },
  },
  plugins: [],
}

