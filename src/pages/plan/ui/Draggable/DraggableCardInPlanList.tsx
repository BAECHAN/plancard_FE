import { BridgeInPlan, CardInPlan, SortableItem } from '@/pages/plan/ui';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  closestCenter,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';

type DraggableItem = {
  id: string;
  type: 'card' | 'bridge';
};

const DraggableCardInPlanList = () => {
  const [items, setItems] = useState<DraggableItem[]>(() =>
    [...Array(9)].map((_, i) => ({
      id: `item-${i}`,
      type: i % 2 === 0 ? 'card' : 'bridge',
    })),
  );

  const [activeId, setActiveId] = useState<string | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[
          args => {
            if (args.activatorEvent?.target instanceof HTMLTextAreaElement) {
              return { x: 0, y: 0, scaleX: 1, scaleY: 1 };
            }
            return args.transform ?? { x: 0, y: 0, scaleX: 1, scaleY: 1 };
          },
        ]}
      >
        <SortableContext
          items={items.map(item => item.id)}
          strategy={horizontalListSortingStrategy}
        >
          {items.map(item => (
            <SortableItem
              key={item.id}
              id={item.id}
            >
              <div
                className={`flex h-full flex-shrink-0 items-center justify-center ${
                  item.type === 'card' ? 'w-[224px]' : 'w-[180px]'
                }`}
              >
                {item.type === 'card' ? <CardInPlan /> : <BridgeInPlan />}
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
      <DragOverlay>
        {activeId ? (
          <div className="opacity-80">
            {items.find(item => item.id === activeId)?.type === 'card' ? (
              <CardInPlan />
            ) : (
              <BridgeInPlan />
            )}
          </div>
        ) : null}
      </DragOverlay>
    </>
  );
};

export default DraggableCardInPlanList;
