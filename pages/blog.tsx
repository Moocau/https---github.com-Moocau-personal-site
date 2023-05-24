import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect } from 'react';
import { MarkdownFiles } from '@/lib/markdown';

interface BlogProps {
  files: MarkdownFiles[];
}

export default function Blog({ files }: BlogProps) {
  const [posts, setPosts] = useState(files);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMorePosts = async () => {
    const res = await fetch(
      `/api/getblogmarkdown?start=${posts.length}&count=2`
    );

    if (res.status === 200) {
      const newPosts = await res.json();
      setPosts((post) => [...post, ...newPosts]);
    } else {
      if (res.status === 204) {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      let scroller = document.querySelector('.infinite-scroll-component');
      let container = document.querySelector('.blog-post-container');
      if (scroller && container) {
        if (scroller?.clientHeight < container?.clientHeight) {
          getMorePosts();
        }
        setIsLoading(false);
      }
    }
  }, [isLoading]);

  return (
    <div className='blog-container'>
      <div className='blog-background background'></div>
      <div className='blog-post-container' id='blog-post-container'>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<h3> Loading...</h3>}
          endMessage={<h2>- END OF RECORDS -</h2>}
          scrollableTarget='blog-post-container'
        >
          <h1>ACTIVITY RECORDS</h1>
          {posts.map((data) => {
            return (
              <div key={data.fileName} className='blog-post'>
                <h1>RECORD TITLE: {data.metadata.title}</h1>
                <p>
                  <i>RELEVANT TAGS: {data.metadata.topics}</i>
                </p>
                <p>
                  <i>RECORD DATE: {data.metadata.publishedDate}</i>
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: data.processedContent }}
                />
                <div className='blog-post-separator'></div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

import PostLoader from '../lib/BlogPostLoader';
const loader = new PostLoader('content/blog');

export const getStaticProps = async () => {
  await loader.loadAllPosts();
  const files = loader.getPosts(0, 3);

  return { props: { files } };
};
