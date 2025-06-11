# Task Management Application

This application is connected with the backend code

- backend api -> https://github.com/sivasai1412/task-management-api


---

## ✅ Frontend: `README.md` (Angular Task Management UI)

```markdown
# 🌐 Task Management Frontend (Angular)

This is the Angular-based frontend for the Task Management platform. It fetches tasks from the backend API and displays them in a user-friendly UI with filtering capabilities.

---

## 📦 Technologies Used

- Angular 17+ (Standalone components)
- TypeScript
- RxJS / HttpClient
- FormsModule
- CSS (custom styles)
- Vite (optional for fast dev)
- Angular CLI

---

## 🎯 Features

- 📅 View upcoming tasks
- 🎯 Filter by task priority (LOW, MEDIUM, HIGH)
- 🟢 Display task completion status
- 🖼️ Responsive task cards with priority indicators
- 🔄 Real-time filtering using `ngModel` + dropdown
- 🚫 Graceful message when no tasks match

---

## 🖼 UI Preview

| Feature      | Description                                |
|--------------|--------------------------------------------|
| 🔍 Dropdown  | Filters tasks by LOW / MEDIUM / HIGH       |
| 📋 Task Card | Shows title, due date, status, description |
| ✅ Styling   | Colored badges for priorities              |

---

## 🚀 Run Locally

```bash
git clone https://github.com/your-username/task-management-frontend.git
cd task-management-frontend
npm install
npm start
