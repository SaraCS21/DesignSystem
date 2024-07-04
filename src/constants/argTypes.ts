import {
  buttonColors,
  buttonSizes,
  buttonTargets,
  buttonVariants,
} from './buttonConstants';

// Button Component
// TODO: MODIFICAR LAS DESCRIPCIONES DE LOS ARGUMENTOS

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
  options: buttonColors,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'blue' },
  },
};

export const disabledArg = {
  description: 'Disables the button if it is set to "true"',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const variantArg = {
  description: 'Set the component style',
  options: buttonVariants,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'contained' },
  },
};

export const sizeArg = {
  description: 'Determine the size of the component',
  options: buttonSizes,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'medium' },
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
