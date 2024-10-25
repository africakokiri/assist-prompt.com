import { cn } from "@/libs/shadcn/utils";
import { selectedAiNamesRecoilAtom } from "@/utilities/recoil/atoms/local-storage";

import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const aiList = [
  {
    id: 0,
    name: "Chat-GPT",
    src: "chat-gpt.png"
  },
  {
    id: 1,
    name: "Gemini",
    src: "gemini.png"
  },
  {
    id: 2,
    name: "Claude",
    src: "claude.png"
  }
];

export default function OutputDepth1() {
  const [selectedAiNames, setSelectedAiNamesNames] = useRecoilState(selectedAiNamesRecoilAtom);

  useEffect(() => {
    console.log(selectedAiNames);
  }, [selectedAiNames]);

  return (
    <article
      className="df-border df-shadow h-fit w-full px-8 py-4 transition-all duration-300
dark:text-white"
    >
      <ul className="flex items-center gap-8 duration-1000">
        {aiList.map(({ id, name, src }) => {
          return (
            <li key={id}>
              <button
                className={cn(
                  "flex max-w-fit items-center gap-1 border-b-4 pb-1 text-xs",
                  selectedAiNames.includes(name) ? `border-${name}` : "border-black/10",
                  name === "Chat-GPT" && "dark:border-b-white"
                )}
                onClick={() => {
                  const copiedSelectedAiNames = [...selectedAiNames];

                  if (copiedSelectedAiNames.find((ai) => ai === name)) {
                    const idx = copiedSelectedAiNames.indexOf(name);
                    copiedSelectedAiNames.splice(idx, 1);
                  } else {
                    copiedSelectedAiNames.push(name);
                  }

                  setSelectedAiNamesNames(copiedSelectedAiNames);
                }}
              >
                <Image
                  src={`/icons/${src}`}
                  alt=""
                  height={20}
                  width={20}
                  className={cn(
                    name === "Chat-GPT" && "transition-all duration-1000 dark:invert"
                  )}
                />
                <span>{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <hr
        className="my-4 w-full border-[0.5px] border-black/20 duration-1000
dark:border-white/20"
      />
      <p className="duration-1000">sdafdasf</p>
    </article>
  );
}
