# Rafael Galazzi - Portfolio

Welcome to my personal portfolio website! This is a modern, responsive portfolio built with Next.js 15, showcasing my work as a Full-Stack Developer.

## About Me

I'm Rafael Galazzi, a passionate Full-Stack Developer with experience building high-performance web applications across real estate, education, and healthcare sectors. I specialize in TypeScript, React.js, Vue.js, and Node.js with a focus on clean and scalable architecture.

Always looking for new challenges and opportunities to learn and grow as a professional developer.

## Features

- 🌐 **Multi-language Support** - Available in English and Portuguese
- 🎨 **Modern UI/UX** - Built with Tailwind CSS and Framer Motion for smooth animations
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Turbopack
- 🌙 **Dark Mode** - Automatic theme switching based on system preference
- 📧 **Contact Form** - Send emails directly from the contact form

## Projects Featured

- **Easy Access** - Complete access management solution for university environments
- **Tohodenki** - Financial management platform for companies
- **Cootraporter** - Real-time transportation tracking system
- **Medme-Hilab** - Laboratory management system
- **Octo** - Platform for LGPD compliance guidance
- **House DO** - Real estate platform with virtual tours
- **Egnex/Nexomobi Charge Control** - EV battery charging control system

## Technologies Used

- [Next.js 15](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [i18next](https://www.i18next.com/) for internationalization
- [Nodemailer](https://nodemailer.com/) for email sending
- [React](https://reactjs.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Variables

Create a `.env` file in the root directory with your email configuration:

```env
# Email Configuration
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
SMTP_FROM_EMAIL=your-email@example.com
CONTACT_EMAIL=your-email@example.com
```

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password as `SMTP_PASS`

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS utilities
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript features
- [Nodemailer Documentation](https://nodemailer.com/) - learn about sending emails with Node.js

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, make sure to set your environment variables in your Vercel project settings.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.