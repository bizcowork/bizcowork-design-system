import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from './Title';

export default {
  title: 'Hancup/Atomic',
  component: Title,
  argsTypes: {
    size: { control: 'string' },
  }
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const HeaderTitle = Template.bind({});
HeaderTitle.args = {
  fontSize: '30px',
  label: 'Title...',
};