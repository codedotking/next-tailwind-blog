import { getPosts } from "@/lib/posts";
import Postcard from "@/components/PostCard";
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const category = decodeURIComponent(slug);
  let posts = await getPosts();
  posts = posts.filter((post: any) => post.meta.category === category);
  return (
    <div className=" my-16">
      {posts.length > 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {posts.map((post: any, index: number) => (
            <Postcard key={index} post={post} />
          ))}
        </div>
      ) : (
        <h2>No posts yet</h2>
      )}
    </div>
  );
}
