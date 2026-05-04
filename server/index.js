const fastify = require('fastify')({ logger: true });
const MetaApiService = require('./src/services/MetaApiService');
const WorkspaceController = require('./src/controllers/WorkspaceController');
const ProductController = require('./src/controllers/ProductController');
const authMiddleware = require('./src/middleware/auth');
const GeminiService = require('./src/services/GeminiService');

fastify.register(authMiddleware);

// AI Ad Spy Analysis
fastify.post('/api/ai/spy-analysis', { preHandler: [fastify.authenticate] }, async (request, reply) => {
  const { adData } = request.body;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return reply.status(500).send({ error: 'AI not configured' });

  try {
    const aiService = new GeminiService(apiKey);
    const prompt = `
      Analyze this competitor ad and provide a structured competitive analysis:
      ${JSON.stringify(adData)}
      Use the 🔍 ANALYSE CONCURRENTIELLE IA format specified in the requirements.
    `;
    const response = await aiService.chat(prompt);
    return { analysis: response };
  } catch (error) {
    return reply.status(500).send({ error: 'AI analysis failed' });
  }
});

// Other routes...
// ...
