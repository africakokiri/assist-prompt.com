import { ProgressBar } from "@/modules/depth-3/progress-bar";
import { TranslateBtn } from "@/modules/depth-3/translate-btn";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <ProgressBar />
      <TranslateBtn />
    </div>
  );
};
