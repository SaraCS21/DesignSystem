import { css } from 'lit';

export const IconStyles = css`
  :host {
    --text-color: black; /* Valor inicial */
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;

    svg {
      width: 100%;
      height: auto;

      color: var(--text-color);
    }
  }
`;
