import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1>Welcome to my Portfolio</h1>
      <br></br>
      <Image
        src="/image/portfolio.jpg"
        width={300}
        height={200}
        alt="Project"
      />
      <br></br>
      <hr></hr>
      <p>
        "I'm a passionate web developer specializing in creating modern,
        functional websites. I love turning ideas into intuitive user
        experiences using the latest web technologies and best practices."
      </p>
    </div>
  );
};

export default Home;
