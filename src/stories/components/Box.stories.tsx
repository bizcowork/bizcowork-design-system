import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './Box';
import avatarImg from '../assets/static/images/006.png';
import theme from '../assets/styles/theme.d';

export default {
  title: 'Atomic/Box',
  component: Box,
  argsTypes: {
    opacity: { control: 'number' },
    border: { control: 'string' },
    borderRadius: { control: 'number' },
    shadow: {control: 'string'},
  }
};

const Template: Story<BoxProps> = (args) => <Box {...args} />;
export const NormalBox = Template.bind({});
NormalBox.args = {
  height: '200px',
  width: '200px',
  borderRadius: 25,
  backgroundColor: '#fff',
  opacity: 0.7,
  shadow: 'large',
  backgroundImage: avatarImg,
  border: 'none',
};
