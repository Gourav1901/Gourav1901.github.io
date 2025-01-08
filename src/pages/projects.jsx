import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";


import  devSync from "./Images/DevSyncLarge.jpg";
import devSyncS from "./Images/DevSyncSmall.jpg";


import sortingImg from "./Images/SortingL.jpg";
import sortingImgS from "./Images/SortingS.jpg";


import newsL from "./Images/NewsFlashL.jpg"
import newsS from "./Images/NewsappS.jpg"


import { motion, Variants } from "framer-motion";

const data = [
  {
    id: 1,
    title: "DevSync",
    subTitle: "A Code Editor",
    img1: devSync,
    img2: devSyncS,
    desc: "DevSync - A Collaborative Web-Based Code Editor DevSync is a responsive, web-based code editor designed for real-time coding and collaboration. It supports HTML, CSS, and JavaScript, providing an interactive environment where you can write, edit, and run your code directly in the browser.",
    techUsed: [
      "Node js",
      "Express",
      "MongoDB",
      "React",
      "Routing",
      "Redux",
      "tailwindCSS",
    ],
    features: [
      "Login",
      "Signup",
      "Multiple language Support",
      "Live Preview: Instantly see your code changes reflected in the browser preview",
      
      "Save Code",
    ],
    resp: " Manage All the fronted part of the DevSync ",
    git: "https://github.com/Gourav1901/DevSync",
    preview: "https://devsynceditors.netlify.app/",
  },
  
  {
    id: 2,
    title: "NewsFlash",
    subTitle: " NewsFlash is a modern news aggregation app that provides real-time access to the latest news from around the world. ",
    img1: newsL,
     img2:newsS,
    desc: "Independently created: Managed all aspects of the project ",
    techUsed: [
      "React",
      "Javascript",
      "Tailwind Css",
      
    ],
    features: [
      "Real-Time News",
      "Category Filters",
      "Search for articles based on specific keywords",
    ],
    resp: "Independently created: Managed all aspects of the project",
    git: "https://github.com/Gourav1901/GCNews",
    preview: "https://gc-news-swbd.vercel.app/",
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    subTitle: "Visual representstion of how sorting Algorithm works",
    img1: sortingImg,
    img2: sortingImgS,
    desc: "I developed a sorting algorithm for visual representation of algorithms",
    techUsed: [
      "Html",
      "Css",
      "Javascript",
      
    ],
    features: ["Array size control ", "Speed Control" ],
    resp: "Independently created: Managed all aspects of the project",
    git: "https://github.com/Gourav1901/Sorting_visualizer",
    preview: "https://sortingvisualizer01001.netlify.app/",
  }
  
];

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        {/*  */}
        {data.map((ele, ind) => (
          <Project key={ele.id} {...ele} ind={ind} />
        ))}

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
