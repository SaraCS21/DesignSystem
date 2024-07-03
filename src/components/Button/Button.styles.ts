import { css } from 'lit';
import { colors } from '../../styles/colors';

export const ButtonStyles = css`
  :host {
    --background-color: ${colors.blue500}; /* Valor inicial */
    --text-color: white; /* Valor inicial */

    --dark-background-color: ${colors.blue700};
    --light-background-color: ${colors.blue200};
  }

  button {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

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
`;
