import { useState } from "react";
import style from "../styles/navbar.module.css";
import pdf from "../pages/Images/GouravChoudhary-FullStackWebDeveloper-JoN9.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navSec ps-xl-0 ">
      <div
        id="nav-menu"
        className={`container-fluid fixed-top pe-2 ps-2 pe-sm-5 ps-sm-5 ps-md-5  ps-lg-0 ps-xl-5   pe-md-5  pe-lg-0 pe-xl-5 pt-1 pb-1 ${style.nav_menu}`}
      >
        <a
          className="navbar-brand d-flex ms-lg-5 ms-md-0  align-items-center  "
          href="#"
        >
          <span className={style.span}>G</span>ourav{""}
          <span>
            <img className="ms-lg-2 ms-md-2 ms-2 " width="35" />
          </span>
        </a>

        <button
          className={`navbar-toggler ${style.hamburger}`}
          type="button"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? style.show : ""
            }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-center">
            <a
              className="nav-link home active me-lg-2 me-xl-5  text-info-emphasis "
              href="#home"
              onClick={closeMenu}  // Closes menu on link click
            >
              HOME
            </a>
            <a
              className="nav-link about active me-lg-2 me-xl-5  text-info-emphasis "
              href="#about"
              onClick={closeMenu}  // Closes menu on link click
            >
              ABOUT
            </a>
            <a
              className="nav-link skills active me-lg-2 me-xl-5 text-info-emphasis "
              href="#skills"
              onClick={closeMenu}  // Closes menu on link click
            >
              SKILLS
            </a>
            <a
              className="nav-link projects active me-lg-2 me-xl-5  text-info-emphasis"
              href="#projects"
              onClick={closeMenu}  // Closes menu on link click
            >
              PROJECTS
            </a>
            <a
              className="nav-link active me-lg-2 me-xl-5 text-info-emphasis"
              href="#github"
              onClick={closeMenu}  // Closes menu on link click
            >
              GITHUB
            </a>
            <a
              className="nav-link contact active me-lg-2 me-xl-5  text-info-emphasis"
              href="#contact"
              onClick={closeMenu}  // Closes menu on link click
            >
              CONTACT
            </a>
            <a
              className="nav-link resume active   me-5 text-info-emphasis"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1Cq2YiJ18DQLYlBqWb7uO5DHYIaiKv1VH/view?usp=sharing"
                );
                closeMenu(); // Closes menu when the resume link is clicked
              }}
              download="Gourav Choudhary-Full Stack Web Developer"
              href={pdf}
            >
              <button id="resume-button-1" className={`${style.button} ms-5`}>
                <span className={style.buttonContent}>Resume</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
