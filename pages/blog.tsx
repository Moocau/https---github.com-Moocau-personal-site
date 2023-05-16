import { GetStaticProps } from 'next';
import { getMarkdownFiles, MarkdownFiles } from '@/lib/markdown';

interface BlogProps {
  files: MarkdownFiles[];
}

export default function Blog({ files }: BlogProps) {
  return (
    <div className="blog-container">
      {files.map((file) => {
        return (
          <div key={file.fileName}>
            <h1>{file.metadata.title}</h1>
            <p>{file.metadata.description}</p>
            <p>{file.metadata.publishedDate}</p>
            <div dangerouslySetInnerHTML={{__html: file.processedContent }}/>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const files = await getMarkdownFiles('content/blog');
  return {props: { files }};
};