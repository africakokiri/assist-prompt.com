import { cn } from "@/libs/shadcn/utils";
import {
  invalidInputRecoilAtom,
  startTranslationRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import { useRecoilState, useRecoilValue } from "recoil";

export const TranslateBtn = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const [startTranslation, setStartTranslation] = useRecoilState(startTranslationRecoilAtom);
  const [invalidInput, setInvalidInput] = useRecoilState(invalidInputRecoilAtom);

  return (
    <div className="relative min-w-fit">
      <button
        onClick={() => {
          userInputValue.length >= 10 && setStartTranslation(!startTranslation);

          if (userInputValue.length < 10) {
            setTimeout(() => {
              setInvalidInput(false);
            }, 1000);

            setInvalidInput(true);
          }
        }}
        className={cn(
          `min-w-fit rounded-lg bg-black px-2 py-[2px] text-white transition-all duration-300
dark:bg-white dark:text-black`,
          invalidInput && "!bg-red !text-white"
        )}
      >
        {startTranslation ? "취소" : "번역"}
      </button>
    </div>
  );
};
