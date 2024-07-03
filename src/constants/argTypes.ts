import {
  buttonColors,
  buttonSizes,
  buttonTargets,
  buttonVariants,
} from './buttonConstants';

// Button Component

export const labelArg = {
  description: 'HTML Attribute',
  control: 'text',
  type: 'string',
  table: {
    defaultValue: { summary: 'Button' },
  },
};

export const colorArg = {
  description: 'HTML Attribute',
  options: buttonColors,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'blue' },
  },
};

export const disabledArg = {
  description: 'HTML Attribute',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const variantArg = {
  description: 'HTML Attribute',
  options: buttonVariants,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'contained' },
  },
};

export const sizeArg = {
  description: 'HTML Attribute',
  options: buttonSizes,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: 'medium' },
  },
};

export const roundedArg = {
  description: 'HTML Attribute',
  control: 'boolean',
  type: 'boolean',
  table: {
    defaultValue: { summary: false },
  },
};

export const hrefArg = {
  description: 'HTML Attribute',
  control: 'text',
  type: 'string',
};

export const targetArg = {
  if: { arg: 'href', neq: '' },
  description: 'HTML Attribute',
  options: buttonTargets,
  control: 'select',
  type: 'string',
  table: {
    defaultValue: { summary: '_blank' },
  },
};
