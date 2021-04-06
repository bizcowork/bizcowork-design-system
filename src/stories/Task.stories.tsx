import { Story, Meta } from '@storybook/react';

import Task, { TaskProps } from './Task';

export default {
  title: 'EXAMPLE/Task',
  component: Task,
  argTypes: {
    description: { control: 'description' },
    color: {control: 'color'}
  },
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const NormalTask = Template.bind({});
NormalTask.args = {
  description: 'test',
  background: 'gray'
};
