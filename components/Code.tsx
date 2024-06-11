import { codeToHtml } from "shiki";
import {
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import CopyToClipboard from "./CopyToClipboard";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};
export default async function Code({
  code,
  lang = "typescript",
  filename,
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    transformers: [
      transformerNotationFocus(),
      transformerNotationHighlight(),
      transformerNotationDiff(),
    ],
  });
  return (
    <div className="code-block rounded-lg bg-[#f6f8fa] !pr-0  [&>pre]:rounded-none prose-pre:m-0 prose-pre:rounded-none">
      <div className="code-header overflow-hidden rounded-s-lg">
        <div
          className={cn(
            "flex items-center py-2 pl-2 pr-4 text-sm",
            filename ? " justify-between " : " justify-end"
          )}>
          {filename && (
            <span className="-mb-[calc(0.5rem+2px)] text-[#636c76] rounded-t-lg border-2  px-4 py-2 ">
              {filename}
            </span>
          )}
          <CopyToClipboard code={code} />
        </div>
        <div
          className="border-t-2  dark:border-blue-500  [&>pre]:overflow-x-auto [&>pre]:!bg-[#f6f8fa] [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
          dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}
