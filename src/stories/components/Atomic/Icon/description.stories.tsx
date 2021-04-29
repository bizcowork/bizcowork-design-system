import { Story, Meta } from '@storybook/react';
import { IconDescription, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconDescription,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconDescription {...args} />;

export const Description = Template.bind({});
Description.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
