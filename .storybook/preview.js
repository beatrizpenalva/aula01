import '../src/styles.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    mockAddonConfigs: {
      globalMockData: [],
      ignoreQueryParams: false,
    }
  },
};

export default preview;