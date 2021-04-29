import { Story, Meta } from '@storybook/react';
import { IconHome, SVGProps } from './icons';
export default {
  title: 'Icons/Icon',
  component: IconHome,
  argTypes: {},
} as Meta;

const Template: Story<SVGProps> = (args) => <IconHome {...args} />;

export const Home = Template.bind({});
Home.args = {
  fill: 'primary',
  size: 'hulk',
  position: 'left',
  iconType: 'outline',
};
