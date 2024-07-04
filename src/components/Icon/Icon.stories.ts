import { TemplateResult, html } from 'lit';
import { TemplateProps, Story } from '../../types/icon';
import { iconArg } from '../../constants/argTypesConstant';
import './Icon';

export default {
  title: 'Design System/Atoms/MyIcon',
  component: 'my-icon',
  argTypes: {
    name: iconArg,
  },
  args: {
    name: 'homeOutlined',
    type: 'sharp',
  },
};

const Template = ({ name }: TemplateProps): TemplateResult => html`
  <my-icon name=${name} />
`;

export const CustomIcon: Story = Template.bind({});
CustomIcon.args = {
  name: 'homeOutlined',
};
