export const iconTypes = ['outlined', 'shape'] as const;

export const ICONS = {
  arrow: {
    type: ['repeat', 'up', 'down', 'left', 'right'],
    size: ['normal', 'small'],
  },

  calendar: {
    type: ['outlined', 'shape'],
  },

  check: {
    type: ['normal', 'circle'],
    circleType: ['outlined', 'shape'],
  },

  close: {
    type: ['normal', 'circle'],
    circleType: ['outlined', 'shape'],
  },

  cloud: {
    type: ['outlined', 'shape'],
  },

  code: {
    type: [
      'code',
      'css',
      'database',
      'github',
      'html',
      'linkedin',
      'react',
      'tailwind',
      'vue',
    ],
  },

  darkMode: {
    type: ['moon', 'sun'],
    subType: ['outlined', 'shape'],
  },

  download: {
    type: ['outlined', 'shape'],
  },

  edit: {
    type: ['outlined', 'shape'],
  },

  email: {
    type: ['normal', 'open'],
    subType: ['outlined', 'shape'],
  },

  exclamation: {
    type: ['outlined', 'shape'],
  },

  eye: {
    type: ['normal', 'slash'],
    subType: ['outlined', 'shape'],
  },

  file: {
    type: ['normal', 'check', 'plus', 'clone', 'code', 'copy', 'edit'],
    subType: ['outlined', 'shape'],
  },

  folder: {
    type: ['normal', 'arrow', 'duplicate', 'open'],
    subType: ['outlined', 'shape'],
  },

  heart: {
    type: ['outlined', 'shape'],
  },

  home: {
    type: ['outlined', 'shape'],
  },

  image: {
    type: ['outlined', 'shape'],
  },

  info: {
    type: ['outlined', 'shape'],
  },

  language: {
    type: ['normal'],
  },

  link: {
    type: ['normal'],
  },

  mapPin: {
    type: ['outlined', 'shape'],
  },

  minus: {
    type: ['outlined', 'shape'],
  },

  palette: {
    type: ['normal'],
  },

  pause: {
    type: ['outlined', 'shape'],
  },

  phone: {
    type: ['outlined', 'shape'],
  },

  plus: {
    type: ['outlined', 'shape'],
  },

  question: {
    type: ['outlined', 'shape'],
  },

  search: {
    type: ['outlined', 'shape'],
  },

  settings: {
    type: ['outlined', 'shape'],
  },

  star: {
    type: ['normal', 'half'],
    subType: ['outlined', 'shape'],
  },

  trash: {
    type: ['outlined', 'shape'],
  },

  user: {
    type: ['normal', 'add', 'edit', 'remove', 'settings', 'circle'],
    subType: ['outlined', 'shape'],
  },
};
