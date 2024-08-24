import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#333" },
        { name: "skyblue", value: "#84dcff" },
      ],
      default: "dark",
    },
    layout: "centered",
  },
};

export default preview;
