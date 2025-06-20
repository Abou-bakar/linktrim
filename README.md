# 🔗 LinkTrim – URL Shortener Without Sign-Up

**LinkTrim** is a privacy-first URL shortener that lets users create short, shareable links instantly — **no registration required**. Built with modern technologies like **Next.js**, **Node.js**, and **MongoDB**, LinkTrim offers a clean and efficient alternative to bloated link management platforms.

> 🎯 Fast. Simple. No accounts. Just shorter links.

---

## 📸 Demo

👉 [Live Demo on Vercel](https://linktrim-g1ow.vercel.app/)

---

## 📖 Description

LinkTrim is a minimalist URL shortener web app designed for quick and anonymous use. Whether you're sharing links on social media, email, or text, LinkTrim keeps the process lightweight and user-friendly. Just paste your long URL, get a shortened version, and you're done.

---

## ✨ Features

- ⚡ **Instant URL shortening** with no sign-up required
- 🔗 **Unique short links** generated using customizable slugs or random IDs
- 📊 **Basic click tracking** (optional, if analytics included)
- 🌐 **Deployed on Vercel** for blazing-fast global performance
- 🧠 **MongoDB-backed** for reliable and scalable storage

---

## 🧰 Technologies Used

| Purpose       | Tech Stack                  |
|---------------|-----------------------------|
| Frontend      | [Next.js](https://nextjs.org/) |
| Backend/API   | Node.js via Next.js API routes |
| Database      | [MongoDB](https://www.mongodb.com/) |
| Deployment    | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

Follow these instructions to run LinkTrim locally.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- [Git](https://git-scm.com/)

---

### 📦 Installation

1. **Clone the repository:**

git clone https://github.com/your-username/linktrim.git
cd linktrim

2. **Install dependencies:**

npm install
# or
yarn install

3. **Create environment variables:**

Create a .env.local file in the root and add:

MONGODB_URI=your-mongodb-connection-uri
BASE_URL=http://localhost:3000
💡 Replace BASE_URL with your actual deployed domain when in production.

4. **Run the development server:**

npm run dev
Open http://localhost:3000 in your browser to see it live.
