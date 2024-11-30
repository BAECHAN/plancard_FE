import CheckboxButton from '@/shared/ui/button/IconButton/CheckboxButton';
import TrashButton from '@/shared/ui/button/IconButton/TrashButton';
import { Card } from '@/widgets/card/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Card> = {
  title: 'Widgets/Card/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '컨텐츠 크기',
    },
  },
  args: {
    onClick: fn(),
    size: 'medium',
    info: {
      cardId: '1',
      theme: ['symbol', 'night'],
      title: '에펠탑',
      description:
        '프랑스 파리 안나톨 5가(5 Av.Anatole)에 있는 탑이다. 탑의 이름은 건축가 에펠의 이름을 딴것으로 1889년 3월 31일 준공해 1889년 5월 6일에 개장했다. 프랑스의 건축가 알렉상드르 귀스타브 에펠(Alexandre Gustave Eiffel, 1832~1923)[6]이 만든 거대한 철탑.',
      country: 'France',
      city: 'Paris',
      scrap: false,
      imageList: [
        {
          imageId: '1',
          imageUrl: '/images/eiffel-tower.svg',
          alt: '에펠탑',
          isMain: true,
        },
      ],
      rating: 4,
      category: '관광지',
      googleMapLink:
        'https://www.google.com/maps/place/%EC%97%90%ED%8E%A0%ED%83%91/data=!4m2!3m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0?sa=X&ved=1t:155783&ictx=111',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Medium: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithDeleteIcon: Story = {
  args: {
    IconComponent: TrashButton,
  },
};

export const WithCheckboxIcon: Story = {
  args: {
    IconComponent: CheckboxButton,
  },
};
