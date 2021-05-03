import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"React"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Native"} progress={"20%"} width={"50%"} />
        <SkillsSection skill={"HTML"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"CSS"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Bootstrap"} progress={"65%"} width={"65%"} />
        <SkillsSection skill={"SASS"} progress={"55%"} width={"55%"} />
        <SkillsSection
          skill={"Git - Version Control"}
          progress={"75%"}
          width={"75%"}
        />
      </div>
    </div>
  );
}

export default AboutPage;
