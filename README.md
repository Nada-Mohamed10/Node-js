# Node.js CRUD API

A simple Node.js RESTful API to manage posts using Express and the file system as storage (JSON files).  
This project was created for learning purposes.

## 📦 Features

- Create a post
- Read all posts
- Read a single post by ID
- Update a post by ID
- Delete a post by ID

## 🛠️ Technologies Used

- Node.js
- Express.js
- fs/promises (File system module)
- JSON file as a database

## 📂 Project Structure
`
project-folder/
│
├── Controller/
│ │   └── postsController.js
│
├── Router/
│ │   └── posts.js
│
├── posts.json
├── index.js
├── package.json
└── README.md
`

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run start 
