import useModalStore from '@/shared/store/useModalStore';
import { BaseButton } from '@/shared/ui';
import { BaseModal } from '@/widgets/modal/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BaseModal> = {
  title: 'Widgets/Modal/BaseModal',
  component: BaseModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onAfterOpen: {
      action: 'open',
      description: '모달이 열린 후 호출되는 콜백 함수입니다.',
    },
  },
  tags: ['autodocs'],
  args: {
    onAfterOpen: () => {},
  },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 상태를 관리하는 스토리 정의
export const Default: Story = {
  render: args => {
    const { openModal } = useModalStore();

    return (
      <>
        <BaseButton onClick={openModal}>Open Modal</BaseButton>
        <BaseModal {...args} />
      </>
    );
  },
  args: {},
};
