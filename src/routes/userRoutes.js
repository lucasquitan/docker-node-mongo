import {
  createUser,
  getUser,
  getUsers,
} from '../controllers/UserController.js';

// User Schema
const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    role: { type: 'string' },
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
      200: User,
    },
  },
  handler: getUser,
};

const postUserOpt = {
  schema: {
    response: {
      201: User,
    },
  },
  handler: createUser,
};

function userRoute(fastify, options, done) {
  fastify.get('/users', getUsersOpt);
  fastify.get('/users/:id', getUserOpt);
  fastify.post('/users', postUserOpt);

  done();
}

export default userRoute;
