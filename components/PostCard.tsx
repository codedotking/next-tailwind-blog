import React from "react";
import Link from "next/link";

export default function PostCard({ post }: { post: any }) {
  return (
    // A card to wrap all elements
    <Link href={`/post/${post.slug}`}>
      <div
        className=" flex flex-col gap-4 *:first-letter:
          shadow-slate-200
           shadow-sm
      rounded-md  dark:border-white  px-4 py-2 cursor-pointer">
        {/* <Image src="{post.frontMatter.thumbnail}" alt="postCardImage" /> */}
        <div className="flex flex-col gap-2">
          <h2 className=" text-xl font-bold ">{post.meta.title}</h2>
          <p className=" text-gray-800 dark:text-slate-100">
            {post.meta.description}
          </p>
        </div>
        <div className=" flex gap-4 text-sm">
          <h2> 📅 {post.meta.date}</h2>
          <p>⏰ {post.meta.readTime}</p>
          <p>字数 {post.meta.words}</p>
        </div>
      </div>
    </Link>
  );
}
