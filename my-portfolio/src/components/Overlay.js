import About from "../views/About";
import ProjectTimeline from "../views/Projects/Projects";
import Skills from "../views/Skills/skills";
import NavBar from "./NavBar/NavBar";
import styles from "./Overlay.module.css";

export function Overlay({ scroll }) {
  return (
    <div
      className={styles.scrollContainer}
      onScroll={(e) => {
        const scroll01 =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        scroll.current = scroll01;
      }}
    >
      <section
        style={{ height: "100vh" }}
        className={styles.sectionLeft + " " + styles.sectionHero}
      >
        <header>
          <h1 id="home">
            <strong>Greetings! I am Krishiv Soni!</strong>
          </h1>
         
          <p>
          Welcome to my portfolio.
          <br />
          Scroll this page to explore!
        </p>
        <p>
          <svg
            width="30"
            height="71"
            viewBox="0 0 30 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="1.5"
              width="27"
              height="45"
              rx="13.5"
              stroke="#2D3A94"
              stroke-opacity="0.6"
              stroke-width="3"
            />
            <path
              d="M15 12V20"
              stroke="#2D3A94"
              stroke-opacity="0.6"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M8 54L14.5 60.5L21 54"
              stroke="#2D3A94"
              stroke-opacity="0.6"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 63L14.5 69.5L21 63"
              stroke="#2D3A94"
              stroke-opacity="0.6"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
        </header>
       
      
      </section>


      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          <About />
        </p>
      </section>


      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          <Skills />
          {/* In my free time
          <br />
          I like to code, freelance, and
          <br />
          make 3D design websites using Three js and react-three-fiber!
          Skills */}
        </p>
      </section>


      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          <ProjectTimeline />
        </p>
      </section>

      <section style={{ height: "100vh" }} className={styles.sectionRight}>
        <p>
          contact
          Check out my{" "}
          <a href="https://www.linkedin.com/in/krishiv-soni-286594201/" target="_blank" rel="noreferrer">
            Linkedin Profile
          </a>
          !<br />
          and my <a href="https://www.fiverr.com/thrive_90" target="_blank" rel="noreferrer">
            Freelance Work
          </a>.
        </p>
        <p style={{ marginBottom: "300px" }}></p>
      </section>
    </div>
  );
}
