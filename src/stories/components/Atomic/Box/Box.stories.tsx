import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from './Box';
import avatarImg from '../assets/static/images/006.png';
import theme from '../../../assets/styles/theme';
import { calcBorderRadius, calcBorder } from '../../../utils/functions/calcFuntions';

export default {
  title: 'Atomic/Box',
  component: Box,
  argsTypes: {
    backgroundColor: { control: 'color' },
    opacity: { control: 'number' },
    border: { control: 'string' },
    borderRadius: { control: 'number' },
    shadow: { control: 'string' },
  },
};

const Template: Story<BoxProps> = (args) => <Box {...args} />;
export const NormalBox = Template.bind({});
NormalBox.args = {
  height: '200px',
  width: '200px',
  borderThick: 10,
  borderColor: '#000000',
  borderRadius: calcBorderRadius(70, 'down'),
  backgroundColor: theme.colors.primary.tone100,
  opacity: 1,
  shadow: 'large',
  // backgroundImage: avatarImg,
};
