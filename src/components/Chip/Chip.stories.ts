import { TemplateResult, html } from 'lit';
import { Story, TemplateProps } from '../../types/chip';
import {
  colorArg,
  labelArg,
  variantArg,
} from '../../constants/argTypesConstant';
import { chipVariants } from '../../constants/chipConstants';
import './Chip';

export default {
  title: 'Design System/Atoms/MyChip',
  component: 'my-chip',
  argTypes: {
    label: labelArg,
    variant: variantArg(chipVariants),
    color: colorArg,
  },
  args: {
    label: 'Chip',
    variant: 'contained',
    color: 'blue',
  },
};

const Template = ({
  label,
  variant,
  color,
}: TemplateProps): TemplateResult => html`
  <my-chip variant=${variant} color=${color}> ${label} </my-chip>
`;

export const CustomChip: Story = Template.bind({});
CustomChip.args = {
  label: 'Chip',
  variant: 'contained',
  color: 'blue',
};

export const ErrorChip: Story = Template.bind({});
ErrorChip.args = {
  label: 'Error',
  variant: 'contained',
  color: 'error',
};

export const WarningChip: Story = Template.bind({});
WarningChip.args = {
  label: 'Warning!!',
  variant: 'contained',
  color: 'warning',
};

export const SuccessChip: Story = Template.bind({});
SuccessChip.args = {
  label: 'Success',
  variant: 'outlined',
  color: 'success',
};