import { sans } from "@/lib/fonts";
import "@/styles/markdown.css";
import Image from "next/image";
export default function NotFound() {
  return (
    <article className="markdown select-none flex justify-center flex-col items-center gap-4">
      <Image src={"./404.svg"} alt="" width={400} height={400}/>
      <h1
        className={[
          sans.className,
          "text-[40px] font-black text-center leading-[44px] text-[--title]",
        ].join(" ")}>
        Not found
      </h1>
    </article>
  );
}
