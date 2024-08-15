import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1>My Projects</h1>
      <br></br>
      <Image src="/image/image.png" width={300} height={200} alt="Project" />
      <br></br>
      <p>
        "A web development project where I designed and built a responsive,
        user-friendly website. I focused on creating a seamless user experience
        and clean, efficient code using modern web technologies."
      </p>
    </div>
  );
};

export default Projects;
