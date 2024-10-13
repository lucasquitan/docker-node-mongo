import Users from '../models/users.js';
import crypto from 'node:crypto';

// Get a single user
export const getUser = (req, reply) => {
  const { id } = req.params;
  const user = Users.find((e) => e.id == id);

  if (!user)
    reply.code(404).send({
      status: 404,
      error: 'No user found.',
    });

  return reply.send(user);
};

// Get all users
export const getUsers = (req, reply) => {
  reply.send(Users);
};

// Create an User
export const createUser = (req, reply) => {
  const { name, role } = req.body;
  const id = crypto.randomUUID();

  const usr = {
    id,
    name,
    role,
  };

  Users.push(usr);

  reply.code(201).send(usr);
};
