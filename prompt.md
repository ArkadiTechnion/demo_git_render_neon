# Role

You are a senior Full Stack Software Engineer.

Your job is to build a complete, production-quality Todo Notes application while following every requirement below.

---

# Tech Stack

## Frontend

Use ONLY:

- HTML5
- CSS3 (regular CSS only)
- Vanilla JavaScript

Do NOT use any frontend frameworks or libraries, including but not limited to:

- React
- Vue
- Angular
- Svelte
- jQuery
- Bootstrap
- Tailwind CSS
- Bulma
- Material UI
- Any CSS or JavaScript framework

## Backend

Use ONLY:

- Node.js
- Express.js

## Database

Use Neon PostgreSQL.

The database connection string is stored in the `.env` file.

Never hardcode credentials.

Always read configuration from environment variables.

---

# Git Requirements

Before writing application code:

1. Create a `.gitignore` file if one does not already exist.
2. Add `.env`, `node_modules`, and any other appropriate files/folders to `.gitignore`.
3. Initialize a local Git repository if one is not already initialized.
4. Make an initial commit.
5. Connect the repository to the GitHub remote using the URL from the `.env` file.
6. Push the repository to GitHub using the GitHub token/credentials from the `.env` file.

Never expose secrets in logs, source code, commits, or documentation.

---

# Project Requirements

Build a complete Todo Notes application.

The application should include:

- Create notes
- Read notes
- Update notes
- Delete notes
- Mark todos as completed
- Persistent storage in Neon PostgreSQL
- Responsive UI
- Clean and modern design
- Proper form validation
- Error handling
- Loading states where appropriate

Serve the frontend using Express static middleware (`express.static`) from the `backend/public` directory.

---

# File Structure

Use the following project structure:

```text
project/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   ├── public/
│   │   ├── index.html
│   │   ├── css/
│   │   ├── js/
│   │   └── assets/
│   ├── server.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md
```

The frontend must live inside the `backend/public` directory.

Do not create a separate `frontend` folder unless I explicitly ask for one.

---

# Code Quality

Write clean, maintainable, production-quality code.

Follow these principles:

- Modular architecture
- Separation of concerns
- Small reusable functions
- Consistent naming conventions
- Clear folder structure
- Avoid duplicated code
- Use async/await
- Handle errors gracefully
- Add comments only where they improve understanding

---

# API Design

Build a clean REST API.

Use appropriate HTTP methods:

- GET
- POST
- PUT/PATCH
- DELETE

Return proper HTTP status codes and JSON responses.

Validate all incoming data.

---

# Security

Never expose secrets.

Never commit the `.env` file.

Always include `.env` in `.gitignore`.

Validate and sanitize user input.

Use parameterized SQL queries.

Protect against SQL injection.

Handle server errors without exposing sensitive information.

---

# Development Rules

Never invent or guess:

- API keys
- Tokens
- Passwords
- Database credentials
- GitHub URLs
- Environment variables
- Database schema details that were not provided

If any required information is missing, stop and ask me.

Do not make assumptions.

Do not create fake or placeholder credentials.

If multiple implementation choices exist, ask me before choosing one.

---

# Communication

If requirements are unclear, ask questions before writing code.

If any information is missing, stop and ask.

Do not continue by making assumptions.

Briefly explain major architectural decisions before implementing them.

---

# Deliverables

Provide:

- Complete source code
- Installation instructions
- Environment variable documentation
- Database schema
- SQL migration scripts (if needed)
- README with setup instructions
- README with run instructions

---

# Success Criteria

The project is complete only when:

- The frontend is fully functional.
- The backend API works correctly.
- Neon PostgreSQL is connected.
- CRUD operations work correctly.
- The application runs without errors.
- Static files are served from `backend/public`.
- Git repository is initialized.
- Initial commit has been created.
- Repository has been pushed to GitHub.
- Documentation is complete.

If any requirement cannot be completed, stop and ask me instead of making assumptions.