import { SearchContainerExplore } from '@/widgets/search/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchContainerExplore> = {
  title: 'Widgets/Search/SearchContainerExplore',
  component: SearchContainerExplore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onSearch: fn(),
    type: 'text',
    placeholder: '검색어를 입력하세요',
  },
} satisfies Meta<typeof SearchContainerExplore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
