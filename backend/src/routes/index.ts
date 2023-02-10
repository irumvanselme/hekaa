import { Express, Request, Response } from 'express';
import { model } from 'mongoose';

export default function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/v1/apps", async (req, res) => res.send(await model("App").find()))
}
