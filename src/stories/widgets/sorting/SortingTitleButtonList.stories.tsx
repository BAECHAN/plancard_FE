import { SortingTitleButton } from '@/shared/ui';
import { SortingTitleButtonList } from '@/widgets/sorting/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SortingTitleButtonList> = {
  title: 'Widgets/Sorting/SortingTitleButtonList',
  component: SortingTitleButtonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
} satisfies Meta<typeof SortingTitleButtonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <SortingTitleButtonList>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="빠른 획득순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="느린 획득순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="카드 이름순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="카드 이름역순"
          />
        </li>
        <li>
          <SortingTitleButton
            onClick={() => {}}
            title="도시 이름순"
          />
        </li>
      </SortingTitleButtonList>
    );
  },
  args: {},
};
