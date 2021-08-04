import { Application, Request, Response } from 'express';
import { StandardResponseViewModel } from '../view-models';

export default (app: Application) => {
  app.get('/', (req: Request, res: Response) => {
    res
      .status(200)
      .send(new StandardResponseViewModel('Doc-Plus Root Endpoint', 'success'));
  });
};
