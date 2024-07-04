import { buttonTargets } from './buttonConstants';
import { colors } from './colorConstants';
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
    defaultValue: { summary: 'homeOutlined' },
  },
};

// GENERAL

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
