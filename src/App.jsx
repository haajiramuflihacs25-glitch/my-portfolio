import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/navbar/footer';
function App() {
  return (
    <div className="portfolio-container">
      {/* NAVIGATION */}
<Navbar />     
  
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
<Footer/>
    </div>
  )
  function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Wrap everything between the Navbar and Footer in this 'main' tag */}
      <main className="content-area">
        <section id="home">
          <h2>Hello, I'm</h2>
          <h1>HAAJIRA MUFLIHA</h1>
          <p>I'm a React Developer building modern web experiences.</p>
          <button className="cta-button">Check out my work here</button>
        </section>
        
        {/* Your other sections like About or Projects go here */}
      </main>

      <Footer />
    </div>
  );
}

}

export default App
