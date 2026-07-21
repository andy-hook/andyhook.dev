import rehypePrettyCode from 'rehype-pretty-code';

const prettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: false,
  defaultLang: 'plaintext',
  transformers: [
    {
      pre(node) {
        if (node.properties) {
          delete node.properties.tabindex;
          delete node.properties.tabIndex;
        }
      },
    },
  ],
};

export default function rehypePrettyCodeForWriting() {
  return rehypePrettyCode(prettyCodeOptions);
}
