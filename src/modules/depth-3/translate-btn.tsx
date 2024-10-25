import { cn } from "@/libs/shadcn/utils";
import {
  startTranslationRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const TranslateBtn = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const [startTranslation, setStartTranslation] = useRecoilState(startTranslationRecoilAtom);
  const [invalidInput, setInvalidInput] = useState(false);

  return (
    <div className={cn("flex min-w-fit gap-4", startTranslation ? "min-w-fit" : "min-w-fit")}>
      <button
        onClick={() => {
          userInputValue.length >= 10 && setStartTranslation(!startTranslation);

          if (userInputValue.length < 10 && startTranslation) {
            setStartTranslation(false);

            return;
          }

          if (userInputValue.length < 10) {
            setTimeout(() => {
              setInvalidInput(false);
            }, 1000);

            setInvalidInput(true);
          }
        }}
        className={cn(
          `min-w-fit rounded-lg bg-black px-2 py-[2px] text-white transition-colors
duration-300 hover:bg-black/50 dark:bg-white dark:text-black dark:hover:bg-white/50`,
          startTranslation && "duration-1500 !bg-yellow text-black",
          invalidInput && "!bg-red !text-white"
        )}
      >
        {startTranslation ? "취소" : "번역"}
      </button>
    </div>
  );
};
