import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    main: '#fe7d27',
    secondary: '#F8F8F8 ',
    text: {
      primary: '#8E8E8E',
      secondary: '#404040 '
    },
    inputs: {
      border: '#8E8E8E'
    },
    error: {
      primary: '#E51E1E'
    }
  },
  fonts: {
    family: '',
    sizes: {
      h1: { size: '80px', lineHeight: '80px' },
      h2: { size: '20px', lineHeight: '36px' },
      h3: { size: '20px', lineHeight: '36px' },
      h4: { size: '20px', lineHeight: '36px' },
      h5: { size: '20px', lineHeight: '36px' },
      p: { size: '15px', lineHeight: '27px' }
    }
  }
};

export { theme };
