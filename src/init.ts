import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000. Initialization completed...')
})

app.get("/health", (req: Request, res: Response) => {
  console.log(req.query);

  res.send({
    code: 0,
    status: "success",
  })
});

export default app;
