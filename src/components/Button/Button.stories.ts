import { TemplateResult, html } from 'lit';
import { buttonColors, buttonVariants } from '../../constants/buttonConstants';
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
      defaultValue: 'button',
      description: 'HTML Attribute',
      options: buttonVariants,
      control: { type: 'select' },
    },
  },
};

const Template = ({
  label,
  color,
  disabled,
  variant,
}: TemplateProps): TemplateResult => html`
  <mi-boton color=${color} ?disabled=${disabled} variant=${variant}>
    ${label}
  </mi-boton>
`;

export const Primary: Story = Template.bind({});
Primary.args = {
  label: 'Button',
  color: 'blue',
};
