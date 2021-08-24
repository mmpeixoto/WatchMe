import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #1f2229;
    --background2: #2e303c;
    --background-button: #373945;
    --background-button2: #4b4d59;
    --yellow: #fae800;
    --gray: #bec2c6;
    --white: #fbfbfb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #fbfbfb;
    background: var(--background);
  }

  input,
  textarea {
    font-family: "Poppins";
  }

  button {
    cursor: pointer;
  }
`;
