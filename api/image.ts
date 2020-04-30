import { NowRequest, NowResponse } from '@now/node';
import fetch from 'node-fetch';
import sharp from 'sharp';

export default async (req: NowRequest, res: NowResponse) => {
  const useWebp = req.headers.accept?.includes('image/webp');

  const { id } = req.query;

  if (typeof id !== 'string' || !id.match(/^\d+\/\d+\/\d+$/)) {
    res.json('invalid id');
    res.status(400);
    return;
  }

  const image = await fetch(
    `https://www.vaihtoplus.fi/cufs2/0x0/.cropsize=402,268,c/pub/vaihtoautot/media/${id}.jpg`
  ).then(result => result.buffer());

  const chain = sharp(image);

  if (useWebp) {
    chain.webp({ quality: 50 });
    res.setHeader('Content-type', 'image/webp');
  } else {
    chain.jpeg({ progressive: true, quality: 50 });
    res.setHeader('Content-type', 'image/jpeg');
  }

  res.setHeader('Cache-Control', 's-maxage=2592000');

  chain.pipe(res);
};
