import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

import Avatar001 from '../assets/static/images/001.png';
import Avatar002 from '../assets/static/images/002.png';
import Avatar003 from '../assets/static/images/003.png';
import Avatar004 from '../assets/static/images/004.png';
import Avatar005 from '../assets/static/images/005.png';
import Avatar006 from '../assets/static/images/006.png';


const avatarArray = [Avatar001, Avatar002, Avatar003, Avatar004, Avatar005, Avatar006];

const GetImage = () => {
  const randomInt = Math.floor(Math.random() * (6)) + 1;
  console.log(avatarArray[randomInt - 1]);
  return avatarArray[randomInt - 1];
};

export default {
  title: 'Custom/Avatar',
  component: Avatar,
  argTypes: {
    onClick: {control: 'string'},
    variant: { control: 'text' },
    src: { control: 'string' },
    alt: { control: 'text' },
    sizes: { control: 'text' },
  }
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const NormalAvatar = Template.bind({});
NormalAvatar.args = {
  variant: 'rounded',
  sizes: '',
  src: GetImage(),
  onClick: () => GetImage(),
  alt: 'naver',
};
