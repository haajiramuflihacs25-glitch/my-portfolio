import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">My<span>Portfolio</span></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">HAAJIRA MUFLIHA</span></h1>
          <p>I'm a React Developer building modern web experiences.</p>
          <a href="#projects" className="cta-btn">Check out my work</a>
        </div>
      </header>

      {/* ABOUT/SKILLS SECTION */}
      <section id="about" className="section about">
        <h2 className="title">About Me</h2>
        <p>I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
        <div className="skills-row">
          <span className="skill">React</span>
          <span className="skill">JavaScript</span>
          <span className="skill">CSS / HTML</span>
          <span className="skill">Node.js</span>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects">
        <h2 className="title">My Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Project One</h3>
            <p>A cool React application description goes here.</p>
          </div>
          <div className="card">
            <h3>Project Two</h3>
            <p>A stylish landing page built with pure CSS.</p>
          </div>
          <div className="card">
            <h3>Project Three</h3>
            <p>Personal dashboard with API integration.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>Let's connect!</p>
        <div className="links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
        <p className="copyright">&copy; 2024 Your Name</p>
      </footer>
    </div>
  )
}

export default App
