import nodemailer from "nodemailer";
import "dotenv/config";

export default function sendMail(target, text, purpose) {
  const email = process.env.email;
  const pass = process.env.password;
  const message = {
    from: email,
    to: target,
    subject: 'Password Reset Verification Code',
    html: ''
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: email,
      pass: pass
    }
  });

  if (purpose === 'sendVerificationCode') {
    message.html =
      `<table style="max-width: 600px; margin: 0 auto; font-family: 'Poppins', sans-serif;">
      <tr>
        <td style="background-color: #80e026; padding: 20px; text-align: center;">
          <h2>Password Reset Verification</h2>
        </td>
      </tr>
      <tr style="font-size: 1rem;">
        <td style="padding: 20px;">
          <p>Dear ${target.split('@')[0]},</p>
          <p>We have received a request to reset your password. Please click the button below to open password reset page.</p>
          <p>
            <a href="${text}" class="button" style="display: inline-block; padding: 10px 20px; background-color: #4caf50; color: #ffffff; text-decoration: none; border-radius: 4px;">Reset Password</a>
          </p>
          <p>If you did not request a password reset, please ignore this email.</p>
          <div>Thank you,</div>
          <div>MariBermusik</div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f5f5f5; padding: 20px; text-align: center;">
          <p style="font-size: 12px; color: #80e026;">If you want to cancel the reset pasword, just ignore this email and <a href="https://example.com/unsubscribe" style="color: #999999; text-decoration: underline;">login here</a>.</p>
        </td>
      </tr>
    </table>`;

  }


  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      return true;
    }
  });
}
