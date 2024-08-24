import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyle from "../src/GlobalStyle";

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
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
