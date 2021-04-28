import { Story, Meta } from '@storybook/react';
import { IconSearch, SVGProps } from './Icons';
export default {
  title: 'Icons/Icon',
  component: IconSearch,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconSearch {...args} />;

export const Search = Template.bind({});
Search.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
