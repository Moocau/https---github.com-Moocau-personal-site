import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm'
import html from 'remark-html';

const root = process.cwd();

export interface MarkdownFile {
  metadata: Record<string, any>;
  processedContent: string;
  publishedDate: Date;
}

export async function getSingleMarkdown ( directory: string, file: string ): Promise<MarkdownFile> {
  const directoryPath = path.join(root, directory);
  const fullPath = path.join(directoryPath, file);

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: metadata, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
  const publishedDate = metadata.publishedDate;

  return {metadata, publishedDate, processedContent: processedContent.toString()};
}

