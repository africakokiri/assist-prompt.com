import useMounted from "@/hooks/useMounted";
import { cn } from "@/libs/shadcn/utils";
import { selectedLangRecoilAtom } from "@/utilities/recoil/atoms/local-storage";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useRecoilState } from "recoil";

const langList = [
  { id: 0, name: "한국어", code: "ko" },
  { id: 1, name: "영어", code: "en" },
  { id: 2, name: "중국어", code: "zh" },
  { id: 3, name: "일본어", code: "ja" }
];

export const Header = () => {
  const [selectedLang, setSelectedLang] = useRecoilState(selectedLangRecoilAtom);
  const { theme, setTheme } = useTheme();
  const isMount = useMounted({ isAsync: true });

  if (!isMount) return null;

  return (
    <div className="flex items-center justify-between">
      {theme === "dark" ? (
        <motion.button
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          transition={{ duration: 1 }}
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          className="transition-colors duration-1000 dark:invert"
        >
          <SunIcon />
        </motion.button>
      ) : (
        <motion.button
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1 }}
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          className="transition-colors duration-1000"
        >
          <MoonIcon />
        </motion.button>
      )}
      <ul
        className="relative flex items-center justify-end text-xs transition-colors
duration-1000 *:px-2 dark:text-white"
      >
        <li>언어 감지</li>
        <li>
          <ArrowRight className="h-3 w-3" />
        </li>
        {langList.map(({ id, name, code }, index) => {
          return (
            <li key={id}>
              <button
                className={cn(
                  "rounded-lg px-2 py-[2px]",
                  index === selectedLang.id && "df-btn duration-300"
                )}
                onClick={() => {
                  setSelectedLang({ id, name, code });
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
