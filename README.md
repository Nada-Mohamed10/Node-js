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
```
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
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run start
```
##🧪 API Testing with Postman
You can use Postman to easily test the API endpoints and verify that your CRUD operations work as expected.

📌 1. Launch Postman and create a new request
📌 2. Choose the HTTP method (GET, POST, PUT, DELETE)
📌 3. Enter the endpoint URL (e.g. http://localhost:3000/posts)
📌 4. (For POST and PUT requests):
Go to the Body tab

Select raw
Choose JSON from the dropdown
Enter a JSON object like:
json
{
  "title": "Sample Post",
  "content": "This is the content of the sample post"
}
📌 5. Click Send to submit the request
📌 6. Review the response in the bottom panel



