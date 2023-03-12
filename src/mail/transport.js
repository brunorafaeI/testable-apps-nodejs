import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "76881490803471",
    pass: "a704c9f3bef46e"
  }
});