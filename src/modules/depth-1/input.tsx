import { cn } from "@/libs/shadcn/utils";
import { Footer } from "@/modules/depth-2/footer";
import { Header } from "@/modules/depth-2/header";
import { TextArea } from "@/modules/depth-2/text-area";

export default function InputDepth1() {
  return (
    <label
      htmlFor="textarea"
      className={cn(
        "df-shadow df-border absolute w-full px-8 py-4 transition-all duration-300"
      )}
    >
      {/* 1. Interaction buttons except translation button  */}
      <Header />

      {/* 2. Textarea */}
      <TextArea />

      {/* 3. Progress bar, translation button */}
      <Footer />
    </label>
  );
}
