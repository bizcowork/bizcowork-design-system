import { Story, Meta } from '@storybook/react';
import Button, { BaseButtonProps } from './Button';
import theme from '../assets/styles/theme';
import loading from '../assets/static/images/loading.svg';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  label: '테스트 버튼 입니다',
  size: 'small',
  // border: theme.border(3, 'solid', 'red'),
  // borderRadius: theme.borderRadius(20),
  // colorType: 'secondary',
  // onClick: () => alert('on click'),
  // boxShadow: theme.boxShadow.huge,
  // state: 'loading',
  // loadingImage: loading,
};
