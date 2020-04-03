import remark from 'remark'
import remarkHTML from 'remark-html'

// https://community.netlify.com/t/list-of-body-markdown/3346
export const toHTML = value =>
  remark()
    .use(remarkHTML)
    .processSync(value)
    .toString()
