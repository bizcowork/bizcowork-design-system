import { Story, Meta } from '@storybook/react';
import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Atomic/Button',
  component: IconButton,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;
export const IconBtn = Template.bind({});
IconBtn.args = {
  iconName: 'home',
  size: 'hulk',
  type: 'default',
  colors: 'primary',
  isDisabled: false,
  iconPosition: 'left',
};
