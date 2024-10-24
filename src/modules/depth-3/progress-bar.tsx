import { cn } from "@/libs/shadcn/utils";
import { userInputValueRecoilAtom } from "@/utilities/recoil/atoms/no-storage";

import * as Progress from "@radix-ui/react-progress";
import { useRecoilValue } from "recoil";

export const ProgressBar = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const len = userInputValue.length;

  return (
    <div className="flex h-full w-full items-center gap-2">
      <span
        className="w-[30px] text-xs text-black transition-colors duration-1000 dark:text-white"
      >
        {len}
      </span>
      <Progress.Root
        className="relative h-2 w-full overflow-hidden rounded-full"
        style={{
          transform: "translateZ(0)"
        }}
        value={len}
        max={1000}
      >
        <Progress.Indicator
          className={cn(
            "size-full rounded-full transition-all duration-300",
            len === 0 && "df-transparent",
            len < 10 && "bg-red",
            len >= 10 && len < 800 && "bg-green",
            len >= 800 && len < 1000 && "bg-yellow",
            len === 1000 && "bg-red"
          )}
          style={{ transform: `translateX(-${100 - len / 10}%)` }}
        />
      </Progress.Root>
      <span
        className="w-[30px] text-xs text-black transition-colors duration-1000 dark:text-white"
      >
        1000
      </span>
    </div>
  );
};
