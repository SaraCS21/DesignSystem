import { buttonTargets } from './buttonConstants';
import { colors, COLOR_INTENSITY } from './colorConstants';
import { ICONS } from './iconConstants';

// Button Component

export const disabledArg = {
  description: 'Disables the button if it is set to "true"',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const roundedArg = {
  description: 'Makes component edges rounded if set to "true"',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const hrefArg = {
  description: 'If provided, converts the button to a link',
  control: 'text',
  type: 'string',
};

export const targetArg = {
  if: { arg: 'href', neq: '' },
  description: 'Defines the link destination when "href" is present.',
  options: buttonTargets,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: '_blank' },
  },
};

// Icon Component

export const iconArg = {
  description: 'Name of the icon to be displayed',
  options: Object.keys(ICONS),
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'arrow' },
  },
};

// ----------------------------

export const iconArrowType = {
  if: { arg: 'name', eq: 'arrow' },
  options: ICONS.arrow.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'up' },
  },
};

export const iconArrowSize = {
  if: { arg: 'name', eq: 'arrow' },
  options: ICONS.arrow.size,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconCalendarType = {
  if: { arg: 'name', eq: 'calendar' },
  options: ICONS.calendar.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconCheckType = {
  if: { arg: 'name', eq: 'check' },
  options: ICONS.check.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconCheckCircle = {
  if: { arg: 'checkType', eq: 'circle' },
  options: ICONS.check.circleType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconCloseType = {
  if: { arg: 'name', eq: 'close' },
  options: ICONS.close.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconCloseCircle = {
  if: { arg: 'closeType', eq: 'circle' },
  options: ICONS.close.circleType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconCloudType = {
  if: { arg: 'name', eq: 'cloud' },
  options: ICONS.cloud.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconCodeType = {
  if: { arg: 'name', eq: 'code' },
  options: ICONS.code.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'code' },
  },
};

export const iconDarkModeType = {
  if: { arg: 'name', eq: 'darkMode' },
  options: ICONS.darkMode.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'sun' },
  },
};

export const iconDarkModeSubType = {
  if: { arg: 'name', eq: 'darkMode' },
  options: ICONS.darkMode.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconDownloadType = {
  if: { arg: 'name', eq: 'download' },
  options: ICONS.download.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconEditType = {
  if: { arg: 'name', eq: 'edit' },
  options: ICONS.edit.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconEmailType = {
  if: { arg: 'name', eq: 'email' },
  options: ICONS.email.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconEmailSubType = {
  if: { arg: 'name', eq: 'email' },
  options: ICONS.email.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconExclamationType = {
  if: { arg: 'name', eq: 'exclamation' },
  options: ICONS.exclamation.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconEyeType = {
  if: { arg: 'name', eq: 'eye' },
  options: ICONS.eye.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconEyeSubType = {
  if: { arg: 'name', eq: 'eye' },
  options: ICONS.eye.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconFileType = {
  if: { arg: 'name', eq: 'file' },
  options: ICONS.file.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconFileSubType = {
  if: { arg: 'name', eq: 'file' },
  options: ICONS.file.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconFolderType = {
  if: { arg: 'name', eq: 'folder' },
  options: ICONS.folder.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconFolderSubType = {
  if: { arg: 'name', eq: 'folder' },
  options: ICONS.folder.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconHeartType = {
  if: { arg: 'name', eq: 'heart' },
  options: ICONS.heart.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconHomeType = {
  if: { arg: 'name', eq: 'home' },
  options: ICONS.home.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconImageType = {
  if: { arg: 'name', eq: 'image' },
  options: ICONS.image.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconInfoType = {
  if: { arg: 'name', eq: 'info' },
  options: ICONS.info.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconLanguageType = {
  if: { arg: 'name', eq: 'language' },
  options: ICONS.language.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconLinkType = {
  if: { arg: 'name', eq: 'link' },
  options: ICONS.link.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconMapPinType = {
  if: { arg: 'name', eq: 'mapPin' },
  options: ICONS.mapPin.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconMinusType = {
  if: { arg: 'name', eq: 'minus' },
  options: ICONS.minus.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconPaletteType = {
  if: { arg: 'name', eq: 'palette' },
  options: ICONS.palette.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconPauseType = {
  if: { arg: 'name', eq: 'pause' },
  options: ICONS.pause.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconPhoneType = {
  if: { arg: 'name', eq: 'phone' },
  options: ICONS.phone.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconPlusType = {
  if: { arg: 'name', eq: 'plus' },
  options: ICONS.plus.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconQuestionType = {
  if: { arg: 'name', eq: 'question' },
  options: ICONS.question.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconSearchType = {
  if: { arg: 'name', eq: 'search' },
  options: ICONS.search.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconSettingsType = {
  if: { arg: 'name', eq: 'settings' },
  options: ICONS.settings.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconStarType = {
  if: { arg: 'name', eq: 'star' },
  options: ICONS.star.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconStarSubType = {
  if: { arg: 'name', eq: 'star' },
  options: ICONS.star.subType,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconTrashType = {
  if: { arg: 'name', eq: 'trash' },
  options: ICONS.trash.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'outlined' },
  },
};

export const iconUserType = {
  if: { arg: 'name', eq: 'user' },
  options: ICONS.user.type,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'normal' },
  },
};

export const iconUserSubType = {
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

export const labelArg = {
  description: 'Text displayed inside the component',
  control: 'text',
  type: 'string',
  table: {
    defaultValue: { summary: 'Label' },
  },
};

export const colorArg = {
  description: 'Defines the color of the component',
  options: colors,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'blue' },
  },
};

export const colorIntensityArg = {
  description: 'Defines the color intensity of the component',
  options: COLOR_INTENSITY,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 50 },
  },
};

export const variantArg = <T extends readonly string[]>(variantOption: T) => ({
  description: 'Set the component style',
  options: variantOption,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'contained' },
  },
});

export const sizeArg = <T extends readonly string[]>(sizeOption: T) => ({
  description: 'Determine the size of the component',
  options: sizeOption,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'medium' },
  },
});
