import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(200).json({ data: users, message: 'Users retrieved successfully', statusTime: new Date().toISOString() });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.status(201).json({ data: user, message: 'User created successfully', statusTime: new Date().toISOString() });
};
