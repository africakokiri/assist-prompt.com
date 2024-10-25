import { cn } from "@/libs/shadcn/utils";
import {
  textAreaHeightRecoilAtom,
  userInputValueRecoilAtom
} from "@/utilities/recoil/atoms/no-storage";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useRecoilValue } from "recoil";

const sofiaPro = localFont({ src: "../../assets/fonts/Sofia_Pro_Bold.otf" });

export const Logo = () => {
  const userInputValue = useRecoilValue(userInputValueRecoilAtom);
  const textAreaHeight = useRecoilValue(textAreaHeightRecoilAtom);

  return (
    <motion.p
      className={cn(
        `absolute flex h-2/5 text-center text-4xl text-black transition-colors duration-1000
dark:text-white`,
        sofiaPro.className,
        textAreaHeight > 56 && "hidden"
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: userInputValue.length >= 1 ? 0 : 1 }}
      transition={{ duration: 1.5 }}
    >
      Assist Prompt
    </motion.p>
  );
};