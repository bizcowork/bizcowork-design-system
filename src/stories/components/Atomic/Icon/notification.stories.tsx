import { Story, Meta } from '@storybook/react';
import { IconNotification, SVGProps } from './Icons';
export default {
  title: 'Icons/Icon',
  component: IconNotification,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconNotification {...args} />;

export const Notification = Template.bind({});
Notification.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
