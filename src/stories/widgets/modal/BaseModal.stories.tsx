import { BaseButton } from '@/shared/ui';
import BaseModal from '@/widgets/modal/ui/BaseModal';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof BaseModal> = {
  title: 'Widgets/Modal/BaseModal',
  component: BaseModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달의 열림 상태를 결정합니다.',
    },
    onRequestClose: {
      action: 'close',
      description:
        '모달을 닫으려고 할 때 호출되는 콜백 함수입니다. 사용자가 모달 외부를 클릭하거나 ESC 키를 누를 때 호출됩니다.',
    },
    onAfterOpen: {
      action: 'open',
      description: '모달이 열린 후 호출되는 콜백 함수입니다.',
    },
  },
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onRequestClose: () => {},
    onAfterOpen: () => {},
  },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 상태를 관리하는 스토리 정의
export const Default: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <BaseButton onClick={() => setIsOpen(true)}>Open Modal</BaseButton>
        <BaseModal
          {...args}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {},
};
