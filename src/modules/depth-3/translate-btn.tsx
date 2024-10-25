import { cn } from "@/libs/shadcn/utils";
import {
  activeTranslationRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export const TranslateBtn = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const [activeTranslation, setActiveTranslation] = useRecoilState(
    activeTranslationRecoilAtom
  );
  const [invalidInput, setInvalidInput] = useState(false);

  return (
    <div className="flex min-w-fit gap-4">
      <button
        onClick={() => {
          if (activeTranslation && activeTranslation === "Initial value") {
            setActiveTranslation(true);
          } else {
            setActiveTranslation(!activeTranslation);
            console.log(activeTranslation);
          }

          if (userInputValue.length < 10) {
            setTimeout(() => {
              setInvalidInput(false);
            }, 1000);

            setInvalidInput(true);
          }
        }}
        className={cn(
          `min-w-fit rounded-lg bg-black px-2 py-[2px] text-white transition-all duration-300
hover:bg-black/50 dark:bg-white dark:text-black dark:hover:bg-white/50`,
          activeTranslation !== "Initial value" && activeTranslation === true
            ? "!bg-yellow text-black"
            : "",
          invalidInput && "!bg-red !text-white"
        )}
      >
        {activeTranslation !== "Initial value" && activeTranslation === true ? "취소" : "번역"}
      </button>
    </div>
  );
};
