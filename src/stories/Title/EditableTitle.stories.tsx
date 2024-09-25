import EditableTitle from '@/shared/ui/Title/EditableTitle';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta: Meta<typeof EditableTitle> = {
  title: 'Title/EditableTitle',
  component: EditableTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialTitle: {
      control: 'text',
      description: '아코디언 제목 텍스트',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '텍스트 크기',
    },
    placeholder: {
      control: 'text',
      description: '아코디언 제목 텍스트 플레이스홀더',
    },
    onSaveTitle: {
      action: 'changed',
      description: '아코디언 제목 변경 이벤트',
    },
  },
  args: { onSaveTitle: fn(), initialTitle: '' },
} satisfies Meta<typeof EditableTitle>;

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

export const HasTitle: Story = {
  args: {
    initialTitle: '타이틀',
    size: 'medium',
  },
};

// 상태를 관리하는 스토리 정의
export const OnSaveTitle: Story = {
  render: args => {
    const [title, setTitle] = useState(args.initialTitle);

    const handleSaveTitle = (newTitle: string) => {
      setTitle(newTitle);
    };

    return (
      <EditableTitle
        {...args}
        initialTitle={title}
        onSaveTitle={handleSaveTitle} // 상태 관리
      />
    );
  },
  args: {
    initialTitle: '타이틀',
    size: 'medium',
  },
};
