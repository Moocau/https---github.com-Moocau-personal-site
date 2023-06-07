import BlogPostLoader from '@/lib/BlogPostLoader';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function blogHandler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (!req.query.start) {
      res.status(500).json({ text: 'Provide a start index' });
      return;
    }
    if (!(+req.query.start === +req.query.start)) {
      res.status(500).json({ text: 'Start index must be a number' });
      return;
    }
    if (!req.query.count) {
      res.status(500).json({ text: 'Provide a count' });
      return;
    }
    if (!(+req.query.count === +req.query.count)) {
      res.status(500).json({ text: 'Count must be a number' });
      return;
    }

    const loader = new BlogPostLoader('content/blog');
    await loader.loadAllPosts();
    const posts = loader.getPosts(req.query.start, req.query.count);

    if (posts && posts.length > 0) res.status(200).json(posts);
    else res.status(204); res.end();
  }
}