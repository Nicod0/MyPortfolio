import styles from "./App.module.css";
import Nav from "./components/nav/Nav";
import Beggining from "./components/Beggining/Beggining";
import About from "./components/About/About";
import Experience from "./components/Expirence/Experience";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.portfolio}>
      <Nav />
      <section id="beggining" className={styles.sections}>
        <Beggining />
      </section>
      <section id="about" className={styles.sections}>
        <About />
      </section>
      <section id="experience" className={styles.sections}>
        <Experience />
      </section>
      <section id="contact" className={styles.sections}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
