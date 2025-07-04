import nodemailer from 'nodemailer';
import { getWhisperById } from '../services/whisper.service.js';
import { decrypt } from '../utils/cryptoUtils.js';

export const sendWhisperByEmail = async (req, res) => {
  try {
    const { whisperId, email } = req.body;

    if (!email || !whisperId) {
      return res.status(400).json({ error: 'Email e ID do whisper são obrigatórios' });
    }

    const whisper = await getWhisperById(whisperId);
    if (!whisper) return res.status(404).json({ error: 'Whisper não encontrado' });

    const decryptedText = decrypt(whisper.text, whisper.ivText);
    const decryptedCreator = decrypt(whisper.creator, whisper.ivCreator);

    const link = `${process.env.FRONTEND_URL}/whisper/${whisperId}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou 'hotmail', 'outlook', ou use SMTP direto
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const htmlTemplate = `
      <div style="font-family: 'Courier New', monospace; background: #0d0d0d; padding: 24px; color: #f0f0f0; border: 2px solid #ec65c3; border-radius: 12px; box-shadow: 0 0 12px #ec65c3;">
  <h2 style="color: #ec65c3; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; text-align: center;">
    You’ve Got a Whisper
  </h2>

  <p style="margin-top: 20px; font-size: 14px; text-align: center; color: #cccccc;">
    Someone sent you a secret message through <span style="color: #ec65c3;">Luvbit</span>.
    <br />
    But you’ll have to open it to find out what it says... 👀
  </p>

  <p style="text-align: center; margin: 30px 0 10px;">
    <a href="${link}" target="_blank" style="font-family: 'Courier New', monospace; background: #ec65c3; color: #0f0f0f; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; text-transform: uppercase; box-shadow: 0 0 10px #ec65c3; display: inline-block;">
     Reveal the Whisper
    </a>
  </p>

  <hr style="margin: 40px 0; border: none; border-top: 1px dashed #444;" />

  <p style="font-size: 12px; color: #888; text-align: center;">
    This message was sent anonymously via <span style="color: #ec65c3;">Luvbit</span>.
  </p>
</div>

    `;

    await transporter.sendMail({
      from: `"Luvbit 💌" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'You’ve Got a Whisper!',
      html: htmlTemplate
    });

    res.json({ success: true });
  } catch (err) {
    console.error('❌ Erro ao enviar email:', err);
    res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
};
