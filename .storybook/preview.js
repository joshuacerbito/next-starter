import "./globals.css";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "814px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  largeDesktop: {
    name: "large Desktop",
    styles: {
      width: "1280px",
      height: "1024px",
    },
  },
  wideDesktop: {
    name: "Wide Desktop",
    styles: {
      width: "1440px",
      height: "1050px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
  viewport: {
    viewports: customViewports,
  },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
