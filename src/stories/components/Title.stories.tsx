import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from './Title';

export default {
  title: 'Atomic/Title',
  component: Title,
  argsTypes: {
    size: { control: 'number' },
    isTitle: { control: 'boolean' },
    text: { control: 'string' },
    align: {control: 'string'},
  }
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const HeaderTitle = Template.bind({});
HeaderTitle.args = {
  text: 'Title is ...',
  isTitle: true,
  size: 1,
};