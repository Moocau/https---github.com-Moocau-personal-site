import React, { use, useEffect, useState } from 'react';
import { MarkdownFile } from '@/lib/singleMarkdown';
import Image from 'next/image';

interface Props {
  singleProject: MarkdownFile;
  setSingleView: Function;
  setMoreDetails: Function;
  complete: boolean;
  setComplete: Function;
}

export const SingleProject = ({ singleProject, setSingleView, setMoreDetails, complete, setComplete }: Props) => {

  return (
  <div className='project-container'>
    {complete &&     
      <div className='single-project-container'>
        <h1>PROJECT REPORT</h1>
        <h2>PROJECT NAME: <i>{singleProject.metadata.title}</i></h2>
        <h3>RECORD DATE: <i>{singleProject.metadata.publishedDate}</i></h3>
        <h3>ACCESS:</h3>
        <div className='single-project-info-container'>
          <a href={singleProject.metadata.link}>{singleProject.metadata.link}</a>
          <br></br>
          <a href={singleProject.metadata.gitHub}>{singleProject.metadata.gitHub}</a>
        </div>
        <h3>PROJECT SUMMARY:</h3>
        <div className='single-project-info-container'>
          <p>{singleProject.metadata.longDescription}</p>
          <p>CREATED USING: {singleProject.metadata.languages}</p>
          <h3>Personal Achievements:</h3>
          <div dangerouslySetInnerHTML={{__html: singleProject.processedContent }}/>
        </div>
        <div className='return' onClick={() => {
          setSingleView(false);
          setMoreDetails('');
          setComplete(false);
        }}>
          <span>Return</span>
        </div>
      </div>
    }
  </div>
  )
}