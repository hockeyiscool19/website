
import nodemailer from 'nodemailer';

// Create a transporter using your email with OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'jordaneisenman@gmail.com',
    pass: 'crossbardinger', // Better to use OAuth2 or an App Password if 2FA is enabled
    clientId: 'Your-Google-Client-ID',
    clientSecret: 'Your-Google-Client-Secret',
    refreshToken: 'Your-Google-Refresh-Token',
  },
});
