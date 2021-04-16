import { Story, Meta } from '@storybook/react';
import Button, { BaseButtonProps } from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color'},
    // color: { control: 'color' },
    // border: {control: 'text'}
  }
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  label: '테스트 버튼 입니다',
  // backgroundColor: '#2416df;',
  onClick: () => console.log('onClick'),
};