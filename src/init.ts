import ExpressServer = require('express');
import {Express, Request, Response} from 'express';

import {initOAuth, exchangeAccess, exportCredential} from './oauth';

const app: Express = ExpressServer();

app.listen(3000, () => {
  console.log('Server listening on port 3000. Initialization completed...')
});

app.get('/health', (req: Request, res: Response) => {
  console.log(req.query);

  res.send({
    code: 0,
    status: 'success',
  })
});

app.get('/initOauth', (req: Request, res: Response) => {
  console.log('Initializing oauth with query params:', req.query);
  initOAuth(res);
});

app.get('/exchangeAccess', (req: Request, res: Response) => {
  console.log('Exchange access with query params:', req.query);
  exchangeAccess(req.query.code as string, res);
});

app.get('/export', (req: Request, res: Response) => {
  console.log('Exporting credential with query params:', req.query);
  const credential = exportCredential(res);
  console.log('Credential from JIRA: ', credential);
});

export default app;
