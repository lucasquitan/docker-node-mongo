import { Types } from 'mongoose';
import User from '../models/User.js';

// Get a single user
export const getUser = (req, reply) => {
  const { cpf, id } = req.params;

  const user = Users.find((e) => e.id == id);

  if (!user)
    reply.code(404).send({
      status: 404,
      error: 'No user found.',
    });

  return reply.send(user);
};

// Get all users
export const getUsers = async (req, reply) => {
  const users = await User.find();

  reply.send(users);
};

// Create an User
export const createUser = async (req, reply) => {
  const { name, cpf, phone } = req.body;

  let user = await User.find({ cpf });

  if (user == null) {
    return reply.code(409).send({
      statusCode: 409,
      error: 'Conflict',
      message: 'This CPF is already in database.',
    });
  }

  user = {
    name,
    cpf,
    phone,
  };

  await User.create(user);

  reply.code(201).send(user);
};

export const editUser = async (req, reply) => {
  // const { identifier } = req.params;

  // if (Types.ObjectId.isValid(identifier)) {
  //   let user = await User.findById(identifier);

  //   if (user == null) {
  //     return reply.code(404).send({
  //       statusCode: 404,
  //       error: 'Bad Request',
  //       message: 'Invalid ID.',
  //     });
  //   }
  // } else {
  //   return reply.code(404).send({
  //     statusCode: 400,
  //     error: 'Bad Request',
  //     message: 'Invalid ID.',
  //   });
  // }

  // console.log(user);

  reply.send({});
};
