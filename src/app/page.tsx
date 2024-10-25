"use client";

import { cn } from "@/libs/shadcn/utils";
import InputDepth1 from "@/modules/depth-1/input";
import OutputDepth1 from "@/modules/depth-1/output";
import { Logo } from "@/modules/depth-2/logo";
import { activeTranslationRecoilAtom } from "@/utilities/recoil/atoms/no-storage";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function MainPage() {
  const activeTranslation = useRecoilValue(activeTranslationRecoilAtom);
  const [interaction, setInteraction] = useState(false);

  useEffect(() => {
    activeTranslation && setInteraction(true);
  }, [activeTranslation]);

  return (
    <main className="relative flex h-full w-full justify-center">
      <motion.section
        animate={{
          translateX: interaction ? "-55%" : "0%"
        }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.3, 1] }}
        className="absolute z-10 flex h-full w-[45%] min-w-[420px] flex-col items-center
justify-center py-16"
      >
        <Logo />
        <InputDepth1 />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, translateX: "50%" }}
        animate={{
          opacity: interaction ? 1 : 0
        }}
        transition={{
          delay: interaction ? 2 : 0,
          duration: interaction ? 1 : 0.5
        }}
        className={cn("absolute flex h-full w-[45%] items-center justify-center py-4")}
      >
        <OutputDepth1 />
      </motion.section>
    </main>
  );
}
