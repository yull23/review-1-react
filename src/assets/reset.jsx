/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const reset = css`
  /* Box sizing rules */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    // border: 1px solid black;
  }

  body {
    overflow-y: scroll;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }
  ul,
  ol {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: none;
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Remove default link decoration */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Make sure form elements are visible and accessible */
  button,
  input,
  select,
  textarea {
    font-size: inherit;
    line-height: inherit;
    border: 1px solid black;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
    border: 1px solid black;
  }

  /* Set the default cursor style for elements*/
  html {
    cursor: auto;
  }

  /* Set a border box size for all elements */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
