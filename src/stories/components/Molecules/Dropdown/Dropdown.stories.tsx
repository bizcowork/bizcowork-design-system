import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from 'molecules/Dropdown/dropdown';
export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const NormalDropdown = Template.bind({});
NormalDropdown.args = {
  contents: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
  iconName: 'moreHoriz',
  size: 'hulk',
  type: 'default',
  colors: 'primary',
  isDisabled: false,
  iconPosition: 'only',
};
