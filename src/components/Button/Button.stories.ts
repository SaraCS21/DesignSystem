import { TemplateResult, html } from 'lit';
import {
  buttonColors,
  buttonSizes,
  buttonVariants,
} from '../../constants/buttonConstants';
import { TemplateProps } from '../../interfaces/button.interface';
import { Story } from '../../types/button.type';
import './Button';

export default {
  title: 'MiBoton',
  component: 'mi-boton',
  argTypes: {
    label: {
      description: 'HTML Attribute',
      control: { type: 'text' },
    },
    color: {
      options: buttonColors,
      control: { type: 'select' },
    },
    disabled: {
      description: 'HTML Attribute',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    variant: {
      description: 'HTML Attribute',
      options: buttonVariants,
      control: { type: 'select' },
    },
    size: {
      description: 'HTML Attribute',
      options: buttonSizes,
      control: { type: 'select' },
    },
    rounded: {
      description: 'HTML Attribute',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

const Template = ({
  label,
  color,
  disabled,
  variant,
  size,
  rounded,
}: TemplateProps): TemplateResult => html`
  <mi-boton
    color=${color}
    ?disabled=${disabled}
    variant=${variant}
    size=${size}
    ?rounded=${rounded}
  >
    ${label}
  </mi-boton>
`;

export const Primary: Story = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'blue',
  variant: 'contained',
  size: 'small',
  rounded: true,
};
