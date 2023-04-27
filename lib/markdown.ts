import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm'
import html from 'remark-html';

const root = process.cwd();

export interface BlogFile {
  id: string;
  fileName: string;
  metadata: Record<string, any>;
  processedContent: string;
}

export async function getBlogFiles( directory: string ): Promise<BlogFile[]> {
  const directoryPath = path.join(root, directory)
  const dirents = fs.readdirSync(directoryPath, { withFileTypes: true });
  const fileNames = dirents
  .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
  .map(dirent => dirent.name);
  
  const allPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(directoryPath, '').replace('//', '/').replace(/\.md$/, '');
      const markdown = fs.readFileSync(path.join(root, directory, fileName), 'utf8');
      const { data: metadata, content } = matter(markdown);
      const processedContent = await remark()
        .use(remarkGfm)
        .use(html)
        .process(content);
      return { id, fileName, metadata, processedContent: processedContent.toString()};
    })
  );

  return allPosts;
}

