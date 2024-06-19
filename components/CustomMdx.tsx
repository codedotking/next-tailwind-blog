import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getPost, getPosts } from "@/lib/posts";
import "@/styles/markdown.css";

export default async function PostPage({ path }: { path: string }) {
  const mdxPath = `${path}.mdx`;
  const post = getPost(mdxPath);
  let postComponents = {};

  try {
    postComponents = await import("../../posts/" + path + "/components.js");
  } catch (e: any) {
    if (!e || e.code !== "MODULE_NOT_FOUND") {
      throw e;
    }
  }
  return (
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
  );
}
