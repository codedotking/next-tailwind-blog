import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import rehypeUrls from 'rehype-urls';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

const removeBaseUrl = (url: any, node: any) => {
  node.properties.target = '_blank'
  return url;
}
const plugins = [
  rehypeKatex,
  [
    rehypePrettyCode,
    {
      themes: {
        default: "slack-dark",
        dark: "slack-dark",
        light: "slack-dark",
      }
    },
  ],
  rehypeSlug,
  [
    rehypeUrls,
    removeBaseUrl,
  ],
  rehypeFigure
];

export default plugins;