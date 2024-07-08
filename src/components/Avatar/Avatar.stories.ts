import { TemplateResult, html } from 'lit';
import { Story, TemplateProps } from '../../types/avatar';
import { AVATAR_SIZES } from '../../constants/avatarConstants';
import { NAME_ARG, SIZE_ARG } from '../../constants/argTypesConstants';
import './Avatar';

export default {
  title: 'Design System/Atoms/MyAvatar',
  component: 'my-avatar',
  argTypes: {
    name: NAME_ARG,
    size: SIZE_ARG(AVATAR_SIZES),
  },
  args: {
    name: 'Avatar',
    size: 'medium',
  },
};

const Template = ({ name, size }: TemplateProps): TemplateResult => html`
  <my-avatar name=${name} size=${size} />
`;

export const CustomAvatar: Story = Template.bind({});
CustomAvatar.args = {
  name: 'Avatar',
  size: 'medium',
};
