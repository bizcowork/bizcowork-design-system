import { Story, Meta } from '@storybook/react';
import { IconCheck, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconCheck,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconCheck {...args} />;

export const Check = Template.bind({});
Check.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
