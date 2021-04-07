import { Story, Meta } from '@storybook/react';
import CustomButton, { CustomButtonProps } from './customButton';

export default {
  title: 'Custom/Button',
  component: CustomButton,
  argTypes: {
    variant: { control: 'text' },
    color: { control: 'color' },
    label: {control: 'text'},
  }
} as Meta;

const Template: Story<CustomButtonProps> = args => <CustomButton {...args} />;

export const NormalCustomButton = Template.bind({});
NormalCustomButton.args = {
  variant: 'contained',
  color: 'primary',
  label: 'BUTTON',
};