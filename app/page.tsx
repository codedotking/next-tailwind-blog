import BlogList from "@/components/PostList";
import Postcard from "../components/PostCard";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  // const posts = await getPosts();
  return (
    <div className=" my-16">
      <BlogList />
    </div>
  );
}
