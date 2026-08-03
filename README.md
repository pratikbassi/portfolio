# Portfolio

Personal portfolio site for [Pratik Bassi](https://github.com/pratikbassi), built with Nuxt 3 and Vue 3. A Django backend is included for future API work.

## Features

- **Home** — intro and links to GitHub, LinkedIn, and LeetCode
- **About** — background and interests
- **Resume** — link to downloadable resume

## Tech stack

| Layer    | Stack                          |
| -------- | ------------------------------ |
| Frontend | Nuxt 3, Vue 3, Sass, TypeScript |
| Backend  | Django 4.1 (scaffold only)     |

## Project structure

```
portfolio/
├── frontend/     # Nuxt 3 app (main site)
└── djangovue/    # Django project (catalog app, not wired up yet)
```

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm run preview
```

### Backend (optional)

The Django app is a starter scaffold. To run it locally:

```bash
cd djangovue
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install django
python manage.py migrate
python manage.py runserver
```

Admin is available at [http://localhost:8000/admin/](http://localhost:8000/admin/).

## License

Private — all rights reserved.
