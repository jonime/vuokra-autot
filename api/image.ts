import { NowRequest, NowResponse } from '@now/node';
import request from 'request';

export default async (req: NowRequest, res: NowResponse) => {
  const { id } = req.query;

  if (typeof id !== 'string' || !id.match(/^\d+\/\d+\/\d+$/)) {
    res.json('invalid id');
    res.status(400);
    return;
  }

  res.setHeader('Content-type', 'image/jpeg');
  res.setHeader('Cache-Control', 's-max-age=2592000');

  request(
    `https://www.vaihtoplus.fi/cufs2/0x0/.cropsize=402,268,c/pub/vaihtoautot/media/${id}.jpg`
  ).pipe(res);
};
