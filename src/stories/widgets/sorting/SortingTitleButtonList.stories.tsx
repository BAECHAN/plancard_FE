import { SortingTitleButton } from '@/shared/ui';
import { SortingTitleButtonList } from '@/widgets/sorting/ui';
import { sortingOptions } from '@/widgets/sorting/ui/SortingContainerMy';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
      setActiveIndex(index);
      console.log(sortingOptions[index].value);
    };

    return (
      <div className="flex flex-col gap-2">
        <SortingTitleButtonList>
          {sortingOptions.map((option, index) => (
            <li key={option.label}>
              <SortingTitleButton
                title={option.label}
                value={activeIndex === index}
                onClick={() => handleButtonClick(index)}
              />
            </li>
          ))}
        </SortingTitleButtonList>
      </div>
    );
  },
  args: {},
};
