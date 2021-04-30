import { Story, Meta } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './breadcrumb';
export default {
  title: 'molecules/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Search = Template.bind({});
Search.args = {
  // fill: 'primary',
  // size: 'hulk',
  // position: 'left',
  // iconType: 'outline',
};
