const CryptoJS = require('crypto-js');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-secret-key-32-chars-long!!';

const WorkspaceController = {
  updateMetaToken: async (request, reply) => {
    const { workspaceId, token } = request.body;
    // Encrypt
    const encryptedToken = CryptoJS.AES.encrypt(token, ENCRYPTION_KEY).toString();
    try {
      const workspace = await prisma.workspace.update({
        where: { id: workspaceId },
        data: { meta_token: encryptedToken }
      });
      return { success: true };
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to update token' });
    }
  },

  getWorkspace: async (request, reply) => {
    const { id } = request.params;
    const workspace = await prisma.workspace.findUnique({ where: { id } });
    if (!workspace) return reply.status(404).send({ error: 'Not found' });
    
    // Decrypt
    if (workspace.meta_token) {
        const bytes = CryptoJS.AES.decrypt(workspace.meta_token, ENCRYPTION_KEY);
        workspace.meta_token = bytes.toString(CryptoJS.enc.Utf8);
    }
    return workspace;
  }
};

module.exports = WorkspaceController;
