import React, { useRef } from "react";
import "./Testimonials.css";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideFwd = () => {
    tx > -50 ? (tx -= 25) : null;
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBwd = () => {
    tx < 0 ? (tx += 25) : null;
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideFwd} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBwd} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                “Our university has truly transformed my life. The supportive lecturers, modern
                facilities, and diverse community have helped me grow academically and personally. ”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mark Robert</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                “Our university has truly transformed my life. The supportive lecturers, modern
                facilities, and diverse community have helped me grow academically and personally.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Davis Sparrow</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                “Our university has truly transformed my life. The supportive lecturers, modern
                facilities, and diverse community have helped me grow academically and personally.
                I’ve gained confidence, leadership skills, and lifelong friendships.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Rafael Ottoman</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                “Our university has truly transformed my life. The supportive lecturers, modern
                facilities, and diverse community have helped me grow academically and personally.
                I’ve gained confidence, leadership skills, and lifelong friendships.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
