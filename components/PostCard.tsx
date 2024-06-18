import React from "react";
import Link from "next/link";

const PostCard = ({ post }: { post: any }): React.ReactNode => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="flex flex-col bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg gap-2">
        <h2 className="text-lg font-bold">{post.meta.title}</h2>
        <p className="text-zinc-600 dark:text-zinc-300">
          {post.meta.description}
        </p>
        <div className="flex items-center text-zinc-600 dark:text-zinc-300 text-sm mt-2">
          <span className="mr-2">📅 {post.meta.date}</span>
          <span>&bull;</span>
          <span className="ml-2">⏰ {post.meta.readTime}</span>
          <span>&bull;</span>
          <span className="ml-2">字数 {post.meta.words}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
