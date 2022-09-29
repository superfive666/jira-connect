import express, { Express, Request, Response } from 'express';

import JiraClient  from 'jira-connector';


const app: Express = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000. Initialization completed...')
})

app.get("/test", (req: Request, res: Response) => {
  console.log(req.query);
  res.send({
    status: "success"
  })
});
