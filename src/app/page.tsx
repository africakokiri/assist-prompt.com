"use client";

import { cn } from "@/libs/shadcn/utils";
import InputDepth1 from "@/modules/depth-1/input";
import OutputDepth1 from "@/modules/depth-1/output";
import {
  startTranslationRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useRecoilValue } from "recoil";

const sofiaPro = localFont({ src: "../assets/fonts/Sofia_Pro_Bold.otf" });

export default function MainPage() {
  const startTranslation = useRecoilValue(startTranslationRecoilAtom);
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);

  return (
    <main className="relative flex h-full w-full justify-around">
      <motion.section
        animate={{ translateX: startTranslation ? "-45%" : "0" }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.3, 1] }}
        className="absolute flex h-full min-w-[45%] items-center justify-center"
      >
        <motion.p
          className={cn(
            `absolute -translate-y-[150px] text-center text-4xl text-black transition-colors
duration-1000 dark:text-white`,
            sofiaPro.className
          )}
          initial={{ opacity: 1 }}
          animate={{ opacity: userInputValue.length >= 1 ? 0 : 1 }}
          transition={{ duration: 1.5 }}
        >
          Assist Prompt
        </motion.p>
        <InputDepth1 />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, translateX: "50%" }}
        animate={{ opacity: startTranslation ? 1 : 0 }}
        transition={{
          delay: startTranslation ? 2 : 0,
          duration: startTranslation ? 1 : 0.5
        }}
        className="min-w-2/5 absolute flex h-full justify-center border-2 border-white"
      >
        <OutputDepth1 />
      </motion.section>
    </main>
  );
}
