import { TrashButton } from '@/shared/ui';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

const SortableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex flex-col ${isDragging ? 'opacity-50' : ''}`}
    >
      {/* 드래그 핸들 영역 */}
      <div
        {...attributes}
        {...listeners}
        className={`flex h-8 w-full cursor-grab items-center justify-between px-2 active:cursor-grabbing`}
      >
        <GripVertical className="h-4 w-4 text-mono300" />
        <TrashButton
          size="small"
          onClick={() => {}}
        />
      </div>
      {/* 컨텐츠 영역 */}
      <div
        className="relative h-full"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default SortableItem;
