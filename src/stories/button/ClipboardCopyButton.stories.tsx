import ClipboardCopyButton from '@/shared/ui/button/IconButton/ClipboardCopyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ClipboardCopyButton> = {
  title: 'Button/ClipboardCopyButton',
  component: ClipboardCopyButton,
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
    copyText: {
      control: 'text',
      description: '클립보드에 복사할 텍스트',
    },
  },
  args: {
    copyText: '클립보드에 복사할 텍스트',
  },
} satisfies Meta<typeof ClipboardCopyButton>;

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
