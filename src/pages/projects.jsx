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
    subTitle: "Visual represntstion of how sorting Algorithm works",
    img1: sortingImg,
    img2: sortingImgS,
    desc: "I developed a sorting algorithm for visual represntation of algorithms",
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
  // {
  //   id: 4,
  //   title: "Medium Clone",
  //   subTitle:
  //     "Individual project:  built a seamless Medium clone using MERN stack.",
  //   img1: medium,
  //   img2: mediumS,
  //   desc: "I developed a Medium clone using the MERN stack. Demonstrating my skills in web development and full-stack programming.",
  //   techUsed: [
  //     "React",
  //     "Redux",
  //     "Javascript",
  //     "Tailwind",
  //     "Node",
  //     "Express",
  //     "MongoDB",
  //   ],
  //   features: [
  //     "Login and Signup",
  //     "Profile Page",
  //     "Edit Profile",
  //     "Create Blog",
  //     "Update Blog",
  //     "Follow User",
  //     "Like and Comment on Blog",
  //   ],
  //   resp: "Independently created: Managed all aspects of the project",
  //   git: "https://github.com/arjundangi01/Medium-clone",
  //   preview: "https://comforting-taffy-d07f72.netlify.app/",
  // },
  // {
  //   id: 7,
  //   title: "Myntra Clone",
  //   subTitle: "An E-Commerce website",
  //   img1: myntraImg,
  //   img2: myntraS,
  //   desc: "Build clone of myntra.com in 7 days along with a team of 5 members.",
  //   techUsed: ["HTML", "CSS", "JavaScript", "Local Storage"],
  //   features: ["Login", "Signup", "Cart Page", "Checkout Page"],
  //   resp: "Developed the product page(Men's T-shirt), product's static pages, cart page and wishlist page",
  //   git: "https://github.com/arjundangi01/Myntra-Clone",
  //   preview: "https://gilded-vacherin-2e78d2.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Glossier Clone",
  //   subTitle: "An E-Commerce website for women's beauty products",
  //   img1: glossierImg,
  //   img2: gssImg,
  //   desc: "Build  Glossier.com in 7 days along with a team of 4 members.",
  //   techUsed: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "JSON-server",
  //     "Local Storage",
  //     "API",
  //   ],
  //   features: ["Login", "Signup", "Cart Page", "Checkout Page"],
  //   resp: "Developed the navbar, product page and cart page",
  //   git: "https://github.com/arjundangi01/Glossier-clone",
  //   preview: "https://celebrated-cendol-85db1c.netlify.app/",
  // },
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
