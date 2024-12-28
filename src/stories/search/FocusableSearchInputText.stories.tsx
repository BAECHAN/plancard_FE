import { FocusableSearchInputText } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof FocusableSearchInputText> = {
  title: 'search/FocusableSearchInputText',
  component: FocusableSearchInputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '초기값 텍스트',
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
  },
  args: {
    onSearch: fn(),
    type: 'text',
    placeholder: '검색어를 입력하세요',
  },
} satisfies Meta<typeof FocusableSearchInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: '감사',
  },
};
