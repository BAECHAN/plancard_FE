import { PICKED_CARD_LIST } from '@/shared/const';
import { ImageSwiper } from '@/widgets/swiper/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageSwiper> = {
  title: 'Widgets/Swiper/ImageSwiper',
  component: ImageSwiper,
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
} satisfies Meta<typeof ImageSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    imageList: PICKED_CARD_LIST,
  },
};
