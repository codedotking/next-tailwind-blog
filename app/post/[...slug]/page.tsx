import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { sans } from "@/lib/fonts";
import { getPost, getPosts } from "@/lib/posts";
import "@/styles/markdown.css";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const mdxPath = `${params.slug.join("/")}.mdx`;
  const file = getPost(mdxPath);
  return {
    title: file.meta.title + " — He's Blog",
    description: file.meta.description,
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    return {
      slug: post.meta.slug.split("\\"),
    };
  });
}

export default async function PostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const mdxPath = `${params.slug.join("/")}.mdx`;
  const post = getPost(mdxPath);
  let postComponents = {};

  try {
    postComponents = await import(
      "../../posts/" + params.slug.join("/") + "/components.js"
    );
  } catch (e: any) {
    if (!e || e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }

  return (
    <>
      <article className=" prose  dark:prose-invert dark:!text-gray-300/70  max-w-full markdown">
        <h2 className={cn(sans.className)}>{post.meta.title}</h2>
        <p className="mb-6 mt-2 text-[13px] text-gray-700 dark:text-gray-300">
          {new Date(post.meta.date).toLocaleDateString("cn", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
          字数：{post.meta.words}
        </p>
        <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
          预计阅读时间：{post.meta.readTime}分钟
        </p>
        <div className="markdown">
          <MDXRemote
            source={post?.content || ""}
            components={{
              ...postComponents,
            }}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                // @ts-ignore
                remarkPlugins: [remarkMath],
                rehypePlugins: [
                  // @ts-ignore
                  rehypeKatex,
                  [
                    rehypePrettyCode,
                    {
                      theme: "one-dark-pro",
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
    </>
  );
}
