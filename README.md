# A Karthik Sagar — Personal Portfolio

A dynamic, full-stack personal portfolio website designed to showcase software engineering projects, case studies, and technical skills.

The application is split into a robust Node.js/Express backend that serves project data and handles contact form submissions, and a responsive React frontend featuring a custom-built, infinite-looping project carousel and Markdown-based case study rendering.

## 🚀 Key Features

* **Custom JavaScript Carousel:**
  A fully responsive, filterable project slider engineered from scratch without external libraries. It features an "invisible snap-back" algorithm for seamless infinite looping and dynamic bounds checking.

* **Dynamic Filtering:**
  Instantly filter portfolio projects by category (e.g., Systems, Full-Stack Web, AI & Security) with intelligent UI state management that prevents animation glitches.

* **RESTful API Backend:**
  An Express.js server that manages structured project data and processes contact form submissions.

* **Graceful Error Handling:**
  Custom UI components handle API connection timeouts and empty states gracefully.

## 🛠️ Tech Stack

### Frontend

* React.js
* Custom CSS
* Flexbox & CSS Grid

### Backend

* Node.js
* Express.js
* CORS
* Express JSON middleware

## 📂 Project Structure

```text
personal-portfolio/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ProjectList
│   │   │   └── ProjectCard
│   │   ├── pages/              # Application pages
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── style.css           # Global styling & Markdown overrides
│   │   └── App.jsx
│   └── package.json
│
└── server/                     # Express Backend
    ├── data/
    │   └── projects.js         # Project data & Markdown content
    ├── index.js                # Express server entry point & API routes
    └── package.json
```

## ⚙️ Installation & Setup

To run this project locally, start both the frontend development server and the backend API server concurrently.

### 1. Clone the Repository

```bash
git clone https://github.com/akarthiksagar/personal-portfolio-react.git
cd personal-portfolio-react
```

### 2. Start the Backend Server

Open a terminal and navigate to the `server` directory:

```bash
cd server
npm install
npm run dev
```

Alternatively, you can start the server directly with:

```bash
node index.js
```

The backend server will start on:

```text
http://localhost:5000
```

### 3. Start the Frontend Client

Open a second terminal and navigate to the `client` directory:

```bash
cd client
npm install
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

The exact port may vary depending on your Vite configuration.

## 🔌 API Reference

### Get All Projects

**Endpoint:** `GET /api/projects`

Returns an array of project objects, including their Markdown `readme` content.

### Submit Contact Form

**Endpoint:** `POST /api/contact`

**Headers:**

```http
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Hello!"
}
```

## 📄 License

This project is intended to serve as a personal portfolio and demonstration of software engineering work.

---

**Designed & Built by A Karthik Sagar**
