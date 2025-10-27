# 🤖 AI Code Reviewer

A full-stack **AI-powered code review application** built with **React + Node.js + Express**.  
It analyzes your code using AI and provides instant, meaningful reviews and improvement suggestions.


🌐 **Live Demo:** [https://ai-code-reviewer-1-hfo0.onrender.com](https://ai-code-reviewer-1-hfo0.onrender.com)

🧠 **Backend API:** [https://ai-code-reviewer-ju27.onrender.com](https://ai-code-reviewer-ju27.onrender.com)



## 🚀 Features

- 🧩 **Paste & Review Code** — instantly get AI feedback and suggestions.  
- ⚡ **Full-Stack App** — powered by React (frontend) and Node.js/Express (backend).  
- 🔐 **Environment-based URLs** — automatically switches between local and production APIs.  
- 🌍 **Deployed on Render** — both backend and frontend hosted live.  
- 🪄 **Clean UI** — minimal design, responsive, and easy to use.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite + Axios |
| Backend | Node.js + Express |
| AI Logic | Gemini API (or similar) |
| Deployment | Render.com |
| Version Control | Git + GitHub |

---

## 📁 Folder Structure

```
AI_Code_Reviewer/
|
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- routes/
|   |   |-- services/
|   |   |-- app.js
|   |   `-- server.js
|   |
|   |-- package.json
|   `-- .env (contains backend secrets)
|
|-- frontend/
|   |--dist
|   |--public
|   |-- src/
|   |   |-- components/
|   |   |-- App.css
|   |   |-- App.jsx
|   |   `-- main.jsx
|   |
|   |-- vite.config.js
|   |-- package.json
|   `-- .env (contains VITE_API_URL)
|
`-- README.md
```


---

## ⚙️ Environment Variables

### 🔹 Backend (`backend/.env`)
PORT=10000
OPENAI_API_KEY=your_openai_api_key_here


### 🔹 Frontend (`frontend/.env`)

VITE_API_URL=https://ai-code-reviewer-ju27.onrender.com


> 🧩 *Render environment variables should match these values.*

---



## 💻 Local Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/anushka-sys/AI_Code_Reviewer.git
cd AI_Code_Reviewer

```
2️⃣ Setup and run the backend
```
cd backend
npm install
node server.js
```

Server runs on http://localhost:10000

3️⃣ Setup and run the frontend
```
cd ../frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173


🌍 Deployment (on Render)

| Method | Endpoint         | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| `POST` | `/ai/get-review` | Accepts code input and returns AI review |



##  🎥 Demo


<img width="1911" height="916" alt="image" src="https://github.com/user-attachments/assets/0470eacf-226b-4752-bffb-20796cfe0047" />




## 💡 Future Enhancements

- 🔍 **Syntax highlighting** for code editor  
- 📜 **Save previous reviews** locally  
- 🌈 **Multi-language support**  
- 🧠 **Use custom AI models** for better analysis  

---

## ⭐ Support

If you like this project, **give it a star ⭐ on GitHub!**

---

## 👩‍💻 Author

**Anushka Wabale**  
💼 GitHub: [@anushka-sys](https://github.com/anushka-sys)  
🔗 LinkedIn: [Anushka Wabale](https://www.linkedin.com/in/anushka-wabale)  
🐦 X (Twitter): [@anushka_wabale](https://x.com/anushka_wabale)  
📧 Email: [anushka.wable2002@gmail.com](mailto:anushka.wable2002@gmail.com)

