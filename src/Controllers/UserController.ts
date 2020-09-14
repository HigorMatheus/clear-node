import { Request, Response } from 'express';
import db from '../database/conectDB';

const Usercontroller = {
  async create(req: Request, res:Response) {
    const data = req.query;

    return res.json(data);
  },
};
