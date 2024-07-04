import { TemplateResult, html } from 'lit';
import { TemplateProps, Story } from '../../types/icon';
import { iconArg, typeArg } from '../../constants/argTypesConstant';
import './Icon';

export default {
  title: 'Design System/Atoms/MyIcon',
  component: 'my-icon',
  argTypes: {
    name: iconArg,
    type: typeArg,
  },
  args: {
    name: 'home',
    type: 'sharp',
  },
};

const Template = ({ name, type }: TemplateProps): TemplateResult => html`
  <my-icon name=${name} type=${type} />
`;

export const CustomIcon: Story = Template.bind({});
CustomIcon.args = {
  name: 'home',
  type: 'sharp',
};
