import { TagButton } from '@/shared/ui';
import { TagList } from '@/widgets/tag/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagList> = {
  title: 'Widgets/Tag/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <TagList>
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
      </TagList>
    );
  },
  args: {},
};
