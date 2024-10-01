import IconBadge from '@/shared/ui/Badge/IconBadge';
import type { Meta, StoryObj } from '@storybook/react';
import { FaStar } from 'react-icons/fa6';

const meta: Meta<typeof IconBadge> = {
  title: 'Badge/IconBadge',
  component: IconBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '아이콘 배지 크기',
    },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof IconBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: 'https://flagcdn.com/gr.svg',
    size: 'medium',
    alt: '국기',
  },
};

const YellowStar = (props: any) => (
  <FaStar
    color="#FFCB01"
    {...props}
  />
);

export const WithIconComponentStar: Story = {
  args: {
    IconComponent: YellowStar,
    alt: '별 아이콘',
  },
};
