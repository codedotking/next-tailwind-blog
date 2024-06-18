import React from "react";
import "./markdown.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "../Code";

interface MarkdownProps {
  source: string;
  components?: any;
}

export const Markdown: React.FC<MarkdownProps> = (props) => {
  return (
    <article
      className="markdown prose dark:prose-invert max-w-3xl  
      prose-headings:before:content-['']
      prose-headings:relative
      prose-headings:before:absolute
      prose-headings:before:h-full
      prose-headings:before:block
      prose-headings:before:w-1 
      prose-headings:before:-left-2
      prose-headings:before:bg-blue-400 ">
      <MDXRemote
        source={props.source}
        components={{
          pre: ({ children }) => {
            // 检查 children 是否是 React 元素
            if (React.isValidElement(children)) {
              const { className = "", children: code } = children.props;
              // 检查 className 是否包含 "language-"
              const [, language] = className.split("language-");
              return <Code code={code} lang={language} />;
            } else if (typeof children === "string") {
              return <Code code={children} />;
            }
          },
        }}
      />
    </article>
  );
};
