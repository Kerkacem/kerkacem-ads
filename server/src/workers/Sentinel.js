const cron = require('node-cron');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Hourly Background Sentinel
cron.schedule('0 * * * *', async () => {
  console.log('Running Autonomous Sentinel...');
  const campaigns = await prisma.campaign.findMany({ where: { status: 'ACTIVE' } });
  
  for (const camp of campaigns) {
    // Profitability Check
    const profit = (camp.revenue * 0.65) - camp.spend; // Simplified COD logic
    if (profit < 0) {
      console.log(`ALERT: Campaign ${camp.meta_id} is bleeding profit!`);
      // Trigger notification service (to be implemented)
    }
  }
});
