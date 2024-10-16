import CardSwiper from '@/widgets/swiper/CardSwiper';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardSwiper> = {
  title: 'Widgets/Swiper/CardSwiper',
  component: CardSwiper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '',
    },
  },
} satisfies Meta<typeof CardSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
  },
};
