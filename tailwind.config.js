/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flex : {
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        '5' : '5',
        '6' : '6',
        '7' : '7',
        '8' : '8',
        '9' : '9',
      },
    },
    keyframes : {
      tiltshakinganime : {
        '0%' : { transform: 'translateY(0)' },
        '25%' : { transform: 'translateY(5px)' },
        '50%' :{ transform: 'translateY(-5px)' },
        '75%' :{ transform: 'translateY(5px)' },
        '100%' :{ transform: 'translateY(0)' },
      },
      filltitleanime : {
        '100%' : { transform : 'width:100%'}
      }
    },
    animation : {
      tiltshaking : 'tiltshakinganime 0.5s infinite ease alternate',
      filltitle: 'filltitleanime 0.5 linear'
    },
  },
  plugins: [],
}

