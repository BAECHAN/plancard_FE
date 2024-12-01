import { TagButton } from '@/shared/ui';
import { ButtonList } from '@/widgets/button/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ButtonList> = {
  title: 'Widgets/Button/ButtonList',
  component: ButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
    className: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof ButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <ButtonList className="gap-3">
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
        <li>
          <TagButton onClick={() => {}}>Button</TagButton>
        </li>
      </ButtonList>
    );
  },
  args: {},
};
