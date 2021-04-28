import { Story, Meta } from '@storybook/react';
import { IconInfo, SVGProps } from './Icons';
export default {
  title: 'Icons/Icon',
  component: IconInfo,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconInfo {...args} />;

export const Info = Template.bind({});
Info.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
