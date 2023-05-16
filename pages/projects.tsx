import { getBlogFiles, BlogFile } from '@/lib/markdown';
import { ProjectCard } from '@/components/projectCard';
import { useState } from 'react';

interface BlogProps {
  files: BlogFile[];
}

export default function Projects ({ files }: BlogProps) {
  const [singleView, setSingleView] = useState<boolean>(false);
  const [moreDetails, setMoreDetails] = useState<string | undefined>('');

  return (
    <div className='project-card-container'>
      <div className='projects-background background'></div>
      <div className='projects-cards'>
        <div className='project-header'>
          <h1>Project Information</h1>
        </div>
        {!singleView && <ProjectCard files={files} setSingleView={setSingleView} setMoreDetails={setMoreDetails} />}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = await getBlogFiles('content/projects');
  return {props: { files }};
};