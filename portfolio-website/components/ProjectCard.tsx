import React from 'react';
import { getMarkdownFiles, MarkdownFiles } from '@/lib/markdown';
import Image from 'next/image';

interface Props {
  files: MarkdownFiles[];
  setSingleView: Function;
  setMoreDetails: Function;
}

export const ProjectCard = ({ files, setSingleView, setMoreDetails }: Props) => {

  return (
    <div className='card-container'>
    {files.map((file) => {
      return (
        <div 
          className='project-card' 
          key={file.fileName}>
          <h1>{file.metadata.title}</h1>
          <Image src={file.metadata.image} alt='image from project' width='150' height='150'></Image>
          <a href={file.metadata.link}>{file.metadata.link}</a>
          <p>{file.metadata.description}</p>
          <p>{file.metadata.publishedDate}</p>
          <p id='languages'>{file.metadata.languages}</p>
          <div id={file.fileName} onClick={(e: React.MouseEvent<HTMLElement>) => {
               e.preventDefault();
               setSingleView(true);
               setMoreDetails(e.currentTarget.id);
          }}>
            <span>More Details</span>
          </div>
        </div>
      );
    })}
  </div>
  );
}

