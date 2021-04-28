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
const buttonIcon = {
  // iconSrc: home,
  isLeft: true,
};
export const NormalButton = Template.bind({});
NormalButton.args = {
  // label: '테스트 버튼 입니다',
  size: 'hulk',
};
