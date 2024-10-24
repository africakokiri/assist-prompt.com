import { atom } from "recoil";

export const userInputValueRecoilAtom = atom({
  key: "userInputValueRecoilAtom",
  default: ""
});

export const startTranslationRecoilAtom = atom({
  key: "startTranslationRecoilAtom",
  default: false
});

export const invalidInputRecoilAtom = atom({
  key: "invalidInputRecoilAtom",
  default: false
});
