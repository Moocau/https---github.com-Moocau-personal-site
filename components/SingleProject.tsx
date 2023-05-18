import React, { use, useEffect, useState } from 'react';
import { MarkdownFile } from '@/lib/singleMarkdown';
import Image from 'next/image';

interface Props {
  singleProject: MarkdownFile;
  setSingleView: Function;
  setMoreDetails: Function;
  complete: boolean;
}

export const SingleProject = ({ singleProject, setSingleView, setMoreDetails, complete }: Props) => {

  return (
  <div className='project-container'>
    {complete &&     
      <div className='project-card'>
        <h1>{singleProject.metadata.title}</h1>
        <a href={singleProject.metadata.link}>{singleProject.metadata.link}</a>
        <p>{singleProject.metadata.description}</p>
        <p>{singleProject.metadata.publishedDate}</p>
      </div>
    }
  </div>
  )
}