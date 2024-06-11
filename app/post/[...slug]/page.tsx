import React from "react";
import { CustomMDX } from "@/components/CustomMDX";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug.split("\\"),
    };
  });
}

// 生成 metadata
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const mdxPath = `${slug.join("/")}.mdx`;
  const { meta } = getPost(mdxPath);
  return {
    title: meta?.title,
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const mdxPath = `${slug.join("/")}.mdx`;
  const { meta, content } = getPost(mdxPath);
  return (
    <div className="prose dark:prose-invert max-w-3xl">
      <div className="">
        <h2>{meta?.title}</h2>
        <div className="flex gap-4 mb-4">
          <span> 📅 {meta.date}</span>
          <span>⏰ {meta.readTime}</span>
          <span>字数 {meta.words}</span>
        </div>
      </div>
      <CustomMDX source={content} />
    </div>
  );
}
