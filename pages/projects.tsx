import { getBlogFiles, BlogFile } from '@/lib/markdown';
import Link from 'next/link';

interface BlogProps {
  files: BlogFile[];
}


export default function Projects ({ files }: BlogProps) {
  return (
    <div className='project-card-container'>
      {files.map((file) => {
        return (
          <div key={file.fileName}>
            <h1>{file.metadata.title}</h1>
            <a href={file.metadata.link}>{file.metadata.link}</a>
            <p>{file.metadata.description}</p>
            <p>{file.metadata.longDescription}</p>
            <p>{file.metadata.publishedDate}</p>
            <div dangerouslySetInnerHTML={{__html: file.processedContent }}/>
          </div>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = await getBlogFiles('content/projects');
  return {props: { files }};
};