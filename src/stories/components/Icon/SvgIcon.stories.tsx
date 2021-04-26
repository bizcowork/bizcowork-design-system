import { Story, Meta } from '@storybook/react';
import SvgIcon, { SvgIconProps } from './svgIcon';
// import home from '../../assets/static/icons/home_black_24dp.svg';

export default {
  title: 'Atomic/SvgIcon',
  component: SvgIcon,
  argTypes: {
    size: { control: 'text' },
    iconColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SvgIconProps> = (args) => <SvgIcon {...args} />;

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  // iconColor: '#000000',
  // iconSize: 'default',
};
