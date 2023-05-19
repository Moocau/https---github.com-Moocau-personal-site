import { getMarkdownFiles, MarkdownFiles } from '@/lib/markdown';
import { ProjectCard } from '@/components/ProjectCard';
import { SingleProject } from '@/components/SingleProject';
import { useState, useEffect } from 'react';

interface MarkdownProps {
  files: MarkdownFiles[];
}

export default function Projects ({ files }: MarkdownProps) {
  const [singleView, setSingleView] = useState<boolean>(false);
  const [moreDetails, setMoreDetails] = useState<string | undefined>(undefined);
  const [singleProject, setSingleProject] = useState<any>('');
  const [complete, setComplete] = useState<boolean>(false);

  const getSingleProject = async (file: string) => {
    const res = await fetch(`/api/singlemarkdown?singleFile=${file}`);
    if (res.status === 200) {
      const singleProjectInformation = await res.json();
      setSingleProject(singleProjectInformation);
      setComplete(true);
    }
  }

  useEffect(() => {
    if (moreDetails !== undefined) {
      getSingleProject(moreDetails);
    }
  }, [moreDetails])

  return (
    <div className='project-card-container'>
      <div className='projects-background background'></div>
      <div className='projects-cards'>
        {!singleView &&
          <div className='project-header'>
            <h1>Project Information</h1>
          </div>
        }
        {!singleView && <ProjectCard files={files} setSingleView={setSingleView} setMoreDetails={setMoreDetails} />}
        {singleView && <SingleProject singleProject={singleProject} setSingleView={setSingleView} setMoreDetails={setMoreDetails} complete={complete} setComplete={setComplete} />}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = await getMarkdownFiles('content/projects');
  return {props: { files }};
};
