import { prisma } from '../../prisma/client';
import validator from 'validator';

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (name: string, email: string) => {
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email format');
  }
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Email already exists');
  }
  return prisma.user.create({
    data: { name, email },
  });
};
