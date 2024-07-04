import { homeOutlined, homeSharp } from '../public/icons/home';
import { Icon } from '../types/icon';

export const iconTypes = ['outlined', 'sharp'] as const;

export const allIcons = ['home'] as const;

export const ICONS: { [key: string]: Icon } = {
  home: {
    name: 'home',
    type: {
      outlined: homeOutlined,
      sharp: homeSharp,
    },
  },
};
