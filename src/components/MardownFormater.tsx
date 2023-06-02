import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";

interface MarkdownFormaterProps {
  content: string;
}
export const MarkdownFormater = ({ content }: MarkdownFormaterProps) => (
  <ReactMarkdown
    children={content}
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, "")}
            style={dark}
            language={match[1]}
            PreTag="div"
          />
        ) : (
          <code {...props} className={className}>
            {children}
          </code>
        );
      },
    }}
  />
);
