import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background: var(--body);
    color: var(--text-primary);
    min-height: 100vh;
    font-family: '"Roboto", "Helvetica", "Arial", sans-serif';
    transition: all 0.25s linear;
    font-size: 1.6rem;
  }

  html {
    font-size: 62.5%; /* 10px */
  }

  @media screen and (max-width: 768px) {
    html {
        font-size: 59%;
    }
  }

  @media screen and (max-width: 400px) {
    html {
        font-size: 56%;
    }
  }
`;
