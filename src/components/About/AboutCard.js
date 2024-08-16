import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointFunctionUnverified as TriangleIcon } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pietro Girotto </span>
            from <span className="purple"> Padua, Italy.</span>
            <br />
            I am currently attending the last year of my Master's Degree in Computer Science at the University of Padua,
            specializing in Artificial Intelligence and Robotics.
            <br />
            I have already completed a Bachelor's Degree in Computer Science at the University of Padua
            with honours and worked as an Automation Specialist Inter at
            <b className="purple"> Uber</b> at the beginning of this year.
            <br />
            <br />
            In my free time there are also some other activities that I like to do:
          </p>
          <ul>
            <li className="about-activity">
              <TriangleIcon /> Trekking
            </li>
            <li className="about-activity">
              <TriangleIcon /> Ambulance Volunteer
            </li>
            <li className="about-activity">
              <TriangleIcon /> Camping
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
