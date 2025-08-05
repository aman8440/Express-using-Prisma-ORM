# 🚀 Node.js Express API with Prisma & PostgreSQL

A boilerplate project for building scalable RESTful APIs using:

- 🌐 [Express.js](https://expressjs.com/) — Node.js web framework
- 🧬 [Prisma ORM](https://www.prisma.io/) — Type-safe ORM for PostgreSQL
- 🐘 [PostgreSQL](https://www.postgresql.org/) — Relational database
- 🧪 TypeScript for type safety

---


## 📁 Project Structure
Express-using-Prisma-ORM/
├── prisma/
│ └── schema.prisma # Prisma schema
├── src/
│ ├── controllers/ # Route handlers
│ ├── routes/ # Express routes
│ ├── services/ # Business logic
│ ├── prisma/ # Prisma client instance
│ ├── app.ts # Express setup
│ └── index.ts # Server entry point
├── .env # Environment variables
├── package.json
├── tsconfig.json
└── README.md

---

## ⚙️ Prerequisites

- Node.js v18+
- PostgreSQL installed and running
- Yarn or NPM
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference) (installed via `npx` or globally)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/aman8440/Express-using-Prisma-ORM.git
cd Express-using-Prisma-ORM

