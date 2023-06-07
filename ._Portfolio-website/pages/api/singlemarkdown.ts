import { getSingleMarkdown } from '@/lib/singleMarkdown';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const singleFile = await getSingleMarkdown('content/projects', req.query.singleFile as string);
    res.status(200).json(singleFile);
  }
}