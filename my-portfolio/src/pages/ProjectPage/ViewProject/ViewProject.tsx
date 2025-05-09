import React, { useContext } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../../assets/animation/coding-animation.json";
import "./ViewProject.css";
import { COLORS } from "../../../constants/colors";
import { ThemeContext } from "../../../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const ViewProject = () => {
  const { theme } = useContext(ThemeContext);
  const themeColors = theme === "dark" ? COLORS.dark : COLORS.light;
  const navigate = useNavigate();
  return (
    <div
      className="content-veiw-project"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      <h1>We're working on this page. Stay tuned!</h1>
      <Lottie
        animationData={codingAnimation}
        loop={true}
        style={{ width: 300 }}
      />
      <button
        style={{
          backgroundColor: themeColors.green,
          color: themeColors.background,
        }}
        onClick={() => navigate("/projects")}
      >
        Back
      </button>
    </div>
  );
};

export default ViewProject;
