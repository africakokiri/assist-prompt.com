import { atom } from "recoil";

export const userInputValueRecoilAtom = atom({
  key: "userInputValueRecoilAtom",
  default: ""
});

export const startTranslationRecoilAtom = atom({
  key: "startTranslationRecoilAtom",
  default: false
});

export const textAreaHeightRecoilAtom = atom({
  key: "textAreaHeightRecoilAtom",
  default: 56
});
