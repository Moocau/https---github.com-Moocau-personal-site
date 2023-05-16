import React from 'react';
import { getBlogFiles, BlogFile } from '@/lib/markdown';
import Image from 'next/image';

interface Props {
  files: BlogFile[];
  setSingleView: Function;
  setMoreDetails: Function;
}

export const SingleProject = ({ files, setSingleView, setMoreDetails }: Props) => {
}