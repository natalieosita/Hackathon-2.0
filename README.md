# 🚀 FlexMatch – Freelance AI Assistant

FlexMatch is a full-stack web application that connects freelancers to personalized gig opportunities and productivity coaching using OpenAI's GPT API. It features a seamless MERN-style setup with AI-driven gig matching, MongoDB-backed profile storage, and a modern React UI.

---

## ✨ Features

- 🔍 **AI-Powered Gig Suggestions** – Recommends tailored freelance roles based on profile data.
- 💡 **Micro-Coaching Tips** – One-liner insights to boost freelancer productivity.
- 🧠 **Profile Storage** – Saves user data in MongoDB with clean schema.
- 🌐 **React Frontend** – Responsive interface using Axios for API interaction.
- 🧩 **Express Backend API** – RESTful routes with modular service architecture.

---

## 📁 Project Structure

```
flexmatch/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── db.js
│   ├── models/
│   │   └── Profile.js
│   ├── services/
│   │   └── matchAI.js
│   ├── routes/
│   │   └── profile.js
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── components/
│           └── ProfileForm.jsx
```

---

## 🛠️ Tech Stack

| Layer     | Technology           |
|----------|-----------------------|
| Frontend | React, Axios          |
| Backend  | Node.js, Express.js   |
| Database | MongoDB, Mongoose     |
| AI       | OpenAI GPT-3.5        |

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/flexmatch.git
cd flexmatch
```

### 2. Configure environment

Create a `.env` file inside the `/backend` directory:

```env
OPENAIAPIKEY=your_openai_api_key_here
MONGO_URI=mongodb://localhost:27017/flexmatch
PORT=5000
```

### 3. Start the backend server

```bash
cd backend
npm install
node server.js
```

### 4. Start the frontend app

```bash
cd ../frontend
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Example Usage

1. Enter your name, skillset, and goals
2. Submit the form
3. Receive:
   - A list of 3 AI-suggested gigs
   - A micro-coaching tip to improve your workflow

---

## 💡 Inspiration

This project was inspired by the need to empower freelancers through meaningful, AI-driven recommendations that go beyond generic job boards. Built with love and logic 💙

---

## 📄 License

MIT License — feel free to remix, fork, or contribute!

```