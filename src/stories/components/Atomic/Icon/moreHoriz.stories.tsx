import { Story, Meta } from '@storybook/react';
import { IconMoreHoriz, SVGProps } from './Icons';
export default {
  title: 'Icons/Icon',
  component: IconMoreHoriz,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconMoreHoriz {...args} />;

export const MoreHoriz = Template.bind({});
MoreHoriz.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
