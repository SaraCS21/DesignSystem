import { css } from 'lit';
import { colors } from '../Colors/colors';

export const ButtonStyles = css`
  :host {
    --background-color: ${colors.blue500}; /* Valor inicial */
    --text-color: white; /* Valor inicial */

    --dark-background-color: ${colors.blue700};
    --light-background-color: ${colors.blue200};
  }

  button,
  a {
    display: inline-block;
    box-sizing: border-box;

    cursor: pointer;
    transition: 0.3s;

    text-decoration: none;
    font-family: 'Roboto', sans-serif;

    &:disabled {
      cursor: not-allowed;
    }
  }

  .contained {
    background-color: var(--background-color);
    color: var(--text-color);
    border: none;

    &:hover {
      background-color: var(--dark-background-color);
    }

    &:disabled {
      background-color: var(--light-background-color);
    }
  }

  .outlined {
    background-color: transparent;
    color: var(--background-color);
    border: 1px solid var(--background-color);

    &:hover {
      background-color: var(--background-color);
      color: var(--text-color);
    }

    &:disabled {
      color: var(--light-background-color);
      border: 1px solid var(--light-background-color);

      &:hover {
        background-color: transparent;
      }
    }
  }

  .text {
    background-color: transparent;
    color: var(--background-color);
    border: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    &:disabled {
      color: var(--light-background-color);

      &:hover {
        text-decoration: none;
      }
    }
  }

  .small {
    height: 32px;
    padding: 8px 12px;
    font-size: 14px;
  }

  .medium {
    height: 40px;
    padding: 10px 16px;
    font-size: 16px;
  }

  .large {
    height: 48px;
    padding: 12px 20px;
    font-size: 18px;
  }

  .rounded {
    border-radius: 4px;
  }
`;
