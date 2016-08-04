export const FONT_FAMILY = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
export const FONT_SIZE = 16; // px
export const LINE_HEIGHT = 24; // px
export const SIZING_RATIO = 1.5; // perfect-fifth
export const BOX_RADIUS = 3; // perfect-fifth

const BASE_COLORS = {
  BRAND: '#ff5722',
  BRAND_HOVER: '#DD2C00',
  HIGHTLIGHT: '#ffffff',
  SHADOW: '#212121',
  GREY_LIGHTER: '#F5F5F5',
  GREY_LIGHT: 'E0E0E0',
  GREY: '#9E9E9E',
  GREY_DARK: '#757575',
  GREY_DARKER: '#424242'
};

export const COLORS = Object.assign({}, BASE_COLORS, {
  TEXT: BASE_COLORS.GREY_DARKER,
  TEXT_LIGHT: BASE_COLORS.GREY_LIGHT,
  TEXT_REVERSE: BASE_COLORS.HIGHTLIGHT,
  BORDER: '#E4E4E4',
  SHADOW: `rgba(0,0,0,.15)`
});

export const BASE_SHADOW = `0 2px ${COLORS.SHADOW}`;

export const SOUNDCLOUD_CLIENT_ID = '59c5cebbfecc10e5c872b3fd0d370eb1';

