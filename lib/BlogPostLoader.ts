import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm'
import html from 'remark-html';

export default class BlogPostLoader {
  directory: string;
  allPosts: any[];

  constructor(directory: string) {
    this.directory = path.join(process.cwd(), directory);
    this.allPosts = [];
  };

  async loadAllPosts() {
    const dirents = fs.readdirSync(this.directory, { withFileTypes: true });
    const fileNames = dirents
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
      .map(dirent => dirent.name);

    this.allPosts = await Promise.all(
      fileNames.map(async (fileName) => {
        const id = fileName.replace(this.directory, '').replace('//', '/').replace(/\.md$/, '');
        const markdown = fs.readFileSync(path.join(this.directory, fileName), 'utf8');

        const { data: metadata, content } = matter(markdown);
        const processedContent = await remark()
          .use(remarkGfm)
          .use(html)
          .process(content);
        const publishedDate = metadata.publishedDate;

        return { id, fileName, metadata, publishedDate, processedContent: processedContent.toString()};
      })
    );

    this.allPosts = this.allPosts.sort((a, b) => {
      return a.publishedDate < b.publishedDate ? 1 : -1;
    });
  };

  getAllPosts() {
    return this.allPosts;
  };

  getPosts(start:any, count:any) {
    if (start >= this.allPosts.length) return null;
    if (start + count > this.allPosts.length) count = this.allPosts.length;
    
    return this.allPosts.slice(start, start + count);
  };
}