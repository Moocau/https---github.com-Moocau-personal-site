import { GetStaticProps } from 'next';
import { getBlogFiles, BlogFile } from '@/lib/markdown';

interface BlogProps {
  files: BlogFile[];
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
  const files = await getBlogFiles('content/blog');
  return {props: { files }};
};