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
          <h1>
            <strong>Greetings!</strong>
          </h1>
          <nav>
            <a href="" rel="noreferrer">
              / work
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className={styles.selected}
            >
              / relax
            </a>
          </nav>
        </header>
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
      </section>
      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          My name is Krishiv Soni.
          <br />
          As you can see I like plants,
          <br />
          design, and Tea.
        </p>
      </section>
      <section style={{ height: "100vh" }} className={styles.sectionLeft}>
        <p>
          In my free time
          <br />
          I like to code, freelance, and 
          <br />
          make 3D design websites using Spline!
        </p>
      </section>
      <section style={{ height: "100vh" }} className={styles.sectionRight}>
        <p>
          Check out my{" "}
          <a href="www.linkedin.com/in/krishiv-soni-286594201" target="_blank" rel="noreferrer">
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
