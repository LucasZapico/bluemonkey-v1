export const Fonts = {
  heading: "'Noto Sans JP'",
  body: "'Inter', sans-serif;",
}

// Heading
export const Headings = {
  baseStyle: {
    fontWeight: 700,
    color: 'brand.five',
    marginBottom: '6',
    lineHeight: 'lineHeights.taller',
    letterSpacing: '0.1rem',
  },
  // Styles for the size variations
  sizes: {
    '5xl': {
      fontSize: ['4xl', '7xl', '10xl'],
      lineHeight: 1.3,
      letterSpacing: '0.2rem',
    },
    '4xl': {
      fontSize: ['4xl', null, '8xl'],
      lineHeight: 1.5,
      letterSpacing: '0.2rem',
    },
    '3xl': {
      fontSize: ['4xl', null, '6xl'],
      lineHeight: 1.5,
    },
    '2xl': {
      lineHeight: 1.5,
    },
    xl: {
      lineHeight: 1.5,
    },
    lg: {
      lineHeight: 1.5,
    },
  },
  // Styles for the visual style variations
  variants: {
    pri: {
      fontFamily: 'montas',
    },

    sec: {
      color: 'gray.600',
      fontFamily: 'Noto Sans JP',
      fontWeight: 600,
      letterSpacing: '0.03rem',
    },
    tri: {
      color: 'gray.500',
      fontFamily: 'Noto Sans JP',
      fontWeight: 600,
      letterSpacing: '0.03rem',
    },
  },
}

export const Texts = {
  baseStyle: {
    color: 'brand.four',
    fontWeight: 600,
    letterSpacing: '0.1rem',
    lineHeight: 1.5,
    marginBottom: '6',
  },
  variants: {
    sec: {
      color: 'gray.700',
    },
    tri: {
      color: 'gray.600',
    },
    light: {
      color: 'brand.zero',
    },
  },
}
