import React from "react";
import "./About.css";

import about_img from "../../assets/about.avif";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT THE UNIVERSITY</h3>
        <h2> Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our university is a vibrant center of learning, innovation, and community. We empower
          students to explore their potential through world-class teaching, cutting-edge research,
          and hands-on experience. With a diverse, inclusive environment, we prepare graduates to
          lead with integrity, creativity, and purpose in a rapidly changing global society.
        </p>
        <p>
          Our modern campus provides an inspiring environment equipped with advanced laboratories,
          libraries, and digital resources that support academic excellence and personal growth.
          Students engage in collaborative projects, leadership programs, and community service,
          fostering teamwork and real-world problem-solving skills that extend beyond the classroom.
        </p>
        <p>
          Through partnerships with industries and global institutions, our university offers
          students valuable exposure to international opportunities and emerging technologies. We
          remain committed to nurturing innovation, sustainability, and entrepreneurship, shaping
          graduates who contribute meaningfully to society and drive positive change in their chosen
          fields.
        </p>
      </div>
    </div>
  );
};

export default About;
