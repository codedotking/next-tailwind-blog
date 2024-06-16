import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Page() {
  const posts = await getPosts();
  const categories: string[] = [];
  posts.forEach(({ meta }: any) => {
    meta.category && categories.push(meta.category);
  });

  return (
    <div className=" my-16">
      {posts.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {categories.map((category: string, index: number) => (
            <Link href={`/category/${category}`} key={index}>
              <div className="cursor-pointer shadow-md px-4 py-2 ">
                {category}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2>No categories yet</h2>
      )}
    </div>
  );
}
