import 'styled-components';

// declare enum TypographyElements {
//   h1 = 'h1',
//   h2 = 'h2',
//   h3 = 'h3',
//   h4 = 'h4',
//   h5 = 'h5',
//   p = 'p'
// }

type TypographyElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type HTMLFontElement = { [key in TypographyElements]: FontElement };

interface FontElement {
  size: string;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
      };
      inputs: {
        border: string;
      };
      error: {
        primary: string;
      };
    };
    fonts: {
      family?: string;
      sizes: HTMLFontElement;
    };
  }
}
