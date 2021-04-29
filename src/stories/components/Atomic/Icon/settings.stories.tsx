import { Story, Meta } from '@storybook/react';
import { IconSettings, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconSettings,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconSettings {...args} />;

export const Settings = Template.bind({});
Settings.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
