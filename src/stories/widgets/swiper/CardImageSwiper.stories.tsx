import { PICKED_CARD_LIST } from '@/shared/const';
import { CardImageSwiper } from '@/widgets/swiper/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardImageSwiper> = {
  title: 'Widgets/Swiper/CardImageSwiper',
  component: CardImageSwiper,
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
} satisfies Meta<typeof CardImageSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    imageList: PICKED_CARD_LIST,
    onIndexChange: () => {},
    onSwiperReady: () => {},
  },
};
