const fp = require('fastify-plugin');

async function authMiddleware(fastify, opts) {
  fastify.register(require('@fastify/jwt'), {
    secret: process.env.JWT_SECRET || 'supersecretkey'
  });

  fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
}

module.exports = fp(authMiddleware);
