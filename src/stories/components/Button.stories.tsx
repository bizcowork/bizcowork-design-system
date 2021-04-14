import { Story, Meta } from '@storybook/react';
import BaseButton, { BaseButtonProps } from './Botton';

export default {
  title: 'Hancup/Component',
  component: BaseButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color'},
    color: { control: 'color' },
    border: {control: 'text'}
  }
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <BaseButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: 'TestButton',
  backgroundColor: '#fff;',
  color: '#00;',
  border: '1px solid red;',
  borderRadius: '8px',
};