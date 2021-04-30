import { Meta, Story } from '@storybook/react';
import { IconExpand, SVGProps } from './icons';

export default {
  title: 'Icons/Icon',
  component: IconExpand,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconExpand {...args} />;

export const Expand = Template.bind({});
Expand.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
