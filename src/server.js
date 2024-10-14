import fastify from 'fastify';
import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';

const server = fastify({ logger: true });

// Database
import './database/index.js';

// User routes
server.register(userRoutes);

const port = process.env.PORT;

try {
  await server.listen({ port: port });
  console.log(`Server is running on port ${port}`);
} catch (err) {
  server.log.error(err);
}
