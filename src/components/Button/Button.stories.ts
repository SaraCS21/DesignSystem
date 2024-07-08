import { TemplateResult, html } from 'lit';
import { Story, TemplateProps } from '../../types/button';
import {
  COLOR_ARG,
  DISABLED_ARG,
  HREF_ARG,
  LABEL_ARG,
  ROUNDED_ARG,
  SIZE_ARG,
  TARGET_ARG,
  VARIANT_ARG,
} from '../../constants/argTypesConstants';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../../constants/buttonConstants';
import './Button';

export default {
  title: 'Design System/Atoms/MyButton',
  component: 'my-button',
  argTypes: {
    label: LABEL_ARG,
    color: COLOR_ARG,
    disabled: DISABLED_ARG,
    variant: VARIANT_ARG(BUTTON_VARIANTS),
    size: SIZE_ARG(BUTTON_SIZES),
    rounded: ROUNDED_ARG,
    href: HREF_ARG,
    target: TARGET_ARG,
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
  <my-button
    color=${color}
    ?disabled=${disabled}
    variant=${variant}
    size=${size}
    ?rounded=${rounded}
    href=${href}
    target=${target}
  >
    ${label}
  </my-button>
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
