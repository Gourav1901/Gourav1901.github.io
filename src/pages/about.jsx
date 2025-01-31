import React from "react";
import style from "../styles/about.module.css";
import { motion,  } from "framer-motion";
import Button from "../components/button/button";
import { useBreakpointValue } from "@chakra-ui/react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const textAnimate = {
    offscreen: { y: +20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const containerAnimation = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div id="about" className={`about section ${style.about2}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="About"
      >
        About
      </motion.h2>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={containerAnimation}
      >
        <div className={`${style.container}`}>
          {/* <div className={`${style.leftDiv}`}>
            <motion.div
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 10, x: 10 }}
              className={style.back_div}
            >
              <motion.div
                initial={{ y: -20, x: -20 }}
                whileHover={{ y: -40, x: -40 }}
              >
                <img className="home-img" src={arjunImg} alt="" />
              </motion.div>
            </motion.div>
          </div> */}
          <div className={`${style.rightDdiv}`}>
            <div id="user-detail-intro">
              <p className={`${style.my_desc}`}>
                An enthusiastic Full Stack  Developer with a strong set of
                technical skills like Javascript, React, NodeJs, Express,
                MonogoDB as well as non-technical skills and a dedication
                towards creating useful and interactive web applications using
                MERN stack.
              </p>
              <div className={style.card_container}>
                <div className={style.card}>
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={textAnimate}
                  >
                    <h1>
                      <span>7+</span>
                    </h1>
                    <h2>Solo Projects</h2>
                  </motion.div>
                </div>
                <div className={style.card}>
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={textAnimate}
                  >
                    <h1>
                      <span>500+</span>
                    </h1>
                    <h2>DSA</h2>
                  </motion.div>
                </div>
                <div className={style.card}>
                  <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={textAnimate}
                  >
                    <h1>
                      <span>3+</span>
                    </h1>
                    <h2>Team Projects</h2>
                  </motion.div>
                </div>
              </div>
              <div className={style.skill_div}>
                <div>
                  {" "}
                  <p className="d-flex align-items-center gap-md-2 gap-sm-1">
                    {" "}
                    <span>
                      <IoIosCheckmarkCircleOutline />
                    </span>{" "}
                    Problem Solving
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                    {" "}
                    <span>
                      <IoIosCheckmarkCircleOutline />
                    </span>{" "}
                    Adaptability
                  </p>{" "}
                </div>
                <div>
                  {" "}
                  <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                    {" "}
                    <span>
                      <IoIosCheckmarkCircleOutline />
                    </span>{" "}
                    Time management
                  </p>{" "}
                </div>
                <div>
                  {" "}
                  <p className="d-flex align-items-center gap-md-2 gap-sm-1 ">
                    {" "}
                    <span>
                      <IoIosCheckmarkCircleOutline />
                    </span>{" "}
                    Team worker
                  </p>{" "}
                </div>
              </div>

              <div className={style.button_div}>
                <a
                  className="resume"
                  aria-current="page"
                  
                >
                  <Button text="Resume" id="resume-button-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
