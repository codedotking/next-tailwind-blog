import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  const tags: string[] = [];
  posts.forEach(({ meta }: any) => {
    tags.push(...meta.tags);
  });

  return (
    <div className=" my-16">
      {posts.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {tags.map((tag: string, index: number) => (
            <Link href={`/tag/${tag}`} key={index}>
              <div className="cursor-pointer shadow-md px-4 py-2 ">{tag}</div>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No tag yet</h2>
      )}
    </div>
  );
}
