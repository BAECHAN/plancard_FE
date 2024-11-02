import { Header } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { FaUser } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

const meta: Meta<typeof Header> = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '헤더 크기',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: (
      <>
        <strong className="text-2xl">Small Header</strong>
        <div className="flex grow" />
        <div className="flex gap-4">
          <FaUser className="text-2xl" />
          <MdLogout className="text-2xl" />
        </div>
      </>
    ),
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    children: (
      <>
        <strong className="text-3xl">Medium Header</strong>
        <div className="flex grow-0" />
        <div className="flex gap-6">
          <FaUser className="text-3xl" />
          <MdLogout className="text-3xl" />
        </div>
      </>
    ),
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    children: (
      <>
        <strong className="text-4xl">Large Header</strong>
        <div className="flex grow-0" />
        <div className="flex gap-8">
          <FaUser className="text-4xl" />
          <MdLogout className="text-4xl" />
        </div>
      </>
    ),
    size: 'large',
  },
};
