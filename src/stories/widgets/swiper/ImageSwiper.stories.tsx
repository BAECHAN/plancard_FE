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
    imageList: [
      {
        imageId: '1',
        isMain: false,
        imageUrl: `${import.meta.env.BASE_URL}images/eiffel-tower.svg`,
        alt: 'Image 1',
      },
      {
        imageId: '2',
        isMain: true,
        imageUrl: `${import.meta.env.BASE_URL}images/spain.svg`,
        alt: 'Image 2',
      },
      {
        imageId: '3',
        isMain: false,
        imageUrl: 'https://via.placeholder.com/800x600',
        alt: 'Image 3',
      },
    ],
  },
};
