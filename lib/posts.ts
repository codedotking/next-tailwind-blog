import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
export interface Post {
  meta: object;
  slug: string;
}

export interface PostDetail {
  meta: {
    [key: string]: any;
  };
  content?: string;
}

export async function getPosts(): Promise<PostDetail[]> {
  const posts: PostDetail[] = [];
  const postsDirectory = path.join(process.cwd(), "posts"); // 使用 process.cwd() 获取当前工作目录

  const readDirectory = (dir: string) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        readDirectory(filePath); // 如果是目录，递归读取
      } else if (file.endsWith(".mdx")) {
        // 使用 endsWith 方法检查文件扩展名
        const fileData = fs.readFileSync(filePath, "utf-8");
        const { data: meta, content } = matter(fileData);
        const readTime = readingTime(content);
        const slug = path
          .relative(postsDirectory, filePath)
          .replace(/\\/g, "/")
          .replace(/\.mdx$/, ""); // 生成 slug
        posts.push({
          meta: {
            ...meta,
            words: readTime.words,
            minutes: readTime.minutes,
            time: readTime.time,
            readTime: readTime.text,
            slug,
          },
        });
      }
    });
  };

  readDirectory(postsDirectory);
  return posts;
}

interface PostData {
  meta: { [key: string]: any };
  content: string;
}

export function getPost(fileName: string): PostData {
  const decodedFileName = decodeURIComponent(fileName); // 解码 URL 编码的文件名
  const filePath = path.join(process.cwd(), "posts", decodedFileName); // 使用 process.cwd() 获取当前工作目录
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  const readTime = readingTime(content);
  return {
    content,
    meta: {
      ...data,
      words: readTime.words,
      minutes: readTime.minutes,
      time: readTime.time,
      readTime: readTime.text,
    },
  };
}
