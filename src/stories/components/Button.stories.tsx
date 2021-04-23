import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button/Button';
import theme from '../assets/styles/theme';
import loading from '../assets/static/images/loading.svg';
import home from '../assets/static/icons/home_black_24dp.svg';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const buttonIcon = {
  iconSrc: home,
  isLeft: true,
};
export const NormalButton = Template.bind({});
NormalButton.args = {
  label: '테스트 버튼 입니다',
  size: 'hulk',
  iconSrc: home,
  iconPosition: 'left',
};
