import { css } from 'lit';
import { colors } from '../Colors/colors';

export const ChipStyles = css`
  :host {
    --background-color: ${colors.blue500}; /* Valor inicial */
    --text-color: white; /* Valor inicial */

    --dark-background-color: ${colors.blue700};
    --light-background-color: ${colors.blue200};
  }

  div {
    width: fit-content;
    padding: 0.35rem 0.6rem;

    border-radius: 1rem;

    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
  }

  .contained {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .outlined {
    background-color: transparent;
    border: 1px solid var(--background-color);
    color: var(--background-color);
  }
`;
