const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ProductController = {
  getAll: async (request, reply) => {
    const { workspaceId } = request.params;
    return await prisma.product.findMany({ where: { workspaceId } });
  },
  create: async (request, reply) => {
    const data = request.body;
    return await prisma.product.create({ data });
  }
};

module.exports = ProductController;
