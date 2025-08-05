import { Request, Response } from 'express';
import * as userService from '../services/user.service';
import { commonResponse } from '../utils/common-response';
import { HTTP_STATUS } from '../constants/status-codes';
import { formatToTimezone } from '../utils/date-formatter';

export const getUsers = async (req: Request, res: Response) => {
  const timeZone = req.headers['x-timezone'] as string || 'UTC';

  try {
     const users = await userService.getAllUsers();

     const formattedUsers = users.map((user: any) => ({
      ...user,
      createdAt: formatToTimezone(user.createdAt, timeZone),
      updatedAt: formatToTimezone(user.updatedAt, timeZone),
     }))
    return res
      .status(HTTP_STATUS.OK)
      .json(commonResponse(true, 'Users fetched successfully', formattedUsers));
  } catch (error: any) {
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(commonResponse(false, error.message || 'Something went wrong'));
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await userService.createUser(name, email);
    return res
      .status(HTTP_STATUS.CREATED)
      .json(commonResponse(true, 'User created successfully', user));
  } catch (error: any) {
    if (error.message === 'Invalid email format') {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(commonResponse(false, error.message));
    }

    if (error.message === 'Email already exists') {
      return res
        .status(HTTP_STATUS.CONFLICT)
        .json(commonResponse(false, error.message));
    }

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json(commonResponse(false, 'Internal server error'));  
  }
};
