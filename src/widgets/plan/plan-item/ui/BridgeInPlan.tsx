import { BaseTextarea } from '@/shared/ui';

const BridgeInPlan = () => {
  return (
    <div
      className="flex w-full flex-col justify-center gap-2"
      aria-label="bridge-in-plan"
    >
      <div className="text-titleMedium h-1 bg-primary text-center"></div>
      <BaseTextarea
        placeholder="메모 입력"
        textSize="small"
        maxLength={100}
        showMaxLength
        rows={5}
        hasScroll={false}
        hasBorder={false}
        textAlign="center"
      />
    </div>
  );
};

export default BridgeInPlan;
