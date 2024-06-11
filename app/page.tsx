import Postcard from "../components/PostCard";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  
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
