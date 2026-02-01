import "./assets/css/circle-animat.css";
import "./index.css";
import "./reset.css";
import profileImg from "./assets/img/img_self.png";
import profileBg from "./assets/img/img_profile_bg.png";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <div className="cmn-banner">
          <h2 className="logo">Siriwann Portfolio</h2>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="home" style={{ backgroundImage: `url(${profileBg})` }}>
        <div className="cmn-banner">
          <div className="home-info">
            <h1>Hi, I'm Siriwann</h1>
            <h2>Forntend Web Developer</h2>
            <p> Professional build modern responsive websites</p>
            <div className="cmn-btn"><a href="#about">Learn More</a></div>
          </div>
          <div class="main">
            <div class="big-circle">
              <div class="icon-block">
               <p>HTML</p>
              </div>
              <div class="icon-block">
                <p>CSS</p>
              </div>
              <div class="icon-block">
                <p>JS</p>
              </div>
              <div class="icon-block">
                <p>React</p>
              </div>
            </div>
            <div class="circle">
              <div class="icon-block">
                <p>CMS</p>
              </div>
              <div class="icon-block">
                <p>DESIGN</p>
              </div>
              <div class="icon-block">
                <p>JAVA</p>
              </div>
              <div class="icon-block">
                <p>SQL</p>
              </div>
            </div>
            <div className="home-img">
              <img src={profileImg} alt="Profile" />
              <p className="text-img">Siriwann</p>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="sec-skills">
        <h2 className="cmn-ttl">Skills</h2>
        <div className="grid">
          {skills.map((skill, i) => (
            <div key={i} className="card">{skill}</div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Portfolio</h3>
            <p>Personal website</p>
          </div>
          <div className="card">
            <h3>React App</h3>
            <p>Dashboard UI</p>
          </div>
          <div className="card">
            <h3>Landing Page</h3>
            <p>Marketing page</p>
          </div>
        </div>
      </section>

      {/* ABOUT ME*/}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I am a Frontend Web Developer with a strong focus on creating modern, responsive, and accessible web applications. I have experience working with React and modern CSS, and I enjoy solving problems through clean and efficient code. I’m motivated, detail-oriented, and always ready to grow as a developer.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section alt">
        <h2>Contact</h2>
        <p>Email: nangsiriwann@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Siriwann Portfolio
      </footer>

    </div>
  );
}

export default App;