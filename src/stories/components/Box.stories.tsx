import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './Box';
import avatarImg from '../assets/static/images/006.png';

export default {
  title: 'Hancup/Atomic',
  component: Box,
  argsTypes: {
    opacity: { control: 'number' },
    border: { control: 'string' },
  }
};

const Template: Story<BoxProps> = (args) => <Box {...args} />;
export const NormalBox = Template.bind({});
NormalBox.args = {
  height: '400px',
  width: '400px',
  backgroundImage: avatarImg,
};
