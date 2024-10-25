import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorageAtom",
  storage: typeof window !== "undefined" ? window.localStorage : undefined
});

export const selectedLangRecoilAtom = atom({
  key: "selectedLangRecoilAtom",
  default: { id: 1, name: "영어", code: "en" },
  effects_UNSTABLE: [persistAtom]
});

export const selectedAiNamesRecoilAtom = atom({
  key: "selectedAiNamesRecoilAtom",
  default: ["Chat-GPT", "Gemini", "Claude"]
});
