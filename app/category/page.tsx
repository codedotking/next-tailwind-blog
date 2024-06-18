import { getPosts } from "@/lib/posts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  const categories: string[] = [];
  posts.forEach(({ meta }: any) => {
    meta.category && categories.push(meta.category);
  });

  // 生成颜色
  const colors = ["red", "orange", "green", "blue", "indigo", "purple"];

  return (
    <div className=" my-16">
      {posts.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {categories.map((category: string, index: number) => (
            <Link href={`/category/${category}`} key={index}>
              <span
                style={{ backgroundColor: colors[index % colors.length] }}
                className={cn(
                  "text-white py-1 cursor-pointer px-2 rounded-full text-sm"
                )}>
                {category}
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No categories yet</h2>
      )}
    </div>
  );
}
