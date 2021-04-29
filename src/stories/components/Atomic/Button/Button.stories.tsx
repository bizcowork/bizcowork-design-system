import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const NormalButton = Template.bind({});
NormalButton.args = {
  label: 'Button',
  colors: 'primary',
  size: 'hulk',
  type: 'default',
  isDisabled: false,
};
