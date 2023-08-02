import style from "./Nav.module.css";

const Nav = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <nav className={style.nav}>
        <h1
          onClick={() => scrollToSection("beggining")}
          className={style.logo}
          translate="no"
        >
          N
        </h1>
        <div className={style.links}>
          <button
            onClick={() => scrollToSection("about")}
            className={style.link}
          >
            About me
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={style.link}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={style.link}
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
