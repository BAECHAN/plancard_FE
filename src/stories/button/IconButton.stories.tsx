import { IconButton } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FaBookmark, FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { FaPlus, FaRegCopy } from 'react-icons/fa6';
import { FiMoreVertical } from 'react-icons/fi';
import { HiMapPin, HiPencilSquare } from 'react-icons/hi2';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { IoMdShare } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { TbTrashX, TbTrashXFilled } from 'react-icons/tb';

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '아이콘 버튼 크기',
    },
    alt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: '이미지의 src 속성',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: '아이콘 버튼 클릭 이벤트' },
  },
  args: { onClick: fn(), alt: '아이콘', size: 'small' },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    iconPath: '/icons/card.svg',
    alt: '카드 아이콘',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    iconPath: '/icons/card.svg',
    alt: '카드 아이콘',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    iconPath: '/icons/card.svg',
    alt: '카드 아이콘',
  },
};

export const WithSVG: Story = {
  args: {
    iconPath: '/icons/card.svg',
    alt: '카드 아이콘',
  },
};

export const WithIconComponentHeart: Story = {
  args: {
    IconComponent: FaRegHeart,
    alt: '하트 아이콘',
  },
};

export const WithIconComponentShare: Story = {
  args: {
    IconComponent: IoMdShare,
    alt: '공유 아이콘',
  },
};

export const WithIconComponentPlus: Story = {
  args: {
    IconComponent: FaPlus,
    alt: '더하기 아이콘',
  },
};

export const WithIconComponentMapPin: Story = {
  args: {
    IconComponent: HiMapPin,
    alt: '지도 핀 아이콘',
  },
};

export const WithIconComponentClose: Story = {
  args: {
    IconComponent: IoClose,
    alt: '닫기 아이콘',
  },
};

export const WithIconComponentPencilSquare: Story = {
  args: {
    IconComponent: HiPencilSquare,
    alt: '연필 아이콘',
  },
};

export const WithIconComponentMoreVertical: Story = {
  args: {
    IconComponent: FiMoreVertical,
    alt: '세로 더보기 아이콘',
  },
};

export const WithIconComponentTrashAlt: Story = {
  args: {
    IconComponent: TbTrashX,
    HoverIconComponent: TbTrashXFilled,
    color: 'gray',
    alt: '삭제 아이콘',
  },
};

export const WithIconComponentCopy: Story = {
  args: {
    IconComponent: FaRegCopy,
    alt: '복사 아이콘',
  },
};

export const WithIconComponentCheckboxUnchecked: Story = {
  args: {
    IconComponent: ImCheckboxUnchecked,
    HoverIconComponent: ImCheckboxChecked,
    hoverIconColor: '#28A745',
    alt: '체크박스 아이콘',
  },
};

export const WithIconComponentBookmark: Story = {
  args: {
    IconComponent: FaBookmark,
    alt: '북마크 아이콘',
  },
};

export const WithIconComponentEmptyBookmark: Story = {
  args: {
    IconComponent: FaRegBookmark,
    alt: '북마크 빈 아이콘',
  },
};
