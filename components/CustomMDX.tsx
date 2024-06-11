import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Code from "./Code";

export function CustomMDX(props: { source: string; components?: any }) {
  return (
    <article
      className="prose dark:prose-invert max-w-3xl  
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
}
