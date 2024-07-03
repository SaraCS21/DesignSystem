import { TemplateResult, html } from 'lit';
import { Story, TemplateProps } from '../../types/button';
import {
  colorArg,
  disabledArg,
  hrefArg,
  labelArg,
  roundedArg,
  sizeArg,
  targetArg,
  variantArg,
} from '../../constants/argTypes';
import './Button';

export default {
  title: 'MiBoton',
  component: 'mi-boton',
  argTypes: {
    label: labelArg,
    color: colorArg,
    disabled: disabledArg,
    variant: variantArg,
    size: sizeArg,
    rounded: roundedArg,
    href: hrefArg,
    target: targetArg,
  },
  
  args: {
    label: 'Button',
    color: 'blue',
    disabled: false,
    variant: 'contained',
    size: 'medium',
    rounded: false,
    href: '',
    target: '_blank',
  },
};

const Template = ({
  label,
  color,
  disabled,
  variant,
  size,
  rounded,
  href,
  target,
}: TemplateProps): TemplateResult => html`
  <mi-boton
    color=${color}
    ?disabled=${disabled}
    variant=${variant}
    size=${size}
    ?rounded=${rounded}
    href=${href}
    target=${target}
  >
    ${label}
  </mi-boton>
`;

export const CustomButton: Story = Template.bind({});
CustomButton.args = {
  label: 'Button',
  color: 'blue',
  variant: 'contained',
  size: 'small',
  rounded: true,
};

export const SuccessButton: Story = Template.bind({});
SuccessButton.args = {
  label: 'Success',
  color: 'success',
  variant: 'contained',
  size: 'large',
  rounded: true,
};
SuccessButton.parameters = {
  controls: { disable: true },
};

export const WarningButton: Story = Template.bind({});
WarningButton.args = {
  label: 'Warning!!',
  color: 'warning',
  variant: 'contained',
  size: 'small',
  rounded: false,
};
WarningButton.parameters = {
  controls: { disable: true },
};

export const DisabledButton: Story = Template.bind({});
DisabledButton.args = {
  label: 'Button',
  color: 'error',
  variant: 'outlined',
  size: 'medium',
  rounded: true,
  disabled: true,
};
DisabledButton.parameters = {
  controls: { disable: true },
};

export const LinkButton: Story = Template.bind({});
LinkButton.args = {
  label: 'Go to Google',
  color: 'blue',
  variant: 'text',
  size: 'medium',
  rounded: false,
  href: 'https://google.com',
  target: '_blank',
};
LinkButton.parameters = {
  controls: { disable: true },
};
