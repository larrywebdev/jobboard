# JobBoard – React Job Listing App

A modern job listing application built with React and Tailwind CSS that allows users to browse, search, and filter jobs fetched from a public API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Reference](#api-reference)
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

4. Start the development server

```bash
npm run dev
```

## Usage

After running `npm run dev`, open your browser at `http://localhost:5173`.
Use the search bar to find jobs by title. Click on "View Details" to see more about the job.

## Features

- 🔍 Job search with filters
- 🧭 Detailed job view

## Tech Stack

- React
- Tailwind CSS
- Axios
- Vite

## API Reference

This project uses the **JSearch** API (via RapidAPI) to fetch job listings and job details.

**Base URL:**

```
https://jsearch.p.rapidapi.com
```

| Endpoint  | Method | Description                       |
| --------- | ------ | --------------------------------- |
| `/search` | GET    | Search for jobs using a job title |

### Example Request – Search for Jobs

```
GET https://jsearch.p.rapidapi.com/search?query=frontend%20developer&page=1
```

### Required Headers

```json
{
  "X-RapidAPI-Key": YOUR_API_KEY,
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
}
```

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## Author

**Omozojie Lawrence**  
GitHub: https://github.com/larrywebdev
