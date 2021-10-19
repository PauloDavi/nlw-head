import 'dotenv/config';
import 'express-async-errors';

import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import { AppError } from './erros/AppError';

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuario conectado no socket ${socket.id}`);
});

app.use(express.json());

app.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  return res.status(500).json({ error: err.message });
});

export { serverHttp, io }
