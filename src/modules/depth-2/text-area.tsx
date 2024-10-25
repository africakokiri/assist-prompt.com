import { cn } from "@/libs/shadcn/utils";
import { userInputValueRecoilAtom } from "@/utilities/recoil/atoms/no-storage";
import { textAreaHeightRecoilAtom } from "@/utilities/recoil/atoms/no-storage";

import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState, useSetRecoilState } from "recoil";

export const TextArea = () => {
  const [userInputValue, setUserInputValue] = useRecoilState(userInputValueRecoilAtom);
  const setTextAreaHeight = useSetRecoilState(textAreaHeightRecoilAtom);
  const [placeHR, setPlaceHR] = useState(false);
  const [isTextSmall, setIsTextSmall] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (userInputValue.length >= 500) {
      timeout = setTimeout(() => {
        setIsTextSmall(true);
      }, 1000);
    } else {
      setIsTextSmall(false);
    }

    return () => clearTimeout(timeout);
  }, [userInputValue]);

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

          setTextAreaHeight(e);
        }}
        value={userInputValue}
        onChange={(e) => {
          setUserInputValue(e.target.value);
        }}
        className={cn(
          `df-target-textarea max-h-[68vh] w-full resize-none overflow-scroll bg-white py-4
outline-none transition-colors duration-1000 placeholder:text-black/30 dark:bg-black
dark:text-white dark:placeholder:text-white/30`,
          userInputValue.length === 0 && "h-[56px]",
          isTextSmall && "text-sm"
        )}
      />
      {placeHR && <hr className="mb-2 border-[0.5px] border-black/20 dark:border-white/20" />}
    </div>
  );
};
