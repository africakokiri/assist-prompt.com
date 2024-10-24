import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import { cn } from "@/libs/shadcn/utils";
import "@/styles/globals.css";
import RecoilProvider from "@/utilities/recoil/recoil-provider";

import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter_400 = Inter({ subsets: ["latin"], weight: "400" });

export { metadata } from "@/metadata/metadata";

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <RecoilProvider>
      <html lang="ko">
        <body className={cn("h-screen w-screen", inter_400.className)}>
          <NextThemesProvider>{children}</NextThemesProvider>
        </body>
      </html>
    </RecoilProvider>
  );
}
