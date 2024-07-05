import { html } from 'lit';
import { IconWithType } from '../../types/icon';

export const searchOutlined = html`
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
`;

export const searchShape = html`
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
    <path
      fill-rule="evenodd"
      d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
      clip-rule="evenodd"
    />
  </svg>
`;

export const SEARCH_ICONS = ({ type }: IconWithType) => {
  switch (type) {
    case 'outlined':
      return searchOutlined;

    case 'shape':
      return searchShape;

    default:
      break;
  }
};
