import { BUTTON_TARGETS } from './buttonConstants';
import { COLORS, COLOR_INTENSITY } from './colorConstants';
import { ICONS } from './iconConstants';

// Button Component

export const DISABLED_ARG = {
  description: 'Disables the button if it is set to "true"',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const ROUNDED_ARG = {
  description: 'Makes component edges rounded if set to "true"',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const HREF_ARG = {
  description: 'If provided, converts the button to a link',
  control: 'text',
  type: 'string',
};

export const TARGET_ARG = {
  if: { arg: 'href', neq: '' },
  description: 'Defines the link destination when "href" is present.',
  options: BUTTON_TARGETS,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: '_blank' },
  },
};

// Icon Component

export const ICON_ARG = {
  description: 'Name of the icon to be displayed',
  options: Object.keys(ICONS),
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'arrow' },
  },
};

// ----------------------------

export const ICON_ARROW_TYPE = {
  if: { arg: 'name', eq: 'arrow' },
  options: ICONS.arrow.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'up' },
  },
};

export const ICON_ARROW_SIZE = {
  if: { arg: 'name', eq: 'arrow' },
  options: ICONS.arrow.size,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_CALENDAR_TYPE = {
  if: { arg: 'name', eq: 'calendar' },
  options: ICONS.calendar.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_CHECK_TYPE = {
  if: { arg: 'name', eq: 'check' },
  options: ICONS.check.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_CHECK_CIRCLE = {
  if: { arg: 'checkType', eq: 'circle' },
  options: ICONS.check.circleType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_CLOSE_TYPE = {
  if: { arg: 'name', eq: 'close' },
  options: ICONS.close.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_CLOSE_CIRLCE = {
  if: { arg: 'closeType', eq: 'circle' },
  options: ICONS.close.circleType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_CLOUD_TYPE = {
  if: { arg: 'name', eq: 'cloud' },
  options: ICONS.cloud.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_CODE_TYPE = {
  if: { arg: 'name', eq: 'code' },
  options: ICONS.code.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'code' },
  },
};

export const ICON_DARK_MODE_TYPE = {
  if: { arg: 'name', eq: 'darkMode' },
  options: ICONS.darkMode.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'sun' },
  },
};

export const ICON_DARK_MODE_SUB_TYPE = {
  if: { arg: 'name', eq: 'darkMode' },
  options: ICONS.darkMode.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_DOWNLOAD_TYPE = {
  if: { arg: 'name', eq: 'download' },
  options: ICONS.download.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_EDIT_TYPE = {
  if: { arg: 'name', eq: 'edit' },
  options: ICONS.edit.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_EMAIL_TYPE = {
  if: { arg: 'name', eq: 'email' },
  options: ICONS.email.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_EMAIL_SUB_TYPE = {
  if: { arg: 'name', eq: 'email' },
  options: ICONS.email.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_EXCLAMATION_TYPE = {
  if: { arg: 'name', eq: 'exclamation' },
  options: ICONS.exclamation.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_EYE_TYPE = {
  if: { arg: 'name', eq: 'eye' },
  options: ICONS.eye.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_EYE_SUB_TYPE = {
  if: { arg: 'name', eq: 'eye' },
  options: ICONS.eye.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_FILE_TYPE = {
  if: { arg: 'name', eq: 'file' },
  options: ICONS.file.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_FILE_SUB_TYPE = {
  if: { arg: 'name', eq: 'file' },
  options: ICONS.file.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_FOLDER_TYPE = {
  if: { arg: 'name', eq: 'folder' },
  options: ICONS.folder.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_FOLDER_SUB_TYPE = {
  if: { arg: 'name', eq: 'folder' },
  options: ICONS.folder.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_HEART_TYPE = {
  if: { arg: 'name', eq: 'heart' },
  options: ICONS.heart.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_HOME_TYPE = {
  if: { arg: 'name', eq: 'home' },
  options: ICONS.home.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_IMAGE_TYPE = {
  if: { arg: 'name', eq: 'image' },
  options: ICONS.image.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_INFO_TYPE = {
  if: { arg: 'name', eq: 'info' },
  options: ICONS.info.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_LANGUAGE_TYPE = {
  if: { arg: 'name', eq: 'language' },
  options: ICONS.language.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_LINK_TYPE = {
  if: { arg: 'name', eq: 'link' },
  options: ICONS.link.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_MAP_PIN_TYPE = {
  if: { arg: 'name', eq: 'mapPin' },
  options: ICONS.mapPin.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_MINUS_TYPE = {
  if: { arg: 'name', eq: 'minus' },
  options: ICONS.minus.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_PALETTE_TYPE = {
  if: { arg: 'name', eq: 'palette' },
  options: ICONS.palette.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_PAUSE_TYPE = {
  if: { arg: 'name', eq: 'pause' },
  options: ICONS.pause.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_PHONE_TYPE = {
  if: { arg: 'name', eq: 'phone' },
  options: ICONS.phone.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_PLUS_TYPE = {
  if: { arg: 'name', eq: 'plus' },
  options: ICONS.plus.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_QUESTION_TYPE = {
  if: { arg: 'name', eq: 'question' },
  options: ICONS.question.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_SEARCH_TYPE = {
  if: { arg: 'name', eq: 'search' },
  options: ICONS.search.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_SETTINGS_TYPE = {
  if: { arg: 'name', eq: 'settings' },
  options: ICONS.settings.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_STAR_TYPE = {
  if: { arg: 'name', eq: 'star' },
  options: ICONS.star.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_STAR_SUB_TYPE = {
  if: { arg: 'name', eq: 'star' },
  options: ICONS.star.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_TRASH_TYPE = {
  if: { arg: 'name', eq: 'trash' },
  options: ICONS.trash.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const ICON_USER_TYPE = {
  if: { arg: 'name', eq: 'user' },
  options: ICONS.user.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const ICON_USER_SUB_TYPE = {
  if: { arg: 'name', eq: 'user' },
  options: ICONS.user.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

// ----------------------------

// General Components

export const LABEL_ARG = {
  description: 'Text displayed inside the component',
  control: 'text',
  type: 'string',
  table: {
    defaultValue: { summary: 'Label' },
  },
};

export const COLOR_ARG = {
  description: 'Defines the color of the component',
  options: COLORS,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'blue' },
  },
};

export const COLOR_INTENSITY_ARG = {
  description: 'Defines the color intensity of the component',
  options: COLOR_INTENSITY,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 50 },
  },
};

export const VARIANT_ARG = <T extends readonly string[]>(variantOption: T) => ({
  description: 'Set the component style',
  options: variantOption,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'contained' },
  },
});

export const SIZE_ARG = <T extends readonly string[]>(sizeOption: T) => ({
  description: 'Determine the size of the component',
  options: sizeOption,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'medium' },
  },
});

export const NAME_ARG = {
  description: 'Name of the component to be displayed',
  control: 'text',
  type: 'string',
  table: {
    defaultValue: { summary: 'Name' },
  },
};