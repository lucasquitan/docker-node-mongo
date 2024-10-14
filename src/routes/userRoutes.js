import {
  createUser,
  editUser,
  getUser,
  getUsers,
} from '../controllers/UserController.js';

// User Schema
const User = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    cpf: { type: 'string' },
    phone: { type: 'string' },
  },
};

const FullUser = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    name: { type: 'string' },
    cpf: { type: 'string' },
    phone: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
  },
};

// Options to get all users
const getUsersOpt = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: User,
      },
    },
  },
  handler: getUsers,
};

// Options to get one user
const getUserOpt = {
  schema: {
    response: {
      200: FullUser,
    },
  },
  handler: getUser,
};

// Options do Create a User
const postUserOpt = {
  schema: {
    response: {
      201: FullUser,
    },
  },
  handler: createUser,
};

// Options do Edit a User
const putUserOpt = {
  schema: {
    response: {
      200: FullUser,
    },
  },
  handler: editUser,
};

function userRoute(fastify, options, done) {
  fastify.get('/users', getUsersOpt);
  fastify.get('/users/:id', getUserOpt);
  fastify.post('/users', postUserOpt);
  fastify.put('/users/:identifier', putUserOpt);

  done();
}

export default userRoute;
