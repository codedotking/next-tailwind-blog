import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { sans } from "@/lib/fonts";
import "./markdown.css";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug.split("\\"),
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

  // try {
  //   postComponents = await import(
  //     "../../posts/" + params.slug + "/components.js"
  //   );
  // } catch (e: any) {
  //   if (!e || e.code !== "MODULE_NOT_FOUND") {
  //     throw e;
  //   }
  // }

  const words = 111111;
  const readTime = 11111;

  return (
    <article>
      <h1
        className={[
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        ].join(" ")}>
        {post.meta.title}
      </h1>
      <p className="mb-6 mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        {new Date(post.meta.date).toLocaleDateString("cn", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>

      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        字数：{words}
      </p>
      <p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
        预计阅读时间：{readTime}分钟
      </p>
      <div className="markdown mt-10">
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
                  // @ts-ignore
                  rehypePrettyCode,
                  {
                    theme: "material-theme-palenight",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
