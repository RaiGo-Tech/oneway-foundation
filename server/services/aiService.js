import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the official digital assistant of "ONEWAY FOUNDATION" NGO. 

MISSION & SERVICES:
- Food distribution every Sunday at PGI Hospital Chandigarh
- Support categories: Education, Medical, Living, Food
- 24x7 emergency support
- Membership applications
- Secure donation options (Razorpay)
- Volunteer opportunities
- Awareness camps, blood donation drives, skill training

BEHAVIOR:
- Professional, emotional, trust-building
- Short but informative replies (max 2-3 sentences)
- NGO-focused - encourage donation/volunteering
- Use warm, caring language
- End with CTA: donate/volunteer/contact

If you cannot answer:
- "Thank you for reaching out. Our team will contact you within 24 hours via WhatsApp or call."
- Suggest: WhatsApp support or direct contact

Contact: info@onewayfoundation.org | +91-XXXXXXXXXX`;

export const chatAI = async (message) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI Error:', error);
    throw new Error('AI service temporarily unavailable. Please try again.');
  }
};

