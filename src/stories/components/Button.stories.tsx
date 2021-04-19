import { Story, Meta } from '@storybook/react';
import Button, { BaseButtonProps } from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    // color: { control: 'color' },
    // border: {control: 'text'}
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />;

const radius = {
  ltRtRbLb: [20, 20, 20, 20],
};

export const NormalButton = Template.bind({});
NormalButton.args = {
  label: '테스트 버튼 입니다',
  borderRadius: radius,
  onClick: () => console.log('onClick'),
};
