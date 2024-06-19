import { sans } from "@/lib/fonts";
import "@/styles/markdown.css";

export default function NotFound() {
  return (
    <article className="markdown">
      <h1
        className={[
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        ].join(" ")}>
        Not found
      </h1>
    </article>
  );
}
