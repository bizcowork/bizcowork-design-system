import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import avatarImg from '../assets/static/images/006.png';

export default {
  title: 'Atomic/Avatar',
  component: Avatar,
  argsTypes: {
    avatarSize: { control: 'number' },
  },
};

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
export const NormalAvatar = Template.bind({});
NormalAvatar.args = {
  imgSrc: avatarImg,
  // border: '5px solid black',
  // size: 'large',
};
