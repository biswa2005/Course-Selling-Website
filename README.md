# Course Selling App

A full-stack course marketplace application that provides user authentication (email/password, Google), password reset via OTP, and role-based access (user/admin). Built with a Node.js + Express backend (MongoDB) and a React + Vite frontend.

---

## 🚀 Features

- User registration and login (email/phone + password)
- Google OAuth sign-in
- Password reset via OTP emailed to users
- Role-based access (user, admin)
- Secure authentication using JWT stored as HTTP-only cookies
- Email notifications via Nodemailer (Gmail)

---

## 🧭 Tech Stack

- Backend: Node.js, Express, Mongoose (MongoDB)
- Auth: JWT, bcrypt
- Email: Nodemailer (Gmail)
- Frontend: React, Vite, Tailwind CSS
- HTTP client: Axios
- State: Zustand

---

## 📁 Repository Structure

- Backend/

  - server.js — app entry
  - src/
    - app.js — express app setup
    - controllers/ — auth logic
    - models/ — Mongoose schemas
    - routes/ — API routes (e.g. `/auth`)
    - utils/ — DB + email helpers

- Frontend/
  - src/
    - components/ — UI components
    - pages/ — route pages (Login, Register, Courses, etc.)
    - services/api.js — Axios instance and auth API
    - store/authStore.js — simple auth state

---

## ⚙️ Requirements

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or Atlas)

---

## 🛠️ Environment Variables

Create a `.env` file for the backend with the following variables (example):

```
PORT=5000
DATABASE_URL=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
ADMIN_SECRET=your_admin_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
GOOGLE_CLIENT_ID=your_google_client_id
NODE_ENV=development
```

Frontend environment (.env.local or `.env` for Vite):

```
VITE_BACKEND_URI=http://localhost:5000
```

> Note: For Gmail, you may need an App Password or enable less-secure access depending on your Google account and security settings.

---

## 📥 Quick Start (Local)

Backend

```bash
cd Backend
npm install
# create .env with values (see above)
npm run dev
```

Frontend

```bash
cd Frontend
npm install
# set VITE_BACKEND_URI in .env
npm run dev
```

The frontend (Vite) typically runs on http://localhost:5173 and the backend on http://localhost:5000 (unless overridden).

---

## 🔌 API Endpoints (Overview)

Base: `{{VITE_BACKEND_URI}}/auth`

- POST /register — Register a new user (body: name, email, password, phone, role[, secret_key])
- POST /login — Login with email or phone plus password
- GET /logout — Clear auth cookie
- POST /forgot-password — Send OTP to email (body: email)
- POST /reset-password — Reset password with OTP (body: email, otp, newPassword)
- POST /google-auth — Google sign-in (body: { idToken })

All endpoints return JSON and use HTTP-only cookies for session JWTs where appropriate.

---

## 🧪 Testing

No automated tests are included at the moment. Consider adding unit and integration tests (Jest, Supertest) in future iterations.

---

## 📦 Deployment

- Backend: can be deployed to Vercel (serverless functions), Heroku, or any Node host. Ensure environment variables are set in your hosting provider.
- Frontend: deploy to Vercel, Netlify, or similar. Update `VITE_BACKEND_URI` to the production backend URL.

---

## ✅ To Do / Suggested Improvements

- Add tests and CI (GitHub Actions)
- Add input validation middleware (e.g., celebrate/joi)
- Add rate limiting and brute-force protection for auth endpoints
- Improve email templates and transactional email reliability (use a dedicated provider)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes and open a PR

Please include clear descriptions and keep PRs small and focused.

---

## 📜 License

No license file included in the repository. Add a LICENSE if you want to make licensing explicit (e.g., MIT).

---

## ✉️ Contact

If you have questions or want to collaborate, open an issue or contact the project owner.

---

_This README was generated to provide a clear, concise overview of the Course Selling App. If you'd like changes (more detail for deployment, API examples, or a shorter checklist), tell me which sections to expand or modify._
