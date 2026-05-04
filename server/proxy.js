import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Pre-processing middleware to sanitize/normalize Arabic inputs
const normalizeArabic = (text) => {
  return text.normalize('NFKC');
};

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const cleanMessage = normalizeArabic(message);

  try {
    // Process the message locally within the workspace
    console.log('Processing message locally:', cleanMessage);
    
    // Simulate a response that reflects the Gemini CLI's persona
    const reply = `لقد استلمت رسالتك: "${cleanMessage}". أنا هنا كمنصة ذكية تعمل محلياً داخل مساحة عملك. كيف يمكنني مساعدتك اليوم؟`;

    res.json({ reply });
  } catch (error) {
    console.error('Proxy Error:', error.message);
    res.status(500).json({ 
      error: 'عذراً، حدث خطأ داخلي في معالجة طلبك.', 
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
