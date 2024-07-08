import { css } from 'lit';
import { colors } from '../Colors/colors';

export const AvatarStyles = css`
  :host {
    --background-color: ${colors.blue500}; /* Valor inicial */
    --text-color: white; /* Valor inicial */

    --dark-background-color: ${colors.blue700};
    --light-background-color: ${colors.blue200};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    color: var(--text-color);
    background-color: var(--background-color);

    font-family: 'Roboto', sans-serif;
  }

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
    object-fit: cover;
  }

  .small {
    width: 2rem;
    height: 2rem;

    font-size: 0.75rem;
  }

  .medium {
    width: 4rem;
    height: 4rem;

    font-size: 1.5rem;
  }

  .large {
    width: 6rem;
    height: 6rem;

    font-size: 2rem;
  }
`;
