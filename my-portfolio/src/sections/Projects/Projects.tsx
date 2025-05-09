import React, { useContext } from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import { COLORS } from "../../constants/colors";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { images } from "../../assets/imagePath";
import { projects as projectList } from "../../data/projectList";
import { shortenSentence } from "../../utils/shortenWord";

const Projects = ({ projectsRef }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const themeColors = theme === "dark" ? COLORS.dark : COLORS.light;
  const navigate = useNavigate();

  return (
    <LazyMotion features={domAnimation}>
      <div className="content-projects-section" ref={projectsRef}>
        <div className="head-project-page">
          <h1 className="title" style={{ color: themeColors.green }}>
            My Projects.
          </h1>
          <p className="fs-6" style={{ color: themeColors.background }}>
            Highlights Projects
          </p>
        </div>
        <div className="body-project-page">
          <div className="projects-card-list position-relative">
            {projectList.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 1 }}
                viewport={{ once: false, amount: 0.8 }} // Animation continues while scrolling
                className="projects-card"
              >
                <div className="projects-card-head">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div className="image-container">
                  <motion.img
                    initial={{ opacity: 1, zIndex: 4 }}
                    whileHover={{ opacity: 0.5, zIndex: 0 }}
                    src={item.thumbnail}
                    alt="thumbnail"
                    className="image-thumbnail"
                  />
                </div>
                <div className="projects-card-details">
                  <div className="projects-card-technology-list">
                    <div className="technology-card">
                      <FaReact />
                      React
                    </div>
                    <div
                      className="technology-card"
                      style={{ backgroundColor: "green", color: "#fff" }}
                    >
                      <SiExpress />
                      Express
                    </div>
                    <div
                      className="technology-card"
                      style={{ backgroundColor: "#005984", color: "#fff" }}
                    >
                      <TbBrandMysql />
                      MySQL
                    </div>
                  </div>
                  <div className="projects-card-description">
                    <div className="d-flex flex-column">
                      <b>Description:</b>
                      <p>{shortenSentence(item.description, 100)}</p>
                    </div>
                    <div className="d-flex flex-column">
                      <b>Key Features:</b>
                      <p>{shortenSentence(item.features, 130)}</p>
                    </div>
                  </div>
                  <div className="flex-1 d-flex w-100 mt-2">
                    <button>Repository</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            style={{ color: themeColors.text }}
            transition={{ type: "spring", duration: 0.5, stiffness: 200 }}
            className="mt-4 w-100 d-flex align-items-center justify-content-center"
          >
            <motion.p
              className="see-more-link"
              initial={{ marginRight: 10 }}
              whileHover={{ marginRight: 0 }}
              transition={{ type: "spring", duration: 0.5, stiffness: 200 }}
              onClick={() => navigate("/projects")}
            >
              See more projects
            </motion.p>
            <GrLinkNext style={{ color: themeColors.text, zIndex: 200 }} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${
              theme === "dark"
                ? "bottom-gradient-dark"
                : "bottom-gradient-light"
            }`}
          ></motion.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Projects;
