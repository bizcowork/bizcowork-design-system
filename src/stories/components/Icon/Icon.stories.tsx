import { Story, Meta } from '@storybook/react';
import Icon, { IconProps } from './Icon';
// import { ReactComponent as home } from '../assets/static/icons/home_black_24dp.svg';
import home from '../../assets/static/icons/home_black_24dp.svg';

export default {
  title: 'Atomic/Icon',
  component: Icon,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  iconSize: 'default',
  iconSrc: home,
  iconPosition: 'left',
};
