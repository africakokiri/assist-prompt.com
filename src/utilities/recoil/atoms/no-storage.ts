import { atom } from "recoil";

export const userInputValueRecoilAtom = atom({
  key: "userInputValueRecoilAtom",
  default: ""
});

export const textAreaHeightRecoilAtom = atom({
  key: "textAreaHeightRecoilAtom",
  default: 56
});

export const activeTranslationRecoilAtom = atom({
  key: "activeTranslationRecoilAtom",
  default: false
});
