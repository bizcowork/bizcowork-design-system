import { Story, Meta } from '@storybook/react';
import Task, { TaskProps } from './Task';

export default {
  title: 'EXAMPLE/Task',
  component: Task,
  argTypes: {
    description: { control: 'description' },
    background: { control: 'color' },
    fontFamily: {control: 'fontFamily'}
  },
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const NormalRobotoTask = Template.bind({});
NormalRobotoTask.args = {
  description: 'illlll',
  background: 'yellow',
  fontFamily: 'bmjua',
};

export const MonoRobotoTask = Template.bind({});
MonoRobotoTask.args = {
  description: 'illlll',
  background: 'red',
  fontFamily: 'bmjua',
};