import { GetStaticProps } from 'next';
import { getMarkdownFiles, MarkdownFiles } from '@/lib/markdown';

interface BlogProps {
  files: MarkdownFiles[];
}

export default function Blog({ files }: BlogProps) {
  return (
    <div className="blog-container">
      <div className='blog-background background'></div>
      <div className='blog-post-container'>
      <h1>ACTIVITY RECORDS</h1>
        {files.map((file) => {
          return (
            <div key={file.fileName} className='blog-post'>
              <h1>RECORD TITLE: {file.metadata.title}</h1>
              <p><i>RELEVANT TAGS: {file.metadata.topics}</i></p>
              <p><i>RECORD DATE: {file.metadata.publishedDate}</i></p>
              <div dangerouslySetInnerHTML={{__html: file.processedContent }}/>
              <div className='blog-post-separator'></div>
            </div>
          );
        })}
    </div>
  </div>
  );
};

export const getStaticProps = async () => {
  const files = await getMarkdownFiles('content/blog');
  return {props: { files }};
};