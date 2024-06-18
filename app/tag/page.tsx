import { getPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  const tags: string[] = [];
  posts.forEach(({ meta }: any) => {
    tags.push(...meta.tags);
  });

  // 生成颜色
  const colors = [
    "red",
    "orange",
    "green",
    "blue",
    "indigo",
    "purple",
  ];

  return (
    <div className=" my-16">
      {posts.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {tags.map((tag: string, index: number) => (
            <Link href={`/tag/${tag}`} key={index}>
              <span
                style={{ backgroundColor: colors[index % colors.length] }}
                className={cn(
                  "text-white py-1 cursor-pointer px-2 rounded-full text-sm"
                )}>
                {tag}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No tag yet</h2>
      )}
    </div>
  );
}
