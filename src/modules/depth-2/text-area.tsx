import { cn } from "@/libs/shadcn/utils";
import { userInputValueRecoilAtom } from "@/utilities/recoil/atoms/no-storage";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState } from "recoil";

export const TextArea = () => {
  const [userInputValue, setUserInputValue] = useRecoilState(userInputValueRecoilAtom);
  const [placeHR, setPlaceHR] = useState(false);

  return (
    <div>
      {placeHR && <hr className="mt-2 border-[0.5px] border-black/20 dark:border-white/20" />}
      <TextareaAutosize
        id="textarea"
        autoFocus
        placeholder="번역할 텍스트를 10자 이상 입력하세요."
        maxLength={1000}
        onHeightChange={(e) => {
          e !== 56 ? setPlaceHR(true) : setPlaceHR(false);
        }}
        value={userInputValue}
        onChange={(e) => setUserInputValue(e.target.value)}
        className={cn(
          `df-target-textarea max-h-[70vh] w-full resize-none overflow-scroll bg-white py-4
outline-none transition-colors duration-1000 placeholder:text-black/30 dark:bg-black
dark:text-white dark:placeholder:text-white/30`,
          userInputValue.length === 0 && "h-[56px]",
          userInputValue.length >= 500 && "text-sm"
        )}
      />
      {placeHR && <hr className="mb-2 border-[0.5px] border-black/20 dark:border-white/20" />}
    </div>
  );
};
