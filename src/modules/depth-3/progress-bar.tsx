import { cn } from "@/libs/shadcn/utils";
import {
  startTranslationRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import * as Progress from "@radix-ui/react-progress";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const ProgressBar = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const startTranslation = useRecoilValue(startTranslationRecoilAtom);
  const [invalidInput, setInvalidInput] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(0);
  const len = userInputValue.length;

  useEffect(() => {
    setTransitionDelay(startTranslation ? 0 : 1.5);
  }, [startTranslation]);

  return (
    <div className="flex h-full w-full items-center gap-8">
      <motion.div
        animate={{ width: startTranslation ? "80%" : "100%" }}
        transition={{ duration: 1.5 }}
        className="flex h-full w-full items-center"
      >
        <span
          className="w-[30px] text-xs text-black transition-colors duration-1000
dark:text-white"
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
          className="w-[30px] text-xs text-black transition-colors duration-1000
dark:text-white"
        >
          1000
        </span>
      </motion.div>
      <AnimatePresence>
        {startTranslation && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: transitionDelay, duration: 0.3 }}
            onClick={() => {
              if (userInputValue.length < 10) {
                setTimeout(() => {
                  setInvalidInput(false);
                }, 1000);

                setInvalidInput(true);
              }
            }}
            className={cn(
              `absolute right-[90px] min-w-[80px] rounded-lg bg-black px-2 py-[2px] text-white
hover:bg-black/50 dark:bg-white dark:text-black dark:hover:bg-white/50`,
              invalidInput && "!bg-red !text-white"
              // startTranslation && "duration-1500 !bg-yellow text-black"
            )}
          >
            다시 번역
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
