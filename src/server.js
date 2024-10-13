import fastify from 'fastify';

import userRoutes from './routes/userRoutes.js';

const server = fastify({ logger: true });

server.register(userRoutes);

const port = process.env.PORT;

server.get('/', async (req, reply) => {
  return reply.send({ message: 'Hello' });
});

try {
  await server.listen({ port: port });
  console.log(`Server is running on port ${port}`);
} catch (err) {
  server.log.error(err);
}
