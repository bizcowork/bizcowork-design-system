import { Story, Meta } from '@storybook/react';
import { IconRight, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconRight,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconRight {...args} />;

export const Right = Template.bind({});
Right.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
