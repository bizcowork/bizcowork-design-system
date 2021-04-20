import { Story, Meta } from '@storybook/react';
import Button, { BaseButtonProps } from './Button';
import theme from '../assets/styles/theme';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  label: '테스트 버튼 입니다',
  border: theme.border(3, 'solid', 'grey'),
  borderRadius: theme.borderRadius(20),
  onClick: () => alert('on click'),
  boxShadow: theme.boxShadow.huge,
};
