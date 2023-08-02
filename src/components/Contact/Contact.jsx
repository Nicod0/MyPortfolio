import React, { useRef } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dahxceb",
        "template_9vms45f",
        form.current,
        "4nRB7_IdaWVrnLgxi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully :D");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Contact</h1>
      <div className={style.sub_container}>
        <div className={style.section}>
          <form ref={form} className={style.colorful_form} onSubmit={sendEmail}>
            <h1 className={style.sub_title}>Send me a message!</h1>
            <div className={style.form_group}>
              <label className={style.form_label} for="name">
                Name:
              </label>
              <input
                required=""
                placeholder="Enter your name"
                className={style.form_input}
                type="text"
                name="user_email"
              />
            </div>
            <div className={style.form_group}>
              <label className={style.form_label} for="email">
                Email:
              </label>
              <input
                required=""
                placeholder="Enter your email"
                className={style.form_input}
                name="user_email"
                id="email"
                type="email"
              />
            </div>
            <div className={style.form_group}>
              <label className={style.form_label} for="message">
                Message:
              </label>
              <textarea
                required=""
                placeholder="Write a message"
                className={`${style.form_input} ${style.textarea}`}
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className={style.cont_button}>
              <button className={style.button} type="submit" value="Send">
                <div className={style.svg_wrapper_1}>
                  <div className={style.svg_wrapper}>
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
        <div className={style.section}>
          <p className={style.text}>
            Hello! Thank you for visiting my portfolio. I'm excited that you're
            here. If you have any questions, collaboration proposals, or simply
            want to say hello, feel free to get in touch with me through the
            form below.
            <br />
            <br />
            I'm here to listen to you and eager to learn more about your
            projects and ideas. I believe in the importance of building
            meaningful connections, so don't hesitate to send me a message.
            <br />
            <br /> Your opinion is valuable to me, and I'm ready to start the
            dialogue and work together on exciting projects. Looking forward to
            hearing from you soon!
          </p>
          <div className={style.cont}>
            <button
              onClick={() => scrollToSection("beggining")}
              className={style.button2}
            >
              Beginning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
