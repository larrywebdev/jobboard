# JobBoard – React Job Listing App

A modern job listing application built with React and Tailwind CSS that allows users to browse, search, and filter jobs.  
Job data is fetched through a **serverless API route** (using Vercel + RapidAPI) placed inside the `/api` folder.

## Table of Contents

- [Installation](#installation)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Setup](#api-setup)
- [Contributing](#contributing)
- [Author](#author)

## Installation

1. Clone the repository

```bash
git clone https://github.com/larrywebdev/jobboard.git
```

2. Navigate to the project directory

```bash
cd jobboard
```

3. Install dependencies

```bash
npm install
```

## Running Locally

Instead of running Vite directly, this project uses **Vercel Dev** to run both frontend + backend routes together.

> Install `vercel`:
>
> ```bash
> npm install -g vercel
> ```

```bash
vercel dev
```

Then open the app:

```
http://localhost:3000
```

## Project Structure

```
jobboard/
|– api/
|   |– searchJobs.js        # Serverless API route to call RapidAPI
|
|– public/
|
|– src/
|   |– assets/
|   |– components/
|   |– context/
|   |– layout/
|   |– App.jsx
|   |– index.css
|   |– main.jsx
|
|– package.json
|– vite.config.js
|– .env        # Contains API key (not committed)
```

## Features

- 🔍 Search jobs by title
- 🧭 View job details

## Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Frontend     | React + Tailwind CSS + Axios + Vite         |
| Backend      | Vercel Serverless Functions (`/api` folder) |
| External API | JSearch API (via RapidAPI)                  |

## API Setup

You no longer call RapidAPI directly from the frontend.  
All requests go through:

```
GET /api/jobs?query=frontend developer
```

### Example Frontend Call

```js
const res = await fetch(`/api/jobs?query=${searchTerm}`);
const data = await res.json();
```

### Backend Route (`/api/jobs.js`)

This route forwards the request to RapidAPI using your secret key stored in `.env`.

```
RAPIDAPI_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch and open a Pull Request
