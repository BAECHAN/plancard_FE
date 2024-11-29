import { SearchInputText } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchInputText> = {
  title: 'search/SearchInputText',
  component: SearchInputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: 'text',
      description: '검색 초기값 텍스트',
    },

    placeholder: {
      control: 'text',
      description: '검색 텍스트 플레이스홀더',
    },
    label: {
      control: 'text',
      description: '검색 텍스트 라벨',
    },
    type: {
      control: 'text',
      description: '검색 텍스트 타입',
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: '검색 텍스트 정렬',
    },
  },
  args: {
    onSearch: fn(),
    type: 'text',
    placeholder: '검색어를 입력하세요',
  },
} satisfies Meta<typeof SearchInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: '감사',
  },
};
