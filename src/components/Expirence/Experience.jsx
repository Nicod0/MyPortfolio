import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Experience</h1>
      <div className={style.proyects}>
        <aside className={style.seccion}>
          <h2 className={style.name}>Codecommunity</h2>
          <div className={style.proyect}>
            <div className={style.descripcion}>
              <p className={style.text}>
                Group project consisting of a social network for programmers. A
                collaborative platform that facilitates the creation of posts
                about projects, interaction in communities, access to
                educational resources, and programming assistance. <br />
                <br />
                <span className={style.tecnologias}>Front:</span> React.js,
                JavaScript, Redux-toolkit, Bootstrap y CSS.
                <br />
                <span className={style.tecnologias}>Back:</span> Express, Phyton
                y Django. <br />
                <span className={style.tecnologias}>Database:</span> PostgreSQL.
              </p>
            </div>
            <div className={style.carta}>
              <div className={style.myCard}>
                <div className={style.innerCard}>
                  <div className={style.frontSide}></div>
                  <div className={style.backSide}>
                    <div className={style.flex}>
                      <a
                        href="https://github.com/Sorsant/CodeCommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={style.links}>
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={style.svgs}
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://code-community-three.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={style.links}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className={`${style.svgs} ${style.web}`}
                          >
                            <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside className={style.seccion}>
          <h2 className={style.name}>Videogames</h2>
          <div className={style.proyect}>
            <div className={style.descripcion}>
              <p className={style.text}>
                The project consists of showcasing existing video games, along
                with their respective specifications, name, genres, rating,
                release date, and more!
                <br />
                <br />
                <span className={style.tecnologias}>Front:</span> React.js,
                JavaScript, Redux y CSS.
                <br />
                <span className={style.tecnologias}>Back:</span> Express y
                Sequelize. <br />
                <span className={style.tecnologias}>Database:</span> PostgreSQL.
              </p>
            </div>
            <div className={style.carta}>
              <div className={style.myCard}>
                <div className={style.innerCard}>
                  <div className={style.frontSidee}></div>
                  <div className={style.backSide}>
                    <a
                      href="https://github.com/Nicod0/Videogames"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={style.links}>
                        <svg
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          className={style.svgs}
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Experience;
