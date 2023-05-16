import React from 'react';
import { MarkdownFile } from '@/lib/singleMarkdown';
import Image from 'next/image';

interface Props {
  singleProject: MarkdownFile;
  setSingleView: Function;
  setMoreDetails: Function;
}

export const SingleProject = ({ singleProject, setSingleView, setMoreDetails }: Props) => {
  return (
  <div className='project-container'>
    <div className='project-card'>
    <h1>{singleProject.metadata.title}</h1>
    </div>
  </div>
  )
}