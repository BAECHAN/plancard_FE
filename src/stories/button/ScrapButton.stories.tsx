import { ScrapButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof ScrapButton> = {
  title: 'Button/ScrapButton',
  component: ScrapButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '아이콘 버튼 크기',
    },
    initialScrap: {
      control: 'boolean',
      description: '북마크 초기 상태',
    },
    onClick: { action: 'clicked', description: '아이콘 버튼 클릭 이벤트' },
  },
  args: { onClick: fn(), size: 'small', initialScrap: false },
} satisfies Meta<typeof ScrapButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
