# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Beginner-friendly guide (added)

This project is a small React app (Vite) that demonstrates:

- Basic components and props
- Simple client-side routing using `react-router-dom`

Key files:

- `src/App.jsx` — top-level app and router. It passes `title` props to pages.
- `src/components/Navbar.jsx` — header navigation using `<Link>`.
- `src/components/Hero.jsx` — reusable hero component which accepts `title`, `subtitle`, and `cta` props.
- `src/pages/` — `Home`, `About`, `Contact` pages; each page is a component that accepts a `title` prop.

How to run (from the `task` folder):

```powershell
npm install
npm run dev
```

Open `http://localhost:5173` in your browser and click the Navbar links to switch pages.

Try changing the strings in `src/App.jsx` (the `homeTitle`, `aboutTitle`, and `contactTitle` variables) to see how props change the page headings.

If you'd like exercises for beginners (e.g., change a subtitle, add a section), tell me which and I'll add them.
