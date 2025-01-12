import { SearchInputTextExplore } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchInputTextExplore> = {
  title: 'search/SearchInputTextExplore',
  component: SearchInputTextExplore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '검색 텍스트 플레이스홀더',
    },
    type: {
      control: 'text',
      description: '검색 텍스트 타입',
    },
  },
  args: {
    onSearch: fn(),
    type: 'text',
    placeholder: '검색어를 입력하세요',
  },
} satisfies Meta<typeof SearchInputTextExplore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
