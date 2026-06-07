import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page">
      <h1>OctoFit Tracker</h1>
      <p>Modern fitness tracking with React, Vite, and a TypeScript backend.</p>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>Track workouts, teams, and progress from a modern application shell.</p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
