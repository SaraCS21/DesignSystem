import { html } from 'lit';
import { IconWithTypeAndSubType } from '../../types/icon';

export const starOutlined = html`
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
      stroke-width="2"
      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
    />
  </svg>
`;

export const starShape = html`
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
    />
  </svg>
`;

export const halfStarOutlined = html`
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
      stroke-width="2"
      d="m12.25 20.825 4.247-2.436a1 1 0 0 0 .503-.867V4.03c0-.405-2.062 3.38-2.8 4.747a1 1 0 0 1-.807.523l-4.87.367c-.903.068-1.258 1.208-.55 1.776l3.576 2.878a1 1 0 0 1 .343 1.025l-1.11 4.366c-.217.856.701 1.553 1.468 1.113Z"
    />
  </svg>
`;

export const halfStarShape = html`
  <svg
    class="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z"
      clip-rule="evenodd"
    />
  </svg>
`;

export const STAR_ICONS = ({ type, subType }: IconWithTypeAndSubType) => {
  switch (type) {
    case 'normal':
      switch (subType) {
        case 'outlined':
          return starOutlined;
        case 'shape':
          return starShape;
        default:
          break;
      }
      break;

    case 'half':
      switch (subType) {
        case 'outlined':
          return halfStarOutlined;
        case 'shape':
          return halfStarShape;
        default:
          break;
      }
      break;

    default:
      break;
  }
};
