import { TemplateResult, html } from 'lit';
import { Story, TemplateProps } from '../../types/avatar';
import { AVATAR_SIZES } from '../../constants/avatarConstants';
import {
  LABEL_ARG,
  NAME_ARG,
  SIZE_ARG,
} from '../../constants/argTypesConstants';
import './Avatar';

export default {
  title: 'Design System/Atoms/MyAvatar',
  component: 'my-avatar',
  argTypes: {
    label: LABEL_ARG,
    name: NAME_ARG,
    size: SIZE_ARG(AVATAR_SIZES),
  },
  args: {
    label: 'SC',
    name: 'Avatar',
    size: 'medium',
  },
};

const Template = ({ label, name, size }: TemplateProps): TemplateResult => html`
  <my-avatar name=${name} size=${size} label=${label}/>
`;

export const CustomAvatar: Story = Template.bind({});
CustomAvatar.args = {
  name: 'Avatar',
  size: 'medium',
};
