import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.avif";
import program_3 from "../../assets/program-3.avif";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" loading="lazy" />
        <div className="caption">
          <img src={program_icon_1} alt="" loading="lazy" />
          Graduation Degree
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" loading="lazy" />
        <div className="caption">
          <img src={program_icon_2} alt="" loading="lazy" />
          Master Degree
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" loading="lazy" />
        <div className="caption">
          <img src={program_icon_3} alt="" loading="lazy" />
          Certificate
        </div>
      </div>
    </div>
  );
};

export default Programs;
