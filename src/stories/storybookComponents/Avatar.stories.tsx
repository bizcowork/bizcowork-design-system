import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import AvatarImage from '../assets/static/images/006.png';
import React from 'react';


export default {
  title: 'Custom/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'img' },
    alt: { control: 'text' },
    variant: { control: 'text' },
  }
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const NormalAvatar = Template.bind({});
NormalAvatar.args = {
  sizes: 'classes.large',
  src: AvatarImage,
  alt: 'naver',
  variant: 'circular',
  onClick: () => console.log('hello'),
};

const withImage = () => <img src={AvatarImage} />;



// const ChangeRandomAvatarImage = () => {
//   const images = 
// }