import { Story, Meta } from '@storybook/react';
import { IconDelete, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconDelete,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconDelete {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
