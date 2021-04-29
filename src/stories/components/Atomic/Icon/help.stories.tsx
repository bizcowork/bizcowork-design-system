import { Story, Meta } from '@storybook/react';
import { IconHelp, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconHelp,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconHelp {...args} />;

export const Help = Template.bind({});
Help.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
