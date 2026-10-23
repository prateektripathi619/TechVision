# 🚀 Professional Theme Setup Guide

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
# OR if using pnpm
pnpm install
```

### Step 2: Run Development Server
```bash
npm run dev
# OR
pnpm dev
```

The app will be available at: **http://localhost:3000**

---

## If You're Having Issues

### ❌ "Port 3000 already in use"
```bash
# On Windows, find and kill the process:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then run again
npm run dev
```

### ❌ "Module not found" errors
```bash
# Clear cache and reinstall
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

### ❌ "Build errors"
```bash
# Try building first
npm run build
npm start
```

### ❌ Still having issues?
1. Make sure Node.js v18+ is installed: `node --version`
2. Close all terminals and VS Code
3. Delete `node_modules` and `.next` folder
4. Run `npm install` again
5. Run `npm run dev`

---

## What to Expect

When running locally, you'll see:

✅ **Clean, professional light theme**
✅ **Blue & slate color palette**
✅ **Responsive design**
✅ **Smooth animations and hover effects**
✅ **All sections fully visible:**
  - Modern hero section
  - Service cards
  - Impact metrics
  - Portfolio projects
  - Tech stack showcase
  - CTA section
  - Professional footer

---

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

## Contact Form Email Notifications

Project inquiries are sent to `software@devcube.in` through Resend. Configure these environment variables in `.env.local` for local development and in your deployment environment for production:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=your_verified_sender_email
```

Verify the sender domain with Resend before using it in production. The contact form reports an error if email delivery is not configured or the provider rejects a message.

---

## Color Scheme

- **Primary**: Blue (`#2563EB`)
- **Secondary**: Indigo (`#4F46E5`)
- **Background**: White (`#FFFFFF`)
- **Text**: Slate (`#1E293B` to `#64748B`)

Enjoy your professional website! 🎉
