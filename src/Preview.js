import DOMPurify from "dompurify";
import { marked } from "marked";
import Prism from "prismjs";

marked.setOptions({
  breaks: true,
  gfm: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};
export const Preview = (props) => {
  const convertedText = marked(props.markedText, { renderer: renderer });

  return (
    <div
      id="preview"
      className="right-box"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(convertedText),
      }}
    />
  );
};
