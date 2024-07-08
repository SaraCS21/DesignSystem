const ICON_NORMAL_TYPE = ['normal'] as const;

const ICON_BORDER_TYPES = ['outlined', 'shape'] as const;

const ICON_CIRCLE_TYPES = ['normal', 'circle'] as const;

const ICON_SIZE_TYPES = ['normal', 'small'] as const;

const ICON_OPENING_TYPES = ['normal', 'open'] as const;

const ICON_SLASH_TYPES = ['normal', 'slash'] as const;

const ICON_PIECE_TYPES = ['normal', 'half'] as const;

const ICON_DARK_MODE_TYPES = ['sun', 'moon'] as const;

const ICON_USER_TYPES = [
  'normal',
  'add',
  'edit',
  'remove',
  'settings',
  'circle',
] as const;

const ICON_ARROW_TYPES = ['repeat', 'up', 'down', 'left', 'right'] as const;

const ICON_CODE_TYPES = [
  'code',
  'css',
  'database',
  'github',
  'html',
  'linkedin',
  'react',
  'tailwind',
  'vue',
] as const;

const ICON_FILE_TYPES = [
  'normal',
  'check',
  'plus',
  'clone',
  'code',
  'copy',
  'edit',
] as const;

const ICON_FOLDER_TYPES = ['normal', 'arrow', 'duplicate', 'open'] as const;

export const ICONS = {
  arrow: {
    type: ICON_ARROW_TYPES,
    size: ICON_SIZE_TYPES,
  },

  calendar: {
    type: ICON_BORDER_TYPES,
  },

  check: {
    type: ICON_CIRCLE_TYPES,
    circleType: ICON_BORDER_TYPES,
  },

  close: {
    type: ICON_CIRCLE_TYPES,
    circleType: ICON_BORDER_TYPES,
  },

  cloud: {
    type: ICON_BORDER_TYPES,
  },

  code: {
    type: ICON_CODE_TYPES,
  },

  darkMode: {
    type: ICON_DARK_MODE_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  download: {
    type: ICON_BORDER_TYPES,
  },

  edit: {
    type: ICON_BORDER_TYPES,
  },

  email: {
    type: ICON_OPENING_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  exclamation: {
    type: ICON_BORDER_TYPES,
  },

  eye: {
    type: ICON_SLASH_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  file: {
    type: ICON_FILE_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  folder: {
    type: ICON_FOLDER_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  heart: {
    type: ICON_BORDER_TYPES,
  },

  home: {
    type: ICON_BORDER_TYPES,
  },

  image: {
    type: ICON_BORDER_TYPES,
  },

  info: {
    type: ICON_BORDER_TYPES,
  },

  language: {
    type: ICON_NORMAL_TYPE,
  },

  link: {
    type: ICON_NORMAL_TYPE,
  },

  mapPin: {
    type: ICON_BORDER_TYPES,
  },

  minus: {
    type: ICON_BORDER_TYPES,
  },

  palette: {
    type: ICON_NORMAL_TYPE,
  },

  pause: {
    type: ICON_BORDER_TYPES,
  },

  phone: {
    type: ICON_BORDER_TYPES,
  },

  plus: {
    type: ICON_BORDER_TYPES,
  },

  question: {
    type: ICON_BORDER_TYPES,
  },

  search: {
    type: ICON_BORDER_TYPES,
  },

  settings: {
    type: ICON_BORDER_TYPES,
  },

  star: {
    type: ICON_PIECE_TYPES,
    subType: ICON_BORDER_TYPES,
  },

  trash: {
    type: ICON_BORDER_TYPES,
  },

  user: {
    type: ICON_USER_TYPES,
    subType: ICON_BORDER_TYPES,
  },
};
