"use client";

import InputDepth1 from "@/modules/depth-1/input";
import OutputDepth1 from "@/modules/depth-1/output";
import { Logo } from "@/modules/depth-2/logo";
import { activeTranslationRecoilAtom } from "@/utilities/recoil/atoms/no-storage";

import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

export default function MainPage() {
  const activeTranslation = useRecoilValue(activeTranslationRecoilAtom);

  return (
    <main className="relative flex h-full w-full justify-center">
      <motion.section
        animate={{
          translateX:
            activeTranslation !== "Initial value" || activeTranslation === true ? "-55%" : "0"
        }}
        transition={{ duration: 1.5, ease: [0.42, 0, 0.3, 1] }}
        className="absolute flex h-full w-[45%] min-w-[420px] flex-col items-center
justify-center"
      >
        <Logo />
        <InputDepth1 />
      </motion.section>
      {/* <motion.section
        initial={{ opacity: 0, translateX: "50%" }}
        animate={{ opacity: startTranslation ? 1 : 0 }}
        transition={{
          delay: startTranslation ? 2 : 0,
          duration: startTranslation ? 1 : 0.5
        }}
        className="min-w-2/5 absolute flex h-full justify-center border-2 border-white"
      >
        <OutputDepth1 />
      </motion.section> */}
    </main>
  );
}
